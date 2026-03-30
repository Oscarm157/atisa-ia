import { Slide } from "./slide";

export function Cta() {
  return (
    <Slide className="grid-bg">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] bg-primary/8 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border border-primary/20 mb-8 glow-red">
          <span className="material-symbols-outlined text-primary" style={{ fontSize: 32 }}>
            bolt
          </span>
        </div>

        <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl leading-tight mb-6">
          La IA no espera.{" "}
          <span className="text-gradient">Nosotros tampoco.</span>
        </h2>

        <p className="text-muted text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
          El Atisa AI Challenge es nuestra apuesta por el futuro. Una invitacion a
          cada colaborador a experimentar, aprender y demostrar que la innovacion
          puede venir de cualquier area.
        </p>

        <div className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white font-bold rounded-full text-lg">
          <span className="material-symbols-outlined" style={{ fontSize: 24 }}>
            rocket_launch
          </span>
          Iniciemos
        </div>

        <p className="mt-8 text-sm text-muted/50">
          Atisa Group — Innovacion con proposito
        </p>
      </div>
    </Slide>
  );
}
