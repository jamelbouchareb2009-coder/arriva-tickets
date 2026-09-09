import type { ReactNode } from "react";
import { ViewportLock } from "@/components/viewport-lock";
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
    <div className="app-shell bg-arriva-green">
      <ViewportLock />
      <div className="flex h-full w-full justify-center">
        <div
          className={cn(
            "relative flex h-full min-h-0 w-full max-w-md flex-col overflow-hidden bg-arriva-green",
            className,
          )}
        >
          {children}
        </div>
      </div>
      {footer}
    </div>
  );
}
