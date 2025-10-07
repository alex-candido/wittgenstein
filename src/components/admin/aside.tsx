import { cn } from "@/lib/utils";
import { LayoutAside } from "../layouts/aside";

export function AdminAside({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <div className={cn("admin-aside flex flex-col", className)} {...props}>
      <LayoutAside />
    </div>
  );
}
