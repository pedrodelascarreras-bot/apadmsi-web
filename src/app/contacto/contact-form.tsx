"use client";

import { useState } from "react";

type Reason =
  | "visita"
  | "voluntariado"
  | "donacion"
  | "derivacion"
  | "prensa"
  | "otro";

const REASON_OPTIONS: { value: Reason; label: string }[] = [
  { value: "visita", label: "Coordinar una visita" },
  { value: "voluntariado", label: "Voluntariado" },
  { value: "donacion", label: "Donación / Colaboración" },
  { value: "derivacion", label: "Derivación de un concurrente" },
  { value: "prensa", label: "Prensa o medios" },
  { value: "otro", label: "Otro motivo" },
];

type Status = "idle" | "submitting" | "ok" | "error";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [reason, setReason] = useState<Reason>("visita");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState(""); // honeypot anti-spam
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const isValid =
    name.trim().length >= 2 &&
    /\S+@\S+\.\S+/.test(email) &&
    message.trim().length >= 10;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!isValid || status === "submitting") return;

    setStatus("submitting");
    setErrorMsg(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          reason,
          message,
          website,
        }),
      });

      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        setErrorMsg(
          data.error ??
            "No pudimos enviar tu mensaje en este momento. Probá llamando al teléfono o escribiéndonos directamente al mail."
        );
        setStatus("error");
        return;
      }

      setStatus("ok");
      setName("");
      setEmail("");
      setPhone("");
      setReason("visita");
      setMessage("");
    } catch {
      setErrorMsg(
        "Hubo un problema al conectar con el servidor. Probá de nuevo en un rato."
      );
      setStatus("error");
    }
  }

  if (status === "ok") {
    return (
      <div
        role="status"
        className="rounded-[12px] border border-burgundy/30 bg-paper p-8"
        style={{ boxShadow: "0 8px 24px rgba(31,22,17,0.04)" }}
      >
        <p className="font-script text-2xl text-burgundy">gracias</p>
        <h2
          className="mt-2"
          style={{ fontSize: "1.5rem", lineHeight: 1.2 }}
        >
          Recibimos tu mensaje.
        </h2>
        <p className="mt-3 text-ink-muted" style={{ fontSize: "1rem", lineHeight: 1.6 }}>
          Te respondemos por mail lo antes posible. Si es algo urgente,
          llamanos al teléfono que figura a la derecha.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="btn-outline-ink mt-6 inline-flex items-center gap-2 rounded-full border-[1.5px] border-ink px-5 py-2.5 text-sm font-semibold"
        >
          Mandar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5"
      aria-label="Formulario de contacto"
    >
      {/* Honeypot anti-spam: invisible para humanos, atrayente para bots */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "-9999px",
          width: "1px",
          height: "1px",
          overflow: "hidden",
        }}
      >
        <label htmlFor="contact-website">Sitio web (no completar)</label>
        <input
          id="contact-website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          id="contact-name"
          label="Nombre y apellido"
          value={name}
          onChange={setName}
          required
          autoComplete="name"
        />
        <Field
          id="contact-email"
          label="Email"
          type="email"
          value={email}
          onChange={setEmail}
          required
          autoComplete="email"
        />
        <Field
          id="contact-phone"
          label="Teléfono (opcional)"
          type="tel"
          value={phone}
          onChange={setPhone}
          autoComplete="tel"
        />
        <div>
          <label
            htmlFor="contact-reason"
            className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-ink-muted"
          >
            Motivo
          </label>
          <select
            id="contact-reason"
            value={reason}
            onChange={(e) => setReason(e.target.value as Reason)}
            className="w-full rounded-[10px] border border-border bg-paper px-4 py-3 text-ink focus:border-burgundy focus:outline-none"
          >
            {REASON_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-ink-muted"
        >
          Mensaje <span className="ml-1 text-burgundy">*</span>
        </label>
        <textarea
          id="contact-message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={6}
          placeholder="Contanos brevemente quién sos y qué te interesaría hacer."
          className="w-full rounded-[10px] border border-border bg-paper px-4 py-3 text-ink placeholder:text-ink-soft focus:border-burgundy focus:outline-none resize-y"
        />
      </div>

      {status === "error" && errorMsg && (
        <div
          role="alert"
          className="rounded-[10px] border border-burgundy/30 bg-burgundy/5 px-5 py-4 text-sm text-burgundy-deep"
        >
          {errorMsg}
        </div>
      )}

      <div className="flex flex-wrap items-center gap-4 pt-2">
        <button
          type="submit"
          disabled={!isValid || status === "submitting"}
          className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-burgundy bg-burgundy px-7 py-3.5 text-sm font-semibold text-white shadow-[0_2px_0_0_var(--color-burgundy-deep)] transition-all hover:bg-burgundy-deep hover:-translate-y-px hover:shadow-[0_3px_0_0_var(--color-burgundy-deep)] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0"
        >
          {status === "submitting" ? "Enviando…" : "Enviar mensaje"}
        </button>
        <p className="text-xs text-ink-soft">
          Respondemos por mail. Tus datos no se comparten con terceros.
        </p>
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  type = "text",
  value,
  onChange,
  required,
  autoComplete,
}: {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-ink-muted"
      >
        {label}
        {required && <span className="ml-1 text-burgundy">*</span>}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        autoComplete={autoComplete}
        className="w-full rounded-[10px] border border-border bg-paper px-4 py-3 text-ink placeholder:text-ink-soft focus:border-burgundy focus:outline-none"
      />
    </div>
  );
}
