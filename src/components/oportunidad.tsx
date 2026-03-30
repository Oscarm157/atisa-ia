import { Slide } from "./slide";

export function Oportunidad() {
  return (
    <Slide>
      <div className="flex items-center gap-3 mb-4">
        <span className="material-symbols-outlined text-primary" style={{ fontSize: 20 }}>
          trending_up
        </span>
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          La Oportunidad
        </span>
      </div>

      <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl leading-tight mb-8 max-w-4xl">
        No existen expertos en IA.{" "}
        <span className="text-muted">Todos partimos del mismo lugar.</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4 text-muted text-base leading-relaxed">
          <p>
            Fuera de los laboratorios de investigación (OpenAI, Anthropic, Google
            DeepMind), nadie tiene ventaja real. Las herramientas tienen menos de 3
            años disponibles al público.
          </p>
          <p className="text-foreground font-medium">
            Las empresas que están integrando IA hoy no saben más. Decidieron empezar antes.
          </p>
        </div>

        <div className="rounded-2xl border border-card-border bg-card p-6 glow-red-subtle">
          <div className="text-primary/20 font-display text-5xl leading-none mb-2">&ldquo;</div>
          <blockquote className="text-lg font-display leading-relaxed text-foreground mb-4">
            Every company needs to spend the equivalent of their IT budget, or more, on
            AI tokens to transform their business.
          </blockquote>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
              <span className="text-[10px] font-bold text-muted">JH</span>
            </div>
            <div>
              <p className="text-xs font-semibold">Jensen Huang</p>
              <p className="text-[10px] text-muted">CEO, NVIDIA. Marzo 2026</p>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
}
