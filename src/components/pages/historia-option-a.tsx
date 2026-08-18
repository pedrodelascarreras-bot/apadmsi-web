import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { history, press, FOUNDED_YEAR } from "@/lib/content";

const yearsActive = new Date().getFullYear() - FOUNDED_YEAR;

export function HistoriaOptionA() {
  return (
    <section className="paper-ctx" style={{ background: "var(--color-paper)", padding: "3rem 0 2.5rem" }}>
      <Container>
        {/* Header */}
        <Reveal>
          <div className="mx-auto mb-10 max-w-[800px] text-center">
            <p className="section-label">{history.eyebrow}</p>
            <h1
              className="highlight"
              style={{
                fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
                lineHeight: 1.15,
                textWrap: "balance",
                marginBottom: "0.8rem",
              }}
            >
              {history.heading}
            </h1>
            <p
              className="text-ink-muted"
              style={{
                fontSize: "0.95rem",
                lineHeight: 1.6,
                textAlign: "justify",
                textAlignLast: "center",
              }}
            >
              {history.intro.split(".").slice(0, 2).join(".") + "."}
            </p>
          </div>
        </Reveal>

        {/* Timeline */}
        <div className="mx-auto max-w-[750px]">
          {history.timeline.map((item, i) => (
            <Reveal key={item.year} delay={i * 60}>
              <div
                className="relative grid"
                style={{
                  gridTemplateColumns: "100px 1fr",
                  gap: "1.2rem",
                  paddingBottom: i < history.timeline.length - 1 ? "2.5rem" : "0",
                }}
              >
                {/* Línea vertical */}
                {i < history.timeline.length - 1 && (
                  <div
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      left: "49px",
                      top: "32px",
                      bottom: "0",
                      width: "2px",
                      background: "var(--color-border)",
                    }}
                  />
                )}

                {/* Año + dot */}
                <div className="flex flex-col items-center" style={{ paddingTop: "4px", gap: "0.5rem" }}>
                  <div
                    style={{
                      width: "14px",
                      height: "14px",
                      borderRadius: "50%",
                      background: i === 0 || i === history.timeline.length - 1
                        ? "var(--color-burgundy)"
                        : "var(--color-peach)",
                      border: "3px solid var(--color-paper)",
                      boxShadow: "0 0 0 2px var(--color-border)",
                      flexShrink: 0,
                      position: "relative",
                      zIndex: 1,
                    }}
                  />
                  <span
                    className="font-display"
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      color: "var(--color-burgundy)",
                      textAlign: "center",
                      lineHeight: 1.15,
                      position: "relative",
                      zIndex: 1,
                      background: "var(--color-paper)",
                      padding: "0 0.2rem",
                    }}
                  >
                    {item.year}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <h3
                    className="font-display text-ink"
                    style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: "0.4rem" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-ink-muted"
                    style={{ fontSize: "0.95rem", lineHeight: 1.7 }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Prensa — 3 cards */}
        <Reveal delay={300}>
          <div className="mx-auto mt-14 max-w-[900px]">
{/* sin título — las cards hablan solas */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {press.outlets.map((outlet, i) => (
                <a
                  key={outlet.href}
                  href={outlet.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col rounded-[14px] border border-border bg-cream-warm transition-all hover:border-burgundy/30 hover:shadow-[0_6px_20px_rgba(31,22,17,0.08)]"
                  style={{ overflow: "hidden", color: "#FFFFFF" }}
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
                  <div className="flex flex-1 flex-col gap-2 px-5 py-5">
                    <div className="flex items-center justify-between">
                      <span
                        className="font-display"
                        style={{ fontSize: "0.95rem", fontWeight: 600, color: "#FFFFFF" }}
                      >
                        {outlet.name}
                      </span>
                      <span
                        style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.7)" }}
                      >
                        {outlet.year}
                      </span>
                    </div>
                    <p
                      className="font-display"
                      style={{ fontSize: "0.88rem", fontWeight: 500, lineHeight: 1.35, color: "#FFFFFF" }}
                    >
                      &ldquo;{outlet.title}&rdquo;
                    </p>
                    <p
                      className="italic"
                      style={{
                        color: "rgba(255,255,255,0.75)",
                        fontSize: "0.8rem",
                        lineHeight: 1.45,
                        borderLeft: "2px solid var(--color-peach)",
                        paddingLeft: "0.65rem",
                      }}
                    >
                      {outlet.pullQuote}
                    </p>
                    <span className="mt-auto pt-2 text-xs font-bold uppercase tracking-[0.08em] transition-transform group-hover:translate-x-1" style={{ color: "var(--color-gold-warm)" }}>
                      {outlet.cta ?? "Ver más"}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
