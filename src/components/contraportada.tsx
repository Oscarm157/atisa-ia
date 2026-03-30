import Image from "next/image";
import Link from "next/link";
import { Slide } from "./slide";

export function Contraportada() {
  return (
    <Slide className="overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/6 rounded-full blur-[140px] pointer-events-none" />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(204,0,0,0.08) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          opacity: 0.4,
        }}
      />

      <div className="relative z-10 text-center">
        <Image
          src="/ATISA-Group-Color-1.png"
          alt="Atisa Group"
          width={200}
          height={48}
          className="mx-auto mb-8"
        />

        <p className="text-muted text-sm mb-10">
          Documento interno y confidencial
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-card-border bg-card/80 backdrop-blur-sm text-muted hover:text-foreground hover:border-primary/40 transition-all"
        >
          <span className="material-symbols-outlined" style={{ fontSize: 18 }}>
            home
          </span>
          <span className="text-sm font-medium">Volver al inicio</span>
        </Link>
      </div>
    </Slide>
  );
}
