import { DbUser } from "../types";
import { getServerSession } from "next-auth";
import { authConfig } from "../config";

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
    if (!session || !session.user) throw Error("no session found")
    return session.user as DbUser;
  } catch (error) {
    throw new ApiError("No Session found!",401);
  }
}

export function payloadBuilder(message:string){
  return {
    success:false,
    message
  }
}