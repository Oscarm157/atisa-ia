import { Slide } from "./slide";

const tools = [
  {
    number: 1,
    name: "Claude",
    company: "Anthropic",
    description:
      "Lider actual en el sector empresarial. Destaca en analisis de documentos extensos, razonamiento complejo y generacion de contenido de alta calidad. Su ventana de contexto de 200K tokens permite procesar documentos completos sin perder informacion.",
    icon: "neurology",
    highlight: true,
  },
  {
    number: 2,
    name: "ChatGPT",
    company: "OpenAI",
    description:
      "La herramienta de IA mas reconocida a nivel global. Ofrece generacion de imagenes con DALL-E, analisis de datos avanzado y un ecosistema amplio de plugins y GPTs personalizados para tareas especificas.",
    icon: "chat",
    highlight: false,
  },
  {
    number: 3,
    name: "Gemini",
    company: "Google",
    description:
      "Integrado nativamente con Google Workspace. Permite trabajar con texto, imagenes, audio y video de forma simultanea. Ideal para equipos que ya operan dentro del ecosistema de Google.",
    icon: "auto_awesome",
    highlight: false,
  },
  {
    number: 4,
    name: "Copilot",
    company: "Microsoft",
    description:
      "Embebido en Microsoft 365. Automatiza tareas en Excel, Word, PowerPoint y Teams. La opcion natural para organizaciones centradas en el ecosistema Microsoft.",
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

      <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl leading-tight mb-8 max-w-4xl">
        Cuatro plataformas de IA.{" "}
        <span className="text-muted">Cada una con fortalezas distintas.</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 stagger-in">
        {tools.map((tool) => (
          <div
            key={tool.name}
            className={`rounded-2xl border ${
              tool.highlight
                ? "border-primary/30 glow-red-subtle"
                : "border-card-border"
            } bg-card p-5 hover:border-primary/30 transition-all`}
          >
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-sm font-bold text-primary">{tool.number}</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="material-symbols-outlined text-primary"
                    style={{ fontSize: 20 }}
                  >
                    {tool.icon}
                  </span>
                  <p className="font-display font-bold text-base">{tool.name}</p>
                  <span className="text-xs text-muted">{tool.company}</span>
                  {tool.highlight && (
                    <span className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">
                      Lider empresarial
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted leading-relaxed">{tool.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Slide>
  );
}
