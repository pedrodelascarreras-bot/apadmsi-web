"use client";

import { useState } from "react";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { history } from "@/lib/content";

export function History() {
  const items = history.timeline;
  const pendingSide: "left" | "right" =
    items.length % 2 === 0 ? "left" : "right";

  const [expanded, setExpanded] = useState(false);

  return (
    <section id="historia" className="bg-cream py-16 sm:py-20 lg:py-24">
      <Container>
        {/* Header centrado arriba */}
        <Reveal>
          <div className="mx-auto mb-10 max-w-[860px] text-center">
            <p className="section-label">{history.eyebrow}</p>
            <h2
              style={{
                fontSize: "clamp(2rem, 3.8vw, 3rem)",
                marginBottom: "1.5rem",
                lineHeight: 1.15,
                textWrap: "balance",
              }}
            >
              {history.heading}
            </h2>
            <p
              className="text-ink-muted"
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.7,
                textAlign: "center",
                textWrap: "balance",
              }}
            >
              {history.intro}
            </p>
          </div>
        </Reveal>

        {/* Botón desplegador (cuando está cerrada) */}
        {!expanded && (
          <Reveal>
            <div className="mx-auto flex max-w-[640px] flex-col items-center">
              {/* Tarjeta con identidad — sello + script + cta */}
              <div
                className="relative w-full rounded-[20px] bg-paper px-7 pt-8 pb-7 text-center sm:px-10 sm:pt-10 sm:pb-9"
                style={{
                  border: "1px solid var(--color-border)",
                  boxShadow: "0 10px 32px rgba(31,22,17,0.06)",
                  background:
                    "linear-gradient(160deg, var(--color-paper) 0%, var(--color-cream-warm) 100%)",
                }}
              >
                {/* Sello decorativo arriba */}
                <span
                  aria-hidden="true"
                  className="absolute left-1/2 top-0 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full"
                  style={{
                    background: "var(--color-peach)",
                    boxShadow:
                      "0 6px 18px rgba(201,171,110,0.45), inset 0 0 0 4px var(--color-cream)",
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--color-burgundy)"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <polyline points="12 7 12 12 15 14" />
                  </svg>
                </span>

                <p
                  className="font-script text-burgundy"
                  style={{
                    fontSize: "clamp(1.6rem, 2.6vw, 2rem)",
                    lineHeight: 1,
                    marginBottom: "0.5rem",
                  }}
                >
                  más de 40 años
                </p>
                <p
                  className="text-ink-muted"
                  style={{
                    fontSize: "1rem",
                    lineHeight: 1.55,
                    marginBottom: "1.5rem",
                    textWrap: "balance",
                  }}
                >
                  Una historia de familias, lucha y comunidad —{" "}
                  <span className="font-semibold text-ink">
                    {items.length} hitos
                  </span>{" "}
                  que cuentan cómo llegamos hasta acá.
                </p>

                <button
                  type="button"
                  onClick={() => setExpanded(true)}
                  aria-expanded={false}
                  className="btn-burgundy group inline-flex items-center whitespace-nowrap rounded-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-burgundy"
                  style={{
                    cursor: "pointer",
                    color: "#FFFFFF",
                    background: "var(--color-burgundy)",
                    border: "1.5px solid var(--color-burgundy)",
                    boxShadow: "0 2px 0 0 var(--color-burgundy-deep)",
                    padding: "1rem 2.25rem",
                    fontSize: "1.05rem",
                    fontWeight: 600,
                    gap: "0.75rem",
                    lineHeight: 1,
                  }}
                >
                  <span style={{ color: "#FFFFFF" }}>Leé nuestra historia</span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#FFFFFF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform duration-300 group-hover:translate-y-[2px]"
                    aria-hidden="true"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>

                <p
                  className="text-ink-soft"
                  style={{
                    marginTop: "1.5rem",
                    fontSize: "0.78rem",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    fontWeight: 600,
                  }}
                >
                  desplegá la línea de tiempo
                </p>
              </div>
            </div>
          </Reveal>
        )}

        {/* Timeline desplegada */}
        {expanded && (
          <div className="mt-4">
            <div className="relative mx-auto max-w-[1080px]">
              {/* Línea vertical */}
              <span
                aria-hidden="true"
                className="absolute top-2 bottom-2 w-px left-5 lg:left-1/2 lg:-translate-x-1/2"
                style={{ background: "var(--color-border)" }}
              />

              <ul className="list-none flex flex-col gap-6 lg:gap-8">
                {items.map((item, idx) => {
                  const isLeft = idx % 2 === 0;
                  return (
                    <Reveal key={item.year} tag="li" delay={idx * 60}>
                      <TimelineRow
                        side={isLeft ? "left" : "right"}
                        year={item.year}
                        title={item.title}
                        desc={item.desc}
                      />
                    </Reveal>
                  );
                })}

                {/* Pendiente */}
                <Reveal tag="li" delay={items.length * 60}>
                  <TimelineRow
                    side={pendingSide}
                    dashed
                    year="próximamente"
                    title={null}
                    desc={history.pendingNote}
                    yearScript
                  />
                </Reveal>
              </ul>
            </div>

            {/* Botón para colapsar */}
            <div className="mt-10 flex justify-center">
              <button
                type="button"
                onClick={() => setExpanded(false)}
                aria-expanded={true}
                className="btn-outline-ink inline-flex items-center gap-2 rounded-full border-[1.5px] border-ink px-5 py-2.5 text-sm font-semibold"
                style={{ cursor: "pointer" }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polyline points="18 15 12 9 6 15" />
                </svg>
                Ocultar historia
              </button>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}

function TimelineRow({
  side,
  year,
  title,
  desc,
  dashed = false,
  yearScript = false,
}: {
  side: "left" | "right";
  year: string;
  title: string | null;
  desc: string;
  dashed?: boolean;
  yearScript?: boolean;
}) {
  const cardClass =
    side === "left"
      ? "pl-12 lg:pl-0 lg:pr-10 lg:text-right lg:col-start-1"
      : "pl-12 lg:pl-10 lg:col-start-2";

  return (
    <div className="relative grid grid-cols-1 lg:grid-cols-2 lg:gap-x-14">
      {/* Dot */}
      <span
        aria-hidden="true"
        className="absolute z-10 h-4 w-4 rounded-full top-2 lg:top-3 left-5 -translate-x-1/2 lg:left-1/2"
        style={
          dashed
            ? {
                background: "var(--color-cream)",
                border: "2px dashed var(--color-border)",
              }
            : {
                background: "var(--color-burgundy)",
                border: "4px solid var(--color-cream)",
                boxShadow: "0 0 0 1px var(--color-border)",
              }
        }
      />

      {/* Card */}
      <div className={cardClass}>
        {/* Año */}
        <div
          className={
            yearScript
              ? "font-script text-burgundy"
              : "font-display text-burgundy"
          }
          style={
            yearScript
              ? { fontSize: "1.4rem", lineHeight: 1, marginBottom: "0.4rem" }
              : {
                  fontSize: "1.7rem",
                  fontWeight: 500,
                  lineHeight: 1,
                  marginBottom: "0.5rem",
                  fontVariationSettings: '"opsz" 144, "SOFT" 80',
                }
          }
        >
          {year}
        </div>

        {/* Título */}
        {title && (
          <h3
            className="font-semibold text-ink"
            style={{
              fontSize: "1.2rem",
              lineHeight: 1.4,
              marginBottom: "0.5rem",
            }}
          >
            {title}
          </h3>
        )}

        {/* Descripción */}
        <p
          className="text-ink-muted"
          style={{
            fontSize: title ? "0.98rem" : "0.95rem",
            lineHeight: 1.65,
            textWrap: "pretty",
          }}
        >
          {desc}
        </p>
      </div>
    </div>
  );
}
