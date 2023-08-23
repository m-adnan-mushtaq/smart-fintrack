import { getLoggedUser, payloadBuilder } from "@/lib/utils/node-utils";
import { ApiError } from "@/lib/utils/node-utils";
import { NextResponse } from "next/server";
export async function GET() {
  try {
    console.count("api endpoint hit...");
    const user = await getLoggedUser();
    console.log({user})
    return NextResponse.json({ user });
  } catch (error) {
    if (error instanceof ApiError) {
      return NextResponse.json(
        { message: error.message },
        { status: error.statusCode }
      );
    }
    return NextResponse.json(payloadBuilder("Failed to get user tour"));
  }
}
