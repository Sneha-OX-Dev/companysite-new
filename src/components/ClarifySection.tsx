import { landing } from "@/content/landing";

export default function ClarifySection() {
  const { clarify } = landing;

  return (
    <section className="border-y border-indigo-900/40 bg-indigo-950/20 px-6 py-12">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-lg font-semibold text-white">
          What you need to know
        </h2>
        <div className="mt-4 space-y-2 text-sm text-zinc-400">
          <p>
            <strong className="text-zinc-200">OX</strong> = {clarify.ox}{" "}
            <strong className="text-zinc-200">Oxygean</strong> = {clarify.oxygean}
          </p>
          <p className="text-[var(--accent)]">{clarify.cryptoOptional}</p>
        </div>
      </div>
    </section>
  );
}
