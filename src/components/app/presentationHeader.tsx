import { cn } from "@/lib/utils";

export function PresentationHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <div
      className={cn("app-presentation-header flex flex-col", className)}
      {...props}
    >
      presentationHeader
    </div>
  );
}
