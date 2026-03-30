import { Slide } from "./slide";

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

export function Mecanica2() {
  return (
    <Slide>
      <div className="flex items-center gap-3 mb-4">
        <span className="material-symbols-outlined text-primary" style={{ fontSize: 20 }}>
          token
        </span>
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Indicadores & Evaluacion
        </span>
      </div>

      {/* Token callout */}
      <div className="rounded-2xl border border-card-border bg-card p-6 md:p-8 mb-10">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center">
            <span className="material-symbols-outlined text-primary" style={{ fontSize: 22 }}>
              token
            </span>
          </div>
          <div>
            <h3 className="font-display font-bold text-xl mb-2">
              Tokens como indicador
            </h3>
            <p className="text-muted text-sm leading-relaxed">
              El consumo de tokens sera el indicador principal de participacion.
              No se trata de gastar por gastar — se trata de experimentar con
              proposito. Asi como un laboratorio mide sus horas de investigacion,
              nosotros medimos nuestras horas de IA.
            </p>
          </div>
        </div>
      </div>

      {/* Criteria */}
      <h3 className="font-display font-bold text-xl mb-6">Criterios de evaluacion</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {criteria.map((c) => (
          <div
            key={c.label}
            className="flex items-start gap-3 rounded-xl border border-card-border bg-card p-4 hover:border-primary/20 transition-all"
          >
            <div className="w-9 h-9 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary" style={{ fontSize: 18 }}>
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
    </Slide>
  );
}
