"use client";

import { useState, useRef } from "react";

export function MercadoPagoButton() {
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
      const res = await fetch("/api/mercadopago", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: numericAmount }),
      });

      const data = await res.json();

      if (!res.ok) {
        if (data.code === "MP_NOT_CONFIGURED") {
          setError(
            "MercadoPago todavía no está habilitado. Mientras tanto, podés donar por transferencia bancaria más arriba."
          );
        } else {
          setError(
            data.error ?? "Hubo un problema. Intentá de nuevo en unos minutos."
          );
        }
        return;
      }

      if (data.init_point) {
        window.location.href = data.init_point;
      }
    } catch {
      setError("No pudimos conectar con el servidor. Intentá de nuevo.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto w-full max-w-[560px]">
      {/* ── Donation card ── */}
      <div
        className="relative overflow-hidden rounded-[24px]"
        style={{
          background: "#FEFCF9",
          boxShadow:
            "0 1px 3px rgba(42,31,24,0.04), 0 6px 24px rgba(42,31,24,0.06), 0 16px 48px rgba(42,31,24,0.04)",
          border: "1px solid #EDE3D8",
        }}
      >
        <div className="px-7 pb-8 pt-8 sm:px-10 sm:pb-10 sm:pt-10">
          {/* ── Heart badge ── */}
          <div className="mb-6 flex justify-center">
            <div
              className="flex h-[64px] w-[64px] items-center justify-center rounded-full"
              style={{
                background: "#FDF5F0",
                border: "1.5px solid #EADDD3",
              }}
            >
              {/* Hand-drawn scribble heart */}
              <svg
                width="32"
                height="30"
                viewBox="0 0 32 30"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M16 28C16 28 3 20 3 10.5C3 6 6.5 3 10 3C12.5 3 14.5 4.5 16 6.5C17.5 4.5 19.5 3 22 3C25.5 3 29 6 29 10.5C29 20 16 28 16 28Z"
                  fill="#C61F32"
                  opacity="0.12"
                />
                <path
                  d="M16 26S4.5 19 4.5 10.5C4.5 6.8 7.2 4.2 10.2 4.2c2 0 3.8 1 5 2.8.4.6.5.6.8.1 1.2-1.8 3-2.9 5-2.9 3 0 5.7 2.6 5.7 6.3C27.2 19 16 26 16 26Z"
                  stroke="#C61F32"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
                {/* Scribble lines inside heart for hand-drawn feel */}
                <path
                  d="M10 11c1.5-1 3.5-.5 4.5 1s.5 3.5-1 4.5"
                  stroke="#C61F32"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  opacity="0.5"
                />
                <path
                  d="M13 9.5c2-1 4.5 0 5.5 2s0 4-2 5"
                  stroke="#C61F32"
                  strokeWidth="1"
                  strokeLinecap="round"
                  opacity="0.35"
                />
                <path
                  d="M18 10c1.5-.5 3.5.5 4 2s-.5 3-2 3.5"
                  stroke="#C61F32"
                  strokeWidth="1"
                  strokeLinecap="round"
                  opacity="0.4"
                />
              </svg>
            </div>
          </div>

          {/* ── Headline ── */}
          <div className="mb-5 text-center">
            <h3
              className="font-display"
              style={{
                fontSize: "1.55rem",
                fontWeight: 700,
                lineHeight: 1.25,
                color: "#2B2B2B",
                marginBottom: "0.5rem",
                letterSpacing: "-0.01em",
              }}
            >
              Doná lo que quieras,{" "}
              <em
                style={{
                  fontStyle: "italic",
                  color: "#C61F32",
                }}
              >
                cambiá realidades
              </em>
              .
            </h3>
            <p
              style={{
                fontSize: "0.95rem",
                color: "#7B716A",
                lineHeight: 1.55,
              }}
            >
              Vos elegís el monto, nosotros lo convertimos en oportunidades.
            </p>
          </div>

          {/* ── Decorative dashed line with heart ── */}
          <div
            className="relative mx-auto mb-6"
            style={{ height: "24px", maxWidth: "100%" }}
          >
            <svg
              width="100%"
              height="24"
              viewBox="0 0 400 24"
              preserveAspectRatio="none"
              fill="none"
              aria-hidden="true"
              style={{ overflow: "visible" }}
            >
              <path
                d="M0 12 C80 12, 100 4, 180 8 S280 18, 340 10 S380 6, 400 12"
                stroke="#C61F32"
                strokeWidth="1.2"
                strokeDasharray="6 4"
                strokeLinecap="round"
                opacity="0.35"
              />
            </svg>
            {/* Small heart at end of line */}
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden="true"
              className="absolute -top-[2px] right-0"
              style={{ opacity: 0.4 }}
            >
              <path
                d="M10 17l-1-1C5 12.5 3 10.5 3 8.2 3 6.4 4.4 5 6.2 5c1 0 2 .5 2.6 1.2L10 7.5l1.2-1.3C11.8 5.5 12.8 5 13.8 5 15.6 5 17 6.4 17 8.2c0 2.3-2 4.3-6 8L10 17z"
                stroke="#C61F32"
                strokeWidth="1"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </div>

          {/* ── Input field ── */}
          <div className="mb-5">
            <div
              className="flex items-center overflow-hidden rounded-[14px] transition-all duration-200"
              style={{
                border: focused
                  ? "1.5px solid #C61F32"
                  : "1.5px solid #E2D7CC",
                background: "#FFFFFF",
                boxShadow: focused
                  ? "0 0 0 3px rgba(198,31,50,0.08)"
                  : "0 1px 3px rgba(42,31,24,0.03)",
                height: "56px",
              }}
            >
              <div
                className="flex h-full items-center justify-center shrink-0"
                style={{
                  width: "56px",
                  color: focused ? "#C61F32" : "#A09488",
                }}
              >
                <span
                  className="font-display"
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: 600,
                    transition: "color 0.2s",
                  }}
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
                className="h-full flex-1 bg-transparent pr-5 outline-none"
                style={{
                  fontSize: "1rem",
                  color: "#2B2B2B",
                  fontWeight: 400,
                  letterSpacing: "0.01em",
                }}
              />
            </div>
          </div>

          {/* Error message */}
          {error && (
            <div
              className="mb-4 rounded-[12px] px-4 py-3 text-center"
              style={{
                background: "rgba(198,31,50,0.06)",
                border: "1px solid rgba(198,31,50,0.12)",
              }}
            >
              <p style={{ fontSize: "0.85rem", lineHeight: 1.5, color: "#7B716A" }}>
                {error}
              </p>
            </div>
          )}

          {/* ── CTA Button ── */}
          <button
            type="button"
            onClick={handleDonate}
            disabled={loading || numericAmount <= 0}
            className="group relative w-full cursor-pointer overflow-hidden transition-all duration-200 hover:-translate-y-[1px] active:translate-y-0 disabled:pointer-events-none disabled:opacity-40"
            style={{
              background: "linear-gradient(180deg, #D93045 0%, #B91C2C 50%, #A01726 100%)",
              borderRadius: "999px",
              height: "56px",
              boxShadow:
                "0 4px 12px rgba(185,28,44,0.3), 0 1px 3px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.15)",
            }}
          >
            {/* Shimmer on hover */}
            <div
              className="pointer-events-none absolute inset-0 -translate-x-full group-hover:animate-[mp-shimmer_1.2s_ease-in-out]"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent)",
                borderRadius: "inherit",
              }}
            />

            <span
              className="relative z-10 flex items-center justify-center gap-2.5"
              style={{
                color: "#FFFFFF",
                fontSize: "1.05rem",
                fontWeight: 600,
                letterSpacing: "0.02em",
              }}
            >
              {loading ? (
                <>
                  <LoadingSpinner />
                  <span>Conectando...</span>
                </>
              ) : (
                <>
                  <span>Quiero donar</span>
                  {/* Heart icon */}
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:scale-110"
                  >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </>
              )}
            </span>
          </button>

          {/* ── Trust signals ── */}
          <div
            className="mt-5 flex items-center justify-center gap-3 sm:gap-4"
            style={{ color: "#9B9189", fontSize: "0.78rem" }}
          >
            <span className="flex items-center gap-1.5">
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0110 0v4" />
              </svg>
              Pago seguro
            </span>
            <span
              aria-hidden="true"
              style={{
                width: "1px",
                height: "14px",
                background: "#DDD3C8",
                display: "inline-block",
              }}
            />
            <span className="flex items-center gap-1.5">
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              MercadoPago
            </span>
            <span
              aria-hidden="true"
              style={{
                width: "1px",
                height: "14px",
                background: "#DDD3C8",
                display: "inline-block",
              }}
            />
            <span className="flex items-center gap-1.5">
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                <line x1="1" y1="10" x2="23" y2="10" />
              </svg>
              Débito · Crédito
            </span>
          </div>
        </div>
      </div>

      {/* Shimmer keyframe */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes mp-shimmer {
              0% { transform: translateX(-100%); }
              100% { transform: translateX(100%); }
            }
            /* Remove number input spinners */
            input[type="number"]::-webkit-inner-spin-button,
            input[type="number"]::-webkit-outer-spin-button {
              -webkit-appearance: none;
              margin: 0;
            }
            input[type="number"] {
              -moz-appearance: textfield;
            }
          `,
        }}
      />
    </div>
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
