import { Prisma } from "@prisma/client";
import { z } from "zod";

export const ActivityLogSchema = z.object({
  recipientId: z
    .string()
    .uuid({ message: "Recpient Id must be a valid uuid" })
    .nonempty(),
  senderId: z
    .string()
    .uuid({ message: "Sender Id must be a valid uuid" })
    .optional(),
  entityId: z
    .string()
    .nonempty()
    .min(3, "User log must contain valid entity Id"),
  type: z.enum(
    [
      "EMAIL_UPDATED",
      "PASSWORD_UPDATED",
      "PROFILE_UPDATED",
      "BUDGET_ADDED",
      "SAVING_GOAL_ADDED",
      "EXPENSE_ADDED",
      "INCOME_SOURCE_ADDED",
    ],
    {
      errorMap: (issue, _ctx) => {
        switch (issue.code) {
          case "invalid_type":
            return { message: "Activity Log type value is not supported" };
          case "invalid_enum_value":
            return {
              message: `${issue.received} is not supported for Activity log value`,
            };
          default:
            return { message: "Activity Log type value is not supported" };
        }
      },
    }
  ),
  isRead: z.boolean().default(false),
}) satisfies z.Schema<Prisma.ActivityLogUncheckedCreateInput>;

export type ActivityT = z.infer<typeof ActivityLogSchema>;
