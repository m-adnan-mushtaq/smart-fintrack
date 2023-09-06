import prismaClient from "@/lib/db/client";
import { getLoggedUser, returnErrorResponse } from "@/lib/utils";
import { NextResponse } from "next/server";
export async function GET() {
  try {
    const loggedUser = await getLoggedUser();
    // grab user related activit logs
    const activityLogs = await prismaClient.activityLog.findMany({
      where: { recipientId: loggedUser.id },
    });
    return NextResponse.json({ activityLogs });
  } catch (error) {
    return returnErrorResponse(error);
  }
}
