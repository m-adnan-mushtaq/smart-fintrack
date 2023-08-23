"use client"
import { DbUser } from "@/lib/types";
import { AuxProps } from "@/lib/types/types";
import { resetAuth, setAuth, setAuthLoading } from "@/store/slices/auth.slice";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import PublicPageLoader from "../Layout/PublicPageLoader";

const AuthSessionProvider = ({children }: AuxProps) => {
  const { status, data } = useSession();
  const dispatch = useDispatch();
  useEffect(() => {
    if (status === "authenticated") {
      dispatch(setAuth(data.user as DbUser));
      return;
    }
    if (status === "unauthenticated") {
      dispatch(resetAuth());
      return;
    }
  }, [status, data?.user]);
  if(status==="loading"){
    return <PublicPageLoader/>
  }
  return <>{children}</>;
};

export default AuthSessionProvider;
