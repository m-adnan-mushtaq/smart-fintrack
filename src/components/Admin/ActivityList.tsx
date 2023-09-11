"use client";
import { showErrorToast } from "@/client/helpers";
import { markActivityAsRead } from "@/lib/actions";
import { ActivityI } from "@/lib/types";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

const ActivityList = ({ activities }: { activities: ActivityI[] }) => {
  const [isPending, startTrasition] = useTransition();
  const router=useRouter()
  const markActivityReadHandler = (id: string, path: string) => {
    startTrasition(async () => {
      try {
        const { success, message } = await markActivityAsRead(id);
        if (!success) throw Error(message);
        router.push(path)
      } catch (error: any) {
        showErrorToast(error);
      }
    });
  };
  return (
    <ul className="space-y-1">
      {activities.map((activity) => (
        <li className="truncate" key={activity.id}>
          <Link
            aria-disabled={isPending}
            href={activity.activityLink}
            onClick={(e) => {
              e.preventDefault();
              if (isPending) return;
              markActivityReadHandler(activity.id, activity.activityLink);
            }}
            className={`${
              !activity.isRead ? "bg-base-100" : " "
            } w-full rounded text-left p-2 capitalize link-primary link-hover`}
          >
            {activity.activityDescription}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ActivityList;
