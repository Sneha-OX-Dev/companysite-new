"use client";

import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { TOKEN_CHART_DATA } from "@/data/chart-data";

interface TokenChartProps {
  compact?: boolean;
}

export default function TokenChart({ compact = false }: TokenChartProps) {
  return (
    <div className={compact ? "h-[180px] w-full md:h-[200px]" : "h-[280px] w-full"}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={TOKEN_CHART_DATA}>
          <defs>
            <linearGradient id="tokenGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--accent)" stopOpacity={0.4} />
              <stop offset="100%" stopColor="var(--accent)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "var(--muted)", fontSize: 12 }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: "var(--muted)", fontSize: 12 }}
            tickFormatter={(v) => `$${v}`}
            domain={[0, "auto"]}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "rgba(15, 20, 36, 0.95)",
              border: "1px solid rgba(99, 102, 241, 0.4)",
              borderRadius: "8px",
            }}
            labelStyle={{ color: "var(--foreground)" }}
            formatter={(value: number) => [`$${value.toFixed(2)}`, "1k OXIT ≈"]}
            labelFormatter={(label) => `Month: ${label}`}
          />
          <Area
            type="monotone"
            dataKey="price"
            stroke="var(--accent)"
            strokeWidth={2}
            fill="url(#tokenGradient)"
          />
        </AreaChart>
      </ResponsiveContainer>
      {!compact && (
        <p className="mt-2 text-center text-xs text-zinc-500">
          Illustrative: 1,000 OXIT value over time
        </p>
      )}
    </div>
  );
}
