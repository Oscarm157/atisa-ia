import { Slide } from "./slide";

const investmentItems = [
  {
    icon: "person",
    label: "Licencia de IA por colaborador",
    value: "~$25 USD/mes",
    detail: "Acceso a plataformas como Claude, ChatGPT, Gemini o Copilot",
  },
  {
    icon: "groups",
    label: "Colaboradores participantes",
    value: "~250",
    detail: "Personal administrativo de todas las áreas de Atisa",
  },
  {
    icon: "calendar_month",
    label: "Inversión mensual estimada",
    value: "~$6,250 USD",
    detail: "Licencias activas durante las 12 semanas del programa",
  },
  {
    icon: "account_balance",
    label: "Inversión anual estimada",
    value: "~$75K USD",
    detail: "Si se mantienen las licencias después del challenge",
  },
  {
    icon: "emoji_events",
    label: "Premios para finalistas",
    value: "Por definir",
    detail: "Presupuesto adicional para premios del Top 5. Pendiente de aprobación.",
  },
];

const outcomes = [
  { value: "+200", label: "Proyectos con IA esperados", icon: "science" },
  { value: "5", label: "Finalistas implementados en producción", icon: "emoji_events" },
  { value: "250", label: "Colaboradores capacitados en IA", icon: "school" },
];

export function Inversion() {
  return (
    <Slide>
      <div className="flex items-center gap-3 mb-4">
        <span className="material-symbols-outlined text-primary" style={{ fontSize: 20 }}>
          account_balance
        </span>
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Inversión
        </span>
      </div>

      <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mb-2 max-w-4xl">
        Inversión y resultados esperados.
      </h2>
      <p className="font-display text-lg sm:text-xl md:text-2xl text-muted mb-8 max-w-4xl">
        Lo que se invierte y lo que se obtiene.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Investment breakdown */}
        <div className="space-y-3 stagger-in">
          {investmentItems.map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-card-border bg-card p-4 flex items-start gap-4"
            >
              <div className="w-9 h-9 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary" style={{ fontSize: 18 }}>
                  {item.icon}
                </span>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-0.5">
                  <p className="text-sm font-medium text-foreground">{item.label}</p>
                  <p className="font-display font-bold text-base text-gradient">{item.value}</p>
                </div>
                <p className="text-xs text-muted">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Expected outcomes */}
        <div className="flex flex-col gap-4">
          <div className="rounded-2xl border border-card-border bg-card p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-4">
              Resultados esperados del programa
            </p>
            <div className="space-y-5">
              {outcomes.map((o) => (
                <div key={o.label} className="flex items-center gap-4">
                  <div className="w-9 h-9 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary" style={{ fontSize: 18 }}>
                      {o.icon}
                    </span>
                  </div>
                  <div className="flex-1">
                    <p className="font-display font-bold text-2xl text-gradient">{o.value}</p>
                    <p className="text-sm text-muted">{o.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-primary/20 bg-primary/5 px-5 py-4">
            <p className="text-sm text-muted leading-relaxed">
              Los 5 finalistas se implementan directamente en producción. El resto de
              los proyectos no se pierden:{" "}
              <span className="text-foreground font-medium">
                se evalúan individualmente para determinar cuáles pueden integrarse
              </span>{" "}
              a las operaciones de cada área.
            </p>
          </div>
        </div>
      </div>
    </Slide>
  );
}
