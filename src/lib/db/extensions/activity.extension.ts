import { Prisma } from "@prisma/client";
import { ActivityLogSchema } from "../validation";
import { PROFILE_ROUTE } from "@/lib/common/server-common";
import { ActivityI, ActivityLogType } from "@/lib/types-server";

export default Prisma.defineExtension((client) => {
  return client.$extends({
    name: "activity-extension",
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
          if(!actualActivities.length) return []
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
                  activityLink = `${PROFILE_ROUTE}`;
                  break;
                case "PASSWORD_UPDATED":
                  activityDescription = `${actorName} updated securty credentials`;
                  activityLink = `${PROFILE_ROUTE}`;
                  break;
                case "PROFILE_UPDATED":
                  activityDescription = `${actorName} updated profile details`;
                  activityLink = `${PROFILE_ROUTE}`;
                  break;
                case "BUDGET_ADDED":
                  activityDescription = `${actorName} added new budget template`;
                  break;
                default:
                  break;
              }

              return {
                sender: actorName as string,
                activityDescription,
                activityLink,
                type: activity.type as ActivityLogType,
              };
            }
          );
          return modifiedActivities
        },
      },
    },
  });
});
