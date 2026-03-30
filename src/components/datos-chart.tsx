"use client";

import { Slide } from "./slide";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Cell,
  LabelList,
} from "recharts";

const adoptionData = [
  { year: "2022", value: 50, label: "50%" },
  { year: "2023", value: 55, label: "55%" },
  { year: "2024", value: 72, label: "72%" },
  { year: "2025*", value: 82, label: "82%*" },
  { year: "2026*", value: 90, label: "90%*" },
];

const stats = [
  { value: "$4.4T", label: "Valor anual que la IA agrega a la economía global", source: "McKinsey, 2024" },
  { value: "55%", label: "Más rápido completan tareas con AI assistants", source: "GitHub Research, 2024" },
  { value: "25%", label: "Más rápido y 40% mejor calidad usando IA", source: "Harvard Business School, 2024" },
];

export function DatosChart() {
  return (
    <Slide>
      <div className="flex items-center gap-3 mb-4">
        <span className="material-symbols-outlined text-primary" style={{ fontSize: 20 }}>
          bar_chart
        </span>
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Los Datos
        </span>
      </div>

      <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl leading-tight mb-8 max-w-4xl">
        Evidencia, no hype.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Chart */}
        <div className="rounded-2xl border border-card-border bg-card p-6">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-muted mb-1">
            Adopción de IA en empresas
          </h3>
          <p className="text-[10px] text-muted/60 mb-4">
            % de empresas con IA en al menos una función — McKinsey State of AI
          </p>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={adoptionData} margin={{ top: 20, right: 0, left: 0, bottom: 0 }}>
              <XAxis
                dataKey="year"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#888", fontSize: 11 }}
              />
              <YAxis hide domain={[0, 100]} />
              <Bar dataKey="value" radius={[6, 6, 0, 0]} barSize={36}>
                {adoptionData.map((entry, i) => (
                  <Cell
                    key={i}
                    fill={i >= 3 ? "rgba(204,0,0,0.3)" : "#CC0000"}
                  />
                ))}
                <LabelList
                  dataKey="label"
                  position="top"
                  fill="#F5F5F5"
                  fontSize={12}
                  fontWeight={700}
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          <p className="text-[10px] text-muted/40 mt-2">* Proyección estimada</p>
        </div>

        {/* KPI Cards */}
        <div className="space-y-4 stagger-in">
          {stats.map((stat) => (
            <div
              key={stat.value}
              className="rounded-xl border border-card-border bg-card p-5 hover:border-primary/30 transition-all"
            >
              <p className="font-display font-extrabold text-3xl text-gradient mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-foreground leading-snug mb-1">{stat.label}</p>
              <p className="text-[10px] text-muted/50 italic">{stat.source}</p>
            </div>
          ))}
        </div>
      </div>
    </Slide>
  );
}
