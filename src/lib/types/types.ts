import { FieldError, FieldValues, UseFormRegister } from "react-hook-form";
import { QUERY_TAGS_KEYS } from "../common/commont";
import { ActivityI } from "../types-server";

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
  errorFeedback?: FieldError;
};

export interface ActionResponse {
  success: boolean;
  message: string;
}
export interface MutationResponse<T> {
  success: boolean;
  payload: T;
}

export type TStepContent = "✓" | "?" | "✕" | "!";

export interface FetchOptions extends NextFetchRequestConfig {
  tags: QUERY_TAGS_KEYS[];
}

export type UnReadActivityResponse = {
  unReadCount: 0;
  activityLogs: ActivityI[];
};
