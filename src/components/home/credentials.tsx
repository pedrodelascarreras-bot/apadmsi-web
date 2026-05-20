import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { credentials } from "@/lib/content";

export function Credentials() {
  return (
    <section className="relative overflow-hidden bg-paper py-10 sm:py-14">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, var(--color-burgundy) 20%, var(--color-peach) 50%, var(--color-burgundy) 80%, transparent 100%)",
          opacity: 0.4,
        }}
      />

      <Container>
        <Reveal>
          <div className="mx-auto mb-10 max-w-[820px] text-center">
            <h2
              className="font-display text-ink"
              style={{
                fontSize: "clamp(1.2rem, 2.4vw, 1.7rem)",
                fontWeight: 500,
                lineHeight: 1.2,
                fontVariationSettings: '"opsz" 144, "SOFT" 80',
              }}
            >
              <span className="block">{credentials.legalKicker}</span>
              <em
                className="not-italic"
                style={{ color: "var(--color-burgundy)", fontWeight: 600 }}
              >
                {credentials.legalRest}
              </em>
            </h2>
          </div>
        </Reveal>

        <ul className="mx-auto grid max-w-[1000px] grid-cols-2 gap-x-4 gap-y-8 list-none lg:grid-cols-4">
          {credentials.items.map((item, i) => (
            <Reveal key={item.label} delay={i * 100} tag="li">
              <div
                className={`relative flex flex-col items-center text-center ${
                  i > 0 ? "lg:before:absolute lg:before:left-0 lg:before:top-1/2 lg:before:h-[60%] lg:before:w-px lg:before:-translate-y-1/2 lg:before:bg-border lg:before:content-['']" : ""
                }`}
              >
                <span
                  className="mb-2 font-script text-peach"
                  style={{ fontSize: "1.05rem", lineHeight: 1 }}
                >
                  {item.kicker}
                </span>
                <span
                  className="font-display leading-none text-burgundy"
                  style={{
                    fontSize: "clamp(1.8rem, 3.4vw, 2.6rem)",
                    fontWeight: 500,
                    fontVariationSettings: '"opsz" 144, "SOFT" 100',
                  }}
                >
                  {item.value}
                </span>
                <span
                  className="mt-2 max-w-[160px] font-semibold uppercase text-ink-muted"
                  style={{
                    fontSize: "0.7rem",
                    letterSpacing: "0.16em",
                    lineHeight: 1.4,
                  }}
                >
                  {item.label}
                </span>
              </div>
            </Reveal>
          ))}
        </ul>
      </Container>

      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, var(--color-burgundy) 20%, var(--color-peach) 50%, var(--color-burgundy) 80%, transparent 100%)",
          opacity: 0.4,
        }}
      />
    </section>
  );
}
