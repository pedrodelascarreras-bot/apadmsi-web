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
    <div className="mx-auto w-full max-w-[720px]">
      {/* ── Donation card — wide horizontal rectangle ── */}
      <div
        className="relative overflow-hidden rounded-[22px]"
        style={{
          background: "#FEFCF9",
          boxShadow:
            "0 1px 3px rgba(42,31,24,0.04), 0 6px 24px rgba(42,31,24,0.06), 0 16px 48px rgba(42,31,24,0.04)",
          border: "1px solid #EDE3D8",
        }}
      >
        <div className="px-8 pb-9 pt-9 sm:px-14 sm:pb-11 sm:pt-11">
          {/* ── Heart badge ── */}
          <div className="mb-7 flex justify-center">
            <div
              className="flex h-[72px] w-[72px] items-center justify-center rounded-full"
              style={{
                background: "#FDF5F0",
                border: "1.5px solid #EADDD3",
              }}
            >
              {/* Scribble heart — clean symmetric shape with cross-hatch fill */}
              <svg
                width="36"
                height="34"
                viewBox="0 0 36 34"
                fill="none"
                aria-hidden="true"
              >
                {/* Soft fill */}
                <path
                  d="M18 30C18 30 4 21 4 12C4 7.5 7.5 4 11 4C13.5 4 15.5 5.2 17 7L18 8.5L19 7C20.5 5.2 22.5 4 25 4C28.5 4 32 7.5 32 12C32 21 18 30 18 30Z"
                  fill="#C61F32"
                  opacity="0.15"
                />
                {/* Main outline — clean, symmetric heart */}
                <path
                  d="M18 29C18 29 4.5 20.5 4.5 11.8C4.5 7.8 7.5 4.8 11 4.8C13.3 4.8 15.3 6 17 8L18 9.5L19 8C20.7 6 22.7 4.8 25 4.8C28.5 4.8 31.5 7.8 31.5 11.8C31.5 20.5 18 29 18 29Z"
                  stroke="#C61F32"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Cross-hatch scribble lines inside */}
                <path d="M10 12C12 10 15 10 17 12" stroke="#C61F32" strokeWidth="1.3" strokeLinecap="round" opacity="0.5" />
                <path d="M12 10.5C14 9 17 9.5 18.5 11.5" stroke="#C61F32" strokeWidth="1.1" strokeLinecap="round" opacity="0.4" />
                <path d="M19 10C21 8.5 24 9 25.5 11" stroke="#C61F32" strokeWidth="1.3" strokeLinecap="round" opacity="0.5" />
                <path d="M20.5 9C22.5 8 25 8.5 26 10.5" stroke="#C61F32" strokeWidth="1.1" strokeLinecap="round" opacity="0.35" />
                <path d="M11 14C14 13 17 14 18 16" stroke="#C61F32" strokeWidth="1.1" strokeLinecap="round" opacity="0.35" />
                <path d="M20 13C22 12.5 24.5 13 25 15" stroke="#C61F32" strokeWidth="1.1" strokeLinecap="round" opacity="0.3" />
                <path d="M14 16C16 15.5 18 16.5 18 18" stroke="#C61F32" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
                <path d="M20 16C21.5 15.5 23 16 23 17.5" stroke="#C61F32" strokeWidth="1" strokeLinecap="round" opacity="0.25" />
              </svg>
            </div>
          </div>

          {/* ── Headline ── */}
          <div className="mb-5 text-center">
            <h3
              className="font-display"
              style={{
                fontSize: "clamp(1.5rem, 3vw, 1.75rem)",
                fontWeight: 700,
                lineHeight: 1.25,
                color: "#2B2B2B",
                marginBottom: "0.5rem",
                letterSpacing: "-0.01em",
              }}
            >
              Doná lo que quieras,{" "}
              <em style={{ fontStyle: "italic", color: "#C61F32" }}>
                cambiá realidades
              </em>
              .
            </h3>
            <p style={{ fontSize: "0.95rem", color: "#7B716A", lineHeight: 1.55 }}>
              Vos elegís el monto, nosotros lo convertimos en oportunidades.
            </p>
          </div>

          {/* ── Decorative dashed path with heart — STRONG RED ── */}
          <div
            className="relative mx-auto mb-7"
            style={{ height: "30px", maxWidth: "100%" }}
          >
            <svg
              width="100%"
              height="30"
              viewBox="0 0 600 30"
              preserveAspectRatio="none"
              fill="none"
              aria-hidden="true"
              style={{ overflow: "visible" }}
            >
              <path
                d="M0 18 C60 18, 80 6, 140 10 S220 22, 300 14 S400 6, 460 16 S540 10, 570 14"
                stroke="#C61F32"
                strokeWidth="1.6"
                strokeDasharray="7 5"
                strokeLinecap="round"
                opacity="0.55"
              />
            </svg>
            {/* Heart at end of path — clean symmetric outline */}
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
              className="absolute -top-[1px]"
              style={{ right: "-2px", opacity: 0.55 }}
            >
              <path
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                stroke="#C61F32"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          </div>

          {/* ── Input field ── */}
          <div className="mb-6">
            <div
              className="flex items-center overflow-hidden rounded-[14px] transition-all duration-200"
              style={{
                border: focused ? "1.5px solid #C61F32" : "1.5px solid #E2D7CC",
                background: "#FFFFFF",
                boxShadow: focused
                  ? "0 0 0 3px rgba(198,31,50,0.08)"
                  : "0 1px 3px rgba(42,31,24,0.03)",
                height: "58px",
              }}
            >
              <div
                className="flex h-full items-center justify-center shrink-0"
                style={{
                  width: "58px",
                  color: focused ? "#C61F32" : "#A09488",
                  transition: "color 0.2s",
                }}
              >
                <span
                  className="font-display"
                  style={{ fontSize: "1.4rem", fontWeight: 700 }}
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
                className="font-display h-full flex-1 bg-transparent pr-6 outline-none"
                style={{
                  fontSize: "1.2rem",
                  color: "#2B2B2B",
                  fontWeight: 600,
                  letterSpacing: "-0.01em",
                }}
              />
            </div>
          </div>

          {/* Error message */}
          {error && (
            <div
              className="mb-5 rounded-[12px] px-4 py-3 text-center"
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
              background:
                "linear-gradient(180deg, #D93045 0%, #B91C2C 50%, #A01726 100%)",
              borderRadius: "999px",
              height: "58px",
              boxShadow:
                "0 4px 14px rgba(185,28,44,0.3), 0 1px 3px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.15)",
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
                fontSize: "1.1rem",
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
                  <svg
                    width="19"
                    height="19"
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

          {/* ── Trust bar ── */}
          <div
            className="mt-7 rounded-[12px] px-5 py-4 sm:px-6"
            style={{
              background: "#F7F2EC",
              border: "1px solid #EBE1D6",
            }}
          >
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-between sm:gap-4">
              {/* MercadoPago logo + brand */}
              <div className="flex items-center gap-2.5">
                {/* MP official logo — the handshake icon */}
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  aria-label="MercadoPago"
                >
                  <rect width="32" height="32" rx="8" fill="#00AEEF" />
                  <path
                    d="M8.5 18.5C8.5 18.5 10 15 13 15C14.5 15 15.5 15.8 16 16.5C16.5 15.8 17.5 15 19 15C22 15 23.5 18.5 23.5 18.5"
                    stroke="white"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7 20C7 20 9.5 14 13 14C14.8 14 15.8 15.2 16 15.8C16.2 15.2 17.2 14 19 14C22.5 14 25 20 25 20"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    opacity="0.5"
                  />
                  <ellipse cx="16" cy="21" rx="7" ry="1.5" fill="white" opacity="0.15" />
                </svg>
                <div className="flex flex-col">
                  <span
                    style={{
                      fontSize: "0.82rem",
                      fontWeight: 700,
                      color: "#2B2B2B",
                      lineHeight: 1.2,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    MercadoPago
                  </span>
                  <span
                    style={{
                      fontSize: "0.7rem",
                      color: "#9B9189",
                      lineHeight: 1.3,
                    }}
                  >
                    Plataforma de pago segura
                  </span>
                </div>
              </div>

              {/* Separator — only on desktop */}
              <div
                className="hidden sm:block"
                style={{
                  width: "1px",
                  height: "28px",
                  background: "#DDD3C8",
                  flexShrink: 0,
                }}
              />

              {/* Payment methods */}
              <div className="flex items-center gap-3">
                {/* Visa */}
                <div
                  className="flex items-center justify-center rounded-[6px]"
                  style={{
                    width: "42px",
                    height: "28px",
                    background: "#FFFFFF",
                    border: "1px solid #E2D7CC",
                  }}
                >
                  <span style={{ fontSize: "0.65rem", fontWeight: 800, color: "#1A1F71", letterSpacing: "0.03em" }}>
                    VISA
                  </span>
                </div>
                {/* Mastercard */}
                <div
                  className="flex items-center justify-center rounded-[6px]"
                  style={{
                    width: "42px",
                    height: "28px",
                    background: "#FFFFFF",
                    border: "1px solid #E2D7CC",
                  }}
                >
                  <svg width="24" height="15" viewBox="0 0 24 15" fill="none" aria-label="Mastercard">
                    <circle cx="9" cy="7.5" r="7" fill="#EB001B" opacity="0.85" />
                    <circle cx="15" cy="7.5" r="7" fill="#F79E1B" opacity="0.85" />
                    <path d="M12 2.2a7 7 0 010 10.6 7 7 0 000-10.6z" fill="#FF5F00" opacity="0.9" />
                  </svg>
                </div>
                {/* Debit card */}
                <div
                  className="flex items-center justify-center rounded-[6px]"
                  style={{
                    width: "42px",
                    height: "28px",
                    background: "#FFFFFF",
                    border: "1px solid #E2D7CC",
                  }}
                >
                  <svg width="18" height="14" viewBox="0 0 24 18" fill="none" aria-label="Débito">
                    <rect x="1" y="1" width="22" height="16" rx="2.5" stroke="#9B9189" strokeWidth="1.5" />
                    <line x1="1" y1="6.5" x2="23" y2="6.5" stroke="#9B9189" strokeWidth="1.5" />
                    <rect x="3.5" y="10" width="6" height="2" rx="0.5" fill="#9B9189" opacity="0.5" />
                  </svg>
                </div>
              </div>

              {/* Separator — only on desktop */}
              <div
                className="hidden sm:block"
                style={{
                  width: "1px",
                  height: "28px",
                  background: "#DDD3C8",
                  flexShrink: 0,
                }}
              />

              {/* Secure badge */}
              <div className="flex items-center gap-1.5">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#5AA469"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <polyline points="9 12 11 14 15 10" />
                </svg>
                <span
                  style={{
                    fontSize: "0.78rem",
                    fontWeight: 600,
                    color: "#5AA469",
                    letterSpacing: "0.01em",
                  }}
                >
                  Pago seguro
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Keyframes + input cleanup */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes mp-shimmer {
              0% { transform: translateX(-100%); }
              100% { transform: translateX(100%); }
            }
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
              font-size: 0.95rem;
              color: #B5ADA5;
              letter-spacing: 0.01em;
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
