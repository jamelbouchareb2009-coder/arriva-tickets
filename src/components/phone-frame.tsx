import { useEffect, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { ViewportLock } from "@/components/viewport-lock";
import { cn } from "@/lib/utils";

function BodyPortal({ children }: { children: ReactNode }) {
  const [target, setTarget] = useState<HTMLElement | null>(null);
  useEffect(() => {
    setTarget(document.body);
  }, []);
  if (!target) return <>{children}</>;
  return createPortal(children, target);
}

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
      {footer ? <BodyPortal>{footer}</BodyPortal> : null}
    </div>
  );
}
