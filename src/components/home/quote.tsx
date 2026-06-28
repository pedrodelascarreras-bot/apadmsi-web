import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { quote } from "@/lib/content";

export function Quote() {
  return (
    <section
      className="relative overflow-hidden bg-paper py-20 sm:py-24 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 -top-24 h-[350px] w-[350px]"
        style={{
          background:
            "radial-gradient(circle, rgba(201,171,110,0.18), transparent 70%)",
        }}
      />

      <Container className="relative z-10">
        <Reveal>
        <blockquote className="relative mx-auto max-w-[880px]">
          <span
            aria-hidden="true"
            className="absolute font-display text-burgundy"
            style={{
              top: "-3rem",
              left: "-1rem",
              fontSize: "9rem",
              lineHeight: 1,
              opacity: 0.18,
            }}
          >
            &ldquo;
          </span>

          <p
            className="font-display text-ink"
            style={{
              fontSize: "clamp(1.5rem, 2.7vw, 2.2rem)",
              fontWeight: 400,
              lineHeight: 1.35,
              marginBottom: "2rem",
              fontVariationSettings: '"opsz" 144, "SOFT" 100',
            }}
          >
            <span
              dangerouslySetInnerHTML={{
                __html: quote.textHtml.replace(
                  /<em>(.*?)<\/em>/g,
                  '<em style="font-style: italic; color: var(--color-burgundy); background: linear-gradient(180deg, transparent 60%, rgba(201,171,110,0.3) 60%);">$1</em>'
                ),
              }}
            />
          </p>

          <footer className="not-italic">
            <span
              className="font-script text-burgundy"
              style={{
                fontSize: "1.5rem",
                lineHeight: 1,
                display: "inline-block",
              }}
            >
              {quote.attrName}
            </span>
            <small
              className="mt-2 block font-medium text-ink-soft"
              style={{
                fontSize: "0.85rem",
                letterSpacing: "0.05em",
                display: "inline-block",
              }}
            >
              {quote.attrRole}
            </small>
            <a
              href={quote.source.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-xs uppercase tracking-[0.12em] text-ink-soft underline decoration-peach underline-offset-4 transition-colors hover:text-burgundy"
            >
              Fuente: {quote.source.label} &rarr;
            </a>
          </footer>
        </blockquote>
        </Reveal>
      </Container>
    </section>
  );
}
