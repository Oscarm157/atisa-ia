import { Slide } from "../slide";

const fase1 = [
  "Inventario de usuarios y licencias activas",
  "Encuesta express de adopción por área",
  "Dashboard v1 por área y herramienta",
  "Identificación de champions internos",
  "Detección de barreras de adopción",
];

const fase2 = [
  "Integración de OpenAI, Anthropic, Gemini y Copilot",
  "Tokens por usuario y por área",
  "Costo por proveedor en tiempo real",
  "Clasificación de casos de uso",
  "Dashboard de gobierno y optimización",
];

export function GovFases() {
  return (
    <Slide>
      <div className="flex items-center gap-3 mb-4">
        <span className="material-symbols-outlined text-primary" style={{ fontSize: 20 }}>
          account_tree
        </span>
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          El Plan
        </span>
      </div>

      <h2 className="font-display font-bold text-2xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-8 max-w-4xl">
        Plan ejecutivo en dos fases.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 stagger-in">
        {/* Fase 1 */}
        <div className="rounded-2xl border border-teal-500/30 bg-teal-500/5 p-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-display font-bold text-2xl text-teal-400">01</span>
            <div>
              <p className="font-display font-bold text-base text-teal-400">Fase 1: Quick Wins</p>
              <p className="text-xs text-muted">2-3 semanas</p>
            </div>
          </div>
          <p className="text-sm text-muted mb-4">
            Objetivo: darle al CEO una primera vista ejecutiva útil.
          </p>
          <div className="space-y-2">
            {fase1.map((item) => (
              <div key={item} className="flex items-start gap-2">
                <span className="material-symbols-outlined text-teal-400 shrink-0" style={{ fontSize: 16 }}>
                  check_circle
                </span>
                <p className="text-sm text-muted leading-snug">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Fase 2 */}
        <div className="rounded-2xl border border-purple-500/30 bg-purple-500/5 p-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-display font-bold text-2xl text-purple-400">02</span>
            <div>
              <p className="font-display font-bold text-base text-purple-400">Fase 2: Gobierno y Monitoreo</p>
              <p className="text-xs text-muted">8 semanas</p>
            </div>
          </div>
          <p className="text-sm text-muted mb-4">
            Objetivo: medir consumo, costo y casos de uso.
          </p>
          <div className="space-y-2">
            {fase2.map((item) => (
              <div key={item} className="flex items-start gap-2">
                <span className="material-symbols-outlined text-purple-400 shrink-0" style={{ fontSize: 16 }}>
                  check_circle
                </span>
                <p className="text-sm text-muted leading-snug">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Slide>
  );
}
