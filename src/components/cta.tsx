import Image from "next/image";
import { Slide } from "./slide";

const nextSteps = [
  { step: "1", text: "Aprobación de la junta directiva" },
  { step: "2", text: "Asignación de licencias de IA por área" },
  { step: "3", text: "Sesión de kick-off con todos los departamentos" },
  { step: "4", text: "Inicio del Atisa AI Challenge" },
];

export function Cta() {
  return (
    <Slide>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <Image
            src="/66678d21-l-ati-g_104c01404b014000000028.png"
            alt="Atisa Group"
            width={140}
            height={32}
            className="mx-auto mb-6 brightness-0 invert"
          />
          <h2 className="font-display font-bold text-2xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-4">
            Resumen ejecutivo
          </h2>
        </div>

        {/* Summary cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          <div className="rounded-xl border border-card-border bg-card p-4 text-center">
            <p className="font-display font-extrabold text-2xl text-gradient">$60K</p>
            <p className="text-xs text-muted">Inversión anual</p>
          </div>
          <div className="rounded-xl border border-card-border bg-card p-4 text-center">
            <p className="font-display font-extrabold text-2xl text-gradient">250</p>
            <p className="text-xs text-muted">Colaboradores</p>
          </div>
          <div className="rounded-xl border border-card-border bg-card p-4 text-center">
            <p className="font-display font-extrabold text-2xl text-gradient">12</p>
            <p className="text-xs text-muted">Semanas</p>
          </div>
          <div className="rounded-xl border border-card-border bg-card p-4 text-center">
            <p className="font-display font-extrabold text-2xl text-gradient">Top 5</p>
            <p className="text-xs text-muted">Proyectos premiados</p>
          </div>
        </div>

        {/* Next steps */}
        <div className="rounded-2xl border border-card-border bg-card p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">
            Próximos pasos
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {nextSteps.map((ns) => (
              <div key={ns.step} className="flex items-center gap-3">
                <div className="w-6 h-6 shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-xs font-bold text-primary">{ns.step}</span>
                </div>
                <p className="text-sm text-muted">{ns.text}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-xs text-muted/40 mt-8">
          Atisa Group. Documento interno y confidencial
        </p>
      </div>
    </Slide>
  );
}
