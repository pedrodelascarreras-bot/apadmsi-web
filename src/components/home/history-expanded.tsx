import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { history, press, FOUNDED_YEAR } from "@/lib/content";

const yearsActive = new Date().getFullYear() - FOUNDED_YEAR;

const CHAPTERS: {
  year: string;
  title: string;
  desc: string;
  accent: string;
  bg: "dark" | "light" | "warm";
  pullQuote?: string;
}[] = [
  {
    year: "1982",
    title: "Fundación",
    desc: history.timeline[0].desc,
    accent: "var(--color-peach)",
    bg: "dark",
    pullQuote: "Un grupo de padres decidió crear esa casa que no existía.",
  },
  {
    year: "Década del '90",
    title: "Nueva comisión, nuevo impulso",
    desc: history.timeline[1].desc,
    accent: "var(--color-peach)",
    bg: "light",
    pullQuote: "Trabajar para los que menos tienen.",
  },
  {
    year: "Años 2000",
    title: "Crecimiento y visibilidad",
    desc: history.timeline[2].desc,
    accent: "var(--color-burgundy)",
    bg: "warm",
  },
  {
    year: "2016",
    title: "Bailando por un Sueño",
    desc: history.timeline[3].desc,
    accent: "var(--color-gold-warm)",
    bg: "dark",
    pullQuote: "Una visibilidad sin precedentes.",
  },
  {
    year: "Hoy",
    title: "Una casa con cuarenta años en pie",
    desc: history.timeline[4].desc,
    accent: "var(--color-burgundy)",
    bg: "light",
    pullQuote:
      "Abrir, algún día, un hogar permanente para quienes ya no tengan familia que los cuide.",
  },
];

const bgStyles = {
  dark: {
    background: "linear-gradient(135deg, #2F5C59 0%, #3D6C69 100%)",
    color: "var(--color-cream)",
    mutedColor: "rgba(251,246,238,0.75)",
    quoteColor: "rgba(251,246,238,0.9)",
    quoteBorder: "var(--color-peach)",
  },
  light: {
    background: "var(--color-paper)",
    color: "var(--color-ink)",
    mutedColor: "var(--color-ink-muted)",
    quoteColor: "var(--color-ink)",
    quoteBorder: "var(--color-burgundy)",
  },
  warm: {
    background: "var(--color-cream-warm)",
    color: "var(--color-ink)",
    mutedColor: "var(--color-ink-muted)",
    quoteColor: "var(--color-ink)",
    quoteBorder: "var(--color-peach)",
  },
};

export function HistoryExpanded() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden py-20 sm:py-24 lg:py-28"
        style={{
          background:
            "linear-gradient(135deg, #2F5C59 0%, #3D6C69 40%, #2A5451 100%)",
        }}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 70% 20%, rgba(201,171,110,0.12), transparent 60%), radial-gradient(ellipse at 20% 80%, rgba(168,137,77,0.06), transparent 60%)",
          }}
        />
        <Container className="relative z-10">
          <Reveal>
            <div className="mx-auto max-w-[780px] text-center">
              <p
                className="font-script"
                style={{
                  fontSize: "clamp(1.2rem, 2vw, 1.5rem)",
                  color: "var(--color-peach)",
                  marginBottom: "1rem",
                }}
              >
                {yearsActive}+ años de historia
              </p>
              <h1
                style={{
                  fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
                  fontWeight: 400,
                  lineHeight: 1.08,
                  color: "var(--color-cream)",
                  textWrap: "balance",
                  letterSpacing: "-0.02em",
                }}
              >
                Cuarenta y tantos años.
                <br />
                <em
                  className="not-italic"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent 60%, rgba(201,171,110,0.35) 60%)",
                  }}
                >
                  Sin pausa, sin ruido.
                </em>
              </h1>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ── Chapters ── */}
      {CHAPTERS.map((ch, i) => {
        const style = bgStyles[ch.bg];
        return (
          <section
            key={ch.year}
            className="relative overflow-hidden"
            style={{ background: style.background }}
          >
            {/* Decorative accent bar */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "4px",
                height: "100%",
                background: ch.accent,
                opacity: 0.6,
              }}
            />

            <Container>
              <div
                className="mx-auto max-w-[820px]"
                style={{ padding: "3.5rem 0 3rem" }}
              >
                <Reveal>
                  {/* Year — big decorative number */}
                  <div className="flex items-end gap-4 sm:gap-6">
                    <span
                      className="font-display"
                      style={{
                        fontSize: "clamp(3rem, 7vw, 5rem)",
                        fontWeight: 400,
                        lineHeight: 0.85,
                        color: ch.accent,
                        opacity: ch.bg === "dark" ? 0.7 : 0.35,
                        fontVariationSettings: '"opsz" 144, "SOFT" 50',
                      }}
                    >
                      {ch.year}
                    </span>
                    <h2
                      style={{
                        fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)",
                        fontWeight: 500,
                        lineHeight: 1.2,
                        color: style.color,
                        paddingBottom: "0.3rem",
                      }}
                    >
                      {ch.title}
                    </h2>
                  </div>

                  {/* Divider */}
                  <div
                    style={{
                      width: "60px",
                      height: "2px",
                      background: ch.accent,
                      margin: "1.25rem 0",
                      borderRadius: "1px",
                    }}
                  />

                  {/* Body text */}
                  <p
                    style={{
                      fontSize: "1.05rem",
                      lineHeight: 1.75,
                      color: style.mutedColor,
                      maxWidth: "680px",
                    }}
                  >
                    {ch.desc}
                  </p>

                  {/* Pull quote */}
                  {ch.pullQuote && (
                    <blockquote
                      style={{
                        marginTop: "1.5rem",
                        paddingLeft: "1.25rem",
                        borderLeft: `3px solid ${style.quoteBorder}`,
                        fontStyle: "italic",
                        fontSize: "1.15rem",
                        lineHeight: 1.5,
                        color: style.quoteColor,
                        fontWeight: 500,
                        maxWidth: "600px",
                      }}
                    >
                      &ldquo;{ch.pullQuote}&rdquo;
                    </blockquote>
                  )}
                </Reveal>
              </div>
            </Container>
          </section>
        );
      })}

      {/* ── Prensa ── */}
      <section
        className="py-14 sm:py-16 lg:py-20"
        style={{
          background:
            "linear-gradient(180deg, var(--color-cream-warm) 0%, var(--color-cream) 100%)",
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
              <p
                className="text-ink-muted"
                style={{ fontSize: "0.95rem", lineHeight: 1.6 }}
              >
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
                  <div
                    style={{
                      height: "4px",
                      background:
                        i === 0
                          ? "var(--color-burgundy)"
                          : i === 1
                          ? "var(--color-peach)"
                          : "linear-gradient(90deg, var(--color-burgundy), var(--color-peach))",
                    }}
                  />
                  <div className="flex flex-1 flex-col gap-3 px-5 py-5">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-display font-semibold text-ink" style={{ fontSize: "1rem" }}>
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
                    <p className="font-display text-ink" style={{ fontSize: "0.92rem", fontWeight: 500, lineHeight: 1.4 }}>
                      &ldquo;{outlet.title}&rdquo;
                    </p>
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
      </section>
    </>
  );
}
