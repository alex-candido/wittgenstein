"use client";

import { SessionProvider } from "next-auth/react";

import type { SessionProviderProps } from "next-auth/react";

export function NextAuthProvider({ children, ...props }: SessionProviderProps) {
  return (
    <SessionProvider refetchOnWindowFocus={false} {...props}>
      {children}
    </SessionProvider>
  );
};