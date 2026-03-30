"use client";

import Image from "next/image";
import { Slide } from "../slide";
import { DotMatrixTitle } from "../dot-matrix-title";

export function GovHero() {
  return (
    <Slide className="grid-bg overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-primary/6 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(204,0,0,0.15) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          animation: "hero-grid-pulse 6s ease-in-out infinite",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(204,0,0,0.03) 3px, rgba(204,0,0,0.03) 4px)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(90deg, transparent 0%, transparent 45%, rgba(204,0,0,0.06) 49%, rgba(204,0,0,0.12) 50%, rgba(204,0,0,0.06) 51%, transparent 55%, transparent 100%)",
          animation: "hero-scan 8s ease-in-out infinite",
        }}
      />

      <div className="absolute top-6 left-6 w-12 h-12 border-l-2 border-t-2 border-primary/20 rounded-tl-lg pointer-events-none" />
      <div className="absolute top-6 right-6 w-12 h-12 border-r-2 border-t-2 border-primary/20 rounded-tr-lg pointer-events-none" />
      <div className="absolute bottom-6 left-6 w-12 h-12 border-l-2 border-b-2 border-primary/20 rounded-bl-lg pointer-events-none" />
      <div className="absolute bottom-6 right-6 w-12 h-12 border-r-2 border-b-2 border-primary/20 rounded-br-lg pointer-events-none" />

      <div className="relative z-10 text-center mt-[8vh] sm:mt-0">
        <div className="mb-4 sm:mb-8 hero-fade-in">
          <Image
            src="/ATISA-Group-Color-1.png"
            alt="Atisa Group"
            width={180}
            height={40}
            className="mx-auto mb-6 "
            priority
          />
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-card-border bg-card/50 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-primary pulse-dot" />
            <span className="text-[10px] sm:text-xs font-medium text-muted uppercase tracking-wider">
              AI Governance, Atisa 2026
            </span>
          </div>
        </div>

        <div className="mb-6 max-w-5xl mx-auto">
          <DotMatrixTitle text="AI Governance" />
        </div>

        <p className="max-w-2xl mx-auto text-sm sm:text-lg md:text-xl text-muted leading-relaxed hero-fade-in-delayed">
          Visibilidad rápida + gobierno formal
        </p>
      </div>
    </Slide>
  );
}
