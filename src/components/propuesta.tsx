"use client";

import { Section } from "./section";
import { useReveal } from "./use-reveal";

const pillars = [
  {
    icon: "timer",
    title: "Tiempo",
    description:
      "Automatizar tareas repetitivas, acelerar procesos que hoy toman horas o dias.",
    example: "Reportes que toman 4 horas → 20 minutos con IA",
    color: "text-red-400",
  },
  {
    icon: "verified",
    title: "Calidad",
    description:
      "Mejorar la precision y consistencia de entregables usando IA como asistente.",
    example: "Revision de documentos con zero errores tipicos",
    color: "text-red-400",
  },
  {
    icon: "savings",
    title: "Costo",
    description:
      "Reducir costos operativos eliminando pasos innecesarios o recursos subutilizados.",
    example: "Reduccion de retrabajo y procesos manuales",
    color: "text-red-400",
  },
];

export function Propuesta() {
  const ref = useReveal();

  return (
    <Section id="propuesta">
      {/* Section label */}
      <div className="flex items-center gap-3 mb-4">
        <span className="material-symbols-outlined text-primary" style={{ fontSize: 20 }}>
          lightbulb
        </span>
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          La Propuesta
        </span>
      </div>

      <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl leading-tight mb-6 max-w-4xl">
        Atisa AI Challenge.{" "}
        <span className="text-muted">
          Cada area, un proyecto. Cada proyecto, un impacto medible.
        </span>
      </h2>

      <p className="text-muted text-lg leading-relaxed mb-16 max-w-3xl">
        Un programa donde cada colaborador propone e implementa un proyecto que use
        Inteligencia Artificial para mejorar algun proceso de su area. El objetivo
        es simple: demostrar impacto real en{" "}
        <span className="text-foreground font-medium">tiempo, calidad o costo</span>.
      </p>

      {/* Three pillars */}
      <div ref={ref} className="reveal-children grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {pillars.map((pillar) => (
          <div
            key={pillar.title}
            className="group relative rounded-2xl border border-card-border bg-card p-8 hover:border-primary/30 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
              <span
                className="material-symbols-outlined text-primary"
                style={{ fontSize: 24 }}
              >
                {pillar.icon}
              </span>
            </div>
            <h3 className="font-display font-bold text-2xl mb-3">{pillar.title}</h3>
            <p className="text-sm text-muted leading-relaxed mb-4">
              {pillar.description}
            </p>
            <div className="px-3 py-2 rounded-lg bg-accent text-xs text-muted">
              <span className="text-primary font-medium">Ej: </span>
              {pillar.example}
            </div>
          </div>
        ))}
      </div>

      {/* Key message */}
      <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8 md:p-10 text-center">
        <p className="font-display font-semibold text-xl md:text-2xl text-foreground leading-relaxed">
          No necesitas ser experto en IA. Necesitas conocer tu proceso
          <br className="hidden md:block" /> y tener la iniciativa de experimentar.
        </p>
      </div>
    </Section>
  );
}
