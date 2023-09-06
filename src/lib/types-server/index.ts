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
  emailUpdated="email-updated",
  passwordUpdated="password-updated",
  profileUpdated="profile-updated",
}

export type {ActivityT} from "@/lib/db/validation"

export type ActivityLogType=Pick<ActivityT, "type">["type"]
export type ActivityI = {
  sender:string,
  activityLink:string
  activityDescription:string,
  type:ActivityLogType
}