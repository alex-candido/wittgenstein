"use client";

import { AppAside, AppFooter, AppHeader } from "@/components/app";
import { LayoutApp, LayoutMain } from "@/components/layouts";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <LayoutApp
      id="app"
      className="flex min-h-screen w-full flex-col bg-muted/40"
    >
      <AppAside />
      <div className="layout-container">
        <AppHeader />
        <LayoutMain>{children}</LayoutMain>
        <AppFooter />
      </div>
    </LayoutApp>
  );
}
