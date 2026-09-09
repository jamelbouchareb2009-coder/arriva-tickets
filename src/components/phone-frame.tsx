import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function PhoneFrame({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className="app-shell flex justify-center bg-arriva-green">
      <div
        className={cn(
          "relative flex h-full min-h-0 w-full max-w-md flex-col overflow-hidden bg-arriva-green",
          className,
        )}
      >
        {children}
      </div>
    </div>
  );
}
