"use client";
import { AuxProps } from "@/lib/types";
import { useAuthStore } from "@/store";
import { redirect } from "next/navigation";

const EnsureAuth = ({ children }: AuxProps) => {
  const { user } = useAuthStore();
  if (!user) {
    redirect("/auth");
  }
  return <>{children}</>;
};

export default EnsureAuth;
