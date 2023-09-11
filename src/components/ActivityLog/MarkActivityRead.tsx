"use client";

import { handleServerActionResponse, showErrorToast } from "@/client/helpers";
import { queryClient } from "@/client/services";
import { useAuthStore } from "@/client/store";
import { markAllActivityAsRead } from "@/lib/actions";
import { SUPPORTED_TAGS } from "@/lib/types";
import MarkReadSvg from "@svg/MarkReadSvg";
import { useTransition } from "react";
import toast from "react-hot-toast";

const tag: SUPPORTED_TAGS = "user-activities";

const MarkActivityRead = () => {
  const [isPending, startTransition] = useTransition();
  const { user } = useAuthStore();
  const clickHandler = () => {
    startTransition(async () => {
      try {
        const successMsg = await handleServerActionResponse(
          markAllActivityAsRead(user?.id as string)
        );
        toast.success(successMsg);
        queryClient.invalidateQueries({ queryKey: [tag], exact: true });
      } catch (error) {
        showErrorToast(toast);
      }
    });
  };
  return (
    <button disabled={isPending} onClick={clickHandler}>
      <MarkReadSvg />
    </button>
  );
};

export default MarkActivityRead;
