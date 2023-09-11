"use server";

import prismaClient from "../db/client";
import { logger } from "../services";
import { reformActionErrorHelper } from "../utils";
import { ActivityT, SUPPORTED_TAGS } from "../types";
import { ActionResponse } from "../types";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export async function createUserActivity(
  payload: ActivityT
): Promise<ActionResponse> {
  try {
    await prismaClient.activityLog.create({ data: payload });
    const invalideTag: SUPPORTED_TAGS = "unread-activities";
    revalidateTag(invalideTag);
    logger.info(
      `User: ${payload.recipientId} activity: ${payload.type} created!`
    );
    return {
      success: true,
      message: "User activiy log created!",
    };
  } catch (error) {
    return reformActionErrorHelper(error);
  }
}

export async function markActivityAsRead(
  id: string,
): Promise<ActionResponse> {
  try {
    await prismaClient.activityLog.update({
      where: { id },
      data: { isRead: true },
    });
    const tag: SUPPORTED_TAGS = "unread-activities";
    revalidateTag(tag);
    return {
      success:true,
      message:"activity marked as read!"
    }
  } catch (error) {
    return reformActionErrorHelper(error);
  }
}
