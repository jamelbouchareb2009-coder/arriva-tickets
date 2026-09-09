import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

function BackChevron({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M15.2 4.6 7.4 12l7.8 7.4"
        stroke="currentColor"
        strokeWidth="2.15"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function AppHeader({
  title,
  backTo,
  className,
}: {
  title: string;
  backTo?: "/tickets";
  className?: string;
}) {
  return (
    <header
      className={cn(
        "app-header shrink-0 bg-arriva-green text-paper",
        className,
      )}
    >
      <div className="relative flex h-11 w-full items-center justify-center">
        {backTo ? (
          <Link
            to={backTo}
            aria-label="Go back"
            className="absolute left-[6px] top-1/2 flex size-11 -translate-y-1/2 items-center justify-center text-paper"
          >
            <BackChevron className="size-[26px]" />
          </Link>
        ) : null}
        <h1 className="text-[20px] font-medium leading-none tracking-[0.2px]">
          {title}
        </h1>
      </div>
    </header>
  );
}
