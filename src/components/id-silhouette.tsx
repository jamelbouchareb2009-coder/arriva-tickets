export function IdSilhouette({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 88 88"
      className={className}
      aria-hidden="true"
      role="img"
    >
      <title>Passenger photo</title>
      <rect width="88" height="88" rx="4" fill="#c5c8ce" />
      <circle cx="44" cy="30" r="18" fill="#f4f5f6" />
      <path
        fill="#f4f5f6"
        d="M8 88c3-20 16.5-32 36-32s33 12 36 32v4H8v-4z"
      />
    </svg>
  );
}
