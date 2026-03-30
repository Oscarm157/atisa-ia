"use client";

import { Slide } from "./slide";
import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const criteria = [
  { name: "Impacto en Tiempo,\nCalidad o Costo", weight: 50, icon: "speed", description: "Cada proyecto debe demostrar mejoras medibles con métricas de antes y después. Este criterio tiene el mayor peso." },
  { name: "Innovación", weight: 30, icon: "auto_awesome", description: "Se evalúa el uso creativo de IA, no solo la automatización básica. Se busca que los colaboradores exploren capacidades nuevas." },
  { name: "Ejecución y\nEscalabilidad", weight: 20, icon: "build", description: "Calidad de la implementación, documentación y potencial para replicarse en otras áreas de Atisa." },
];

const radarData = criteria.map((c) => ({
  subject: c.name.replace("\n", " "),
  value: c.weight,
  label: `${c.weight}%`,
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

      <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mb-8 max-w-4xl">
        Criterios de evaluación.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Radar chart */}
        <div className="rounded-2xl border border-card-border bg-card p-6 flex items-center justify-center">
          <ResponsiveContainer width="100%" height={220}>
            <RadarChart data={radarData} cx="50%" cy="50%" outerRadius="70%">
              <PolarGrid stroke="#333" gridType="polygon" />
              <PolarAngleAxis
                dataKey="subject"
                tick={(props: Record<string, unknown>) => {
                  const { x, y, payload } = props as { x: number; y: number; payload: { value: string } };
                  const item = radarData.find((d) => d.subject === payload.value);
                  return (
                    <g transform={`translate(${x},${y})`}>
                      <text
                        textAnchor="middle"
                        fill="#aaa"
                        fontSize={11}
                        dy={-4}
                      >
                        {payload.value}
                      </text>
                      <text
                        textAnchor="middle"
                        fill="#CC0000"
                        fontSize={12}
                        fontWeight={700}
                        dy={12}
                      >
                        {item?.label}
                      </text>
                    </g>
                  );
                }}
              />
              <PolarRadiusAxis
                domain={[0, 50]}
                tick={false}
                axisLine={false}
              />
              <Radar
                dataKey="value"
                stroke="#CC0000"
                fill="#CC0000"
                fillOpacity={0.2}
                strokeWidth={2}
              />
              <Tooltip
                contentStyle={{
                  background: "#141414",
                  border: "1px solid #333",
                  borderRadius: 8,
                  fontSize: 12,
                }}
                formatter={(value: unknown) => [`${value}%`, "Peso"]}
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
              <p className="text-xs text-muted">{c.description}</p>
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
            <p className="text-xs text-muted leading-relaxed">
              El consumo de tokens refleja el nivel de experimentación real.
              Cada token es un experimento, una pregunta, un intento de mejora.
            </p>
          </div>
        </div>
      </div>
    </Slide>
  );
}
