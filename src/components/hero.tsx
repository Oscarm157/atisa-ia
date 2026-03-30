"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Slide } from "./slide";

function DotMatrixTitle() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctxRaw = canvas.getContext("2d");
    if (!ctxRaw) return;
    const ctx = ctxRaw;

    const dpr = window.devicePixelRatio || 1;
    const text = "AI Challenge";
    const dotRadius = 1.8;
    const dotSpacing = 5;

    // Measure text to size canvas
    const fontSize = Math.min(window.innerWidth * 0.09, 120);
    canvas.style.width = "100%";
    canvas.style.height = `${fontSize * 1.3}px`;
    const w = canvas.offsetWidth;
    const h = fontSize * 1.3;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.scale(dpr, dpr);

    // Draw text offscreen to sample pixels
    const offscreen = document.createElement("canvas");
    offscreen.width = w;
    offscreen.height = h;
    const offCtx = offscreen.getContext("2d")!;
    offCtx.fillStyle = "#fff";
    offCtx.font = `800 ${fontSize}px "Plus Jakarta Sans", sans-serif`;
    offCtx.textAlign = "center";
    offCtx.textBaseline = "middle";
    offCtx.fillText(text, w / 2, h / 2);

    // Sample dot positions from text pixels
    const imageData = offCtx.getImageData(0, 0, w, h);
    const dots: { x: number; y: number; delay: number; targetAlpha: number }[] = [];

    for (let y = 0; y < h; y += dotSpacing) {
      for (let x = 0; x < w; x += dotSpacing) {
        const idx = (y * w + x) * 4;
        if (imageData.data[idx + 3] > 128) {
          const distFromCenter = Math.sqrt(
            Math.pow(x - w / 2, 2) + Math.pow(y - h / 2, 2)
          );
          dots.push({
            x,
            y,
            delay: distFromCenter * 1.5 + Math.random() * 200,
            targetAlpha: 0.6 + Math.random() * 0.4,
          });
        }
      }
    }

    // Animate
    let startTime = 0;
    let animFrame: number;

    function animate(timestamp: number) {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;

      // Cycle timing: dots reveal (0-1800) → solid text fade in (1800-2600) → hold (2600-3600) → fade out (3600-4200) → pause (4200-4600) → restart
      const cycleDuration = 4600;
      const cycleElapsed = elapsed % cycleDuration;
      const currentCycle = Math.floor(elapsed / cycleDuration);
      const maxCycles = 4;

      ctx.clearRect(0, 0, w, h);

      // Draw dots only during reveal phase (0-2600ms of cycle)
      if (cycleElapsed <= 2600 && currentCycle < maxCycles) {
        for (const dot of dots) {
          const progress = Math.max(0, Math.min(1, (cycleElapsed - dot.delay) / 600));
          if (progress <= 0) continue;

          const eased = 1 - Math.pow(1 - progress, 3);
          // Fade dots out as solid text fades in
          const dotFadeOut = cycleElapsed > 1800 ? 1 - (cycleElapsed - 1800) / 800 : 1;
          const alpha = eased * dot.targetAlpha * Math.max(0, dotFadeOut);

          // Slight upward drift during reveal
          const yOffset = (1 - eased) * 12;

          // Red core
          ctx.beginPath();
          ctx.arc(dot.x, dot.y - yOffset, dotRadius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(204, 0, 0, ${alpha})`;
          ctx.fill();

          // White hot center for brightness
          if (alpha > 0.5) {
            ctx.beginPath();
            ctx.arc(dot.x, dot.y - yOffset, dotRadius * 0.4, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 100, 80, ${(alpha - 0.5) * 1.5})`;
            ctx.fill();
          }
        }
      }

      // Phase 1: dots reveal (0 - 1800ms)
      // (already drawn above)

      // Phase 2: solid text fade in over dots (1800 - 2600ms)
      if (cycleElapsed > 1800 && cycleElapsed <= 3600) {
        const textFade = Math.min(1, (cycleElapsed - 1800) / 800);
        const gradient = ctx.createLinearGradient(0, 0, w, h);
        gradient.addColorStop(0, "#FF1A1A");
        gradient.addColorStop(0.5, "#CC0000");
        gradient.addColorStop(1, "#990000");

        ctx.globalAlpha = textFade;
        ctx.font = `800 ${fontSize}px "Plus Jakarta Sans", sans-serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillStyle = gradient;
        ctx.fillText(text, w / 2, h / 2);
        ctx.globalAlpha = 1;
      }

      // Phase 3: fade everything out (3600 - 4200ms)
      if (cycleElapsed > 3600 && cycleElapsed <= 4200) {
        const fadeOut = 1 - (cycleElapsed - 3600) / 600;
        const gradient = ctx.createLinearGradient(0, 0, w, h);
        gradient.addColorStop(0, "#FF1A1A");
        gradient.addColorStop(0.5, "#CC0000");
        gradient.addColorStop(1, "#990000");

        ctx.globalAlpha = fadeOut;
        ctx.font = `800 ${fontSize}px "Plus Jakarta Sans", sans-serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillStyle = gradient;
        ctx.fillText(text, w / 2, h / 2);
        ctx.globalAlpha = 1;
      }

      // After last cycle, keep solid text visible
      if (currentCycle >= maxCycles) {
        ctx.clearRect(0, 0, w, h);
        const gradient = ctx.createLinearGradient(0, 0, w, h);
        gradient.addColorStop(0, "#FF1A1A");
        gradient.addColorStop(0.5, "#CC0000");
        gradient.addColorStop(1, "#990000");
        ctx.font = `800 ${fontSize}px "Plus Jakarta Sans", sans-serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillStyle = gradient;
        ctx.fillText(text, w / 2, h / 2);
        return; // stop animating
      }

      animFrame = requestAnimationFrame(animate);
    }

    // Small delay then start
    const timeout = setTimeout(() => {
      setVisible(true);
      animFrame = requestAnimationFrame(animate);
    }, 300);

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(animFrame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`w-full transition-opacity duration-300 ${visible ? "opacity-100" : "opacity-0"}`}
    />
  );
}

export function Hero() {
  return (
    <Slide className="grid-bg">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Dot grid background layer */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(204,0,0,0.08) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          animation: "hero-grid-pulse 6s ease-in-out infinite",
        }}
      />

      <div className="relative z-10 text-center">
        <div className="mb-8 hero-fade-in">
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
              Campaña Adopción de AI en Atisa, 2026
            </span>
          </div>
        </div>

        {/* Dot matrix title */}
        <div className="mb-6 max-w-5xl mx-auto">
          <DotMatrixTitle />
        </div>

        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-muted leading-relaxed hero-fade-in-delayed">
          Competencia gamificada donde cada colaborador de Atisa usa IA para
          resolver retos reales de su área. Experimenta, compite y gana.
        </p>
      </div>
    </Slide>
  );
}
