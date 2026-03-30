import { Slide } from "./slide";

const insights = [
  {
    icon: "psychology",
    title: "10,000 horas",
    description:
      "Malcolm Gladwell popularizo la regla: se necesitan 10,000 horas de practica deliberada para dominar una habilidad. Con IA, esas horas se acumulan experimentando — y cada token gastado es un paso.",
  },
  {
    icon: "labs",
    title: "Mentalidad de laboratorio",
    description:
      "Las empresas que lideran en IA no esperaron a tener un plan perfecto. Crearon espacios para experimentar, fallar rapido, y aprender. Cada experimento, exitoso o no, genera conocimiento.",
  },
  {
    icon: "rocket_launch",
    title: "Ventana de oportunidad",
    description:
      "El 72% de las empresas ya adoptaron IA en al menos una funcion de negocio en 2024, vs 55% en 2023. La adopcion se esta acelerando.",
    source: "McKinsey State of AI, 2024",
  },
];

export function Datos2() {
  return (
    <Slide>
      <div className="flex items-center gap-3 mb-4">
        <span className="material-symbols-outlined text-primary" style={{ fontSize: 20 }}>
          labs
        </span>
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          El Enfoque
        </span>
      </div>

      <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl leading-tight mb-12 max-w-4xl">
        Experimentar con proposito.{" "}
        <span className="text-muted">Asi se construye expertise.</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {insights.map((insight) => (
          <div key={insight.title} className="space-y-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <span
                className="material-symbols-outlined text-primary"
                style={{ fontSize: 24 }}
              >
                {insight.icon}
              </span>
            </div>
            <h3 className="font-display font-bold text-xl">{insight.title}</h3>
            <p className="text-sm text-muted leading-relaxed">{insight.description}</p>
            {insight.source && (
              <p className="text-[11px] text-muted/60 italic">{insight.source}</p>
            )}
          </div>
        ))}
      </div>
    </Slide>
  );
}
