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

const roiData = [
  { name: "Inversión\nIA anual", value: 60, label: "$60K", color: "#CC0000" },
  { name: "1 FTE\nanual", value: 180, label: "$180K", color: "#333" },
  { name: "Ahorro\nproyectado", value: 300, label: "$300K+", color: "#10b981" },
];

const kpis = [
  { label: "Costo por persona/mes", value: "$20 USD", sub: "Plan Pro de IA" },
  { label: "Empleados administrativos", value: "~250", sub: "Target del challenge" },
  { label: "Inversión total anual", value: "$60K USD", sub: "$5K USD/mes" },
  { label: "Break-even", value: "1 proceso", sub: "Un solo proceso optimizado cubre la inversión" },
];

export function Inversion() {
  return (
    <Slide>
      <div className="flex items-center gap-3 mb-4">
        <span className="material-symbols-outlined text-primary" style={{ fontSize: 20 }}>
          account_balance
        </span>
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Inversión & ROI
        </span>
      </div>

      <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl leading-tight mb-8 max-w-4xl">
        Los números.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* KPI Grid */}
        <div className="grid grid-cols-2 gap-3 stagger-in">
          {kpis.map((kpi) => (
            <div key={kpi.label} className="rounded-xl border border-card-border bg-card p-4">
              <p className="text-[10px] text-muted uppercase tracking-wider mb-1">{kpi.label}</p>
              <p className="font-display font-extrabold text-2xl text-gradient">{kpi.value}</p>
              <p className="text-[10px] text-muted/60 mt-1">{kpi.sub}</p>
            </div>
          ))}
        </div>

        {/* ROI Chart */}
        <div className="rounded-2xl border border-card-border bg-card p-6">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-muted mb-1">
            Comparativa de inversión (USD/año)
          </h3>
          <p className="text-[10px] text-muted/60 mb-4">
            Inversión en IA vs costo de 1 empleado vs ahorro proyectado
          </p>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={roiData} margin={{ top: 20, right: 0, left: 0, bottom: 0 }}>
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#888", fontSize: 10 }}
                interval={0}
              />
              <YAxis hide domain={[0, 350]} />
              <Bar dataKey="value" radius={[6, 6, 0, 0]} barSize={48}>
                {roiData.map((entry, i) => (
                  <Cell key={i} fill={entry.color} />
                ))}
                <LabelList
                  dataKey="label"
                  position="top"
                  fill="#F5F5F5"
                  fontSize={13}
                  fontWeight={700}
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>

          <div className="mt-3 px-3 py-2 rounded-lg bg-accent text-center">
            <p className="text-xs text-muted">
              La inversión total en IA equivale a{" "}
              <span className="text-foreground font-semibold">⅓ del costo de un solo empleado</span>
            </p>
          </div>
        </div>
      </div>
    </Slide>
  );
}
