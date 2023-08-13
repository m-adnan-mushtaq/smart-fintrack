import { AuxProps } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import AuthMenu from "../Auth/AuthMenu";

const SidebarLayout = ({ children }: AuxProps) => {
  return (
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
        <div className="w-80 h-full flex flex-col px-2 max-h-full overflow-auto bg-neutral text-base-content">
          <Link href="/">
            <div className="h-[4rem] my-4 relative  mx-auto">
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
          <div className="mt-4">
            <h5 className="font-bold text-slate-400 uppercase">Dashboard</h5>
            <ul className="menu ">
              <li>
                <a>Sidebar Item 1</a>
              </li>
              <li>
                <a>Sidebar Item 2</a>
              </li>
            </ul>
          </div>
          <div className="mt-auto">
            <div className="divider"></div>
            <div className="mt-4">
              <h5 className="font-bold text-slate-400 uppercase">Account</h5>
              <div className="p-4">
                <AuthMenu  size={80} position="top" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarLayout;
