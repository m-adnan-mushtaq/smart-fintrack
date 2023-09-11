"use client";
import { showErrorToast } from "@/client/helpers";
import { queryClient } from "@/client/services";
import { markActivityAsRead } from "@/lib/actions";
import { ActivityI, SUPPORTED_TAGS } from "@/lib/types";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

const ActivityList = ({ activities }: { activities: ActivityI[] }) => {
  const [isPending, startTrasition] = useTransition();
  const router = useRouter();
  const markActivityReadHandler = (id: string, path: string) => {
    startTrasition(async () => {
      try {
        const { success, message } = await markActivityAsRead(id);
        if (!success) throw Error(message);
        const tag: SUPPORTED_TAGS = "user-activities";
        queryClient.invalidateQueries({ queryKey: [tag], exact: true });
        router.push(path);
      } catch (error: any) {
        showErrorToast(error);
      }
    });
  };
  return (
    <ul className="space-y-1 text-left">
      {activities.map((activity) => (
        <li className="truncate flex" key={activity.id}>
          <Link
            aria-disabled={isPending}
            href={activity.activityLink}
            onClick={(e) => {
              e.preventDefault();
              if (isPending) return;
              markActivityReadHandler(activity.id, activity.activityLink);
            }}
            className={`${
              !activity.isRead ? "bg-[#ffffff1f]" : " "
            } w-full rounded text-left p-2 capitalize link-primary link-hover border-b border-blue-900`}
          >
            {activity.activityDescription}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ActivityList;
