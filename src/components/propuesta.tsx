import { Slide } from "./slide";

const pillars = [
  {
    icon: "timer",
    title: "Tiempo",
    description: "Automatizar tareas repetitivas, acelerar procesos.",
    example: "Reportes de 4hrs → 20min con IA",
  },
  {
    icon: "verified",
    title: "Calidad",
    description: "Mejorar precisión y consistencia de entregables.",
    example: "Revisión de documentos sin errores típicos",
  },
  {
    icon: "savings",
    title: "Costo",
    description: "Reducir costos eliminando pasos innecesarios.",
    example: "Reducción de retrabajo y procesos manuales",
  },
];

export function Propuesta() {
  return (
    <Slide>
      <div className="flex items-center gap-3 mb-4">
        <span className="material-symbols-outlined text-primary" style={{ fontSize: 20 }}>
          lightbulb
        </span>
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          La Propuesta
        </span>
      </div>

      <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl leading-tight mb-4 max-w-4xl">
        Atisa AI Challenge.
      </h2>

      <p className="text-muted text-base leading-relaxed mb-3 max-w-3xl">
        Una competencia interna de 12 semanas donde los ~250 colaboradores
        administrativos de Atisa compiten usando IA para resolver retos reales
        de su área. Cada participante elige un problema, lo ataca con herramientas
        de IA y presenta resultados medibles.
      </p>
      <p className="text-muted text-base leading-relaxed mb-8 max-w-3xl">
        Los mejores proyectos se premian, los ganadores se reconocen frente a toda
        la empresa, y las soluciones con{" "}
        <span className="text-foreground font-medium">impacto medible en tiempo, calidad o costo</span>{" "}
        se implementan en producción. No es un curso, es una competencia real con premios reales.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
        {pillars.map((p) => (
          <div
            key={p.title}
            className="rounded-2xl border border-card-border bg-card p-6 hover:border-primary/30 transition-all"
          >
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-primary" style={{ fontSize: 22 }}>
                {p.icon}
              </span>
            </div>
            <h3 className="font-display font-bold text-xl mb-2">{p.title}</h3>
            <p className="text-sm text-muted leading-relaxed mb-3">{p.description}</p>
            <div className="px-3 py-2 rounded-lg bg-accent text-xs text-muted">
              <span className="text-primary font-medium">Ej: </span>{p.example}
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-primary/20 bg-primary/5 px-6 py-4 text-center">
        <p className="font-display font-semibold text-lg text-foreground">
          No necesitas ser experto en IA. Necesitas conocer tu proceso y experimentar.
        </p>
      </div>
    </Slide>
  );
}
