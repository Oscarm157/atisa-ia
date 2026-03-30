import { Slide } from "./slide";

const tools = [
  {
    number: 1,
    name: "Claude",
    company: "Anthropic",
    tagline: "Lider en el sector empresarial",
    description:
      "El modelo mas avanzado en razonamiento, analisis de documentos extensos y generacion de texto. Ventana de contexto de 200K tokens.",
    strengths: [
      "Razonamiento y logica compleja",
      "Analisis de documentos largos (contratos, reportes, legales)",
      "Redaccion profesional y resumen ejecutivo",
      "Codigo y asistencia tecnica avanzada",
      "Investigacion profunda con fuentes",
    ],
    icon: "neurology",
    highlight: true,
  },
  {
    number: 2,
    name: "ChatGPT",
    company: "OpenAI",
    tagline: "El mas versatil y reconocido",
    description:
      "La plataforma de IA con mayor adopcion global. Ecosistema amplio de plugins, GPTs personalizados y capacidades multimodales.",
    strengths: [
      "Generacion de imagenes (DALL-E 3)",
      "Analisis de datos y graficas automaticas",
      "Navegacion web en tiempo real",
      "GPTs personalizados por equipo",
      "Vision: analisis de fotos y documentos escaneados",
    ],
    icon: "chat",
    highlight: false,
  },
  {
    number: 3,
    name: "Gemini",
    company: "Google",
    tagline: "Nativo en Google Workspace",
    description:
      "Integrado directamente en Gmail, Docs, Sheets y Drive. Capacidades multimodales que incluyen video y audio.",
    strengths: [
      "Integrado en Gmail, Docs, Sheets, Slides",
      "Procesamiento de video y audio",
      "Busqueda y sintesis de informacion en Drive",
      "Ventana de contexto de 1M tokens",
      "Generacion de imagenes (Imagen 3)",
    ],
    icon: "auto_awesome",
    highlight: false,
  },
  {
    number: 4,
    name: "Copilot",
    company: "Microsoft",
    tagline: "Embebido en Microsoft 365",
    description:
      "Vive dentro de Excel, Word, PowerPoint, Outlook y Teams. Automatiza tareas directamente donde ya trabajan los equipos.",
    strengths: [
      "Automatizacion en Excel (formulas, analisis, pivots)",
      "Generacion de presentaciones en PowerPoint",
      "Resumen de correos y reuniones en Teams",
      "Redaccion y edicion en Word",
      "Flujos automatizados con Power Automate",
    ],
    icon: "code",
    highlight: false,
  },
];

export function Herramientas() {
  return (
    <Slide>
      <div className="flex items-center gap-3 mb-4">
        <span className="material-symbols-outlined text-primary" style={{ fontSize: 20 }}>
          smart_toy
        </span>
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          Plataformas de IA
        </span>
      </div>

      <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl leading-tight mb-6 max-w-4xl">
        4 plataformas de IA.{" "}
        <span className="text-muted">Cada una con fortalezas distintas.</span>
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 stagger-in">
        {tools.map((tool) => (
          <div
            key={tool.name}
            className={`rounded-2xl border ${
              tool.highlight
                ? "border-primary/30 glow-red-subtle"
                : "border-card-border"
            } bg-card p-5 flex flex-col`}
          >
            {/* Header */}
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-xs font-bold text-primary">{tool.number}</span>
              </div>
              <span
                className="material-symbols-outlined text-primary"
                style={{ fontSize: 20 }}
              >
                {tool.icon}
              </span>
            </div>
            <p className="font-display font-bold text-base mb-0.5">{tool.name}</p>
            <p className="text-xs text-muted mb-1">{tool.company}</p>
            {tool.highlight ? (
              <span className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium w-fit mb-3">
                Lider empresarial
              </span>
            ) : (
              <p className="text-[10px] text-muted/70 italic mb-3">{tool.tagline}</p>
            )}

            {/* Description */}
            <p className="text-xs text-muted leading-relaxed mb-3">
              {tool.description}
            </p>

            {/* Strengths */}
            <div className="mt-auto space-y-1.5 border-t border-card-border pt-3">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-muted/60">
                Fortalezas
              </p>
              {tool.strengths.map((s) => (
                <div key={s} className="flex items-start gap-1.5">
                  <span className="text-primary text-[9px] mt-[3px]">&#9679;</span>
                  <p className="text-xs text-muted/80 leading-snug">{s}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Slide>
  );
}
