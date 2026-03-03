import { landing } from "@/content/landing";

export default function ValueSection() {
  return (
    <section className="px-6 py-20 md:py-28 bg-gradient-to-b from-transparent via-indigo-950/20 to-transparent">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          {landing.value.headline}
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-zinc-400">
          {landing.value.body}
        </p>
      </div>
    </section>
  );
}
