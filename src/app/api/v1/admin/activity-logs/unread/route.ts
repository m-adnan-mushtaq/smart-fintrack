import prismaClient from "@/lib/db/client";
import { getLoggedUser, returnErrorResponse } from "@/lib/utils";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // grab user related activit logs
    const {id} = await getLoggedUser()
    const [count, activities] = await Promise.all([
      prismaClient.activityLog.count({
        where: {
          recipientId: id,
          isRead: false,
        },
      }),
      prismaClient.activityLog.findMany({
        take: 10,
        orderBy: {
          createdAt: "desc",
        },
        where: { recipientId: id },
      }),
    ]);
    return NextResponse.json({ count, activities });
  } catch (error) {
    return returnErrorResponse(error);
  }
}
