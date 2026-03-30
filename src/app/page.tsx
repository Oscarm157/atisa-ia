import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/6 rounded-full blur-[160px] pointer-events-none" />

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(204,0,0,0.08) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          opacity: 0.5,
        }}
      />

      <div className="relative z-10 text-center px-6">
        {/* Logo */}
        <Image
          src="/66678d21-l-ati-g_104c01404b014000000028.png"
          alt="Atisa Group"
          width={200}
          height={48}
          className="mx-auto mb-16 brightness-0 invert"
          priority
        />

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          <Link
            href="/ai-governance"
            className="group relative w-64 rounded-2xl border border-card-border bg-card/80 backdrop-blur-sm px-8 py-6 text-center transition-all hover:border-primary/40 hover:bg-card"
          >
            <span className="material-symbols-outlined text-primary mb-3 block" style={{ fontSize: 28 }}>
              shield
            </span>
            <span className="font-display font-bold text-lg text-foreground block mb-1">
              AI Governance
            </span>
            <span className="text-xs text-muted">
              Visibilidad y gobierno formal
            </span>
          </Link>

          <Link
            href="/ai-challenge"
            className="group relative w-64 rounded-2xl border border-card-border bg-card/80 backdrop-blur-sm px-8 py-6 text-center transition-all hover:border-primary/40 hover:bg-card"
          >
            <span className="material-symbols-outlined text-primary mb-3 block" style={{ fontSize: 28 }}>
              emoji_events
            </span>
            <span className="font-display font-bold text-lg text-foreground block mb-1">
              AI Challenge
            </span>
            <span className="text-xs text-muted">
              Competencia de adopción de IA
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
