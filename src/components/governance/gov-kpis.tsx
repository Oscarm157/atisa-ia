import { Slide } from "../slide";

const kpiGroups = [
  {
    title: "Tiempo",
    icon: "schedule",
    color: "text-teal-400",
    borderColor: "border-teal-500/30",
    bgColor: "bg-teal-500/5",
    items: [
      "% avance del proyecto",
      "Cumplimiento de hitos por semana",
      "Tiempo de respuesta por área",
      "Velocidad de adopción inicial",
    ],
  },
  {
    title: "Costo",
    icon: "payments",
    color: "text-amber-400",
    borderColor: "border-amber-500/30",
    bgColor: "bg-amber-500/5",
    items: [
      "Costo de implementación",
      "Costo incremental por herramienta",
      "Costo por usuario activo",
      "Relación esfuerzo vs adopción",
    ],
  },
  {
    title: "Calidad",
    icon: "verified",
    color: "text-purple-400",
    borderColor: "border-purple-500/30",
    bgColor: "bg-purple-500/5",
    items: [
      "Tasa de participación",
      "Calidad de casos de uso",
      "Utilidad percibida",
      "Madurez por área",
    ],
  },
];

export function GovKpis() {
  return (
    <Slide>
      <div className="flex items-center gap-3 mb-4">
        <span className="material-symbols-outlined text-primary" style={{ fontSize: 20 }}>
          monitoring
        </span>
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          KPIs
        </span>
      </div>

      <h2 className="font-display font-bold text-2xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-2 max-w-4xl">
        KPIs ejecutivos del proyecto.
      </h2>
      <p className="font-display text-lg sm:text-xl md:text-2xl text-muted mb-8 max-w-4xl">
        Vista en tiempo, costo y calidad.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 stagger-in">
        {kpiGroups.map((group) => (
          <div
            key={group.title}
            className={`rounded-2xl border ${group.borderColor} ${group.bgColor} p-6`}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className={`material-symbols-outlined ${group.color}`} style={{ fontSize: 24 }}>
                {group.icon}
              </span>
              <h3 className={`font-display font-bold text-lg ${group.color}`}>{group.title}</h3>
            </div>
            <div className="space-y-3">
              {group.items.map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <span className={`material-symbols-outlined ${group.color} shrink-0`} style={{ fontSize: 14 }}>
                    arrow_right
                  </span>
                  <p className="text-sm text-muted leading-snug">{item}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-primary/20 bg-primary/5 px-4 sm:px-6 py-4 mt-8 text-center">
        <p className="text-sm text-muted leading-relaxed">
          La campaña permite validar rápido, con bajo costo y con evidencia real, qué tan viable es escalar el AI Governance Dashboard.
        </p>
      </div>
    </Slide>
  );
}
