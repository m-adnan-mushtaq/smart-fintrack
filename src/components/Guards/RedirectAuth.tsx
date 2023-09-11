"use client";
import { AuxProps } from "@client/types";
import { useAuthStore } from "@/client/store";
import { redirect } from "next/navigation";

const RedirectAuth = ({ children }: AuxProps) => {
  const { user } = useAuthStore();
  if (user && Object.keys(user).length) {
    redirect("/admin");
  }
  return <>{children}</>;
};

export default RedirectAuth;
