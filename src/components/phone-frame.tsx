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
    <div className="fixed inset-0 flex justify-center bg-arriva-green">
      <div
        className={cn(
          "relative flex h-full w-full max-w-md flex-col overflow-hidden bg-arriva-green",
          className,
        )}
      >
        {children}
      </div>
    </div>
  );
}
