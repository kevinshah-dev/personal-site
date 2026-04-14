import React from "react";

export const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.45, ease: "easeOut" as const },
};

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-6 flex items-center justify-between border-b border-black/10 pb-4 text-[11px] font-medium uppercase tracking-[0.24em] text-black/55">
      <span>{children}</span>
    </div>
  );
}

export function GridLines() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 hidden md:grid md:grid-cols-12">
      {Array.from({ length: 12 }).map((_, i) => (
        <div key={i} className="border-r border-white/10 last:border-r-0" />
      ))}
    </div>
  );
}

export function LightGridLines() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 hidden md:grid md:grid-cols-12">
      {Array.from({ length: 12 }).map((_, i) => (
        <div key={i} className="border-r border-black/6 last:border-r-0" />
      ))}
    </div>
  );
}

export function Panel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`border border-black/10 bg-[#f4f6f8] ${className}`}>
      {children}
    </div>
  );
}
