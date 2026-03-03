"use client";

import { useState } from "react";
import type { FormEvent } from "react";

import InnerPageLayout from "@/components/InnerPageLayout";
import GetTheAppSection from "@/components/GetTheAppSection";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const body = String(formData.get("message") ?? "").trim();

    if (!name || !email || !body) {
      setStatus("error");
      setMessage("Please fill in all fields before submitting.");
      return;
    }

    setStatus("loading");
    setMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message: body }),
      });

      if (!res.ok) {
        throw new Error("Request failed");
      }

      setStatus("success");
      setMessage("Thanks for reaching out. We’ll get back to you soon.");
      form.reset();
    } catch {
      setStatus("error");
      setMessage("Something went wrong sending your message. Please try again.");
    }
  }

  return (
    <>
      <InnerPageLayout title="Contact Us">
        <p className="mb-6 text-zinc-300">
          Have a question about OX, OXME or the Oxygean app? Send us a message
          using the form below and a member of the team will be in touch.
        </p>
        <form
          onSubmit={handleSubmit}
          className="space-y-4 rounded-xl border border-indigo-900/50 bg-indigo-950/20 p-6"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-1 block text-sm text-zinc-500">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="w-full rounded-lg border border-zinc-700 bg-zinc-900/50 px-4 py-2 text-sm text-white placeholder-zinc-500 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                placeholder="Your name"
                autoComplete="name"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1 block text-sm text-zinc-500">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full rounded-lg border border-zinc-700 bg-zinc-900/50 px-4 py-2 text-sm text-white placeholder-zinc-500 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                placeholder="you@example.com"
                autoComplete="email"
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="mb-1 block text-sm text-zinc-500">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full rounded-lg border border-zinc-700 bg-zinc-900/50 px-4 py-2 text-sm text-white placeholder-zinc-500 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
              placeholder="How can we help?"
            />
          </div>
          <button
            type="submit"
            disabled={status === "loading"}
            className="rounded-lg bg-accent px-6 py-2.5 text-sm font-medium text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === "loading" ? "Sending..." : "Send message"}
          </button>
          {message && (
            <p
              className={
                status === "success"
                  ? "text-sm text-emerald-400"
                  : "text-sm text-rose-400"
              }
            >
              {message}
            </p>
          )}
        </form>
        <p className="mt-6 text-sm text-zinc-500">
          Prefer email? You can also reach us at{" "}
          <a
            href="mailto:support@oxygean.com"
            className="text-accent hover:underline"
          >
            support@oxygean.com
          </a>
          .
        </p>
      </InnerPageLayout>
      <GetTheAppSection />
      <Footer />
    </>
  );
}
