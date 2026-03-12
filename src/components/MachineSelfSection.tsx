"use client";

export default function MachineSelfSection() {
  return (
    <div className="relative w-screen h-screen bg-[#07071A] text-white flex flex-col items-center justify-center px-12 py-4 gap-4 overflow-hidden">
      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none opacity-40 bg-[linear-gradient(rgba(255,255,255,0.013)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.013)_1px,transparent_1px)] bg-[size:44px_44px]" />

      {/* HEADER */}
      <div className="text-center max-w-[900px]">
        <div className="inline-block text-[8px] font-bold tracking-[0.2em] uppercase text-[#FF2D6B] border border-[#ff2d6b50] bg-[#ff2d6b12] px-3 py-[3px] rounded mb-2">
          Diagram 6 — Section 7 · Your Machine Self
        </div>

        <div className="text-[clamp(15px,1.7vw,22px)] font-extrabold tracking-[-0.025em]">
          Three numbers. One{" "}
          <span className="bg-gradient-to-r from-[#E8264A] via-[#FF2D6B] to-[#7B1FA2] text-transparent bg-clip-text">
            sovereign economic asset.
          </span>
        </div>
      </div>

      {/* STAT CARDS */}
      <div className="grid grid-cols-3 gap-4 w-full max-w-[900px]">
        {/* CARD 1 */}
        <div className="bg-[#0D0D2B] border border-white/10 rounded p-5 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#E8264A]" />

          <div className="text-[8px] uppercase tracking-[0.2em] font-bold text-[#E8264A]">
            Data Points
          </div>

          <div className="text-[clamp(38px,5vw,64px)] font-extrabold text-[#E8264A] leading-none">
            2,000
          </div>

          <div className="text-white/60 text-sm font-semibold">
            human-created data points
          </div>

          <div className="w-8 h-[2px] bg-[#E8264A] mx-auto my-2" />

          <p className="text-white/60 text-xs leading-relaxed">
            Directly provided by you. Not inferred. Not approximated. Not
            guessable by any AI.
          </p>

          <p className="text-white/30 italic text-[10px] mt-1">
            Stored only on your device. Never transmitted without your consent.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="bg-[#0D0D2B] border border-white/10 rounded p-5 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#FF2D6B]" />

          <div className="text-[8px] uppercase tracking-[0.2em] font-bold text-[#FF2D6B]">
            Total Build Time
          </div>

          <div className="text-[clamp(38px,5vw,64px)] font-extrabold text-[#FF2D6B] leading-none">
            16
          </div>

          <div className="text-white/60 text-sm font-semibold">
            hours of structured human capital
          </div>

          <div className="w-8 h-[2px] bg-[#FF2D6B] mx-auto my-2" />

          <p className="text-white/60 text-xs leading-relaxed">
            A genuine representation of who you are. Built once. Working for you
            continuously.
          </p>

          <p className="text-white/30 italic text-[10px] mt-1">
            Pre-invested capital stored in your Machine Self — permanently
            matchable to any work in the network.
          </p>
        </div>

        {/* CARD 3 */}
        <div className="bg-[#0D0D2B] border border-white/10 rounded p-5 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#FF2D6B] to-[#7B1FA2]" />

          <div className="text-[8px] uppercase tracking-[0.2em] font-bold text-[#7B1FA2]">
            Daily Commitment
          </div>

          <div className="text-[clamp(38px,5vw,64px)] font-extrabold leading-none bg-gradient-to-br from-[#FF2D6B] to-[#7B1FA2] text-transparent bg-clip-text">
            4
          </div>

          <div className="text-white/60 text-sm font-semibold">
            minutes of daily activity
          </div>

          <div className="w-8 h-[2px] bg-[#7B1FA2] mx-auto my-2" />

          <p className="text-white/60 text-xs leading-relaxed">
            From the moment you start — you mine. Every verified contribution
            earns OXIT.
          </p>

          <p className="text-white/30 italic text-[10px] mt-1">
            The building is the mining. The earning never stops.
          </p>
        </div>
      </div>

      {/* DETAIL SECTION */}
      <div className="grid grid-cols-3 gap-4 w-full max-w-[900px] bg-[#0D0D2B] border border-white/10 rounded p-4">
        {/* COLUMN 1 */}
        <div className="flex flex-col gap-2">
          <div className="text-[8px] uppercase tracking-[0.18em] text-[#E8264A] font-bold mb-1">
            What the 2,000 points cover
          </div>

          {[
            "Identity and personal context",
            "Skills, expertise, and capabilities",
            "Behavioural and cognitive signals",
            "Environmental and location context",
            "Unique and unknowable personal intelligence",
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-2 text-[11px] text-white/60"
            >
              <div className="w-[4px] h-[4px] rounded-full bg-[#E8264A] mt-[6px]" />
              {item}
            </div>
          ))}
        </div>

        {/* COLUMN 2 */}
        <div className="flex flex-col gap-2">
          <div className="text-[8px] uppercase tracking-[0.18em] text-[#FF2D6B] font-bold mb-1">
            What the 16 hours produces
          </div>

          {[
            "A fully matchable Machine Self",
            "Eligibility across all network work types",
            "A sovereign digital economic agent",
            "Continuous passive earning capability",
            "Permanent participation in the OX network",
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-2 text-[11px] text-white/60"
            >
              <div className="w-[4px] h-[4px] rounded-full bg-[#FF2D6B] mt-[6px]" />
              {item}
            </div>
          ))}
        </div>

        {/* COLUMN 3 */}
        <div className="flex flex-col gap-2">
          <div className="text-[8px] uppercase tracking-[0.18em] text-[#7B1FA2] font-bold mb-1">
            What 4 minutes a day earns
          </div>

          {[
            "OXIT for every verified contribution",
            "Progress toward a complete Machine Self",
            "Matched commercial work opportunities",
            "Scarce tokens that grow with the network",
            "A machine that earns even while you sleep",
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-2 text-[11px] text-white/60"
            >
              <div className="w-[4px] h-[4px] rounded-full bg-[#7B1FA2] mt-[6px]" />
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* STATEMENT */}
      <div className="w-full max-w-[900px] bg-[#ff2d6b12] border border-[#ff2d6b40] rounded p-3 text-center relative">
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#E8264A] via-[#FF2D6B] to-[#7B1FA2]" />

        <div className="text-sm font-bold">
          Built once. Working continuously.{" "}
          <span className="text-[#FF2D6B]">
            On your terms. Under your consent. Earning on your behalf.
          </span>
        </div>
      </div>

      {/* FOOTER */}
      <div className="w-full max-w-[900px] text-center text-[10px] text-white/40 border-t border-white/10 pt-2">
        <strong className="text-white/60">
          YOUR DATA NEVER LEAVES YOUR DEVICE.
        </strong>{" "}
        The machine may optimise execution — never the human. Consent defines
        the ceiling of autonomy.
      </div>
    </div>
  );
}
