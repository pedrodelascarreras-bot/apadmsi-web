import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { history, press, FOUNDED_YEAR } from "@/lib/content";

const yearsActive = new Date().getFullYear() - FOUNDED_YEAR;

export function HistoryExpanded() {
  const items = history.timeline;

  return (
    <section className="relative overflow-hidden">
      {/* ── Hero banner ── */}
      <div
        className="relative py-14 sm:py-18 lg:py-22 text-cream"
        style={{
          background:
            "linear-gradient(135deg, #2A1F18 0%, #3D2E25 40%, #4A3228 100%)",
        }}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-[10%] top-0 h-full w-1/2"
          style={{
            background:
              "radial-gradient(ellipse, rgba(232,168,124,0.12), transparent 70%)",
          }}
        />
        <Container className="relative z-10">
          <Reveal>
            <div className="mx-auto max-w-[860px] text-center">
              <div
                className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full px-4 py-2"
                style={{
                  background: "rgba(232,168,124,0.15)",
                  border: "1px solid rgba(232,168,124,0.3)",
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-peach)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><polyline points="12 7 12 12 15 14" /></svg>
                <span style={{ fontSize: "0.8rem", letterSpacing: "0.06em", color: "var(--color-peach)", fontWeight: 600 }}>
                  {yearsActive}+ AÑOS DE HISTORIA
                </span>
              </div>

              <h1
                className="highlight"
                style={{
                  fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                  lineHeight: 1.15,
                  textWrap: "balance",
                  color: "var(--color-cream)",
                  fontWeight: 400,
                }}
              >
                {history.heading}
              </h1>
              <p style={{ fontSize: "1rem", lineHeight: 1.7, textWrap: "balance", marginTop: "1rem", color: "rgba(251,246,238,0.7)" }}>
                {history.intro}
              </p>
            </div>
          </Reveal>
        </Container>
      </div>

      {/* ── Timeline ── */}
      <div className="bg-cream py-14 sm:py-18 lg:py-22">
        <Container>
          <div className="relative mx-auto max-w-[1080px]">
            <span
              aria-hidden="true"
              className="absolute top-0 bottom-0 left-5 lg:left-1/2 lg:-translate-x-1/2"
              style={{
                width: "2px",
                background: "linear-gradient(180deg, var(--color-burgundy) 0%, var(--color-peach) 50%, var(--color-border) 100%)",
                borderRadius: "1px",
              }}
            />

            <ul className="list-none flex flex-col gap-0">
              {items.map((item, idx) => {
                const isLeft = idx % 2 === 0;
                return (
                  <Reveal key={item.year} tag="li" delay={idx * 50}>
                    <TimelineRow
                      side={isLeft ? "left" : "right"}
                      year={item.year}
                      title={item.title}
                      desc={item.desc}
                      highlight={idx === 0 || idx === items.length - 1}
                    />
                  </Reveal>
                );
              })}

              {/* Pendiente */}
              <Reveal tag="li" delay={items.length * 50}>
                <div className="relative grid grid-cols-1 lg:grid-cols-2 lg:gap-x-14" style={{ padding: "1.25rem 0" }}>
                  <span
                    aria-hidden="true"
                    className="absolute z-10 top-5 left-5 -translate-x-1/2 lg:left-1/2"
                    style={{
                      width: "18px",
                      height: "18px",
                      borderRadius: "50%",
                      background: "var(--color-cream)",
                      border: "2px dashed var(--color-peach)",
                    }}
                  />
                  <div className="pl-14 lg:pl-0 lg:pr-12 lg:text-right lg:col-start-1">
                    <div className="font-script text-burgundy" style={{ fontSize: "1.4rem", lineHeight: 1, marginBottom: "0.4rem" }}>
                      próximamente
                    </div>
                    <p className="text-ink-muted" style={{ fontSize: "0.95rem", lineHeight: 1.65 }}>
                      {history.pendingNote}
                    </p>
                  </div>
                </div>
              </Reveal>
            </ul>
          </div>
        </Container>
      </div>

      {/* ── Prensa / artículos ── */}
      <div
        className="py-14 sm:py-16 lg:py-20"
        style={{
          background: "linear-gradient(180deg, var(--color-paper) 0%, var(--color-cream-warm) 100%)",
          borderTop: "1px solid var(--color-border)",
        }}
      >
        <Container>
          <Reveal>
            <div className="mx-auto mb-10 max-w-[700px] text-center">
              <p className="section-label">{press.eyebrow}</p>
              <h2
                style={{
                  fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                  lineHeight: 1.2,
                  textWrap: "balance",
                  marginBottom: "0.5rem",
                }}
              >
                {press.heading}
              </h2>
              <p className="text-ink-muted" style={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
                {press.intro}
              </p>
            </div>
          </Reveal>

          <div className="mx-auto grid max-w-[1000px] grid-cols-1 gap-5 sm:grid-cols-3">
            {press.outlets.map((outlet, i) => (
              <Reveal key={outlet.href} delay={i * 100}>
                <a
                  href={outlet.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col rounded-[16px] border border-border bg-paper transition-all hover:border-burgundy/30 hover:shadow-[0_8px_28px_rgba(31,22,17,0.08)]"
                  style={{ overflow: "hidden" }}
                >
                  {/* Colored top bar */}
                  <div
                    style={{
                      height: "4px",
                      background: i === 0
                        ? "var(--color-burgundy)"
                        : i === 1
                        ? "var(--color-peach)"
                        : "linear-gradient(90deg, var(--color-burgundy), var(--color-peach))",
                    }}
                  />

                  <div className="flex flex-1 flex-col gap-3 px-5 py-5">
                    {/* Source + year */}
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className="font-display font-semibold text-ink"
                        style={{ fontSize: "1rem" }}
                      >
                        {outlet.name}
                      </span>
                      <span
                        className="shrink-0 rounded-full px-2.5 py-0.5 text-ink-soft"
                        style={{
                          fontSize: "0.7rem",
                          fontWeight: 600,
                          letterSpacing: "0.06em",
                          background: "var(--color-cream-warm)",
                          textTransform: "uppercase",
                        }}
                      >
                        {outlet.year}
                      </span>
                    </div>

                    {/* Title */}
                    <p
                      className="font-display text-ink"
                      style={{
                        fontSize: "0.92rem",
                        fontWeight: 500,
                        lineHeight: 1.4,
                      }}
                    >
                      &ldquo;{outlet.title}&rdquo;
                    </p>

                    {/* Pull quote */}
                    <p
                      className="text-ink-muted italic"
                      style={{
                        fontSize: "0.82rem",
                        lineHeight: 1.5,
                        borderLeft: "2px solid var(--color-peach)",
                        paddingLeft: "0.75rem",
                      }}
                    >
                      {outlet.pullQuote}
                    </p>

                    {/* CTA */}
                    <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-xs font-bold uppercase tracking-[0.1em] text-burgundy transition-transform group-hover:translate-x-1">
                      {outlet.cta ?? "Ver más"}
                      <span aria-hidden="true">→</span>
                    </span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}

function TimelineRow({
  side,
  year,
  title,
  desc,
  highlight = false,
}: {
  side: "left" | "right";
  year: string;
  title: string | null;
  desc: string;
  highlight?: boolean;
}) {
  const isLeft = side === "left";
  const cardClass = isLeft
    ? "pl-14 lg:pl-0 lg:pr-12 lg:text-right lg:col-start-1"
    : "pl-14 lg:pl-12 lg:col-start-2";

  return (
    <div
      className="relative grid grid-cols-1 lg:grid-cols-2 lg:gap-x-14"
      style={{ padding: "1.25rem 0" }}
    >
      {/* Dot */}
      <span
        aria-hidden="true"
        className="absolute z-10 top-5 left-5 -translate-x-1/2 lg:left-1/2"
        style={{
          width: highlight ? "22px" : "16px",
          height: highlight ? "22px" : "16px",
          borderRadius: "50%",
          background: "var(--color-burgundy)",
          border: `4px solid var(--color-cream)`,
          boxShadow: highlight
            ? "0 0 0 3px var(--color-burgundy), 0 0 12px rgba(185,28,44,0.3)"
            : "0 0 0 2px var(--color-burgundy)",
          marginTop: highlight ? "-3px" : "0",
        }}
      />

      <div className={cardClass}>
        {/* Year */}
        <div
          className="font-display text-burgundy"
          style={{
            fontSize: highlight ? "2rem" : "1.6rem",
            fontWeight: 500,
            lineHeight: 1,
            marginBottom: "0.4rem",
            fontVariationSettings: '"opsz" 144, "SOFT" 80',
          }}
        >
          {year}
        </div>

        {title && (
          <h3
            className="font-semibold text-ink"
            style={{ fontSize: "1rem", lineHeight: 1.4, marginBottom: "0.4rem" }}
          >
            {title}
          </h3>
        )}

        <p
          className="text-ink-muted"
          style={{ fontSize: "0.95rem", lineHeight: 1.65, textWrap: "pretty" }}
        >
          {desc}
        </p>
      </div>
    </div>
  );
}
