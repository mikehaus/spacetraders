"use client";

import React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { CacheProvider } from "@chakra-ui/next-js";
import { QueryClient, QueryClientProvider } from "react-query";

const chakraTheme = extendTheme({});

export function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();

  return (
    <CacheProvider>
      <ChakraProvider theme={chakraTheme}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </ChakraProvider>
    </CacheProvider>
  );
}
