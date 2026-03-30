import { Slide } from "./slide";

const tools = [
  {
    number: 1,
    name: "Claude",
    company: "Anthropic",
    tagline: "Análisis profundo y razonamiento",
    description:
      "El modelo más fuerte en razonamiento y análisis profundo. Ventana de contexto de 1M tokens: puede procesar libros enteros sin perder detalle.",
    strengths: [
      "Análisis de documentos extensos (contratos, legales, reportes)",
      "Razonamiento complejo y redacción ejecutiva",
      "Código y asistencia técnica avanzada",
    ],
    icon: "neurology",
    highlight: true,
  },
  {
    number: 2,
    name: "ChatGPT",
    company: "OpenAI",
    tagline: "Versatilidad y ecosistema global",
    description:
      "La plataforma más reconocida. Navega internet en tiempo real, genera imágenes y tiene un ecosistema de GPTs personalizados.",
    strengths: [
      "Búsqueda web en tiempo real e investigación",
      "Generación de imágenes (DALL-E 3)",
      "GPTs personalizados por equipo o función",
    ],
    icon: "chat",
    highlight: false,
  },
  {
    number: 3,
    name: "Gemini",
    company: "Google",
    tagline: "Multimodal nativo en Google",
    description:
      "Nativo en Google Workspace. Destaca en procesamiento de video y audio con Nano, su modelo on-device para tareas rápidas sin conexión.",
    strengths: [
      "Procesamiento de video y audio nativo",
      "Nano: modelo on-device para velocidad sin internet",
      "Integrado en Gmail, Docs, Sheets y Drive",
    ],
    icon: "auto_awesome",
    highlight: false,
  },
  {
    number: 4,
    name: "Copilot",
    company: "Microsoft",
    tagline: "Integrado en Microsoft 365",
    description:
      "Embebido en Microsoft 365. Automatiza Excel, genera presentaciones en PowerPoint y resume reuniones en Teams.",
    strengths: [
      "Automatización directa en Excel, Word y PowerPoint",
      "Resumen de correos y reuniones en Teams",
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
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Plataformas de IA
        </span>
      </div>

      <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl leading-tight mb-2 max-w-4xl">
        4 plataformas de IA.
      </h2>
      <p className="font-display text-xl sm:text-2xl text-muted mb-6 max-w-4xl">
        Cada una con fortalezas distintas.
      </p>

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
              <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium w-fit mb-3">
                Lider empresarial
              </span>
            ) : (
              <p className="text-xs text-muted/70 italic mb-3">{tool.tagline}</p>
            )}

            {/* Description */}
            <p className="text-xs text-muted leading-relaxed mb-3">
              {tool.description}
            </p>

            {/* Strengths */}
            <div className="mt-auto space-y-1.5 border-t border-card-border pt-3">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted/60">
                Fortalezas
              </p>
              {tool.strengths.map((s) => (
                <div key={s} className="flex items-start gap-1.5">
                  <span className="text-primary text-[11px] mt-[2px]">&#9679;</span>
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
