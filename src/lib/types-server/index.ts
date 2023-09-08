import { ActivityT } from "@/lib/db/validation"

export const enum QUEUE_NAMES {
  emailQueue = "EMAIL_QUEUE",
}
export const enum JOB_NAMES {
  verifyEmail = "VERIFY_EMAIL",
  welcomeUser = "WELCOME_EMAIL",
  supportEmail = "SUPPORT_EMAIL",
}

export const enum PUSHER_EVENTS{
  profileUpdated="profile-updated",
}

export type {ActivityT} from "@/lib/db/validation"

export type ActivityLogType=Pick<ActivityT, "type">["type"]
export type ActivityI = {
  id:string,
  sender:string,
  activityLink:string
  activityDescription:string,
  isRead:boolean,
  type:ActivityLogType
}