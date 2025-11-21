"use client";

import type { ReactNode } from "react";

import { Toaster } from "@/components/ui/sonner";
import {
  AdminDashboardProvider,
  AdminDocumentsProvider,
  AdminGenerationsProvider,
  AdminPresentationsProvider,
  AdminUsersProvider,
} from "@/providers/admin";
import {
  AppDocumentsProvider,
  AppGenerateProvider,
  AppPresentationsProvider,
  AppProvider,
} from "@/providers/app";
import { AuthProvider } from "@/providers/auth";
import { DocsProvider } from "@/providers/docs";
import { HomeProvider } from "@/providers/home";
import { ThemeProvider } from "@/providers/next";
import { TermsProvider } from "@/providers/terms";

const AdminProviders = ({ children }: { children: ReactNode }) => (
  <AdminDashboardProvider>
    <AdminDocumentsProvider>
      <AdminGenerationsProvider>
        <AdminPresentationsProvider>
          <AdminUsersProvider>{children}</AdminUsersProvider>
        </AdminPresentationsProvider>
      </AdminGenerationsProvider>
    </AdminDocumentsProvider>
  </AdminDashboardProvider>
);

const AppProviders = ({ children }: { children: ReactNode }) => (
  <AppProvider>
    <AppDocumentsProvider>
      <AppGenerateProvider>
        <AppPresentationsProvider>{children}</AppPresentationsProvider>
      </AppGenerateProvider>
    </AppDocumentsProvider>
  </AppProvider>
);

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
      <AuthProvider>
        <HomeProvider>
          <DocsProvider>
            <TermsProvider>
              <AppProviders>
                <AdminProviders>
                  {children}
                  <Toaster />
                </AdminProviders>
              </AppProviders>
            </TermsProvider>
          </DocsProvider>
        </HomeProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
