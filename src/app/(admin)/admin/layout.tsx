"use client";

import { AdminAside, AdminFooter, AdminHeader } from "@/components/admin";
import { LayoutApp, LayoutMain } from "@/components/layouts";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LayoutApp
      id="admin"
      className="flex min-h-screen w-full flex-col bg-muted/40"
    >
      <AdminAside />
      <div className="layout-container">
        <AdminHeader />
        <LayoutMain>{children}</LayoutMain>
        <AdminFooter />
      </div>
    </LayoutApp>
  );
}
