import { cn } from "@/lib/utils";

import { LayoutHeader } from "../layouts/header";

export function AppHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <div className={cn("app-aside flex flex-col", className)} {...props}>
      <LayoutHeader />
    </div>
  );
}
