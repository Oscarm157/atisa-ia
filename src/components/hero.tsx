import Image from "next/image";
import { Slide } from "./slide";

export function Hero() {
  return (
    <Slide className="grid-bg">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 text-center">
        <div className="mb-8">
          <Image
            src="/66678d21-l-ati-g_104c01404b014000000028.png"
            alt="Atisa Group"
            width={180}
            height={40}
            className="mx-auto mb-6 brightness-0 invert"
            priority
          />
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-card-border bg-card/50 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-primary pulse-dot" />
            <span className="text-xs font-medium text-muted uppercase tracking-wider">
              Propuesta Junta Directiva, 2026
            </span>
          </div>
        </div>

        <h1 className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95] mb-6">
          <span className="block text-gradient">AI Challenge</span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-muted leading-relaxed">
          Programa de integración de Inteligencia Artificial en todas las áreas
          de Atisa a través de experimentación con propósito.
        </p>
      </div>
    </Slide>
  );
}
