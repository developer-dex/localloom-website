type IconProps = {
  className?: string;
};

export function PhoneIcon({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M4 5c0-.55.45-1 1-1h2.28a1 1 0 0 1 .98.79l.7 3.15a1 1 0 0 1-.27.95l-1.5 1.5a13.5 13.5 0 0 0 6.42 6.42l1.5-1.5a1 1 0 0 1 .95-.27l3.15.7a1 1 0 0 1 .79.98V19a1 1 0 0 1-1 1h-1C10.4 20 4 13.6 4 6z" />
    </svg>
  );
}

export function MenuIcon({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M3 6h18M3 12h18M3 18h18" />
    </svg>
  );
}

export function CloseIcon({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}
