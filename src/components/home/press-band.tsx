import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { press } from "@/lib/content";

export function PressBand() {
  return (
    <section
      className="bg-cream-warm py-12 sm:py-16"
      style={{
        borderTop: "1px solid var(--color-border)",
        borderBottom: "1px solid var(--color-border)",
      }}
    >
      <Container>
        <Reveal>
          <div className="mb-6 sm:mb-8">
            <p
              className="font-semibold uppercase text-ink-muted"
              style={{
                fontSize: "0.72rem",
                letterSpacing: "0.18em",
                marginBottom: "0.25rem",
              }}
            >
              {press.eyebrow}
            </p>
            <h2
              className="font-display text-ink"
              style={{
                fontSize: "1.15rem",
                fontWeight: 500,
                lineHeight: 1.25,
              }}
            >
              {press.heading}
            </h2>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {press.outlets.map((outlet) => (
              <a
                key={outlet.href}
                href={outlet.href}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="Leer"
                className="group flex flex-col justify-between gap-3 rounded-[12px] border border-border bg-paper px-5 py-4 transition-all hover:border-burgundy/30 hover:shadow-[0_6px_20px_rgba(31,22,17,0.06)]"
              >
                <div className="flex items-start justify-between gap-3">
                  <span
                    className="font-display text-ink"
                    style={{
                      fontSize: "0.95rem",
                      fontWeight: 600,
                      lineHeight: 1.25,
                    }}
                  >
                    {outlet.name}
                  </span>
                  <span
                    className="shrink-0 text-xs uppercase tracking-[0.1em] text-ink-soft"
                    style={{ whiteSpace: "nowrap" }}
                  >
                    {outlet.year}
                  </span>
                </div>

                <p
                  className="text-ink-muted"
                  style={{ fontSize: "0.82rem", lineHeight: 1.4 }}
                >
                  &ldquo;{outlet.title}&rdquo;
                </p>

                <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-[0.1em] text-burgundy transition-transform group-hover:translate-x-0.5">
                  {outlet.cta ?? "Ver más"}
                </span>
              </a>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
