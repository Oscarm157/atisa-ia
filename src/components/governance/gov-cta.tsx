import Image from "next/image";
import { Slide } from "../slide";

const benefits = [
  { icon: "rocket_launch", text: "Acelerar adopción" },
  { icon: "search", text: "Detectar áreas rezagadas" },
  { icon: "school", text: "Enfocar capacitación" },
  { icon: "monitoring", text: "Medir consumo real" },
  { icon: "savings", text: "Optimizar licencias y costo" },
  { icon: "star", text: "Identificar casos de uso con mayor valor" },
];

export function GovCta() {
  return (
    <Slide>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <Image
            src="/66678d21-l-ati-g_104c01404b014000000028.png"
            alt="Atisa Group"
            width={140}
            height={32}
            className="mx-auto mb-6 brightness-0 invert"
          />
          <h2 className="font-display font-bold text-2xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-4">
            Beneficio esperado y decisión solicitada.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
          {/* Benefits */}
          <div className="rounded-2xl border border-card-border bg-card p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted mb-4">
              Beneficios
            </p>
            <div className="space-y-3">
              {benefits.map((b) => (
                <div key={b.icon} className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary shrink-0" style={{ fontSize: 18 }}>
                    {b.icon}
                  </span>
                  <p className="text-sm text-muted leading-relaxed">{b.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Decision */}
          <div className="rounded-2xl border border-primary/30 bg-primary/5 p-6 glow-red-subtle flex flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">
              Aprobación requerida
            </p>
            <div className="space-y-4 mb-5">
              <p className="font-display font-bold text-lg sm:text-xl text-foreground leading-snug">
                Aprobar <span className="text-gradient">Fase 1</span> inmediata.
              </p>
              <p className="font-display font-bold text-lg sm:text-xl text-foreground leading-snug">
                Dejar autorizada la <span className="text-gradient">Fase 2</span> de 8 semanas.
              </p>
              <p className="text-sm text-muted leading-relaxed">
                Para evolucionar hacia un AI Governance Dashboard formal.
              </p>
            </div>
            <div className="border-t border-primary/20 pt-4">
              <p className="text-xs text-muted leading-relaxed">
                Ruta propuesta: adopción rápida primero, gobierno y medición profunda después.
              </p>
            </div>
          </div>
        </div>

        <p className="text-center text-sm text-muted mt-8">
          Ruta propuesta: adopción rápida primero, gobierno y medición profunda después.
        </p>
        <p className="text-center text-xs text-muted/40 mt-4">
          Atisa Group. Documento interno y confidencial
        </p>
      </div>
    </Slide>
  );
}
