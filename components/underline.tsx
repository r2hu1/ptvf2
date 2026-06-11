export function Underline({ children }: { children: React.ReactNode }) {
  return (
    <span className="underline underline-offset-3 text-white/80">
      {children}
    </span>
  );
}
