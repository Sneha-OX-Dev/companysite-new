import Image from "next/image";
import Link from "next/link";
import { landing } from "@/content/landing";

const DOWNLOAD_IMAGE =
  "https://cdn.prod.website-files.com/6601ebe1041cb651c3a023e8/660266e33924a898971724e1_digital%20engagement.webp";

export default function GetTheAppSection() {
  return (
    <section className="px-6 py-16 md:py-24" id="get-the-app">
      <div className="mx-auto max-w-5xl">
        <div className="overflow-hidden rounded-3xl border border-indigo-900/70 bg-gradient-to-br from-indigo-900/70 via-indigo-950/80 to-black/80 px-6 py-10 shadow-[0_0_40px_rgba(0,0,0,0.6),0_0_60px_rgba(255,13,116,0.12)] md:px-10 md:py-12">
          <div className="grid items-center gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
            <div className="relative">
              <Image
                src={DOWNLOAD_IMAGE}
                alt="OX app screens"
                width={640}
                height={480}
                className="w-full max-w-md object-contain"
                priority={false}
              />
            </div>
            <div className="text-left">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Get{" "}
                <span className="text-accent">
                  {landing.getTheApp.headlineHighlight}
                </span>{" "}
                To Earn OXME
              </h2>
              <p className="mt-3 text-lg text-zinc-400">
                {landing.getTheApp.sub}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                {landing.getTheApp.stores.map((store) => (
                  <Link
                    key={store.id}
                    href={store.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-all duration-200 opacity-90 hover:opacity-100 hover:scale-105"
                    aria-label={store.label}
                  >
                    <Image
                      src={store.image}
                      alt={store.label}
                      width={172}
                      height={52}
                      className="h-12 w-auto object-contain sm:h-[52px]"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
