import { ActivityI } from "@/lib/types-server";
import Link from "next/link";
import { useTransition } from "react";
import { AuxProps } from "@/lib/types";
import { showErrorToast } from "@client/helpers";
import { markActivityAsRead } from "@/lib/actions";

async function fetchUnReadActivites(){
}

const FetchActivityLogs = ({ activities }: { activities: ActivityI[] }) => {
  const [isPending, startTransition] = useTransition();
  const markActivityReadHandler = (id: string, path: string) => {
    startTransition(async () => {
      try {
        const { success, message } = await markActivityAsRead(id);
        if (!success) throw Error(message);
      } catch (error) {
        showErrorToast(error);
      }
    });
  };
  return (
    <div className="card-body">
      <span className="font-bold text-lg menu-title text-center">
        Notifications
      </span>
      {!activities.length ? (
        <p className="text-lg text-center capitalize text-slate-300 my-2">
          you have peformed no activities. :&#41;
        </p>
      ) : (
        <ul>
          {activities.map((activity) => (
            <li className="truncate" key={activity.id}>
              <Link
                className={`${
                  !activity.isRead
                    ? "bg-base-100 bg-opacity-25  h-full w-full flex items-center  p-2 border-b-2 border-neutral text-accent font-semibold "
                    : " link-primary"
                } link link-hover capitalize`}
                href="javascript:;"
                prefetch={false}
                aria-disabled={isPending}
                onClick={(e) => {
                  e.preventDefault();
                  markActivityReadHandler(activity.id, activity.activityLink);
                }}
              >
                {activity.activityDescription}
              </Link>
            </li>
          ))}
        </ul>
      )}

      <div className="card-actions">
        <Link
          href="/admin/profile/activity"
          className="btn btn-sm btn-ghost btn-block"
        >
          view all
        </Link>
      </div>
    </div>
  );
};

const ActivityLogs = async () => {
  return (
    <div className="dropdown dropdown-end">
      <div
        className="tooltip tooltip-bottom tooltip-secondary"
        data-tip="Notifications"
      >
        <label tabIndex={0} className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            {count > 0 && (
              <span className="badge badge-sm indicator-item badge-accent">
                {count}
              </span>
            )}
          </div>
        </label>
      </div>
      <div
        tabIndex={0}
        className="mt-3 z-[1] card card-compact dropdown-content w-[24rem] bg-neutral shadow"
      >
        {children}
      </div>
    </div>
  );
};

export default ActivityLogs;
