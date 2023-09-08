"use client";
import { AuxProps } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import AdminLinks, { ProfileLinks } from "./AdminLinks";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const SidebarLayout = ({ children }: AuxProps) => {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  useEffect(() => {
    setOpen(false);
  }, [path]);

  
  //   const pusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER_KEY!, {
  //     cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER!,
  //     channelAuthorization: {
  //       endpoint: "/api/v1/pusher/auth",
  //       transport: "ajax",
  //     },
  //   });
  //   const channelName = getUserChannel(user?.id as string);
  //   const userChannel = pusher.subscribe(channelName);
  //   userChannel.bind(PUSHER_EVENTS.profileUpdated, (data: GenericObject) => {
  //     console.log({ data });
  //   });

  //   userChannel.bind("pusher:subscription_succeeded",()=>{
  //     toast.success("Real time service is enabled!")
  //     updatePusherStatus(true)
  //   })
  //   userChannel.bind("pusher:subscription_error",()=>{
  //     toast.error("Real time service disabled")
  //     updatePusherStatus(false)
  //   })
  //   return () => {
  //     pusher.unsubscribe(channelName);
  //     pusher.disconnect()
  //   };
  // }, []);
  return (
    <>
      <aside className="drawer lg:drawer-open">
        <input
          checked={open}
          onChange={() => {
            setOpen(!open);
          }}
          id="my-drawer-2"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          {children}
        </div>
        <div className="drawer-side z-[999]">
          <label htmlFor="my-drawer-2" className="drawer-overlay "></label>
          <div className="w-72 hide-scrollbar h-full flex flex-col px-2 max-h-full overflow-auto bg-neutral text-base-content">
            <Link href="/">
              <div className="h-[4rem] my-4 relative">
                <Image
                  src="/assets/logo.svg"
                  alt="Smart FinTrack"
                  title="Smart FinTrack"
                  loading="lazy"
                  fill
                />
              </div>
            </Link>
            <div className="divider"></div>
            <AdminLinks />
            <div className="divider"></div>
            <ProfileLinks />
          </div>
        </div>
      </aside>
    </>
  );
};

export default SidebarLayout;
