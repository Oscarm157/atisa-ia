"use client";

import { Section } from "./section";
import { useReveal } from "./use-reveal";

const stats = [
  {
    value: "$4.4T",
    label: "Valor anual que la IA puede agregar a la economia global",
    source: "McKinsey Global Institute, 2024",
  },
  {
    value: "55%",
    label: "Mas rapido completan tareas los desarrolladores usando AI coding assistants",
    source: "GitHub Research, 2024",
  },
  {
    value: "40%",
    label: "De las horas laborales pueden ser impactadas por LLMs",
    source: "Accenture, Work Re-Imagined 2024",
  },
  {
    value: "25%",
    label: "Mas rapido y 40% mejor calidad en consultores usando IA",
    source: "Harvard Business School, 2024",
  },
];

const insights = [
  {
    icon: "psychology",
    title: "10,000 horas",
    description:
      "Malcolm Gladwell popularizo la regla: se necesitan 10,000 horas de practica deliberada para dominar una habilidad. Con IA, esas horas se acumulan experimentando — y cada token gastado es un paso.",
  },
  {
    icon: "labs",
    title: "Mentalidad de laboratorio",
    description:
      "Las empresas que lideran en IA no esperaron a tener un plan perfecto. Crearon espacios para experimentar, fallar rapido, y aprender. Cada experimento, exitoso o no, genera conocimiento.",
  },
  {
    icon: "rocket_launch",
    title: "Ventana de oportunidad",
    description:
      "El 72% de las empresas ya adoptaron IA en al menos una funcion de negocio en 2024, vs 55% en 2023. La adopcion se esta acelerando. Actuar ahora es critico.",
    source: "McKinsey State of AI, 2024",
  },
];

function StatCard({
  value,
  label,
  source,
}: {
  value: string;
  label: string;
  source: string;
}) {
  return (
    <div className="group relative rounded-2xl border border-card-border bg-card p-6 md:p-8 hover:border-primary/30 transition-all duration-300">
      <p className="font-display font-extrabold text-4xl md:text-5xl text-gradient mb-3">
        {value}
      </p>
      <p className="text-sm text-foreground leading-relaxed mb-3">{label}</p>
      <p className="text-[11px] text-muted/60 italic">{source}</p>
    </div>
  );
}

export function Datos() {
  const childRef = useReveal();

  return (
    <Section id="datos">
      {/* Section label */}
      <div className="flex items-center gap-3 mb-4">
        <span className="material-symbols-outlined text-primary" style={{ fontSize: 20 }}>
          bar_chart
        </span>
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Los Datos
        </span>
      </div>

      <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl leading-tight mb-6 max-w-4xl">
        Numeros que respaldan la urgencia.{" "}
        <span className="text-muted">No es hype, es evidencia.</span>
      </h2>

      <p className="text-muted text-lg leading-relaxed mb-12 max-w-3xl">
        La IA ya esta impactando productividad, calidad y costos en empresas de
        todos los tamanos. Estos son datos de fuentes verificadas.
      </p>

      {/* Stats grid */}
      <div
        ref={childRef}
        className="reveal-children grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-16"
      >
        {stats.map((stat) => (
          <StatCard key={stat.value} {...stat} />
        ))}
      </div>

      {/* Insights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {insights.map((insight) => (
          <div key={insight.title} className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <span
                className="material-symbols-outlined text-primary"
                style={{ fontSize: 20 }}
              >
                {insight.icon}
              </span>
            </div>
            <h3 className="font-display font-semibold text-lg">{insight.title}</h3>
            <p className="text-sm text-muted leading-relaxed">
              {insight.description}
            </p>
            {insight.source && (
              <p className="text-[11px] text-muted/60 italic">{insight.source}</p>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
