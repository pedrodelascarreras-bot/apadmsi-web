type HeartProps = {
  className?: string;
  size?: number;
  "aria-hidden"?: boolean;
};

export function Heart({ className, size = 14, ...rest }: HeartProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden={rest["aria-hidden"] ?? true}
    >
      <path d="M12 21s-7.5-4.7-9.5-9.5C0.7 7.5 3.5 4 7 4c2 0 3.5 1 5 2.5C13.5 5 15 4 17 4c3.5 0 6.3 3.5 4.5 7.5C19.5 16.3 12 21 12 21z" />
    </svg>
  );
}
