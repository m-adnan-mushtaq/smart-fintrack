"use server";

import { Prisma } from "@prisma/client";
import prismaClient from "@/lib/db/client";
import {
  prepareInvalideKey,
  reformActionErrorHelper,
} from "@/lib/utils/server-utils";
import { ActionResponse } from "@/lib/types";
import { getUserChannel, handleActionResponse } from "../utils/utils";
import { PasswordServie, pusher } from "../services";
import { PUSHER_EVENTS } from "../types-server";

export async function updateSecurityCredentials(
  id: string,
  newPassword: string
): Promise<ActionResponse> {
  try {
    const hashedPassword = await PasswordServie.generateHash(newPassword);
    const message = await handleActionResponse(
      updateUser({ where: { id }, data: { password: hashedPassword } })
    );
    return {
      success: true,
      message,
    };
  } catch (error) {
    return reformActionErrorHelper(error);
  }
}
export async function updateUser(
  updateArgs: Prisma.UserUpdateArgs
): Promise<ActionResponse> {
  try {
    //find user for preparing invalidating key
    const foundUser = await prismaClient.user.findUnique({
      where: updateArgs.where as any,
    });
    if (!foundUser) throw Error(`No User found`);

    const cacheKey1 = prepareInvalideKey("User", foundUser.email);
    const cacheKey2 = prepareInvalideKey("User", foundUser.id);
    await prismaClient.user.update(updateArgs as any);
    //invalidate cache against user model
    await prismaClient.user.invalidateCache([cacheKey1, cacheKey2]);
    await pusher.trigger(
      getUserChannel(foundUser.id),
      PUSHER_EVENTS.profileUpdated,
      { message: "show activiy log", refetch: true }
    );
    return {
      success: true,
      message: "Profile got updated!",
    };
  } catch (error) {
    return reformActionErrorHelper(error);
  }
}
