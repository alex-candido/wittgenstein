import { cn } from "@/lib/utils";

export function PresentationInput({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <div
      className={cn("app-presentation-input flex flex-col", className)}
      {...props}
    >
      PresentationInput
    </div>
  );
}
