"use client";

import { useReveal } from "./use-reveal";

export function Hero() {
  const ref = useReveal();

  return (
    <section
      id="inicio"
      ref={ref}
      className="reveal relative min-h-screen flex items-center justify-center grid-bg overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 sm:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-card-border bg-card/50 backdrop-blur-sm mb-8">
          <span className="w-2 h-2 rounded-full bg-primary pulse-dot" />
          <span className="text-xs font-medium text-muted uppercase tracking-wider">
            Iniciativa 2026
          </span>
        </div>

        {/* Title */}
        <h1 className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95] mb-6">
          <span className="block text-foreground">Atisa</span>
          <span className="block text-gradient">AI Challenge</span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-muted leading-relaxed mb-12">
          Una iniciativa para integrar Inteligencia Artificial en cada area de la
          empresa a traves de experimentacion con proposito.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#oportunidad"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary-light text-white font-semibold rounded-full transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
          >
            Ver la propuesta
            <span className="material-symbols-outlined" style={{ fontSize: 20 }}>
              arrow_downward
            </span>
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.3em] text-muted/50">
            Scroll
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-muted/30 to-transparent" />
        </div>
      </div>
    </section>
  );
}
