"use client";

import { LayoutApp, LayoutMain } from "@/components/layouts";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LayoutApp
      id="home"
      className="flex min-h-screen w-full flex-col bg-muted/40"
    >
      <LayoutMain>{children}</LayoutMain>
    </LayoutApp>
  );
}
