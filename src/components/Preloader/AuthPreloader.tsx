"use client";
import { UserType } from "@/lib/types";
import { store } from "@/store";
import { setAuth } from "@/store/slices/auth.slice";
import { useRef } from "react";

const AuthPreloader = ({ user }: { user: UserType }) => {
  const loaded = useRef(false);
  if (!loaded.current) {
    store.dispatch(setAuth(user));
    loaded.current = true;
  }

  return null;
};

export default AuthPreloader;
