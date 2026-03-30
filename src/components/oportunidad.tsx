import { Slide } from "./slide";

export function Oportunidad() {
  return (
    <Slide>
      <div className="flex items-center gap-3 mb-4">
        <span className="material-symbols-outlined text-primary" style={{ fontSize: 20 }}>
          trending_up
        </span>
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          La Oportunidad
        </span>
      </div>

      <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl leading-tight mb-8 max-w-4xl">
        No existen expertos en IA.{" "}
        <span className="text-muted">
          Todos estamos aprendiendo. Todos partimos del mismo lugar.
        </span>
      </h2>

      <div className="max-w-3xl space-y-6 text-muted text-lg leading-relaxed">
        <p>
          Fuera de los principales laboratorios de investigacion — OpenAI,
          Anthropic, Google DeepMind — nadie tiene una ventaja real. Las
          herramientas llevan menos de 3 anos disponibles al publico. El
          conocimiento se construye experimentando, no leyendo.
        </p>
        <p>
          Esto significa una cosa:{" "}
          <span className="text-foreground font-medium">
            la ventana para adelantarnos esta abierta ahora.
          </span>{" "}
          Las empresas que estan integrando IA hoy no lo hacen porque saben
          mas, sino porque decidieron empezar antes.
        </p>
      </div>
    </Slide>
  );
}
