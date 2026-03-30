import { Slide } from "./slide";

const phases = [
  {
    number: "01",
    title: "Kick-off & Capacitacion",
    description: "Presentacion del challenge. Sesiones introductorias de herramientas de IA.",
    duration: "Semana 1-2",
    icon: "school",
  },
  {
    number: "02",
    title: "Experimentacion",
    description: "Cada colaborador explora como aplicar IA en su area. Prueba, falla, aprende.",
    duration: "Semana 3-8",
    icon: "science",
  },
  {
    number: "03",
    title: "Ronda Departamental",
    description: "Cada departamento selecciona los 1-2 mejores proyectos para la final.",
    duration: "Semana 9-10",
    icon: "groups",
  },
  {
    number: "04",
    title: "Final & Premiacion",
    description: "Proyectos finalistas presentan ante panel evaluador. Se premia el Top 5.",
    duration: "Semana 11-12",
    icon: "emoji_events",
  },
];

export function Mecanica() {
  return (
    <Slide>
      <div className="flex items-center gap-3 mb-4">
        <span className="material-symbols-outlined text-primary" style={{ fontSize: 20 }}>
          route
        </span>
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          La Mecanica
        </span>
      </div>

      <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl leading-tight mb-10 max-w-4xl">
        4 fases. 12 semanas.{" "}
        <span className="text-muted">Resultados reales.</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {phases.map((phase) => (
          <div
            key={phase.number}
            className="flex gap-4 items-start rounded-2xl border border-card-border bg-card p-6 hover:border-primary/20 transition-all"
          >
            <div className="w-10 h-10 shrink-0 rounded-full border-2 border-primary/30 bg-primary/5 flex items-center justify-center">
              <span className="font-display font-bold text-xs text-primary">
                {phase.number}
              </span>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="material-symbols-outlined text-primary" style={{ fontSize: 16 }}>
                  {phase.icon}
                </span>
                <span className="text-[10px] font-semibold text-primary uppercase tracking-wider">
                  {phase.duration}
                </span>
              </div>
              <h3 className="font-display font-bold text-base mb-1">{phase.title}</h3>
              <p className="text-xs text-muted leading-relaxed">{phase.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Slide>
  );
}
