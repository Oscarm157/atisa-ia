"use client";

import { Section } from "./section";
import { useReveal } from "./use-reveal";

const phases = [
  {
    number: "01",
    title: "Kick-off & Capacitacion",
    description:
      "Presentacion del challenge a toda la empresa. Sesiones introductorias de herramientas de IA disponibles y como empezar a experimentar.",
    duration: "Semana 1-2",
    icon: "school",
  },
  {
    number: "02",
    title: "Experimentacion",
    description:
      "Cada colaborador explora como aplicar IA en su area. Experimenta, prueba, falla, aprende. Los tokens consumidos son el indicador de que estas intentando.",
    duration: "Semana 3-8",
    icon: "science",
  },
  {
    number: "03",
    title: "Ronda Departamental",
    description:
      "Cada departamento selecciona los 1-2 mejores proyectos para pasar a la final. Evaluacion interna entre pares.",
    duration: "Semana 9-10",
    icon: "groups",
  },
  {
    number: "04",
    title: "Final & Premiacion",
    description:
      "Los proyectos finalistas presentan ante un panel evaluador. Se selecciona el Top 5 y se premian los mejores resultados.",
    duration: "Semana 11-12",
    icon: "emoji_events",
  },
];

const criteria = [
  {
    icon: "speed",
    label: "Impacto medible",
    description: "Ahorro en tiempo, mejora en calidad, o reduccion de costo cuantificable",
    weight: "40%",
  },
  {
    icon: "build",
    label: "Implementacion",
    description: "Que tan viable es aplicarlo en el dia a dia del area",
    weight: "25%",
  },
  {
    icon: "auto_awesome",
    label: "Innovacion",
    description: "Creatividad en el uso de IA para resolver el problema",
    weight: "20%",
  },
  {
    icon: "share",
    label: "Escalabilidad",
    description: "Potencial para replicarse en otras areas de la empresa",
    weight: "15%",
  },
];

export function Mecanica() {
  const phasesRef = useReveal();
  const criteriaRef = useReveal();

  return (
    <Section id="mecanica">
      {/* Section label */}
      <div className="flex items-center gap-3 mb-4">
        <span className="material-symbols-outlined text-primary" style={{ fontSize: 20 }}>
          route
        </span>
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          La Mecanica
        </span>
      </div>

      <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl leading-tight mb-6 max-w-4xl">
        Como funciona.{" "}
        <span className="text-muted">4 fases, 12 semanas, resultados reales.</span>
      </h2>

      <p className="text-muted text-lg leading-relaxed mb-16 max-w-3xl">
        El challenge se estructura en fases claras. Desde la capacitacion inicial hasta
        la presentacion final, cada paso esta disenado para maximizar el aprendizaje
        y el impacto.
      </p>

      {/* Timeline */}
      <div ref={phasesRef} className="reveal-children relative space-y-6 mb-20">
        {/* Vertical line */}
        <div className="absolute left-[23px] top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-card-border to-transparent hidden md:block" />

        {phases.map((phase) => (
          <div key={phase.number} className="group relative flex gap-6 items-start">
            {/* Number circle */}
            <div className="relative z-10 w-12 h-12 shrink-0 rounded-full border-2 border-card-border bg-card flex items-center justify-center group-hover:border-primary/50 transition-colors">
              <span className="font-display font-bold text-sm text-primary">
                {phase.number}
              </span>
            </div>

            {/* Content */}
            <div className="flex-1 rounded-2xl border border-card-border bg-card p-6 md:p-8 group-hover:border-primary/20 transition-all">
              <div className="flex items-center gap-3 mb-3">
                <span
                  className="material-symbols-outlined text-primary"
                  style={{ fontSize: 20 }}
                >
                  {phase.icon}
                </span>
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                  {phase.duration}
                </span>
              </div>
              <h3 className="font-display font-bold text-xl mb-2">{phase.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{phase.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Token indicator callout */}
      <div className="rounded-2xl border border-card-border bg-card p-8 md:p-10 mb-16">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center">
            <span className="material-symbols-outlined text-primary" style={{ fontSize: 24 }}>
              token
            </span>
          </div>
          <div>
            <h3 className="font-display font-bold text-xl mb-2">
              Tokens como indicador
            </h3>
            <p className="text-muted leading-relaxed">
              El consumo de tokens de IA sera el indicador principal de participacion.
              No se trata de gastar por gastar — se trata de experimentar con
              proposito. Asi como un laboratorio mide sus horas de investigacion,
              nosotros medimos nuestras horas de IA. Cada token representa un
              experimento, una pregunta, un intento de mejorar algo.
            </p>
          </div>
        </div>
      </div>

      {/* Evaluation criteria */}
      <h3 className="font-display font-bold text-2xl mb-8">Criterios de evaluacion</h3>

      <div ref={criteriaRef} className="reveal-children grid grid-cols-1 sm:grid-cols-2 gap-4">
        {criteria.map((c) => (
          <div
            key={c.label}
            className="flex items-start gap-4 rounded-xl border border-card-border bg-card p-5 hover:border-primary/20 transition-all"
          >
            <div className="w-10 h-10 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center">
              <span
                className="material-symbols-outlined text-primary"
                style={{ fontSize: 18 }}
              >
                {c.icon}
              </span>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <h4 className="font-semibold text-sm">{c.label}</h4>
                <span className="text-xs font-bold text-primary">{c.weight}</span>
              </div>
              <p className="text-xs text-muted leading-relaxed">{c.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
