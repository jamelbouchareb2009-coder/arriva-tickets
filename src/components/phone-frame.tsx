import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function PhoneFrame({
  children,
  footer,
  className,
}: {
  children: ReactNode;
  footer?: ReactNode;
  className?: string;
}) {
  return (
    <div className="app-shell">
      <div
        className={cn(
          "ticket-main relative flex min-h-0 w-full max-w-md flex-col overflow-hidden bg-arriva-green",
          className,
        )}
      >
        {children}
      </div>
      {footer}
    </div>
  );
}
