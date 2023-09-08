import prismaClient from "@/lib/db/client";
import { IdDto } from "@/lib/dto/user.dto";
import { returnErrorResponse } from "@/lib/utils";
import { NextResponse } from "next/server";

export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  try {
    // grab user related activit logs
    const id = IdDto.parse(params.id);
    const [unReadCount, activityLogs] = await Promise.all([
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
        where: { recipientId: id},
      }),
    ]);
    return NextResponse.json({ unReadCount, activityLogs });
  } catch (error) {
    return returnErrorResponse(error);
  }
}
