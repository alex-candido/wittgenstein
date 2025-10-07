import { cn } from "@/lib/utils";

import { LayoutHeader } from "../layouts/header";

export function AdminHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <div className={cn("admin-aside flex flex-col", className)} {...props}>
      <LayoutHeader />
    </div>
  );
}
