import { Slide } from "../slide";

const milestones = [
  { milestone: "Inventario y línea base", tiempo: "Semana 1", costo: "Bajo", calidad: "90% cobertura", resultado: "Usuarios, licencias y herramientas", phase: 1 },
  { milestone: "Encuesta express", tiempo: "Sem 1-2", costo: "Muy bajo", calidad: "70% respuesta", resultado: "Casos de uso y barreras", phase: 1 },
  { milestone: "Dashboard v1", tiempo: "Semana 2", costo: "Bajo", calidad: "Vista ejecutiva inicial", resultado: "Adopción por área y herramienta", phase: 1 },
  { milestone: "Champions", tiempo: "Semana 3", costo: "Muy bajo", calidad: "1 por área clave", resultado: "Red interna de impulso a adopción", phase: 1 },
  { milestone: "Modelo de gobierno", tiempo: "F2 Sem 1-2", costo: "Medio", calidad: "KPIs aprobados", resultado: "Arquitectura y métricas", phase: 2 },
  { milestone: "Integración de fuentes", tiempo: "F2 Sem 3-4", costo: "Medio", calidad: "4 fuentes objetivo", resultado: "OpenAI, Anthropic, Gemini, Copilot", phase: 2 },
  { milestone: "Dashboard v2", tiempo: "F2 Sem 5-6", costo: "Medio", calidad: "Datos homologados", resultado: "Tokens, costo y uso", phase: 2 },
  { milestone: "Optimización", tiempo: "F2 Sem 7-8", costo: "Medio", calidad: "Recomendaciones accionables", resultado: "Ahorro y valor", phase: 2 },
];

export function GovRutaCritica() {
  return (
    <Slide>
      <div className="flex items-center gap-3 mb-4">
        <span className="material-symbols-outlined text-primary" style={{ fontSize: 20 }}>
          timeline
        </span>
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Ruta Crítica
        </span>
      </div>

      <h2 className="font-display font-bold text-2xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-2 max-w-4xl">
        Ruta crítica.
      </h2>
      <p className="font-display text-lg sm:text-xl md:text-2xl text-muted mb-8 max-w-4xl">
        Milestones con métricas de tiempo, costo y calidad.
      </p>

      <div className="rounded-2xl border border-card-border bg-card overflow-x-auto">
        <table className="w-full text-left min-w-[700px]">
          <thead>
            <tr className="border-b border-card-border">
              <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-primary">Milestone</th>
              <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-primary">Tiempo</th>
              <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-primary">Costo</th>
              <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-primary">Calidad esperada</th>
              <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-primary">Resultado</th>
            </tr>
          </thead>
          <tbody>
            {milestones.map((m, i) => (
              <tr
                key={m.milestone}
                className={`border-b border-card-border last:border-0 ${
                  i === 3 ? "border-b-2 border-b-primary/20" : ""
                } ${i % 2 === 0 ? "bg-card" : "bg-accent/50"}`}
              >
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${m.phase === 1 ? "bg-teal-500" : "bg-purple-500"}`} />
                    <span className="text-sm font-medium text-foreground">{m.milestone}</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-xs text-muted">{m.tiempo}</td>
                <td className="px-4 py-3 text-xs text-muted">{m.costo}</td>
                <td className="px-4 py-3 text-xs text-muted">{m.calidad}</td>
                <td className="px-4 py-3 text-xs text-muted">{m.resultado}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-4">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-teal-500" />
            <span className="text-xs text-muted">Fase 1: Quick Wins</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-purple-500" />
            <span className="text-xs text-muted">Fase 2: Gobierno</span>
          </div>
        </div>
        <p className="text-xs text-muted">
          Fase 1 da visibilidad rápida. Fase 2 da gobierno formal con consumo, costo y valor.
        </p>
      </div>
    </Slide>
  );
}
