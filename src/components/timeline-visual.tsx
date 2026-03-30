import { Slide } from "./slide";

const weeks = [
  { week: 1, phase: 1 }, { week: 2, phase: 1 },
  { week: 3, phase: 2 }, { week: 4, phase: 2 }, { week: 5, phase: 2 },
  { week: 6, phase: 2 }, { week: 7, phase: 2 }, { week: 8, phase: 2 },
  { week: 9, phase: 3 }, { week: 10, phase: 3 },
  { week: 11, phase: 4 }, { week: 12, phase: 4 },
];

const phaseColors: Record<number, string> = {
  1: "bg-blue-500",
  2: "bg-purple-500",
  3: "bg-amber-500",
  4: "bg-primary",
};

const phaseLabels: Record<number, string> = {
  1: "Kick-off",
  2: "Experimentación",
  3: "Ronda Dept.",
  4: "Final",
};

const milestones = [
  { week: 1, label: "Lanzamiento oficial", icon: "rocket_launch" },
  { week: 3, label: "Inicio de experimentación", icon: "science" },
  { week: 6, label: "Check-in intermedio", icon: "fact_check" },
  { week: 9, label: "Selección departamental", icon: "groups" },
  { week: 11, label: "Presentaciones finales", icon: "podium" },
  { week: 12, label: "Premiación", icon: "emoji_events" },
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

      <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl leading-tight mb-8 max-w-4xl">
        12 semanas de ejecución.
      </h2>

      {/* Phase legend */}
      <div className="flex flex-wrap gap-4 mb-6">
        {Object.entries(phaseLabels).map(([phase, label]) => (
          <div key={phase} className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded-sm ${phaseColors[Number(phase)]}`} />
            <span className="text-xs text-muted">{label}</span>
          </div>
        ))}
      </div>

      {/* Timeline bar */}
      <div className="rounded-2xl border border-card-border bg-card p-6 mb-6">
        <div className="flex gap-1">
          {weeks.map((w) => (
            <div key={w.week} className="flex-1 flex flex-col items-center gap-2">
              <div
                className={`w-full h-8 rounded-md ${phaseColors[w.phase]} opacity-80 hover:opacity-100 transition-opacity`}
              />
              <span className="text-[9px] text-muted font-mono">{w.week}</span>
            </div>
          ))}
        </div>
        <p className="text-[10px] text-muted/50 mt-2 text-center">Semana</p>
      </div>

      {/* Milestones */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 stagger-in">
        {milestones.map((m) => (
          <div key={m.week} className="flex items-center gap-3 rounded-lg bg-accent/50 border border-card-border px-3 py-2.5">
            <span className="material-symbols-outlined text-primary" style={{ fontSize: 18 }}>
              {m.icon}
            </span>
            <div>
              <p className="text-xs font-semibold">{m.label}</p>
              <p className="text-[10px] text-muted">Semana {m.week}</p>
            </div>
          </div>
        ))}
      </div>
    </Slide>
  );
}
