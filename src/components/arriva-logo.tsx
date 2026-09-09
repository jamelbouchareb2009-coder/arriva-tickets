import { cn } from "@/lib/utils";
import { logoSrc } from "@/lib/img";

export function ArrivaLogo({ className }: { className?: string }) {
  return (
    <img
      src={logoSrc}
      alt="Arriva"
      className={cn("h-6 w-auto", className)}
    />
  );
}
