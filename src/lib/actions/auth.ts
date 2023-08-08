"use server";
import prismaClient from "@/lib/db/client";
import { CreateUserType } from "../dto";
import { AuthResponse, JOB_NAMES } from "../types/types";
import { otpService, redis } from "../services";
import { emailQueue } from "../services/jobs.service";
export async function createUser(user: CreateUserType): Promise<AuthResponse> {
  try {
    await prismaClient.user.create({
      data: user,
    });
    const { success, message } = await sendVerificationEmail(user.email);
    if (!success) throw Error(message);
    return {
      success: true,
      message: "",
    };
  } catch (error) {
    console.log(error);
    return { success: false, message: (error as Error).message };
  } finally {
    await prismaClient.$disconnect();
  }
}

export async function checkEmailExists(email: string): Promise<AuthResponse> {
  try {
    const isUserExists = await prismaClient.user.findUnique({
      where: { email },
    });
    if (!isUserExists) throw Error("User not found!");
    return {
      success: true,
      message: "",
    };
  } catch (error) {
    return { success: false, message: (error as Error).message };
  } finally {
    await prismaClient.$disconnect();
  }
}

export async function sendVerificationEmail(
  email: string
): Promise<AuthResponse> {
  try {
    await emailQueue.addJob(JOB_NAMES.verifyEmail,{email})
    return {
      success: true,
      message: "Verification Email has been sent",
    };
  } catch (error) {
    return {
      success: false,
      message: (error as Error).message,
    };
  }
}

export async function verifyOtp(
  emaiL: string,
  otp: string
): Promise<AuthResponse> {
  try {
    if (!emaiL || !otp) throw Error("Invalid credentials");
    await otpService.verifyOtp(emaiL, otp);
    await prismaClient.user.update({
      where: { email: emaiL },
      data: {
        verified: true,
      },
    });
    await redis.del(otp);
    return {
      success: true,
      message: "Account has been verified",
    };
  } catch (error) {
    return {
      success: false,
      message: (error as Error).message,
    };
  }
}
