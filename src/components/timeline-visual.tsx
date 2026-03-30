import { Slide } from "./slide";

const phases = [
  {
    id: 1,
    label: "Kick-off & Capacitación",
    weeks: "Sem 1-2",
    description: "Presentación del challenge a toda la empresa. Sesiones introductorias de herramientas de IA y cómo empezar a experimentar.",
    color: "bg-blue-500",
    borderColor: "border-blue-500/30",
    bgColor: "bg-blue-500/5",
    textColor: "text-blue-400",
    weekBlocks: [1, 2],
    milestones: [
      { icon: "rocket_launch", text: "Lanzamiento oficial" },
      { icon: "school", text: "Capacitación en herramientas de IA" },
    ],
  },
  {
    id: 2,
    label: "Experimentación",
    weeks: "Sem 3-8",
    description: "Cada colaborador explora cómo aplicar IA en su área. Experimenta, prueba y documenta aprendizajes. Los tokens consumidos reflejan el esfuerzo real.",
    color: "bg-purple-500",
    borderColor: "border-purple-500/30",
    bgColor: "bg-purple-500/5",
    textColor: "text-purple-400",
    weekBlocks: [3, 4, 5, 6, 7, 8],
    milestones: [
      { icon: "science", text: "Inicio de experimentación libre" },
      { icon: "fact_check", text: "Check-in intermedio (Sem 6)" },
      { icon: "description", text: "Documentación de resultados" },
    ],
  },
  {
    id: 3,
    label: "Ronda Departamental",
    weeks: "Sem 9-10",
    description: "Cada departamento selecciona los 1-2 mejores proyectos mediante evaluación entre pares. Los seleccionados pasan a la final.",
    color: "bg-amber-500",
    borderColor: "border-amber-500/30",
    bgColor: "bg-amber-500/5",
    textColor: "text-amber-400",
    weekBlocks: [9, 10],
    milestones: [
      { icon: "groups", text: "Selección departamental" },
      { icon: "thumb_up", text: "Evaluación entre pares" },
    ],
  },
  {
    id: 4,
    label: "Final & Premiación",
    weeks: "Sem 11-12",
    description: "Los proyectos finalistas presentan ante un panel evaluador. Se selecciona el Top 5 y se premian los mejores resultados.",
    color: "bg-primary",
    borderColor: "border-primary/30",
    bgColor: "bg-primary/5",
    textColor: "text-primary",
    weekBlocks: [11, 12],
    milestones: [
      { icon: "podium", text: "Presentaciones finales" },
      { icon: "emoji_events", text: "Premiación Top 5" },
    ],
  },
];

export function TimelineVisual() {
  return (
    <Slide>
      <div className="flex items-center gap-3 mb-4">
        <span className="material-symbols-outlined text-primary" style={{ fontSize: 20 }}>
          route
        </span>
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          La Mecánica
        </span>
      </div>

      <h2 className="font-display font-bold text-2xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 max-w-4xl">
        4 fases. 12 semanas de ejecución.
      </h2>

      {/* Timeline bar - proportional widths */}
      <div className="rounded-2xl border border-card-border bg-card p-3 sm:p-5 mb-5">
        <div className="flex gap-0.5 sm:gap-1">
          {phases.map((phase) =>
            phase.weekBlocks.map((w) => (
              <div key={w} className="flex-1 flex flex-col items-center gap-1.5">
                <div
                  className={`w-full h-5 sm:h-7 rounded-md ${phase.color} opacity-80 hover:opacity-100 transition-opacity`}
                />
                <span className="text-[11px] text-muted font-mono hidden sm:block">{w}</span>
              </div>
            ))
          )}
        </div>
        <p className="text-xs text-muted/50 mt-1.5 text-center">Semana</p>
      </div>

      {/* Phase details - proportional grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_6fr_2fr_2fr] gap-3 stagger-in">
        {phases.map((phase) => (
          <div
            key={phase.id}
            className={`rounded-2xl border ${phase.borderColor} ${phase.bgColor} p-4 flex flex-col`}
          >
            {/* Phase header */}
            <div className="flex items-center gap-2 mb-2">
              <span className={`font-display font-bold text-xl ${phase.textColor}`}>
                0{phase.id}
              </span>
              <div className="flex-1">
                <p className={`font-display font-bold text-xs ${phase.textColor}`}>
                  {phase.label}
                </p>
                <p className="text-xs text-muted">{phase.weeks}</p>
              </div>
            </div>

            {/* Description */}
            <p className="text-xs text-muted leading-relaxed mb-3">
              {phase.description}
            </p>

            {/* Milestones */}
            <div className="space-y-2 border-t border-card-border pt-3 mt-auto">
              {phase.milestones.map((m) => (
                <div key={m.text} className="flex items-start gap-2">
                  <span
                    className={`material-symbols-outlined ${phase.textColor} shrink-0`}
                    style={{ fontSize: 15 }}
                  >
                    {m.icon}
                  </span>
                  <p className="text-xs text-muted leading-snug">{m.text}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Slide>
  );
}
