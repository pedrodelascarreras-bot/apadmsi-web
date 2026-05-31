"use client";

import { useState } from "react";
import { newsletter } from "@/lib/content";

type Status = "idle" | "submitting" | "ok" | "error";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email || !/\S+@\S+\.\S+/.test(email) || status === "submitting") return;

    setStatus("submitting");
    setError(null);

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, website }),
      });

      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        setError(
          data.error ?? "No pudimos registrarte. Probá de nuevo en un rato."
        );
        setStatus("error");
        return;
      }

      setStatus("ok");
      setEmail("");
    } catch {
      setError("Error de conexión.");
      setStatus("error");
    }
  }

  if (status === "ok") {
    return (
      <div className="rounded-[10px] border border-peach/30 bg-cream/[0.06] px-4 py-3.5">
        <p
          className="font-script text-peach"
          style={{ fontSize: "1.2rem", lineHeight: 1, marginBottom: "0.25rem" }}
        >
          {newsletter.successTitle}
        </p>
        <p className="text-sm text-cream/80" style={{ lineHeight: 1.55 }}>
          {newsletter.successText}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      {/* Honeypot */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "-9999px",
          width: 1,
          height: 1,
          overflow: "hidden",
        }}
      >
        <label htmlFor="newsletter-website">Sitio web</label>
        <input
          id="newsletter-website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-2 sm:flex-row">
        <label htmlFor="newsletter-email" className="sr-only">
          Email
        </label>
        <input
          id="newsletter-email"
          type="email"
          required
          placeholder={newsletter.placeholder}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 rounded-full border border-cream/25 bg-cream/[0.06] px-4 py-2.5 text-sm text-cream placeholder:text-cream/45 focus:border-peach focus:outline-none"
        />
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center justify-center rounded-full bg-peach px-5 py-2.5 text-sm font-bold text-burgundy-deep transition-all hover:bg-cream disabled:opacity-50"
        >
          {status === "submitting" ? "…" : newsletter.cta}
        </button>
      </div>

      {error && (
        <p className="text-xs text-peach" role="alert">
          {error}
        </p>
      )}
    </form>
  );
}
