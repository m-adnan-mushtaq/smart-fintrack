"use server";

import prismaClient from "../db/client";
import { logger, pusher } from "../services";
import {
  getUserChannel,
  reformActionErrorHelper,
  returnErrorResponse,
} from "../utils";
import { ActivityT, PUSHER_EVENTS } from "../types-server";
import { ActionResponse } from "../types";

export async function createUserActivity(
  payload: ActivityT
): Promise<ActionResponse> {
  try {
    await prismaClient.activityLog.create({ data: payload });
    await pusher.trigger(
      getUserChannel(payload.recipientId as string),
      PUSHER_EVENTS.profileUpdated,
      { message: "refetch activiy logs", refetch: true }
    );
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
    return {
      success:true,
      message:"Marked as read!"
    }
  } catch (error) {
    return reformActionErrorHelper(error);
  }
}
