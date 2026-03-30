import { Slide } from "./slide";

const stats = [
  {
    value: "$4.4T",
    label: "Valor anual que la IA puede agregar a la economia global",
    source: "McKinsey Global Institute, 2024",
  },
  {
    value: "55%",
    label: "Mas rapido completan tareas los desarrolladores usando AI coding assistants",
    source: "GitHub Research, 2024",
  },
  {
    value: "40%",
    label: "De las horas laborales pueden ser impactadas por LLMs",
    source: "Accenture, Work Re-Imagined 2024",
  },
  {
    value: "25%",
    label: "Mas rapido y 40% mejor calidad en consultores usando IA",
    source: "Harvard Business School, 2024",
  },
];

export function Datos() {
  return (
    <Slide>
      <div className="flex items-center gap-3 mb-4">
        <span className="material-symbols-outlined text-primary" style={{ fontSize: 20 }}>
          bar_chart
        </span>
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Los Datos
        </span>
      </div>

      <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl leading-tight mb-4 max-w-4xl">
        No es hype.{" "}
        <span className="text-muted">Es evidencia.</span>
      </h2>

      <p className="text-muted text-base leading-relaxed mb-10 max-w-3xl">
        La IA ya esta impactando productividad, calidad y costos en empresas de
        todos los tamanos.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
        {stats.map((stat) => (
          <div
            key={stat.value}
            className="rounded-2xl border border-card-border bg-card p-6 md:p-8 hover:border-primary/30 transition-all"
          >
            <p className="font-display font-extrabold text-4xl md:text-5xl text-gradient mb-3">
              {stat.value}
            </p>
            <p className="text-sm text-foreground leading-relaxed mb-2">{stat.label}</p>
            <p className="text-[11px] text-muted/60 italic">{stat.source}</p>
          </div>
        ))}
      </div>
    </Slide>
  );
}
