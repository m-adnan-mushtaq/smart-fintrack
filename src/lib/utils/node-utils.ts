import { DbUser } from "../types";
import { getServerSession } from "next-auth";
import { authConfig } from "../config";
import { NextResponse } from "next/server";
import { logger } from "../services";

/***********************************/
/* FILE CONTAINS HELPER FUNCTION FOR API ROUTES*/
/***********************************/

export class ApiError extends Error {
  constructor(public message: string, public statusCode: number) {
    super(message);
    this.statusCode = statusCode;
  }
}
export async function getLoggedUser(): Promise<DbUser> {
  try {
    const session = await getServerSession(authConfig);
    if (!session || !session.user) throw Error("no session found");
    return session.user as DbUser;
  } catch (error) {
    throw new ApiError("No Session found!", 401);
  }
}

export function payloadBuilder(message: string) {
  return {
    success: false,
    message,
  };
}

export function returnErrorResponse(error: any) {
  let message: string = "API ERROR";
  let statusCode: number = 500;
  if (error instanceof ApiError) {
    message = error.message;
    statusCode = error.statusCode;
  } else if (error instanceof Error) {
    message = error.message;
  }
  logger.error(message)
  return NextResponse.json({ success: false, message }, { status: statusCode });
}
