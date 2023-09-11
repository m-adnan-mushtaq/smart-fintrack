import prismaClient from "@/lib/db/client";
import { getLoggedUser, returnErrorResponse } from "@/lib/utils";
import { NextResponse } from "next/server";

//HINT -  https://www.prisma.io/docs/concepts/components/prisma-client/pagination
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    let lastCursor = searchParams.get("cursor");
    const user = await getLoggedUser();

    const activities = await prismaClient.activityLog.findMany({
      where: {
        recipientId: user.id,
      },
      take: 6,
      ...(lastCursor && {
        skip: 1,
        cursor: {
          id: lastCursor,
        },
      }),
      orderBy: {
        createdAt: "desc",
      },
    });

    if (!activities.length) {
      return NextResponse.json({
        activities: [],
        metadata: null,
      });
    }
    const lastDoc = activities.at(-1);
    if (lastDoc) {
      lastCursor = lastDoc.id;
    }
    return NextResponse.json({
      activities,
      metadata: {
        lastCursor,
        hasNextPage: true,
      },
    });
  } catch (error) {
    return returnErrorResponse(error);
  }
}
