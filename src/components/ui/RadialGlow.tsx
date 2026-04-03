export function RadialGlow({ className = "" }: { className?: string }) {
  return (
    <div
      className={`glow-primary absolute w-[600px] h-[600px] rounded-full z-0 ${className}`}
      aria-hidden="true"
    />
  );
}
