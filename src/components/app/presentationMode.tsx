import { cn } from "@/lib/utils";

export function PresentationMode({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <div
      className={cn("app-presentation-mode flex flex-col", className)}
      {...props}
    >
      PresentationMode
    </div>
  );
}
