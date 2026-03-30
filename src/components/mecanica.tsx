import { Slide } from "./slide";

const phases = [
  {
    number: "01",
    title: "Kick-off & Capacitación",
    description: "Presentación del challenge a toda la empresa. Sesiones introductorias de herramientas de IA y cómo empezar a experimentar.",
    duration: "Semana 1–2",
    icon: "school",
    color: "border-blue-500/30 bg-blue-500/5",
  },
  {
    number: "02",
    title: "Experimentación",
    description: "Cada colaborador explora cómo aplicar IA en su área. Experimenta, prueba, documenta aprendizajes. Los tokens consumidos reflejan el esfuerzo.",
    duration: "Semana 3–8",
    icon: "science",
    color: "border-purple-500/30 bg-purple-500/5",
  },
  {
    number: "03",
    title: "Ronda Departamental",
    description: "Cada departamento selecciona los 1–2 mejores proyectos mediante evaluación entre pares. Los seleccionados pasan a la final.",
    duration: "Semana 9–10",
    icon: "groups",
    color: "border-amber-500/30 bg-amber-500/5",
  },
  {
    number: "04",
    title: "Final & Premiación",
    description: "Los proyectos finalistas presentan ante un panel evaluador. Se selecciona el Top 5 y se premian los mejores resultados.",
    duration: "Semana 11–12",
    icon: "emoji_events",
    color: "border-primary/30 bg-primary/5",
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
          La Mecánica
        </span>
      </div>

      <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl leading-tight mb-8 max-w-4xl">
        4 fases. 12 semanas.{" "}
        <span className="text-muted">Resultados reales.</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 stagger-in">
        {phases.map((phase) => (
          <div
            key={phase.number}
            className={`rounded-2xl border p-6 transition-all ${phase.color}`}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-card flex items-center justify-center border border-card-border">
                <span className="font-display font-bold text-xs text-primary">
                  {phase.number}
                </span>
              </div>
              <span className="material-symbols-outlined text-muted" style={{ fontSize: 18 }}>
                {phase.icon}
              </span>
              <span className="text-[10px] font-semibold text-primary uppercase tracking-wider ml-auto">
                {phase.duration}
              </span>
            </div>
            <h3 className="font-display font-bold text-lg mb-2">{phase.title}</h3>
            <p className="text-xs text-muted leading-relaxed">{phase.description}</p>
          </div>
        ))}
      </div>
    </Slide>
  );
}
