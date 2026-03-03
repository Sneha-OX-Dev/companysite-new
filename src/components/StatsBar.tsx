const STATS = [
  { value: "1.5M+", label: "Citizens" },
  { value: "16h", label: "Work / day" },
  { value: "Your data", label: "Your rules" },
  { value: "Join", label: "The network" },
];

export default function StatsBar() {
  return (
    <section className="border-y border-indigo-900/40 bg-indigo-950/40 px-6 py-6">
      <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-8 md:gap-12">
        {STATS.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center gap-0.5">
            <span className="text-xl font-bold text-[var(--accent)] md:text-2xl">{stat.value}</span>
            <span className="text-xs font-medium uppercase tracking-wider text-zinc-500">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
