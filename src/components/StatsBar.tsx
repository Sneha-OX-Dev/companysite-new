import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const STATS = [
  {
    value: "1.5M+",
    label: "Citizens",
    tooltip: "People who joined the OX network",
  },
  {
    value: "16h",
    label: "Work / day",
    tooltip: "Your Machine Self can work up to 16 hours a day",
  },
  {
    value: "Your data",
    label: "Your rules",
    tooltip: "You control your data and consent",
  },
  {
    value: "Join",
    label: "The network",
    tooltip: "Become part of the network",
  },
];

export default function StatsBar() {
  return (
    <section className="border-y border-indigo-900/40 bg-indigo-950/40 px-6 py-6">
      <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-8 md:gap-12">
        {STATS.map((stat) => (
          <Tooltip key={stat.label}>
            <TooltipTrigger asChild>
              <div className="flex cursor-help flex-col items-center gap-0.5">
                <span className="text-xl font-bold text-[var(--accent)] md:text-2xl">
                  {stat.value}
                </span>
                <span className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                  {stat.label}
                </span>
              </div>
            </TooltipTrigger>
            <TooltipContent
              side="bottom"
              className="max-w-xs bg-zinc-900 text-zinc-100"
              sideOffset={8}
            >
              {stat.tooltip}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </section>
  );
}
