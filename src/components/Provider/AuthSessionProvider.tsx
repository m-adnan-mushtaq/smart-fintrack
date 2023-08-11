"use client"
import { UserType } from "@/lib/types";
import { AuxProps } from "@/lib/types/types";
import { resetAuth, setAuth, setAuthLoading } from "@/store/slices/auth.slice";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const AuthSessionProvider = ({children }: AuxProps) => {
  const { status, data } = useSession();
  const dispatch = useDispatch();
  useEffect(() => {
    if (status === "loading") {
      dispatch(setAuthLoading(true));
      return;
    }
    if (status === "authenticated") {
      dispatch(setAuth(data.user as UserType));
      return;
    }
    if (status === "unauthenticated") {
      dispatch(resetAuth());
      return;
    }
  }, [status, data?.user]);
  return <>{children}</>;
};

export default AuthSessionProvider;
