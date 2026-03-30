"use client";

import { useEffect, useRef, useState } from "react";

interface DotMatrixTitleProps {
  text?: string;
  sizeMultiplier?: number;
  cycles?: number;
  align?: "center" | "left";
}

export function DotMatrixTitle({
  text = "AI Challenge",
  sizeMultiplier = 1,
  cycles = 4,
  align = "center",
}: DotMatrixTitleProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctxRaw = canvas.getContext("2d");
    if (!ctxRaw) return;
    const ctx = ctxRaw;

    const dpr = window.devicePixelRatio || 1;
    const dotRadius = 2.2;
    const dotSpacing = 4;

    const fontSize = Math.min(window.innerWidth * 0.105 * sizeMultiplier, 138 * sizeMultiplier);
    canvas.style.width = "100%";
    canvas.style.height = `${fontSize * 1.3}px`;
    const w = canvas.offsetWidth;
    const h = fontSize * 1.3;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.scale(dpr, dpr);

    const offscreen = document.createElement("canvas");
    offscreen.width = w;
    offscreen.height = h;
    const offCtx = offscreen.getContext("2d")!;
    offCtx.fillStyle = "#fff";
    offCtx.font = `800 ${fontSize}px "Plus Jakarta Sans", sans-serif`;
    offCtx.textAlign = align;
    offCtx.textBaseline = "middle";
    offCtx.fillText(text, align === "center" ? w / 2 : 0, h / 2);

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
            targetAlpha: 0.75 + Math.random() * 0.25,
          });
        }
      }
    }

    let startTime = 0;
    let animFrame: number;
    const maxCycles = cycles;

    function animate(timestamp: number) {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;

      const cycleDuration = 4600;
      const cycleElapsed = elapsed % cycleDuration;
      const currentCycle = Math.floor(elapsed / cycleDuration);

      ctx.clearRect(0, 0, w, h);

      if (cycleElapsed <= 2600 && currentCycle < maxCycles) {
        for (const dot of dots) {
          const progress = Math.max(0, Math.min(1, (cycleElapsed - dot.delay) / 600));
          if (progress <= 0) continue;

          const eased = 1 - Math.pow(1 - progress, 3);
          const dotFadeOut = cycleElapsed > 1800 ? 1 - (cycleElapsed - 1800) / 800 : 1;
          const alpha = eased * dot.targetAlpha * Math.max(0, dotFadeOut);

          const yOffset = (1 - eased) * 12;

          ctx.beginPath();
          ctx.arc(dot.x, dot.y - yOffset, dotRadius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(204, 0, 0, ${alpha})`;
          ctx.fill();

          if (alpha > 0.3) {
            ctx.beginPath();
            ctx.arc(dot.x, dot.y - yOffset, dotRadius * 0.5, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 120, 100, ${alpha * 0.8})`;
            ctx.fill();
          }
        }
      }

      if (cycleElapsed > 1800 && cycleElapsed <= 3600) {
        const textFade = Math.min(1, (cycleElapsed - 1800) / 800);
        const gradient = ctx.createLinearGradient(0, 0, w, h);
        gradient.addColorStop(0, "#FF1A1A");
        gradient.addColorStop(0.5, "#CC0000");
        gradient.addColorStop(1, "#990000");

        ctx.globalAlpha = textFade;
        ctx.font = `800 ${fontSize}px "Plus Jakarta Sans", sans-serif`;
        ctx.textAlign = align;
        ctx.textBaseline = "middle";
        ctx.fillStyle = gradient;
        ctx.fillText(text, align === "center" ? w / 2 : 0, h / 2);
        ctx.globalAlpha = 1;
      }

      if (cycleElapsed > 3600 && cycleElapsed <= 4200) {
        const fadeOut = 1 - (cycleElapsed - 3600) / 600;
        const gradient = ctx.createLinearGradient(0, 0, w, h);
        gradient.addColorStop(0, "#FF1A1A");
        gradient.addColorStop(0.5, "#CC0000");
        gradient.addColorStop(1, "#990000");

        ctx.globalAlpha = fadeOut;
        ctx.font = `800 ${fontSize}px "Plus Jakarta Sans", sans-serif`;
        ctx.textAlign = align;
        ctx.textBaseline = "middle";
        ctx.fillStyle = gradient;
        ctx.fillText(text, align === "center" ? w / 2 : 0, h / 2);
        ctx.globalAlpha = 1;
      }

      if (currentCycle >= maxCycles) {
        ctx.clearRect(0, 0, w, h);
        const gradient = ctx.createLinearGradient(0, 0, w, h);
        gradient.addColorStop(0, "#FF1A1A");
        gradient.addColorStop(0.5, "#CC0000");
        gradient.addColorStop(1, "#990000");
        ctx.font = `800 ${fontSize}px "Plus Jakarta Sans", sans-serif`;
        ctx.textAlign = align;
        ctx.textBaseline = "middle";
        ctx.fillStyle = gradient;
        ctx.fillText(text, align === "center" ? w / 2 : 0, h / 2);
        return;
      }

      animFrame = requestAnimationFrame(animate);
    }

    // Start animation only when canvas becomes visible
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          startTime = 0; // reset so animation starts fresh
          setVisible(true);
          animFrame = requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(canvas);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animFrame);
    };
  }, [text, sizeMultiplier, cycles, align]);

  return (
    <canvas
      ref={canvasRef}
      className={`w-full transition-opacity duration-300 ${visible ? "opacity-100" : "opacity-0"}`}
    />
  );
}
