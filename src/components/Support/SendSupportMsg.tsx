"use client";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import LoadingButton from "../Layout/LoadingButton";

const SendSupportMsg = () => {
  const { pending } = useFormStatus();
  return (
    <LoadingButton loading={pending} btnType="submit" type="secondary">
      Send
    </LoadingButton>
  );
};

export default SendSupportMsg;
