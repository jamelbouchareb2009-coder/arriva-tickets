export function IdSilhouette({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 88 88"
      className={className}
      aria-hidden="true"
      role="img"
    >
      <title>Passenger photo</title>
      <rect width="88" height="88" fill="#c3c7cd" />
      <ellipse cx="27" cy="32" rx="5.5" ry="7.5" fill="#f7f7f8" />
      <ellipse cx="61" cy="32" rx="5.5" ry="7.5" fill="#f7f7f8" />
      <ellipse cx="44" cy="30" rx="16.5" ry="18.5" fill="#f7f7f8" />
      <path
        fill="#f7f7f8"
        d="M2 88c4-24 20-34 42-34s38 10 42 34v2H2z"
      />
    </svg>
  );
}
