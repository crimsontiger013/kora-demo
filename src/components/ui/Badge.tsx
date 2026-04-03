export function Badge({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-block rounded-full border border-border bg-card px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground ${className}`}
    >
      {children}
    </span>
  );
}
