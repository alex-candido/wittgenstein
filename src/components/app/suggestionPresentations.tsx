import { cn } from "@/lib/utils";

export function SuggestionPresentations({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <div
      className={cn("app-suggestion-presentations flex flex-col", className)}
      {...props}
    >
      SuggestionPresentations
    </div>
  );
}
