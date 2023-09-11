"use client";
import { AuxProps } from "@client/types";;
import { SessionProvider } from "next-auth/react";
import AuthGlobalProvider from "./AuthGlobalProvider";

const RootProvider = ({ children }: AuxProps) => {
  return (
    <SessionProvider>
      <AuthGlobalProvider>
        {children}
      </AuthGlobalProvider>
    </SessionProvider>
  );
};

export default RootProvider;
