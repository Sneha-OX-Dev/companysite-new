"use client";

import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { EMISSIONS_CHART_DATA } from "@/data/chart-data";

export default function EmissionsChart() {
  return (
    <div className="h-[280px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={EMISSIONS_CHART_DATA}>
          <XAxis
            dataKey="period"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "var(--muted)", fontSize: 12 }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: "var(--muted)", fontSize: 12 }}
            domain={[0, "auto"]}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "rgba(15, 20, 36, 0.95)",
              border: "1px solid rgba(99, 102, 241, 0.4)",
              borderRadius: "8px",
            }}
            labelStyle={{ color: "var(--foreground)" }}
            formatter={(value: number) => [value.toFixed(2), "Emissions"]}
            labelFormatter={(label) => `Period: ${label}`}
          />
          <Bar
            dataKey="emissions"
            fill="var(--accent)"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
      <p className="mt-2 text-center text-xs text-zinc-500">
        Illustrative: emissions decline over time (infinite halving)
      </p>
    </div>
  );
}
