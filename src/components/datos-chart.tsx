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
  { year: "2025", value: 88, label: "88%" },
  { year: "2026*", value: 93, label: "93%*" },
];

const stats = [
  { value: "88%", label: "De las organizaciones ya despliegan IA en al menos una función de negocio. El salto más grande fue entre 2024 y 2025, impulsado por agentes de IA y herramientas integradas.", source: "McKinsey State of AI, Nov 2025" },
  { value: "66%", label: "De las empresas reportan ganancias significativas en productividad con IA. Los equipos que rediseñaron sus flujos de trabajo (no solo agregaron IA) ven el mayor impacto.", source: "Deloitte State of AI in the Enterprise, 2026" },
  { value: "$3.70", label: "Retorno por cada dólar invertido en IA a nivel empresarial. Las empresas que escalan IA más allá de pilotos ven un ROI de hasta 171% en agentes que llegan a producción.", source: "EY AI Pulse Survey / IBM, 2025" },
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

      <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl leading-tight mb-3 max-w-4xl">
        Adopción global de IA.
      </h2>
      <p className="text-muted text-base leading-relaxed mb-8 max-w-3xl">
        La integración de IA en empresas se ha acelerado en los últimos 3 años.
        Los datos muestran un impacto medible en productividad, calidad y valor económico.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Chart */}
        <div className="rounded-2xl border border-card-border bg-card p-6">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-muted mb-1">
            Adopción de IA en empresas
          </h3>
          <p className="text-xs text-muted/60 mb-4">
            % de empresas con IA en al menos una función (McKinsey State of AI, 2025)
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
                    fill={i >= 4 ? "rgba(204,0,0,0.3)" : "#CC0000"}
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
          <p className="text-xs text-muted/40 mt-2">* Proyección estimada</p>
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
              <p className="text-xs text-muted/50 italic">{stat.source}</p>
            </div>
          ))}
        </div>
      </div>
    </Slide>
  );
}
