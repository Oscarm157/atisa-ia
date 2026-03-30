import { Slide } from "./slide";

const phases = [
  {
    id: 1,
    label: "Kick-off",
    weeks: "Sem 1-2",
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
    label: "Ronda Dept.",
    weeks: "Sem 9-10",
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
    label: "Final",
    weeks: "Sem 11-12",
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
          calendar_month
        </span>
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          Calendario
        </span>
      </div>

      <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl leading-tight mb-6 max-w-4xl">
        12 semanas de ejecución.
      </h2>

      {/* Kanban columns */}
      <div className="grid grid-cols-4 gap-3 stagger-in">
        {phases.map((phase) => (
          <div
            key={phase.id}
            className={`rounded-2xl border ${phase.borderColor} ${phase.bgColor} p-4 flex flex-col`}
          >
            {/* Phase header with week blocks */}
            <div className="mb-3">
              <div className="flex items-center gap-2 mb-2">
                <span className={`font-display font-bold text-2xl ${phase.textColor}`}>
                  0{phase.id}
                </span>
                <div className="flex-1">
                  <p className={`font-display font-bold text-sm ${phase.textColor}`}>
                    {phase.label}
                  </p>
                  <p className="text-[10px] text-muted">{phase.weeks}</p>
                </div>
              </div>

              {/* Week blocks mini bar */}
              <div className="flex gap-0.5">
                {phase.weekBlocks.map((w) => (
                  <div key={w} className="flex-1 flex flex-col items-center gap-1">
                    <div
                      className={`w-full h-2 rounded-sm ${phase.color} opacity-70`}
                    />
                    <span className="text-[8px] text-muted/50 font-mono">{w}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Milestones for this phase */}
            <div className="space-y-2 border-t border-card-border pt-3">
              {phase.milestones.map((m) => (
                <div key={m.text} className="flex items-start gap-2">
                  <span
                    className={`material-symbols-outlined ${phase.textColor} shrink-0`}
                    style={{ fontSize: 16 }}
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
