"use server";

import { Prisma } from "@prisma/client";
import prismaClient from "@/lib/db/client";
import {
  prepareInvalideKey,
  reformActionErrorHelper,
} from "@/lib/utils/server-utils";
import { ActionResponse } from "@/lib/types";
import { handleActionResponse } from "../utils/utils";
import { PasswordServie } from "../services";

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
): Promise<ActionResponse>{
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
    return {
      success: true,
      message: "Profile got updated!",
    };
  } catch (error) {
    return reformActionErrorHelper(error);
  }
}
