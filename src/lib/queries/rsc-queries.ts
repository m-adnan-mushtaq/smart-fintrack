import { unstable_cache } from "next/cache";
import type {
  DbUser,
  FetchOptions,
  UnReadActivitlyLogsResponse,
  SUPPORTED_TAGS,
} from "@lib/types";
import { getServerSession } from "next-auth";
import { authConfig } from "@lib/config";
import prismaClient from "@lib/db/client";
//HINT -> https://nextjs.org/docs/app/building-your-application/caching#dynamic-functions

/*
unstable_cache
unstable_cache is an experimental API for adding values to the Data Cache when the fetch API is not suitable. 
For example, when using database clients, CMS clients, or GraphQL.
*/

export async function getUnReadActivitlyLogs() {
  return cacheWrapper<UnReadActivitlyLogsResponse>(
    async () => {
      const user = await getSessionUser();
      const { id } = user;
      const [count, activities] = await Promise.all([
        prismaClient.activityLog.count({
          where: {
            recipientId: id,
            isRead: false,
          },
        }),
        prismaClient.activityLog.findMany({
          take: 8,
          orderBy: [
            {
              isRead:"asc"
            },
            {
              createdAt: "desc",
            },
          ],
          where: { recipientId: id },
        }),
      ]);
      return { count, activities: activities as any };
    },
    "unread-activities",
    {
      revalidate: 3600,
      tags: ["unread-activities"],
    }
  );
}

async function getSessionUser() {
  const session = await getServerSession(authConfig);
  if (!session || !session.user) throw Error(`no user found!`);
  return session.user as DbUser;
}

export async function cacheWrapper<T>(
  cb: (...args: any[]) => Promise<T>,
  cacheKey: SUPPORTED_TAGS,
  options: FetchOptions
) {
  const cachedData = await unstable_cache(cb, [cacheKey], options)();
  return cachedData;
}
