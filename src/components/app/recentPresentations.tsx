import { cn } from "@/lib/utils";

export function RecentPresentations({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <div
      className={cn("app-recent-presentations flex flex-col", className)}
      {...props}
    >
      presentationHeader
    </div>
  );
}
