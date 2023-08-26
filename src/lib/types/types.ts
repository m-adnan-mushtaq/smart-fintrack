import { FieldError, FieldValues, UseFormRegister } from "react-hook-form";

type InputType = "text" | "email" | "password" | "file" | "number";

export type AuxProps = {
  children: React.ReactNode;
};

export type InputI<K> = {
  name: K;
  label: string;
  infoText: string;
  type: InputType;
  placeholder?: string;
};
export type TInput<K, F extends FieldValues> = InputI<K> & {
  register: UseFormRegister<F>;
  errorFeedback?:FieldError;
};

export interface ActionResponse {
  success: boolean;
  message: string;
}
export interface MutationResponse<T> {
  success: boolean;
  payload: T;
}

export const enum QUEUE_NAMES {
  emailQueue = "EMAIL_QUEUE",
}
export const enum JOB_NAMES {
  verifyEmail = "VERIFY_EMAIL",
  welcomeUser = "WELCOME_EMAIL",
  supportEmail = "SUPPORT_EMAIL",
}

export type SUPPORTED_TAGS = "BUDGET";
export interface FetchOptions extends NextFetchRequestConfig {
  tags: SUPPORTED_TAGS[];
}
