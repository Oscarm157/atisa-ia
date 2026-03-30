import { Slide } from "./slide";

const positions = [
  {
    place: "1er",
    label: "Lugar",
    gradient: "from-yellow-500/20 to-yellow-600/5 border-yellow-500/30",
    text: "text-yellow-400",
    icon: "emoji_events",
  },
  {
    place: "2do",
    label: "Lugar",
    gradient: "from-gray-300/20 to-gray-400/5 border-gray-400/30",
    text: "text-gray-300",
    icon: "military_tech",
  },
  {
    place: "3er",
    label: "Lugar",
    gradient: "from-amber-700/20 to-amber-800/5 border-amber-700/30",
    text: "text-amber-600",
    icon: "workspace_premium",
  },
];

const benefits = [
  { icon: "school", text: "Conocimiento practico en IA aplicado a tu area" },
  { icon: "visibility", text: "Tu proyecto presentado ante la direccion de Atisa" },
  { icon: "trending_up", text: "Habilidades de IA en tu CV — la skill mas demandada de 2026" },
  { icon: "handshake", text: "Los mejores proyectos se implementan en produccion" },
];

export function Premios() {
  return (
    <Slide>
      <div className="flex items-center gap-3 mb-4">
        <span className="material-symbols-outlined text-primary" style={{ fontSize: 20 }}>
          emoji_events
        </span>
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Premios
        </span>
      </div>

      <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl leading-tight mb-10 max-w-4xl">
        Top 5 proyectos premiados.{" "}
        <span className="text-muted">Todos los participantes ganan.</span>
      </h2>

      {/* Podium */}
      <div className="grid grid-cols-3 gap-4 mb-10">
        {positions.map((pos) => (
          <div
            key={pos.place}
            className={`rounded-2xl border bg-gradient-to-b p-6 text-center ${pos.gradient}`}
          >
            <span className={`material-symbols-outlined ${pos.text} mb-2`} style={{ fontSize: 40 }}>
              {pos.icon}
            </span>
            <p className={`font-display font-extrabold text-2xl ${pos.text}`}>{pos.place}</p>
            <p className="text-xs text-muted">{pos.label}</p>
          </div>
        ))}
      </div>

      {/* Benefits for everyone */}
      <div className="rounded-2xl border border-card-border bg-card p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted mb-4">
          Todos los participantes ganan
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {benefits.map((b) => (
            <div key={b.icon} className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary shrink-0" style={{ fontSize: 18 }}>
                {b.icon}
              </span>
              <p className="text-sm text-muted leading-relaxed">{b.text}</p>
            </div>
          ))}
        </div>
      </div>
    </Slide>
  );
}
