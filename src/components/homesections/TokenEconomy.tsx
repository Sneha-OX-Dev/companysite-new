import SectionHeader from "@/components/Headings/SectionHeader";

const HUMAN_MINING_POINTS = [
  "Build their Machine Self",
  "Contribute intelligence to the system",
  "Perform work and tasks",
  "Validate outcomes and signals",
  "Coordinate activity between humans and digital systems",
];

const CIRCULAR_STEPS = [
  {
    title: "Humans mine the tokens",
    desc: "Individuals build their Machine Self and participate in the network, earning tokens for verified contributions.",
  },
  {
    title: "Organisations acquire tokens",
    desc: "Third parties obtain tokens in order to access the network and submit job requests.",
  },
  {
    title: "Tokens fund work in the network",
    desc: "Organisations use tokens to request work, intelligence, and validation from the network.",
  },
  {
    title: "Tokens return to the community",
    desc: "Participants complete the work and receive tokens as rewards.",
  },
];

export default function TokenEconomySection() {
  return (
    <section className="relative mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-20 text-white sm:gap-14 sm:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-80 [background-image:radial-gradient(circle_at_top,_rgba(251,191,36,0.22),transparent_55%),radial-gradient(circle_at_bottom,_rgba(248,113,113,0.18),transparent_60%)]"
      />

      <SectionHeader
        pillText="Token Economy"
        title="Token economy — human-mined circular crypto economy"
        subtitle="Organisations pay tokens to access the network. Humans earn those tokens by participating. Fixed supply. Growing demand. Mined only by people."
      />

      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1.1fr)] lg:items-start">
        {/* Human mining narrative */}
        <div className="space-y-5 text-[13px] leading-relaxed text-white/80 sm:text-[14px]">
          <p>
            OX is the Human Agency Layer — and its economy is powered entirely
            by human participation. In the OX protocol, tokens are not created
            through capital investment, financial speculation, or machine
            computation. They are created through human participation.
          </p>
          <p>
            The only way a token enters circulation is when a person builds
            their Machine Self and contributes their time, attention, and
            intelligence to the network. This process is called{" "}
            <span className="font-semibold text-white">human mining</span>.
          </p>

          <div className="rounded-2xl border border-white/10 bg-black/40 p-5 shadow-[0_18px_60px_rgba(0,0,0,0.6)]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/40">
              Human mining
            </p>
            <p className="mt-2">
              Participants join the network by creating their Machine Self — a
              sovereign digital agent that represents their capabilities,
              context, and intelligence. As individuals:
            </p>
            <ul className="mt-3 space-y-2">
              {HUMAN_MINING_POINTS.map((item) => (
                <li key={item} className="relative pl-5">
                  <span className="absolute left-0 top-[9px] h-1.5 w-1.5 rounded-full bg-amber-300 shadow-[0_0_10px_rgba(252,211,77,0.9)]" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-3">
              the protocol distributes tokens to them as rewards for their
              participation. Tokens are therefore mined by humans, not machines.
            </p>
          </div>
        </div>

        {/* Circular economy diagram-style card */}
        <div className="space-y-5 rounded-3xl border border-white/10 bg-black/40 p-6 shadow-[0_22px_80px_rgba(0,0,0,0.75)]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/40">
            The circular economy
          </p>
          <div className="mt-4 grid gap-6 lg:grid-cols-2">
            {CIRCULAR_STEPS.map((step, index) => (
              <div key={step.title} className="space-y-2">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/70">
                  <span className="h-5 w-5 rounded-full bg-amber-400 text-[11px] font-bold text-black">
                    <span className="flex h-full w-full items-center justify-center">
                      {index + 1}
                    </span>
                  </span>
                  {step.title}
                </div>
                <p className="text-[13px] leading-relaxed text-white/75 sm:text-[14px]">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-[13px] leading-relaxed text-white/80 sm:text-[14px]">
            The result is a closed-loop participation economy: humans mine the
            tokens, organisations acquire them to access the network, tokens
            fund work, and then flow back to the humans who do that work.
          </p>
        </div>
      </div>
    </section>
  );
}
