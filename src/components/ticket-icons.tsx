import { cardInfoSrc, validationSrc, clockSrc, lockSrc } from "@/lib/img";

export function CardInfoIcon({ className }: { className?: string }) {
  return (
    <img
      src={cardInfoSrc}
      alt=""
      aria-hidden="true"
      draggable={false}
      className={className}
      style={{ objectFit: "contain" }}
    />
  );
}

export function ValidationIcon({ className }: { className?: string }) {
  return (
    <img
      src={validationSrc}
      alt=""
      aria-hidden="true"
      draggable={false}
      className={className}
      style={{ objectFit: "contain" }}
    />
  );
}

export function ClockIcon({ className }: { className?: string }) {
  return (
    <img
      src={clockSrc}
      alt=""
      aria-hidden="true"
      draggable={false}
      className={className}
      style={{ objectFit: "contain" }}
    />
  );
}

export function LockIcon({ className }: { className?: string }) {
  return (
    <img
      src={lockSrc}
      alt=""
      aria-hidden="true"
      draggable={false}
      className={className}
      style={{ objectFit: "contain" }}
    />
  );
}

export function PlaneIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 2 11 13" />
      <path d="M22 2 15 22l-4-9-9-4 20-7Z" />
    </svg>
  );
}
