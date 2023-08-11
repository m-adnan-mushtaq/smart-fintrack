"use client";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import Link from "next/link";
import Image from "next/image";
import WithRedirectAuth from "../HOC/withRedirectAuth";
import { signOut } from "next-auth/react";
import { toast } from "react-hot-toast";

const Menu = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  const logOutHandler = async () => {
    try {
      await signOut({ redirect: false });
    } catch (error) {
      toast.error("Something Went Wrong, Try again!")
    }
  };
  return user ? (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar online">
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
        <li className="py-2 hover:bg-transparent cursor-auto">
            <p className="text-lg text-primary">{user.name}</p>
            <small className="text-sm text-slate-300">{user.email}</small>
        </li>
        <li>
          <Link href="/admin" className="justify-between">Dashboard</Link>
        </li>
        <li>
          <a>Profile</a>
        </li>
        <li>
          <button onClick={logOutHandler}>Logout</button>
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

export default WithRedirectAuth(AuthMenu);
