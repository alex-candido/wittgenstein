import { cn } from "@/lib/utils";
import { LayoutAside } from "../layouts/aside";

export function AppAside({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <div className={cn("app-aside flex flex-col", className)} {...props}>
      <LayoutAside />
    </div>
  );
}
