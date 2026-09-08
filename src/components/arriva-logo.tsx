import { cn } from "@/lib/utils";

export function ArrivaLogo({ className }: { className?: string }) {
  return (
    <img
      src="/arriva-logo.svg"
      alt="Arriva"
      className={cn("h-6 w-auto", className)}
    />
  );
}
