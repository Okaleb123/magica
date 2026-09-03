import type { ReactNode } from "react";
import { ImageIcon } from "lucide-react";

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-lg border border-gold/40 bg-gold/10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-gold">
      {children}
    </span>
  );
}

export function CtaButton({
  children,
  href = "#ofertas",
  className = "",
}: {
  children: ReactNode;
  href?: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`block w-full rounded-2xl bg-cta px-6 py-4 text-center font-display text-lg font-extrabold uppercase tracking-wide text-cta-foreground shadow-[0_6px_24px_-6px] shadow-cta/50 transition-transform active:scale-95 ${className}`}
    >
      {children}
    </a>
  );
}

export function Placeholder({
  ratio,
  label,
  className = "",
}: {
  ratio: string;
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-border bg-secondary/60 text-muted-foreground ${ratio} ${className}`}
    >
      <ImageIcon className="h-7 w-7 opacity-60" />
      <span className="text-xs font-semibold uppercase tracking-wider opacity-70">
        {label}
      </span>
    </div>
  );
}

export function SectionTitle({
  tag,
  title,
  sub,
}: {
  tag?: string;
  title: string;
  sub?: string;
}) {
  return (
    <div className="mb-6 flex flex-col items-center gap-3 text-center">
      {tag ? <Tag>{tag}</Tag> : null}
      <h2 className="text-balance font-display text-2xl font-extrabold leading-tight">
        {title}
      </h2>
      {sub ? (
        <p className="text-sm leading-relaxed text-muted-foreground">{sub}</p>
      ) : null}
    </div>
  );
}
