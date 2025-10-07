"use client";

import type { ReactNode } from "react";

import { Toaster } from "@/components/ui/sonner";
import { AppProvider } from "@/providers/app-provider";
import { ThemeProvider } from "@/providers/theme-provider";
import { AppGenerateProvider } from "@/providers/app-generate-provider";
import { AppPresentationsProvider } from "@/providers/app-presentations-provider";

export function Providers({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <AppProvider>
        <AppGenerateProvider>
          <AppPresentationsProvider>
            {children}
            <Toaster />
          </AppPresentationsProvider>
        </AppGenerateProvider>
      </AppProvider>
    </ThemeProvider>
  );
}
