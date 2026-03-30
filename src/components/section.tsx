"use client";

import { useReveal } from "./use-reveal";

interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  noPadding?: boolean;
}

export function Section({ id, children, className = "", noPadding }: SectionProps) {
  const ref = useReveal();

  return (
    <section
      id={id}
      ref={ref}
      className={`reveal ${noPadding ? "" : "py-24 md:py-32 lg:py-40"} ${className}`}
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8">{children}</div>
    </section>
  );
}
