"use client";

import { Section } from "./section";
import { useReveal } from "./use-reveal";

const positions = [
  {
    place: "1er",
    label: "Lugar",
    color: "from-yellow-500/20 to-yellow-600/5 border-yellow-500/30",
    textColor: "text-yellow-400",
    icon: "emoji_events",
    description: "Premio principal + reconocimiento ejecutivo",
  },
  {
    place: "2do",
    label: "Lugar",
    color: "from-gray-300/20 to-gray-400/5 border-gray-400/30",
    textColor: "text-gray-300",
    icon: "military_tech",
    description: "Segundo premio + reconocimiento",
  },
  {
    place: "3er",
    label: "Lugar",
    color: "from-amber-700/20 to-amber-800/5 border-amber-700/30",
    textColor: "text-amber-600",
    icon: "workspace_premium",
    description: "Tercer premio + reconocimiento",
  },
];

const benefits = [
  {
    icon: "school",
    title: "Aprendizaje real",
    description: "Conocimiento practico en IA aplicado a tu area",
  },
  {
    icon: "visibility",
    title: "Visibilidad",
    description: "Tu proyecto presentado ante la direccion de Atisa",
  },
  {
    icon: "trending_up",
    title: "Crecimiento profesional",
    description: "Habilidades de IA en tu CV — la competencia mas demandada de 2026",
  },
  {
    icon: "handshake",
    title: "Impacto directo",
    description: "Los mejores proyectos se implementan en produccion",
  },
];

export function Premios() {
  const ref = useReveal();
  const benefitsRef = useReveal();

  return (
    <Section id="premios">
      {/* Section label */}
      <div className="flex items-center gap-3 mb-4">
        <span className="material-symbols-outlined text-primary" style={{ fontSize: 20 }}>
          emoji_events
        </span>
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Premios & Reconocimiento
        </span>
      </div>

      <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl leading-tight mb-6 max-w-4xl">
        Competencia con recompensa real.{" "}
        <span className="text-muted">Top 5 proyectos premiados.</span>
      </h2>

      <p className="text-muted text-lg leading-relaxed mb-16 max-w-3xl">
        Los mejores proyectos no solo ganan premios — ganan visibilidad ante la
        direccion y la oportunidad de ver su solucion implementada en la empresa.
      </p>

      {/* Podium */}
      <div ref={ref} className="reveal-children grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {positions.map((pos) => (
          <div
            key={pos.place}
            className={`relative rounded-2xl border bg-gradient-to-b p-8 text-center ${pos.color}`}
          >
            <span
              className={`material-symbols-outlined ${pos.textColor} mb-4`}
              style={{ fontSize: 48 }}
            >
              {pos.icon}
            </span>
            <p className={`font-display font-extrabold text-3xl ${pos.textColor}`}>
              {pos.place}
            </p>
            <p className="text-sm text-muted mb-3">{pos.label}</p>
            <p className="text-xs text-muted/80">{pos.description}</p>
          </div>
        ))}
      </div>

      {/* Additional benefits for Top 5 */}
      <div className="rounded-2xl border border-card-border bg-card p-8 md:p-10 mb-12">
        <div className="text-center mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-2">
            Top 4 & 5
          </p>
          <p className="text-muted">
            Reconocimiento especial + premios de participacion destacada
          </p>
        </div>

        <div className="h-px bg-card-border mb-8" />

        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted mb-6 text-center">
          Todos los participantes ganan
        </p>

        <div
          ref={benefitsRef}
          className="reveal-children grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {benefits.map((b) => (
            <div key={b.title} className="flex items-start gap-3">
              <span
                className="material-symbols-outlined text-primary shrink-0"
                style={{ fontSize: 20 }}
              >
                {b.icon}
              </span>
              <div>
                <h4 className="font-semibold text-sm mb-1">{b.title}</h4>
                <p className="text-xs text-muted leading-relaxed">{b.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
