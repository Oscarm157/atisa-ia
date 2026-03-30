import { Slide } from "./slide";

export function Quote() {
  return (
    <Slide>
      <div className="max-w-4xl mx-auto text-center">
        <div className="relative rounded-2xl border border-card-border bg-card p-10 md:p-14 glow-red-subtle">
          <div className="text-primary/20 font-display text-8xl leading-none mb-4">
            &ldquo;
          </div>
          <blockquote className="text-2xl md:text-3xl lg:text-4xl font-display leading-snug text-foreground mb-8">
            Every company needs to spend an equivalent dollar amount, or more, on
            AI tokens to transform their business.
          </blockquote>
          <div className="flex items-center justify-center gap-3">
            <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
              <span className="text-sm font-bold text-muted">JH</span>
            </div>
            <div className="text-left">
              <p className="font-semibold">Jensen Huang</p>
              <p className="text-sm text-muted">CEO, NVIDIA — Marzo 2026</p>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
}
