import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { vision } from "@/lib/content";

export function Vision() {
  return (
    <section className="relative overflow-hidden bg-cream py-16 sm:py-20 lg:py-24">
      {/* Blob peach top-right */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-12 h-[400px] w-[400px]"
        style={{
          background:
            "radial-gradient(circle, rgba(232,168,124,0.18), transparent 70%)",
        }}
      />

      <Container className="relative z-10">
        <div className="grid items-start gap-10 lg:gap-16 lg:grid-cols-[1.1fr_1fr]">
          {/* Texto principal */}
          <Reveal>
          <div>
            <p className="section-label">{vision.eyebrow}</p>
            <h2
              className="highlight max-w-[600px]"
              style={{
                fontSize: "clamp(2rem, 3.8vw, 2.8rem)",
                marginBottom: "1.5rem",
                lineHeight: 1.15,
              }}
              dangerouslySetInnerHTML={{ __html: vision.headlineHtml }}
            />
            {vision.paragraphsHtml.map((html, i) => (
              <p
                key={i}
                className="text-ink"
                style={{
                  fontSize: "1.05rem",
                  lineHeight: 1.7,
                  marginBottom: "1.1rem",
                }}
                dangerouslySetInnerHTML={{ __html: html }}
              />
            ))}
          </div>
          </Reveal>

          {/* Pull quote — Nélida Sastre */}
          <Reveal delay={200}>
          <aside
            className="relative rounded-[16px] border border-border bg-paper px-7 py-8 sm:px-9 sm:py-10"
            style={{
              boxShadow: "0 12px 40px rgba(31,22,17,0.06)",
            }}
          >
            <span
              aria-hidden="true"
              className="absolute font-display text-burgundy"
              style={{
                top: "-1.5rem",
                left: "1rem",
                fontSize: "5rem",
                lineHeight: 1,
                opacity: 0.18,
              }}
            >
              &ldquo;
            </span>
            <p
              className="font-display text-ink"
              style={{
                fontSize: "clamp(1.2rem, 2vw, 1.55rem)",
                lineHeight: 1.4,
                fontVariationSettings: '"opsz" 144, "SOFT" 100',
                marginBottom: "1.5rem",
              }}
            >
              <em
                style={{
                  fontStyle: "italic",
                  color: "var(--color-burgundy)",
                  background:
                    "linear-gradient(180deg, transparent 65%, rgba(232,168,124,0.3) 65%)",
                }}
              >
                {vision.pullQuote.text}
              </em>
            </p>
            <div>
              <span
                className="font-script text-burgundy"
                style={{
                  fontSize: "1.4rem",
                  lineHeight: 1,
                  display: "inline-block",
                }}
              >
                {vision.pullQuote.attrName}
              </span>
              <small
                className="mt-2 block font-medium text-ink-soft"
                style={{
                  fontSize: "0.82rem",
                  letterSpacing: "0.05em",
                }}
              >
                {vision.pullQuote.attrRole}
              </small>
              <a
                href={vision.pullQuote.source.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-xs uppercase tracking-[0.12em] text-ink-soft underline decoration-peach underline-offset-4 transition-colors hover:text-burgundy"
              >
                Fuente: {vision.pullQuote.source.label} &rarr;
              </a>
            </div>
          </aside>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
