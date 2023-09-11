"use server";

import prismaClient from "../db/client";
import { logger } from "../services";
import { reformActionErrorHelper } from "../utils";
import { ActivityT, SUPPORTED_TAGS } from "../types";
import { ActionResponse } from "../types";
import { revalidateTag } from "next/cache";
const invalidateTag: SUPPORTED_TAGS = "unread-activities";

export async function createUserActivity(
  payload: ActivityT
): Promise<ActionResponse> {
  try {
    await prismaClient.activityLog.create({ data: payload });
    revalidateTag(invalidateTag);
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

export async function markActivityAsRead(id: string): Promise<ActionResponse> {
  try {
    await prismaClient.activityLog.update({
      where: { id },
      data: { isRead: true },
    });
    revalidateTag(invalidateTag);
    return {
      success: true,
      message: "activity marked as read!",
    };
  } catch (error) {
    return reformActionErrorHelper(error);
  }
}

export async function markAllActivityAsRead(
  recipientId: string
): Promise<ActionResponse> {
  try {
    await prismaClient.activityLog.updateMany({
      where: { recipientId },
      data: { isRead: true },
    });
    revalidateTag(invalidateTag);
    return {
      success: true,
      message: "All activites marked as read!",
    };
  } catch (error) {
    return reformActionErrorHelper(error);
  }
}
