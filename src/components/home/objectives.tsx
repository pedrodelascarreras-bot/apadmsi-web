import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { objectives } from "@/lib/content";

export function Objectives() {
  return (
    <section
      id="objetivos"
      className="relative overflow-hidden bg-cream-warm py-16 sm:py-20 lg:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-12 h-[300px] w-[300px]"
        style={{
          background:
            "radial-gradient(circle, rgba(201,169,97,0.15), transparent 70%)",
        }}
      />

      <Container className="relative z-10">
        <Reveal>
          <div className="mx-auto mb-12 max-w-[760px] text-center">
            <p className="section-label">{objectives.eyebrow}</p>
            <h2
              style={{
                fontSize: "clamp(1.8rem, 3.4vw, 2.6rem)",
                lineHeight: 1.2,
                marginBottom: "1rem",
              }}
            >
              {objectives.heading}
            </h2>
            <p
              className="text-ink-muted"
              style={{ fontSize: "1.02rem", lineHeight: 1.65 }}
            >
              {objectives.intro}
            </p>
          </div>
        </Reveal>

        <div className="mb-8 grid gap-6 md:grid-cols-3 md:gap-8">
          {objectives.items.map((item, i) => (
            <Reveal key={item.number} delay={i * 120}>
            <article
              className="flex h-full flex-col rounded-[12px] border border-border bg-paper p-8 transition-all hover:-translate-y-[3px] hover:shadow-[0_12px_32px_rgba(31,22,17,0.08)]"
            >
              <div
                className="font-display text-burgundy"
                style={{
                  fontSize: "2.4rem",
                  fontWeight: 500,
                  lineHeight: 1,
                  marginBottom: "1.25rem",
                  fontVariationSettings: '"opsz" 144, "SOFT" 50',
                }}
              >
                {item.number}
              </div>
              <h3
                className="text-ink"
                style={{
                  fontSize: "1.15rem",
                  fontWeight: 600,
                  marginBottom: "0.75rem",
                  letterSpacing: "0.02em",
                  textTransform: "uppercase",
                }}
              >
                {item.title}
              </h3>
              <p
                className="font-display text-ink"
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 500,
                  marginBottom: "1rem",
                  lineHeight: 1.35,
                  fontVariationSettings: '"opsz" 144, "SOFT" 80',
                }}
              >
                {item.headline}
              </p>
              <p
                className="text-ink-muted"
                style={{ fontSize: "0.95rem", lineHeight: 1.6 }}
              >
                {item.desc}
              </p>
            </article>
            </Reveal>
          ))}
        </div>

        {/* Frase de cierre institucional */}
        <Reveal delay={300}>
        <p
          className="mx-auto max-w-[640px] text-center font-display text-ink"
          style={{
            fontSize: "clamp(1.1rem, 1.8vw, 1.4rem)",
            lineHeight: 1.4,
            fontStyle: "italic",
            fontVariationSettings: '"opsz" 144, "SOFT" 100',
          }}
        >
          <span
            aria-hidden="true"
            className="text-burgundy"
            style={{
              fontSize: "1.6em",
              lineHeight: 0,
              verticalAlign: "-0.4em",
              marginRight: "0.05em",
              opacity: 0.5,
            }}
          >
            &ldquo;
          </span>
          {objectives.closing}
          <span
            aria-hidden="true"
            className="text-burgundy"
            style={{
              fontSize: "1.6em",
              lineHeight: 0,
              verticalAlign: "-0.4em",
              marginLeft: "0.05em",
              opacity: 0.5,
            }}
          >
            &rdquo;
          </span>
        </p>
        </Reveal>
      </Container>
    </section>
  );
}
