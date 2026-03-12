"use client";

import {
  Bar,
  BarChart,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ALLOCATION_CHART_DATA } from "@/data/chart-data";

export default function AllocationChart() {
  return (
    <div className="h-[180px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={ALLOCATION_CHART_DATA} layout="vertical" margin={{ left: 20, right: 20 }}>
          <XAxis type="number" hide />
          <YAxis
            type="category"
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "var(--muted)", fontSize: 11 }}
            width={100}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "rgba(15, 20, 36, 0.95)",
              border: "1px solid rgba(99, 102, 241, 0.4)",
              borderRadius: "8px",
            }}
            formatter={(value: number) => [`${value}M OXME`, "Amount"]}
            labelFormatter={(label) => label}
          />
          <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={24}>
            {ALLOCATION_CHART_DATA.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
