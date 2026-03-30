"use client";

import Image from "next/image";
import { Slide } from "./slide";
import { DotMatrixTitle } from "./dot-matrix-title";

const pillars = [
  {
    icon: "timer",
    title: "Tiempo",
    description: "Automatizar tareas repetitivas, acelerar procesos.",
    example: "Reportes de 4hrs → 20min con IA",
  },
  {
    icon: "verified",
    title: "Calidad",
    description: "Mejorar precisión y consistencia de entregables.",
    example: "Revisión de documentos sin errores típicos",
  },
  {
    icon: "savings",
    title: "Costo",
    description: "Reducir costos eliminando pasos innecesarios.",
    example: "Reducción de retrabajo y procesos manuales",
  },
];

export function Propuesta() {
  return (
    <Slide className="overflow-hidden">
      {/* Ambient glow - subtle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/6 rounded-full blur-[140px] pointer-events-none" />

      {/* Dot grid - subtle */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(204,0,0,0.08) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          animation: "hero-grid-pulse 6s ease-in-out infinite",
        }}
      />

      {/* Animated vertical scan line - subtle */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, transparent 46%, rgba(204,0,0,0.04) 49%, rgba(204,0,0,0.07) 50%, rgba(204,0,0,0.04) 51%, transparent 54%, transparent 100%)",
          animation: "hero-scan 10s ease-in-out infinite",
        }}
      />

      {/* Corner accents */}
      <div className="absolute top-6 left-6 w-10 h-10 border-l border-t border-primary/15 rounded-tl-md pointer-events-none" />
      <div className="absolute top-6 right-6 w-10 h-10 border-r border-t border-primary/15 rounded-tr-md pointer-events-none" />
      <div className="absolute bottom-6 left-6 w-10 h-10 border-l border-b border-primary/15 rounded-bl-md pointer-events-none" />
      <div className="absolute bottom-6 right-6 w-10 h-10 border-r border-b border-primary/15 rounded-br-md pointer-events-none" />

      <div className="relative z-10">
      {/* Logo + Dot Matrix Title */}
      <div className="mb-6">
        <Image
          src="/66678d21-l-ati-g_104c01404b014000000028.png"
          alt="Atisa Group"
          width={120}
          height={28}
          className="mb-4 brightness-0 invert"
        />
        <div className="max-w-md">
          <DotMatrixTitle sizeMultiplier={0.55} cycles={2} />
        </div>
      </div>

      <div className="flex items-center gap-3 mb-4">
        <span className="material-symbols-outlined text-primary" style={{ fontSize: 20 }}>
          lightbulb
        </span>
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          La Propuesta
        </span>
      </div>

      <p className="text-muted text-base leading-relaxed mb-3 max-w-3xl">
        Una competencia interna de 12 semanas donde los ~250 colaboradores
        administrativos de Atisa compiten usando IA para resolver retos reales
        de su área. Cada participante elige un problema, lo ataca con herramientas
        de IA y presenta resultados medibles.
      </p>
      <p className="text-muted text-base leading-relaxed mb-8 max-w-3xl">
        Los mejores proyectos se premian, los ganadores se reconocen frente a toda
        la empresa, y las soluciones con{" "}
        <span className="text-foreground font-medium">impacto medible en tiempo, calidad o costo</span>{" "}
        se implementan en producción. No es un curso, es una competencia real con premios reales.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
        {pillars.map((p) => (
          <div
            key={p.title}
            className="rounded-2xl border border-card-border bg-card p-6 hover:border-primary/30 transition-all"
          >
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-primary" style={{ fontSize: 22 }}>
                {p.icon}
              </span>
            </div>
            <h3 className="font-display font-bold text-xl mb-2">{p.title}</h3>
            <p className="text-sm text-muted leading-relaxed mb-3">{p.description}</p>
            <div className="px-3 py-2 rounded-lg bg-accent text-xs text-muted">
              <span className="text-primary font-medium">Ej: </span>{p.example}
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-primary/30 bg-primary/5 px-4 sm:px-8 py-4 sm:py-6 text-center glow-red-subtle">
        <p className="font-display font-bold text-lg sm:text-xl md:text-2xl text-foreground leading-snug">
          Los colaboradores no necesitan ser expertos en IA.{" "}
          <span className="text-gradient">Necesitan conocer a detalle sus procesos y experimentar su optimización con IA.</span>
        </p>
      </div>
      </div>
    </Slide>
  );
}
