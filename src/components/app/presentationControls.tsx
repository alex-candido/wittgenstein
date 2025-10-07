import { cn } from "@/lib/utils";

export function PresentationControls({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <div
      className={cn("app-presentation-controls flex flex-col", className)}
      {...props}
    >
      PresentationControls
    </div>
  );
}
