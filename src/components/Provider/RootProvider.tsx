"use client";
import { AuxProps } from "@/lib/types/types";
import { SessionProvider } from "next-auth/react";
import StoreProvider from "@components/Provider/StoreProvider";
import AuthSessionProvider from "@components/Provider/AuthSessionProvider";

const RootProvider = ({ children }: AuxProps) => {
  return (
    <SessionProvider>
      <StoreProvider>
          <AuthSessionProvider>
            {children}
          </AuthSessionProvider>
      </StoreProvider>
    </SessionProvider>
  );
};

export default RootProvider;
