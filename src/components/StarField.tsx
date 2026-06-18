export default function StarField({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 bg-star-field opacity-70 ${className}`}
    />
  );
}
