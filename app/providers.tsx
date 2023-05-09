"use client";

import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { CacheProvider } from "@chakra-ui/next-js";
import { ClerkProvider } from "@clerk/nextjs/dist/components.server";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <CacheProvider>
        <ChakraProvider>{children}</ChakraProvider>
      </CacheProvider>
    </ClerkProvider>
  );
}
