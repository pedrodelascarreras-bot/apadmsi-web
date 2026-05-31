"use client";

import { useState, useRef, useEffect } from "react";

const PRESET_AMOUNTS = [
  { value: 1000, label: "$1.000", desc: "Un día de materiales" },
  { value: 2500, label: "$2.500", desc: "Una semana de meriendas" },
  { value: 5000, label: "$5.000", desc: "Un taller completo" },
  { value: 10000, label: "$10.000", desc: "Medio mes de transporte" },
];

function formatARS(n: number) {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(n);
}

export function MercadoPagoButton() {
  const [selected, setSelected] = useState<number>(2500);
  const [custom, setCustom] = useState("");
  const [isCustom, setIsCustom] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [pulse, setPulse] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const amount = isCustom ? Number(custom) || 0 : selected;

  // Pulse animation on amount change
  useEffect(() => {
    setPulse(true);
    const t = setTimeout(() => setPulse(false), 300);
    return () => clearTimeout(t);
  }, [amount]);

  async function handleDonate() {
    if (amount <= 0) return;

    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/mercadopago", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount }),
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
    <div className="mx-auto w-full max-w-[520px]">
      {/* ── Donation card ── */}
      <div
        className="relative overflow-hidden rounded-[20px] border border-border"
        style={{
          background:
            "linear-gradient(170deg, #FFFFFF 0%, var(--color-cream) 50%, var(--color-cream-warm) 100%)",
          boxShadow:
            "0 1px 2px rgba(42,31,24,0.04), 0 8px 32px rgba(42,31,24,0.08), 0 20px 48px rgba(185,28,44,0.06)",
        }}
      >
        {/* Decorative top stripe */}
        <div
          className="h-[4px] w-full"
          style={{
            background:
              "linear-gradient(90deg, var(--color-burgundy), var(--color-peach), var(--color-burgundy))",
          }}
        />

        <div className="px-5 pb-7 pt-6 sm:px-8 sm:pb-8 sm:pt-7">
          {/* Header with heart badge */}
          <div className="mb-6 text-center">
            <div
              className="mx-auto mb-3 flex h-[52px] w-[52px] items-center justify-center rounded-full"
              style={{
                background:
                  "linear-gradient(135deg, var(--color-burgundy), var(--color-burgundy-deep))",
                boxShadow: "0 4px 16px rgba(185,28,44,0.3)",
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                  fill="white"
                />
              </svg>
            </div>
            <h3
              className="font-display text-ink"
              style={{
                fontSize: "1.3rem",
                fontWeight: 600,
                lineHeight: 1.25,
                marginBottom: "0.35rem",
              }}
            >
              Elegí cuánto donar
            </h3>
            <p
              className="text-ink-muted"
              style={{ fontSize: "0.88rem", lineHeight: 1.5 }}
            >
              Cada aporte sostiene el día a día del Centro
            </p>
          </div>

          {/* ── Amount grid ── */}
          <div className="mb-2 grid grid-cols-2 gap-2.5">
            {PRESET_AMOUNTS.map((item) => {
              const active = !isCustom && selected === item.value;
              return (
                <button
                  key={item.value}
                  type="button"
                  onClick={() => {
                    setSelected(item.value);
                    setIsCustom(false);
                    setError(null);
                  }}
                  className="group relative rounded-[14px] border-[1.5px] px-4 py-3.5 text-left transition-all duration-200"
                  style={{
                    borderColor: active
                      ? "var(--color-burgundy)"
                      : "var(--color-border)",
                    background: active
                      ? "linear-gradient(135deg, rgba(185,28,44,0.06), rgba(232,168,124,0.08))"
                      : "var(--color-paper)",
                    boxShadow: active
                      ? "0 0 0 1px var(--color-burgundy), 0 4px 12px rgba(185,28,44,0.1)"
                      : "none",
                    transform: active ? "translateY(-1px)" : "none",
                  }}
                >
                  {/* Check indicator */}
                  {active && (
                    <div
                      className="absolute right-2.5 top-2.5 flex h-[18px] w-[18px] items-center justify-center rounded-full"
                      style={{
                        background: "var(--color-burgundy)",
                      }}
                    >
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M2 5.5L4 7.5L8 3"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  )}
                  <span
                    className="font-display block"
                    style={{
                      fontSize: "1.35rem",
                      fontWeight: 700,
                      color: active
                        ? "var(--color-burgundy)"
                        : "var(--color-ink)",
                      lineHeight: 1.2,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {item.label}
                  </span>
                  <span
                    className="mt-0.5 block"
                    style={{
                      fontSize: "0.78rem",
                      color: active
                        ? "var(--color-burgundy-soft)"
                        : "var(--color-ink-muted)",
                      lineHeight: 1.3,
                    }}
                  >
                    {item.desc}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Custom amount toggle */}
          <button
            type="button"
            onClick={() => {
              setIsCustom(true);
              setError(null);
              setTimeout(() => inputRef.current?.focus(), 50);
            }}
            className="mb-5 w-full rounded-[14px] border-[1.5px] px-4 py-3 text-center transition-all duration-200"
            style={{
              borderColor: isCustom
                ? "var(--color-burgundy)"
                : "var(--color-border)",
              background: isCustom
                ? "linear-gradient(135deg, rgba(185,28,44,0.06), rgba(232,168,124,0.08))"
                : "var(--color-paper)",
              borderStyle: isCustom ? "solid" : "dashed",
              boxShadow: isCustom
                ? "0 0 0 1px var(--color-burgundy)"
                : "none",
            }}
          >
            {isCustom ? (
              <div className="flex items-center justify-center gap-1">
                <span
                  className="font-display"
                  style={{
                    fontSize: "1.35rem",
                    fontWeight: 700,
                    color: "var(--color-burgundy)",
                  }}
                >
                  $
                </span>
                <input
                  ref={inputRef}
                  type="number"
                  inputMode="numeric"
                  min={1}
                  placeholder="Tu monto"
                  value={custom}
                  onChange={(e) => {
                    setCustom(e.target.value);
                    setError(null);
                  }}
                  onClick={(e) => e.stopPropagation()}
                  className="font-display w-[140px] bg-transparent text-center outline-none placeholder:text-ink-soft"
                  style={{
                    fontSize: "1.35rem",
                    fontWeight: 700,
                    color: "var(--color-burgundy)",
                  }}
                />
              </div>
            ) : (
              <span
                className="font-semibold"
                style={{
                  fontSize: "0.88rem",
                  color: "var(--color-ink-muted)",
                }}
              >
                Otro monto →
              </span>
            )}
          </button>

          {/* Error message */}
          {error && (
            <div
              className="mb-4 rounded-[12px] border px-4 py-3 text-center"
              style={{
                borderColor: "var(--color-peach)",
                background: "rgba(232,168,124,0.1)",
              }}
            >
              <p
                className="text-ink-muted"
                style={{ fontSize: "0.85rem", lineHeight: 1.5 }}
              >
                {error}
              </p>
            </div>
          )}

          {/* ── Main CTA button ── */}
          <button
            type="button"
            onClick={handleDonate}
            disabled={loading || amount <= 0}
            className="group relative w-full overflow-hidden rounded-[14px] px-6 py-4 font-semibold text-white transition-all duration-200 hover:-translate-y-[1px] disabled:pointer-events-none disabled:opacity-40"
            style={{
              background:
                "linear-gradient(135deg, var(--color-burgundy) 0%, var(--color-burgundy-deep) 100%)",
              boxShadow:
                "0 2px 0 0 var(--color-burgundy-deep), 0 4px 16px rgba(185,28,44,0.25)",
              fontSize: "1rem",
              letterSpacing: "0.01em",
            }}
          >
            {/* Shimmer effect */}
            <div
              className="pointer-events-none absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_ease-in-out]"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)",
              }}
            />

            <span className="relative z-10 flex items-center justify-center gap-2.5">
              {loading ? (
                <>
                  <LoadingSpinner />
                  <span>Conectando...</span>
                </>
              ) : (
                <>
                  <span>Donar</span>
                  {amount > 0 && (
                    <span
                      className="inline-block transition-transform duration-200"
                      style={{
                        transform: pulse ? "scale(1.1)" : "scale(1)",
                      }}
                    >
                      {formatARS(amount)}
                    </span>
                  )}
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                    className="transition-transform duration-200 group-hover:translate-x-0.5"
                  >
                    <path
                      d="M5 12h14M13 6l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </>
              )}
            </span>
          </button>

          {/* Trust signals */}
          <div
            className="mt-4 flex items-center justify-center gap-4"
            style={{ color: "var(--color-ink-soft)", fontSize: "0.75rem" }}
          >
            <span className="flex items-center gap-1">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0110 0v4" />
              </svg>
              Pago seguro
            </span>
            <span
              style={{
                width: "3px",
                height: "3px",
                borderRadius: "50%",
                background: "var(--color-border)",
                display: "inline-block",
              }}
            />
            <span className="flex items-center gap-1">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              MercadoPago
            </span>
            <span
              style={{
                width: "3px",
                height: "3px",
                borderRadius: "50%",
                background: "var(--color-border)",
                display: "inline-block",
              }}
            />
            <span>Débito · Crédito</span>
          </div>
        </div>
      </div>

      {/* Shimmer keyframe (injected once) */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes shimmer {
              0% { transform: translateX(-100%); }
              100% { transform: translateX(100%); }
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
