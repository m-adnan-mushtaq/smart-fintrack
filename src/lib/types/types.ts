export interface InputProps {
  title: string;
  type: "text" | "email" | "password" | "file";
  name: string;
  message: string;
  value: string;
  sizes?: string;
  changed: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export type InputLabel = Omit<InputProps, "changed" | "value">;
export type AuxProps = {
  children: React.ReactNode;
};

export interface ActionResponse {
  success: boolean;
  message: string;
}
export interface MutationResponse<T> {
  success: boolean;
  payload: T
}

export const enum QUEUE_NAMES {
  emailQueue = "EMAIL_QUEUE",
}
export const enum JOB_NAMES {
  verifyEmail = "VERIFY_EMAIL",
  welcomeUser = "WELCOME_EMAIL",
  supportEmail = "SUPPORT_EMAIL",
}

export type SUPPORTED_TAGS="TOUR"
export interface FetchOptions extends NextFetchRequestConfig {
  tags: SUPPORTED_TAGS[]
}

