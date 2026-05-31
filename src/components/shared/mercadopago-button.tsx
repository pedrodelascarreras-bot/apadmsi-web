"use client";

import { useState } from "react";

const PRESET_AMOUNTS = [500, 1000, 2500, 5000];

function formatARS(n: number) {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(n);
}

export function MercadoPagoButton() {
  const [selected, setSelected] = useState<number | null>(1000);
  const [custom, setCustom] = useState("");
  const [isCustom, setIsCustom] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const amount = isCustom ? Number(custom) || 0 : selected ?? 0;

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
            "MercadoPago todavía no está habilitado. Mientras tanto, podés donar por transferencia bancaria."
          );
        } else {
          setError(
            data.error ??
              "Hubo un problema. Intentá de nuevo en unos minutos."
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
    <div className="mx-auto max-w-[480px]">
      {/* Preset amounts */}
      <div className="mb-4 flex flex-wrap justify-center gap-2">
        {PRESET_AMOUNTS.map((value) => (
          <button
            key={value}
            type="button"
            onClick={() => {
              setSelected(value);
              setIsCustom(false);
              setError(null);
            }}
            className={`rounded-full border-[1.5px] px-5 py-2 text-sm font-semibold transition-all ${
              !isCustom && selected === value
                ? "border-burgundy bg-burgundy text-white shadow-[0_2px_0_0_var(--color-burgundy-deep)]"
                : "border-border bg-paper text-ink hover:border-burgundy hover:text-burgundy"
            }`}
          >
            {formatARS(value)}
          </button>
        ))}
        <button
          type="button"
          onClick={() => {
            setIsCustom(true);
            setSelected(null);
            setError(null);
          }}
          className={`rounded-full border-[1.5px] px-5 py-2 text-sm font-semibold transition-all ${
            isCustom
              ? "border-burgundy bg-burgundy text-white shadow-[0_2px_0_0_var(--color-burgundy-deep)]"
              : "border-border bg-paper text-ink hover:border-burgundy hover:text-burgundy"
          }`}
        >
          Otro monto
        </button>
      </div>

      {/* Custom amount input */}
      {isCustom && (
        <div className="mb-4 flex items-center justify-center gap-2">
          <span className="text-sm font-semibold text-ink-muted">$</span>
          <input
            type="number"
            min={1}
            placeholder="Ingresá el monto"
            value={custom}
            onChange={(e) => {
              setCustom(e.target.value);
              setError(null);
            }}
            className="w-[200px] rounded-full border-[1.5px] border-border bg-paper px-4 py-2 text-center text-sm text-ink outline-none transition-colors placeholder:text-ink-muted focus:border-burgundy"
          />
        </div>
      )}

      {/* Error message */}
      {error && (
        <p className="mb-4 rounded-[12px] border border-peach bg-cream-warm px-4 py-3 text-center text-sm text-ink-muted">
          {error}
        </p>
      )}

      {/* Donate button */}
      <div className="text-center">
        <button
          type="button"
          onClick={handleDonate}
          disabled={loading || amount <= 0}
          className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-burgundy bg-burgundy px-8 py-3 text-sm font-semibold text-white shadow-[0_2px_0_0_var(--color-burgundy-deep)] transition-all hover:-translate-y-px hover:bg-burgundy-deep hover:shadow-[0_3px_0_0_var(--color-burgundy-deep)] disabled:pointer-events-none disabled:opacity-50"
        >
          {loading ? (
            <>
              <LoadingSpinner />
              Conectando con MercadoPago...
            </>
          ) : (
            <>
              Donar {amount > 0 ? formatARS(amount) : ""} con MercadoPago
            </>
          )}
        </button>
      </div>
    </div>
  );
}

function LoadingSpinner() {
  return (
    <svg
      className="h-4 w-4 animate-spin"
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
