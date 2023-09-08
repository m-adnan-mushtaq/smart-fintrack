"use server";
import prismaClient from "@/lib/db/client";
import { CreateUserType } from "../dto";
import { ActionResponse } from "../types/types";
import { logger, otpService, pusher } from "../services";
import { emailQueue } from "../services/jobs.service";
import { Prisma } from "@prisma/client";
import { JOB_NAMES } from "../types-server";
import { handleActionResponse } from "../utils/utils";
import {  updateUser } from ".";

export async function createUser(
  user: CreateUserType
): Promise<ActionResponse> {
  try {
    await prismaClient.user.signup(user);
    const { success, message } = await sendVerificationEmail(user.email);
    if (!success) throw Error(message);
    return {
      success: true,
      message: "",
    };
  } catch (error) {
    console.log(error);
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      console.log(error.code);
      if (error.code === "P2002") error = Error("Email is already taken!");
    }
    return { success: false, message: (error as Error).message };
  }
}

export async function checkEmailExists(email: string): Promise<ActionResponse> {
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
  }
}
export async function checkEmailAvailability(
  email: string
): Promise<ActionResponse> {
  try {
    const userCount = await prismaClient.user.count({ where: { email } });
    if (Boolean(userCount)) throw Error("Email is already taken");
    return {
      success: true,
      message: "",
    };
  } catch (error) {
    return { success: false, message: (error as Error).message };
  }
}

export async function sendVerificationEmail(
  email: string
): Promise<ActionResponse> {
  try {
    await emailQueue.addJob(JOB_NAMES.verifyEmail, { email });
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
  email: string,
  otp: string,
  updateArgs: Prisma.UserUpdateArgs
): Promise<ActionResponse> {
  try {
    if (!updateArgs || !otp) throw Error("Invalid credentials");
    await otpService.verifyOtp(email, otp);

    await handleActionResponse(updateUser(updateArgs));

    await prismaClient.user.invalidateCache([otp]);
    logger.info(`Account is verified at ${email}`);

    return {
      success: true,
      message: "Email has been verified!",
    };
  } catch (error) {
    return {
      success: false,
      message: (error as Error).message,
    };
  }
}
export async function sendSupportEmail(data: GenericObject) {
  try {
    await emailQueue.addJob(JOB_NAMES.supportEmail, data, {
      delay: 5000,
      attempts: 1,
    });
  } catch (error) {
    throw Error("Failed to send messsage");
  }
}

