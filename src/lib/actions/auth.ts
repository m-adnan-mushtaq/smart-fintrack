"use server";
import prismaClient from "@/lib/db/client";
import { CreateUserType } from "../dto";
import { AuthResponse, JOB_NAMES } from "../types/types";
import { otpService, redis } from "../services";
import { emailQueue } from "../services/jobs.service";
import { Prisma } from "@prisma/client";
import { UserType } from "../types";
import { store } from "@/store";
import { resetAuth, setAuth } from "@/store/slices/auth.slice";


export async function createUser(user: CreateUserType): Promise<AuthResponse> {
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
  }finally{
    await prismaClient.$disconnect()
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
 
export async function updateUserState(user:UserType) {
    store.dispatch(setAuth(user))
    console.log("state sever side updated!",user.email);
    return Promise.resolve()
}

export async function logOut(){
  store.dispatch(resetAuth())

}