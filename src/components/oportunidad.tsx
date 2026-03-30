"use client";

import { Section } from "./section";

export function Oportunidad() {
  return (
    <Section id="oportunidad">
      {/* Section label */}
      <div className="flex items-center gap-3 mb-4">
        <span className="material-symbols-outlined text-primary" style={{ fontSize: 20 }}>
          trending_up
        </span>
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          La Oportunidad
        </span>
      </div>

      {/* Headline */}
      <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl leading-tight mb-6 max-w-4xl">
        No existen expertos en IA.{" "}
        <span className="text-muted">
          Todos estamos aprendiendo. Todos partimos del mismo lugar.
        </span>
      </h2>

      {/* Body */}
      <div className="max-w-3xl space-y-6 text-muted text-lg leading-relaxed mb-16">
        <p>
          Fuera de los principales laboratorios de investigacion — OpenAI,
          Anthropic, Google DeepMind — nadie tiene una ventaja real. Las
          herramientas llevan menos de 3 anos disponibles al publico. El
          conocimiento se construye experimentando, no leyendo.
        </p>
        <p>
          Esto significa una cosa:{" "}
          <span className="text-foreground font-medium">
            la ventana para adelantarnos esta abierta ahora.
          </span>{" "}
          Las empresas que estan integrando IA hoy no lo hacen porque saben
          mas, sino porque decidieron empezar antes.
        </p>
      </div>

      {/* Quote card */}
      <div className="relative rounded-2xl border border-card-border bg-card p-8 md:p-10 glow-red-subtle">
        <div className="absolute top-6 left-8 text-primary/20 font-display text-6xl leading-none">
          &ldquo;
        </div>
        <blockquote className="relative z-10 text-xl md:text-2xl font-display leading-relaxed text-foreground mb-4 pl-4">
          Every company needs to spend an equivalent dollar amount, or more, on
          AI tokens to transform their business.
        </blockquote>
        <div className="flex items-center gap-3 pl-4">
          <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
            <span className="text-xs font-bold text-muted">JH</span>
          </div>
          <div>
            <p className="text-sm font-semibold">Jensen Huang</p>
            <p className="text-xs text-muted">CEO, NVIDIA — Marzo 2026</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
