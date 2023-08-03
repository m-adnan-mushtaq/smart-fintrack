"use client";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import Link from "next/link";
import Image from "next/image";
import WithRedirectAuth from "../HOC/withRedirectAuth";

const Menu = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  return user ? (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <Image
            loading="lazy"
            width={40}
            height={40}
            alt={user.name}
            src={user.picUrl}
            referrerPolicy="no-referrer"
          />
        </div>
      </label>
      <ul
        tabIndex={0}
        className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
      >
        <li>
          <a className="justify-between">Dashboard</a>
        </li>
        <li>
          <a>Profile</a>
        </li>
        <li>
          <a>Logout</a>
        </li>
      </ul>
    </div>
  ) : (
    <Link href="/auth" className="btn btn-secondary">
      Log IN
    </Link>
  );
};

const AuthMenu = () => {
  return (
    <>
      <Menu />
    </>
  );
};

export default WithRedirectAuth(AuthMenu)
