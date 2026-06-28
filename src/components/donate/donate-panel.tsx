"use client";

import { useState, useRef } from "react";

type Props = {
  accounts?: unknown[];
};

/* ── Icons ── */

function RecurringIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M17 2l4 4-4 4" />
      <path d="M3 11V9a4 4 0 014-4h14" />
      <path d="M7 22l-4-4 4-4" />
      <path d="M21 13v2a4 4 0 01-4 4H3" />
    </svg>
  );
}

function LoadingSpinner() {
  return (
    <svg
      className="h-5 w-5 animate-spin"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="3"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
}

/* ── Main component ── */

export function DonatePanel({ accounts: _accounts }: Props) {
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [focused, setFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const numericAmount = Number(amount) || 0;

  async function handleDonate() {
    if (numericAmount <= 0) return;
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/mercadopago/subscription", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: numericAmount }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(
          data.code === "MP_NOT_CONFIGURED"
            ? "MercadoPago todavía no está habilitado. Por favor, intentá más tarde."
            : (data.error ?? "Hubo un problema. Intentá de nuevo en unos minutos."),
        );
        return;
      }
      if (data.init_point) window.location.href = data.init_point;
    } catch {
      setError("No pudimos conectar con el servidor. Intentá de nuevo.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div
        className="mx-auto max-w-[480px] overflow-hidden rounded-[18px] bg-paper px-7 py-8 sm:px-9 sm:py-9"
        style={{
          border: "1px solid var(--color-border)",
          boxShadow: "0 8px 32px rgba(31,22,17,0.06)",
        }}
      >
        {/* Header */}
        <div
          className="mb-6 flex items-center justify-center gap-2 rounded-full px-5 py-3"
          style={{
            background: "var(--color-burgundy)",
            color: "#FFFFFF",
            fontSize: "0.88rem",
            fontWeight: 600,
          }}
        >
          <RecurringIcon />
          Suscripción mensual
        </div>

        {/* Label */}
        <p
          className="mb-3 text-ink"
          style={{ fontSize: "0.88rem", fontWeight: 500 }}
        >
          Elegí el monto mensual
        </p>

        {/* Amount input */}
        <div className="mb-5">
          <div
            className="flex items-center overflow-hidden rounded-[12px] transition-all duration-200"
            style={{
              border: focused
                ? "1.5px solid var(--color-burgundy)"
                : "1.5px solid var(--color-border)",
              background: "#FFFFFF",
              boxShadow: focused
                ? "0 0 0 3px rgba(201,171,110,0.15)"
                : "0 1px 3px rgba(31,22,17,0.03)",
              height: "52px",
            }}
          >
            <div
              className="flex h-full items-center justify-center shrink-0"
              style={{
                width: "48px",
                color: focused ? "var(--color-burgundy)" : "var(--color-ink-muted)",
                transition: "color 0.2s",
              }}
            >
              <span
                className="font-display"
                style={{ fontSize: "1.2rem", fontWeight: 700 }}
              >
                $
              </span>
            </div>
            <input
              ref={inputRef}
              type="number"
              inputMode="numeric"
              min={1}
              placeholder="Ingresá el monto que deseás"
              value={amount}
              onChange={(e) => {
                setAmount(e.target.value);
                setError(null);
              }}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              className="font-display h-full flex-1 bg-transparent pr-5 outline-none"
              style={{
                fontSize: "1.05rem",
                color: "var(--color-ink)",
                fontWeight: 600,
              }}
            />
          </div>
        </div>

        {/* Monthly info */}
        <div
          className="mb-4 flex items-start gap-2 rounded-[10px] px-4 py-3"
          style={{
            background: "rgba(90,164,105,0.06)",
            border: "1px solid rgba(90,164,105,0.15)",
          }}
        >
          <RecurringIcon />
          <p style={{ fontSize: "0.8rem", lineHeight: 1.5, color: "var(--color-ink-muted)" }}>
            Se debitará automáticamente cada mes de tu tarjeta de crédito. Podés cancelar cuando quieras desde MercadoPago.
          </p>
        </div>

        {/* Error */}
        {error && (
          <div
            className="mb-4 rounded-[10px] px-4 py-3 text-center"
            style={{
              background: "rgba(201,171,110,0.08)",
              border: "1px solid rgba(201,171,110,0.15)",
            }}
          >
            <p style={{ fontSize: "0.82rem", lineHeight: 1.5, color: "var(--color-ink-muted)" }}>
              {error}
            </p>
          </div>
        )}

        {/* Donate button */}
        <button
          type="button"
          onClick={handleDonate}
          disabled={loading || numericAmount <= 0}
          className="group w-full cursor-pointer overflow-hidden transition-all duration-200 hover:-translate-y-[1px] active:translate-y-0 disabled:pointer-events-none disabled:opacity-40"
          style={{
            background:
              "linear-gradient(180deg, #D4BC82 0%, #C9AB6E 50%, #A8894D 100%)",
            borderRadius: "999px",
            height: "52px",
            boxShadow:
              "0 4px 14px rgba(168,137,77,0.3), inset 0 1px 0 rgba(255,255,255,0.15)",
          }}
        >
          <span
            className="flex items-center justify-center gap-2"
            style={{
              color: "#FFFFFF",
              fontSize: "1rem",
              fontWeight: 600,
            }}
          >
            {loading ? (
              <>
                <LoadingSpinner />
                Conectando...
              </>
            ) : (
              <>
                Suscribirme
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </>
            )}
          </span>
        </button>

        {/* Trust bar */}
        <div style={{ marginTop: "1.5rem" }}>
          <p
            className="mb-2 text-ink-muted"
            style={{ fontSize: "0.72rem", fontWeight: 500, letterSpacing: "0.05em", textTransform: "uppercase" }}
          >
            Pagá con
          </p>
          <div className="flex items-center gap-3">
            {/* MercadoPago */}
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-label="MercadoPago">
              <rect width="32" height="32" rx="8" fill="#00AEEF" />
              <path d="M8.5 18.5C8.5 18.5 10 15 13 15C14.5 15 15.5 15.8 16 16.5C16.5 15.8 17.5 15 19 15C22 15 23.5 18.5 23.5 18.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {/* Visa */}
            <div
              className="flex items-center justify-center rounded-[5px]"
              style={{ width: "38px", height: "24px", background: "#FFF", border: "1px solid var(--color-border)" }}
            >
              <span style={{ fontSize: "0.6rem", fontWeight: 800, color: "#1A1F71" }}>VISA</span>
            </div>
            {/* Mastercard */}
            <div
              className="flex items-center justify-center rounded-[5px]"
              style={{ width: "38px", height: "24px", background: "#FFF", border: "1px solid var(--color-border)" }}
            >
              <svg width="22" height="14" viewBox="0 0 24 15" fill="none" aria-label="Mastercard">
                <circle cx="9" cy="7.5" r="7" fill="#EB001B" opacity="0.85" />
                <circle cx="15" cy="7.5" r="7" fill="#F79E1B" opacity="0.85" />
                <path d="M12 2.2a7 7 0 010 10.6 7 7 0 000-10.6z" fill="#FF5F00" opacity="0.9" />
              </svg>
            </div>
            <span className="text-ink-muted" style={{ fontSize: "0.75rem" }}>
              Más opciones ›
            </span>
          </div>
          <p className="mt-2 flex items-center gap-1 text-ink-muted" style={{ fontSize: "0.7rem" }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ color: "#5AA469" }}>
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            Pago 100% seguro
          </p>
        </div>
      </div>

      {/* Input cleanup styles */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            input[type="number"]::-webkit-inner-spin-button,
            input[type="number"]::-webkit-outer-spin-button {
              -webkit-appearance: none;
              margin: 0;
            }
            input[type="number"] {
              -moz-appearance: textfield;
            }
            input[type="number"]::placeholder {
              font-weight: 400;
              font-size: 0.88rem;
              color: var(--color-ink-muted);
            }
          `,
        }}
      />
    </>
  );
}
