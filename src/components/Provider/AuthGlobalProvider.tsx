"use client";

import { useEffect } from "react";
import { AuxProps, DbUser } from "@/lib/types";
import { useAuthStore } from "@/store";
import { useSession } from "next-auth/react";
import PublicPageLoader from "../Layout/PublicPageLoader";

const AuthGlobalProvider = ({ children }: AuxProps) => {
  const { status, data } = useSession();
  const { setUser, resetUser } = useAuthStore();

  useEffect(() => {
    if (status === "loading") {
      return;
    }
    if (status === "authenticated") {
      setUser(data.user as DbUser);
      return;
    }
    if (status === "unauthenticated") {
      resetUser();
      return;
    }
  }, [status, data?.user]);

  if (status === "loading") {
    return <PublicPageLoader />;
  }
  return <>{children}</>;
};

export default AuthGlobalProvider;
