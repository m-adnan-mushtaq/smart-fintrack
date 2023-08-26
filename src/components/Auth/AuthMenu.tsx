"use client";
import Link from "next/link";
import Image from "next/image";
import { signOut } from "next-auth/react";
import { toast } from "react-hot-toast";
import { useAuthStore } from "@/store";

interface MenuProps {
  size: number;
  position?: Position;
}
const AuthMenu = ({ size, position }: MenuProps) => {
  const {user} = useAuthStore()
  const logOutHandler = async () => {
    try {
      await signOut({ redirect: false });
    } catch (error) {
      toast.error("Something Went Wrong, Try again!");
    }
  };
  return user ? (
    <div className={`dropdown dropdown-${position ?? "end"}`}>
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar online">
        <div className="w-10 rounded-full">
          <Image
            loading="lazy"
            width={size}
            height={size}
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
        <div className="p-2 hover:bg-transparent cursor-auto">
          <p className="text-lg text-primary capitalize">{user.name}</p>
          <small className="text-sm text-slate-300">{user.email}</small>
        </div>
        <li>
          <Link href="/admin" className="justify-between">
            Dashboard
          </Link>
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

export default AuthMenu;
