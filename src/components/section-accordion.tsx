import { ChevronDown } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function SectionAccordion({
  icon,
  iconClassName,
  title,
  open,
  onToggle,
  contentClassName,
  children,
}: {
  icon: ReactNode;
  iconClassName?: string;
  title: string;
  open: boolean;
  onToggle: () => void;
  contentClassName?: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-[10px] border border-section-border bg-section">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center gap-2.5 px-3.5 py-[13px] text-left"
      >
        <span
          className={cn(
            "flex size-6 items-center justify-center text-purple-icon",
            iconClassName,
          )}
        >
          {icon}
        </span>
        <span className="flex-1 text-[16px] font-semibold tracking-tight text-ink">
          {title}
        </span>
        <ChevronDown
          className={cn(
            "size-[22px] shrink-0 text-arriva-cyan transition-transform duration-300 ease-out",
            open && "rotate-180",
          )}
          strokeWidth={2.2}
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-[max-height] duration-300 ease-out",
          open ? "max-h-[720px]" : "max-h-0",
        )}
      >
        <div className={cn("px-3.5 pb-5", contentClassName)}>{children}</div>
      </div>
    </section>
  );
}
