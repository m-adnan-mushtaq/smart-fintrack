"use client";
import { queryClient } from "@/client/services";
import { AuxProps } from "@/lib/types";
import { QueryClientProvider } from "@tanstack/react-query";
const QueryProvider = ({ children }: AuxProps) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default QueryProvider;
