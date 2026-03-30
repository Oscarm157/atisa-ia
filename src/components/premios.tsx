import { Slide } from "./slide";

const mainPositions = [
  {
    place: "1er",
    label: "Lugar",
    detail: "Gran premio",
    gradient: "from-yellow-500/20 to-yellow-600/5 border-yellow-500/30",
    text: "text-yellow-400",
    icon: "emoji_events",
    mega: true,
  },
  {
    place: "2do",
    label: "Lugar",
    detail: "Premio destacado",
    gradient: "from-gray-300/20 to-gray-400/5 border-gray-400/30",
    text: "text-gray-300",
    icon: "military_tech",
    mega: false,
  },
  {
    place: "3er",
    label: "Lugar",
    detail: "Premio reconocimiento",
    gradient: "from-amber-700/20 to-amber-800/5 border-amber-700/30",
    text: "text-amber-600",
    icon: "workspace_premium",
    mega: false,
  },
];

const secondaryPositions = [
  {
    place: "4to",
    label: "Lugar",
    icon: "star",
  },
  {
    place: "5to",
    label: "Lugar",
    icon: "star_half",
  },
];

const benefits = [
  { icon: "school", text: "Conocimiento práctico en IA aplicado a tu área" },
  { icon: "visibility", text: "Proyecto presentado ante la dirección de Atisa" },
  { icon: "trending_up", text: "Habilidades de IA: la competencia más demandada de 2026" },
  { icon: "handshake", text: "Los mejores proyectos se implementan en producción" },
];

export function Premios() {
  return (
    <Slide>
      <div className="flex items-center gap-3 mb-4">
        <span className="material-symbols-outlined text-primary" style={{ fontSize: 20 }}>
          emoji_events
        </span>
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          Premios
        </span>
      </div>

      <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl leading-tight mb-3 max-w-4xl">
        Top 5 proyectos premiados.{" "}
        <span className="text-muted">Todos los participantes ganan.</span>
      </h2>

      <p className="text-muted text-base leading-relaxed mb-6 max-w-3xl">
        Los premios son clave para el éxito del programa. Incentivos atractivos
        generan mayor participación, ideas más creativas y un nivel de esfuerzo
        que transforma un ejercicio interno en una competencia real. Sin premios
        que valgan la pena, el engagement cae y los resultados se quedan en lo básico.
      </p>

      {/* Top 3 principales */}
      <div className="grid grid-cols-3 gap-4 mb-3">
        {mainPositions.map((pos) => (
          <div
            key={pos.place}
            className={`rounded-2xl border bg-gradient-to-b p-5 text-center ${pos.gradient} ${pos.mega ? "glow-red-subtle ring-1 ring-yellow-500/20" : ""}`}
          >
            <span className={`material-symbols-outlined ${pos.text} mb-2`} style={{ fontSize: pos.mega ? 48 : 36 }}>
              {pos.icon}
            </span>
            <p className={`font-display font-extrabold ${pos.mega ? "text-3xl" : "text-2xl"} ${pos.text}`}>{pos.place}</p>
            <p className="text-xs text-muted mb-1">{pos.label}</p>
            <p className="text-xs text-muted/60">{pos.detail}</p>
          </div>
        ))}
      </div>

      {/* 4to y 5to secundarios */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        {secondaryPositions.map((pos) => (
          <div
            key={pos.place}
            className="rounded-xl border border-card-border bg-card/50 px-4 py-3 flex items-center gap-3"
          >
            <span className="material-symbols-outlined text-muted" style={{ fontSize: 20 }}>
              {pos.icon}
            </span>
            <div>
              <p className="font-display font-bold text-sm text-foreground">{pos.place} {pos.label}</p>
              <p className="text-xs text-muted">Mención honorífica + premio</p>
            </div>
          </div>
        ))}
      </div>

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
