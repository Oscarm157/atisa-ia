"use client";

import { Slide } from "./slide";
import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

const criteria = [
  { name: "Impacto\nMedible", weight: 40, icon: "speed", description: "Ahorro en tiempo, calidad o costo cuantificable" },
  { name: "Implement.\nViable", weight: 25, icon: "build", description: "Aplicable en el día a día del área" },
  { name: "Innovación", weight: 20, icon: "auto_awesome", description: "Creatividad en el uso de IA" },
  { name: "Escalabilidad", weight: 15, icon: "share", description: "Replicable en otras áreas" },
];

const radarData = criteria.map((c) => ({
  subject: c.name.replace("\n", " "),
  value: c.weight,
}));

export function EvaluacionChart() {
  return (
    <Slide>
      <div className="flex items-center gap-3 mb-4">
        <span className="material-symbols-outlined text-primary" style={{ fontSize: 20 }}>
          assessment
        </span>
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Evaluación
        </span>
      </div>

      <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl leading-tight mb-8 max-w-4xl">
        Criterios de evaluación.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Radar chart */}
        <div className="rounded-2xl border border-card-border bg-card p-6 flex items-center justify-center">
          <ResponsiveContainer width="100%" height={260}>
            <RadarChart data={radarData} cx="50%" cy="50%" outerRadius="75%">
              <PolarGrid stroke="#333" />
              <PolarAngleAxis
                dataKey="subject"
                tick={{ fill: "#aaa", fontSize: 11 }}
              />
              <Radar
                dataKey="value"
                stroke="#CC0000"
                fill="#CC0000"
                fillOpacity={0.2}
                strokeWidth={2}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        {/* Criteria detail */}
        <div className="space-y-4">
          {criteria.map((c) => (
            <div key={c.name} className="rounded-xl border border-card-border bg-card p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary" style={{ fontSize: 18 }}>
                    {c.icon}
                  </span>
                  <span className="font-semibold text-sm">{c.name.replace("\n", " ")}</span>
                </div>
                <span className="font-display font-bold text-lg text-primary">{c.weight}%</span>
              </div>
              <div className="w-full bg-accent rounded-full h-2 mb-2">
                <div
                  className="h-2 rounded-full bg-primary transition-all duration-1000"
                  style={{ width: `${c.weight}%` }}
                />
              </div>
              <p className="text-[11px] text-muted">{c.description}</p>
            </div>
          ))}

          {/* Token indicator */}
          <div className="rounded-xl border border-primary/20 bg-primary/5 p-4">
            <div className="flex items-center gap-2 mb-1">
              <span className="material-symbols-outlined text-primary" style={{ fontSize: 18 }}>
                token
              </span>
              <span className="font-semibold text-sm">Indicador de participación</span>
            </div>
            <p className="text-[11px] text-muted leading-relaxed">
              El consumo de tokens refleja el nivel de experimentación real.
              Cada token es un experimento, una pregunta, un intento de mejora.
            </p>
          </div>
        </div>
      </div>
    </Slide>
  );
}
