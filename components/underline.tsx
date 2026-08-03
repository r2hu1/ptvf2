import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";

export function Underline({ children }: { children: React.ReactNode }) {
  return (
    <span className="underline underline-offset-3 text-white/80">
      {children}
    </span>
  );
}

export function HoverText({
  text,
  children,
}: {
  text: string;
  children: React.ReactNode;
}) {
  return (
    <HoverCard>
      <HoverCardTrigger>
        <span className="underline underline-offset-3 text-white/80">
          {text}
        </span>
      </HoverCardTrigger>
      <HoverCardContent>{children}</HoverCardContent>
    </HoverCard>
  );
}
