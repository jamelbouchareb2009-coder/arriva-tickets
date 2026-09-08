export function IdSilhouette({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 88 88"
      className={className}
      aria-hidden="true"
      role="img"
    >
      <title>Passenger photo</title>
      <rect width="88" height="88" rx="6" fill="#c8cdd3" />
      <circle cx="44" cy="32" r="16" fill="#f3f4f6" />
      <path
        fill="#f3f4f6"
        d="M10 88c2.4-22 16-34 34-34s31.6 12 34 34v2H10v-2z"
      />
    </svg>
  );
}
