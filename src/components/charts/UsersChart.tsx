"use client";

import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { USERS_CHART_DATA } from "@/data/chart-data";

export default function UsersChart() {
  return (
    <div className="h-[280px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={USERS_CHART_DATA}>
          <defs>
            <linearGradient id="usersGradient" x1="0" y1="0" x2="0" y2="1">
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
            tickFormatter={(v) => `${v}M`}
            domain={[0, "auto"]}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "rgba(15, 20, 36, 0.95)",
              border: "1px solid rgba(99, 102, 241, 0.4)",
              borderRadius: "8px",
            }}
            labelStyle={{ color: "var(--foreground)" }}
            formatter={(value: number) => [
              `${(value * 1_000_000).toLocaleString()}`,
              "Users",
            ]}
            labelFormatter={(label) => `Month: ${label}`}
          />
          <Area
            type="monotone"
            dataKey="users"
            stroke="var(--accent)"
            strokeWidth={2}
            fill="url(#usersGradient)"
          />
        </AreaChart>
      </ResponsiveContainer>
      <p className="mt-2 text-center text-xs text-zinc-500">
        Illustrative: Network growth (millions of citizens)
      </p>
    </div>
  );
}
