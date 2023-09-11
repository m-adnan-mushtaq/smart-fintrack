import { Prisma } from "@prisma/client";
import { ActivityLogSchema } from "../validation";
import { ADMIN_PROFILE_LINK } from "@/lib/common/common";
import { ActivityI, ActivityLogType } from "@/lib/types";

export default Prisma.defineExtension((client) => {
  return client.$extends({
    /***********************************/
    /* ACTIVITY LOG CUSTOM VALIDATION */
    /***********************************/
    query: {
      activityLog: {
        create({ query, args }) {
          args.data = ActivityLogSchema.parse(args.data);
          return query(args);
        },
        updateMany({ query, args }) {
          args.data = ActivityLogSchema.partial().parse(args.data);
          return query(args);
        },
        update({ query, args }) {
          args.data = ActivityLogSchema.partial().parse(args.data);
          return query(args);
        },
        /***********************************/
        /* ACTIVITY LOG MODIFY RESULT */
        /***********************************/
        async findMany({ args, query }) {
          const actualActivities = await query(args);
          if (!actualActivities.length) return [];
          const modifiedActivities: ActivityI[] = actualActivities.map(
            (activity) => {
              const actorName =
                activity.senderId === activity.recipientId
                  ? "You"
                  : activity.sender?.name;
              let activityLink = "";
              let activityDescription = "";
              switch (activity.type) {
                case "EMAIL_UPDATED":
                  activityDescription = `${actorName} updated email address`;
                  activityLink = `${ADMIN_PROFILE_LINK}`;
                  break;
                case "PASSWORD_UPDATED":
                  activityDescription = `${actorName} updated securty credentials`;
                  activityLink = `${ADMIN_PROFILE_LINK}`;
                  break;
                case "PROFILE_UPDATED":
                  activityDescription = `${actorName} updated profile details`;
                  activityLink = `${ADMIN_PROFILE_LINK}`;
                  break;
                case "BUDGET_ADDED":
                  activityDescription = `${actorName} added new budget template`;
                  break;
                default:
                  break;
              }

              return {
                id: activity.id!,
                isRead: activity.isRead!,
                sender: actorName as string,
                activityDescription,
                activityLink,
                type: activity.type as ActivityLogType,
              };
            }
          );
          return modifiedActivities;
        },
      },
    },
  });
});
