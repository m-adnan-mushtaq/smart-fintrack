import { AuxProps } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import AdminLinks, { ProfileLinks } from "./AdminLinks";
import AdminNav from "./AdminNav";

const SidebarLayout = ({ children }: AuxProps) => {
  return (
    <>
      <aside className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <AdminNav />
          <main className="p-4">{children}</main>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
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
            <ProfileLinks/>
          </div>
        </div>
      </aside>
    </>
  );
};

export default SidebarLayout;
