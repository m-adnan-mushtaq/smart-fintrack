import { AuxProps } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import AuthMenu from "../Auth/AuthMenu";
import AdminLinks from "./AdminLinks";

const SidebarLayout = ({ children }: AuxProps) => {
  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            open drawer
          </label>
          {children}
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
            <ul className="menu mt-2">
              <li className="menu-title">Account</li>
              <li>
                <Link href="/admin/profile">Profile</Link>
              </li>
            </ul>
            <div className="mt-auto">
              <div className="divider"></div>
              <div className="mt-2">
                <div className="px-4 py-2">
                  <AuthMenu size={80} position="top" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SidebarLayout;
