import { Slide } from "./slide";

const pillars = [
  {
    icon: "timer",
    title: "Tiempo",
    description:
      "Automatizar tareas repetitivas, acelerar procesos que hoy toman horas o dias.",
    example: "Reportes que toman 4 horas → 20 minutos con IA",
  },
  {
    icon: "verified",
    title: "Calidad",
    description:
      "Mejorar la precision y consistencia de entregables usando IA como asistente.",
    example: "Revision de documentos con zero errores tipicos",
  },
  {
    icon: "savings",
    title: "Costo",
    description:
      "Reducir costos operativos eliminando pasos innecesarios o recursos subutilizados.",
    example: "Reduccion de retrabajo y procesos manuales",
  },
];

export function Propuesta() {
  return (
    <Slide>
      <div className="flex items-center gap-3 mb-4">
        <span className="material-symbols-outlined text-primary" style={{ fontSize: 20 }}>
          lightbulb
        </span>
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          La Propuesta
        </span>
      </div>

      <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl leading-tight mb-4 max-w-4xl">
        Atisa AI Challenge.{" "}
        <span className="text-muted">
          Cada area, un proyecto. Cada proyecto, un impacto medible.
        </span>
      </h2>

      <p className="text-muted text-base leading-relaxed mb-10 max-w-3xl">
        Cada colaborador propone e implementa un proyecto que use IA para mejorar
        algun proceso de su area. El objetivo:{" "}
        <span className="text-foreground font-medium">impacto real en tiempo, calidad o costo</span>.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {pillars.map((pillar) => (
          <div
            key={pillar.title}
            className="rounded-2xl border border-card-border bg-card p-6 hover:border-primary/30 transition-all"
          >
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-primary" style={{ fontSize: 22 }}>
                {pillar.icon}
              </span>
            </div>
            <h3 className="font-display font-bold text-xl mb-2">{pillar.title}</h3>
            <p className="text-sm text-muted leading-relaxed mb-3">{pillar.description}</p>
            <div className="px-3 py-2 rounded-lg bg-accent text-xs text-muted">
              <span className="text-primary font-medium">Ej: </span>
              {pillar.example}
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-primary/20 bg-primary/5 px-6 py-4 text-center">
        <p className="font-display font-semibold text-lg text-foreground">
          No necesitas ser experto en IA. Necesitas conocer tu proceso y tener la iniciativa de experimentar.
        </p>
      </div>
    </Slide>
  );
}
