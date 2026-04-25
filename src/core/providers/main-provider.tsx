"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { queryClientConfig } from "@/src/core/config/tanstack-config";
import AosProvider from "@/src/core/providers/aos-provider";
import ViewportProvider from "@/src/core/providers/viewport-provider";

export default function MainProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ViewportProvider>
      <AosProvider>
        <QueryClientProvider client={queryClientConfig}>
          {children}
        </QueryClientProvider>
      </AosProvider>
    </ViewportProvider>
  );
}
