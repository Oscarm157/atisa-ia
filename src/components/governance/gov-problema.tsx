import { Slide } from "../slide";

const cards = [
  {
    icon: "trending_up",
    title: "Uso creciente",
    description: "La IA ya está entrando al trabajo diario.",
  },
  {
    icon: "visibility_off",
    title: "Baja visibilidad",
    description: "No sabemos con claridad quién la usa, cuánto cuesta y qué valor genera.",
  },
  {
    icon: "route",
    title: "Ruta propuesta",
    description: "Fase 1: adopción. Fase 2: gobierno, tokens y casos de uso.",
  },
];

export function GovProblema() {
  return (
    <Slide>
      <div className="flex items-center gap-3 mb-4">
        <span className="material-symbols-outlined text-primary" style={{ fontSize: 20 }}>
          warning
        </span>
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          La Situación
        </span>
      </div>

      <h2 className="font-display font-bold text-2xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-8 max-w-4xl">
        La IA ya está entrando al trabajo diario.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8 stagger-in">
        {cards.map((card) => (
          <div
            key={card.title}
            className="rounded-2xl border border-card-border bg-card p-6 hover:border-primary/30 transition-all"
          >
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-primary" style={{ fontSize: 22 }}>
                {card.icon}
              </span>
            </div>
            <h3 className="font-display font-bold text-lg mb-2">{card.title}</h3>
            <p className="text-sm text-muted leading-relaxed">{card.description}</p>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-primary/30 bg-primary/5 px-4 sm:px-8 py-4 sm:py-6 text-center glow-red-subtle">
        <p className="font-display font-bold text-lg sm:text-xl md:text-2xl text-foreground leading-snug">
          Mensaje clave:{" "}
          <span className="text-gradient">primero visibilidad rápida, luego gobierno formal.</span>
        </p>
      </div>
    </Slide>
  );
}
