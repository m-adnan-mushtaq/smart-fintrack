import { ActivityT } from "@/lib/db/validation";

export const enum QUEUE_NAMES {
  emailQueueService = "EMAIL_QUEUE",
}
export const enum JOB_NAMES {
  verifyEmail = "VERIFY_EMAIL",
  welcomeUser = "WELCOME_EMAIL",
  supportEmail = "SUPPORT_EMAIL",
}

export const enum PUSHER_EVENTS {
  profileUpdated = "profile-updated",
}

export type { ActivityT } from "@/lib/db/validation";

export type ActivityLogType = Pick<ActivityT, "type">["type"];
export type ActivityI = {
  id: string;
  sender: string;
  activityLink: string;
  activityDescription: string;
  isRead: boolean;
  type: ActivityLogType;
};

export type ActionResponse<T extends string = string> = {
  success: boolean;
  message: T;
};

export type {DbUser} from "@lib/db/client"

export type SUPPORTED_TAGS="unread-activities" | "user-activities"

export interface FetchOptions extends NextFetchRequestConfig {
  tags: SUPPORTED_TAGS[];
}

export type UnReadActivitlyLogsResponse = {
  activities: ActivityI[];
  count: number;
};