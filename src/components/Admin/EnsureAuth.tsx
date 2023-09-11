"use client";
import { AuxProps } from "@client/types";;
import { useAuthStore } from "@/client/store";
import { redirect } from "next/navigation";

const EnsureAuth = ({ children }: AuxProps) => {
  const { user } = useAuthStore();
  if (!user) {
    redirect("/auth");
  }
  return <>{children}</>;
};

export default EnsureAuth;
