import { Slide } from "./slide";

const tools = [
  {
    name: "Claude",
    company: "Anthropic",
    strength: "Análisis largo, redacción, razonamiento complejo",
    icon: "neurology",
  },
  {
    name: "ChatGPT",
    company: "OpenAI",
    strength: "Versatilidad, generación de imágenes, plugins",
    icon: "chat",
  },
  {
    name: "Gemini",
    company: "Google",
    strength: "Integración con Google Workspace, multimodal",
    icon: "auto_awesome",
  },
  {
    name: "Copilot",
    company: "Microsoft",
    strength: "Integración con Office 365, Excel, Teams",
    icon: "code",
  },
];

const useCases = [
  { area: "Finanzas", role: "CFO", cases: "Análisis de datos, reportes automáticos, proyecciones" },
  { area: "Operaciones & RRHH", role: "COO/CHRO", cases: "Optimización de procesos, políticas, onboarding" },
  { area: "Tecnología", role: "CTO", cases: "Código, debugging, documentación técnica, automatización" },
  { area: "Administración", role: "CAO", cases: "Documentación, SOPs, procesos administrativos" },
  { area: "Real Estate", role: "CREO", cases: "Análisis de mercado, valuaciones, propuestas" },
  { area: "Dirección Médica", role: "", cases: "Protocolos, investigación, documentación clínica" },
  { area: "Zonkeys / Unisantos", role: "", cases: "Contenido, marketing, operación deportiva" },
  { area: "Proyectos Estratégicos", role: "", cases: "Planeación, análisis, presentaciones ejecutivas" },
];

export function Herramientas() {
  return (
    <Slide>
      <div className="flex items-center gap-3 mb-4">
        <span className="material-symbols-outlined text-primary" style={{ fontSize: 20 }}>
          build
        </span>
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Herramientas & Casos de Uso
        </span>
      </div>

      <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl leading-tight mb-6 max-w-4xl">
        IA disponible hoy.{" "}
        <span className="text-muted">Aplicable en cada área de Atisa.</span>
      </h2>

      {/* Tools grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        {tools.map((tool) => (
          <div
            key={tool.name}
            className="rounded-xl border border-card-border bg-card p-4 text-center hover:border-primary/30 transition-all"
          >
            <span className="material-symbols-outlined text-primary mb-2" style={{ fontSize: 24 }}>
              {tool.icon}
            </span>
            <p className="font-display font-bold text-sm">{tool.name}</p>
            <p className="text-[10px] text-muted mb-1">{tool.company}</p>
            <p className="text-[10px] text-muted/70 leading-tight">{tool.strength}</p>
          </div>
        ))}
      </div>

      {/* Use cases by area */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {useCases.map((uc) => (
          <div key={uc.area} className="rounded-lg bg-accent/50 border border-card-border px-3 py-2.5">
            <p className="text-xs font-semibold text-foreground mb-0.5">
              {uc.area}
              {uc.role && <span className="text-primary ml-1 font-normal">({uc.role})</span>}
            </p>
            <p className="text-[10px] text-muted leading-relaxed">{uc.cases}</p>
          </div>
        ))}
      </div>
    </Slide>
  );
}
