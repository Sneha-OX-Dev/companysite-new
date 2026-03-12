export default function InnerPageLayout({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-heading text-3xl font-bold text-white text-balance md:text-4xl">{title}</h1>
      <div className="mt-8 text-zinc-400">{children}</div>
    </main>
  );
}
