"use client";

import { useState } from "react";

type Variant = "light" | "dark";

type Props = {
  value: string;
  /** Si true, muestra botón de copiar al lado. */
  copyable?: boolean;
  /** Tema visual. "dark" para fondos oscuros (banner Donar del home). */
  variant?: Variant;
  /** Etiqueta accesible para el botón. */
  ariaLabel?: string;
};

export function Copyable({
  value,
  copyable = true,
  variant = "light",
  ariaLabel,
}: Props) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // ignore
    }
  }

  const textColor =
    variant === "dark"
      ? "rgba(251,246,238,0.92)"
      : "var(--color-ink)";
  const btnBg =
    variant === "dark"
      ? "rgba(251,246,238,0.08)"
      : "var(--color-cream-warm)";
  const btnHoverBg =
    variant === "dark"
      ? "var(--color-peach)"
      : "var(--color-burgundy)";
  const btnColor =
    variant === "dark" ? "var(--color-peach)" : "var(--color-burgundy)";
  const btnHoverColor =
    variant === "dark"
      ? "var(--color-burgundy-deep)"
      : "var(--color-cream)";

  return (
    <span className="inline-flex flex-1 items-center gap-2 min-w-0">
      <span
        className="flex-1 break-all"
        style={{
          color: textColor,
          fontSize: "0.95rem",
          letterSpacing: "0.01em",
          fontWeight: 500,
        }}
      >
        {value}
      </span>
      {copyable && (
        <button
          type="button"
          onClick={copy}
          aria-label={
            copied
              ? "Copiado"
              : ariaLabel
                ? `Copiar ${ariaLabel}`
                : "Copiar"
          }
          className="copy-btn shrink-0 grid h-7 w-7 place-items-center rounded-md transition-all"
          style={{
            background: copied ? btnHoverBg : btnBg,
            color: copied ? btnHoverColor : btnColor,
          }}
        >
          {copied ? (
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="5 12 10 17 19 7" />
            </svg>
          ) : (
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="9" y="9" width="11" height="11" rx="2" />
              <path d="M5 15V5a2 2 0 0 1 2-2h10" />
            </svg>
          )}
        </button>
      )}
    </span>
  );
}
