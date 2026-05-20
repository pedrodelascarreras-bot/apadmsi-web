"use client";

import { useState } from "react";

type Member = {
  name: string;
  role: string;
};

type Props = {
  label: string;
  intro: string;
  members: readonly Member[];
  /** Si true, arranca abierto. Default false (cerrado). */
  defaultOpen?: boolean;
};

/**
 * Bloque colapsable usado en la sección Equipo para "Equipo docente y de
 * cuidado diario" y "Equipo profesional especializado". Header siempre
 * visible (label + intro) + chevron que despliega la lista de miembros.
 */
export function TeamListCollapsible({
  label,
  intro,
  members,
  defaultOpen = false,
}: Props) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div
      className="mx-auto max-w-[1080px] rounded-[16px] border border-border bg-paper px-8 py-10 sm:px-10 sm:py-12"
      style={{ boxShadow: "0 6px 20px rgba(31,22,17,0.04)" }}
    >
      {/* Header — toggle */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="group flex w-full items-start gap-4 text-left transition-colors"
      >
        <div className="flex-1">
          <p className="section-label" style={{ marginBottom: "0.75rem" }}>
            {label}
          </p>
          <p
            className="hidden text-ink-muted sm:block"
            style={{ fontSize: "0.98rem", lineHeight: 1.65, maxWidth: "680px" }}
          >
            {intro}
          </p>
        </div>
        <span
          aria-hidden="true"
          className="mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-full transition-all group-hover:border-burgundy group-hover:text-burgundy"
          style={{
            background: "var(--color-cream)",
            border: "1px solid var(--color-border)",
            color: "var(--color-burgundy)",
            transform: open ? "rotate(180deg)" : "rotate(0)",
            transitionDuration: "300ms",
            transitionTimingFunction: "cubic-bezier(0.2, 0.8, 0.2, 1)",
          }}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
      </button>

      {/* Panel desplegable */}
      <div
        className="grid transition-all duration-500 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p
            className="mt-6 text-ink-muted sm:hidden"
            style={{ fontSize: "0.92rem", lineHeight: 1.6 }}
          >
            {intro}
          </p>
          <div className="mt-6 mb-8 flex items-center gap-4 sm:mt-10">
            <span
              aria-hidden="true"
              className="h-px flex-1"
              style={{ background: "var(--color-border)" }}
            />
            <span
              aria-hidden="true"
              className="text-peach"
              style={{ fontSize: "0.7rem", letterSpacing: "0.2em" }}
            >
              ✦
            </span>
            <span
              aria-hidden="true"
              className="h-px flex-1"
              style={{ background: "var(--color-border)" }}
            />
          </div>
          <ul className="grid gap-x-10 gap-y-6 list-none sm:grid-cols-2 lg:grid-cols-2">
            {members.map((p) => (
              <li
                key={p.name}
                className="flex items-baseline gap-3 border-b border-border/60 pb-4"
              >
                <span
                  aria-hidden="true"
                  className="text-peach"
                  style={{ fontSize: "1rem", lineHeight: 1 }}
                >
                  ✦
                </span>
                <span className="flex flex-1 flex-col gap-1 min-w-0">
                  <span
                    className="font-display text-ink"
                    style={{
                      fontSize: "1.02rem",
                      fontWeight: 600,
                      lineHeight: 1.25,
                    }}
                  >
                    {p.name}
                  </span>
                  <span
                    className="text-xs uppercase tracking-[0.1em] text-ink-muted"
                    style={{ lineHeight: 1.3 }}
                  >
                    {p.role}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
