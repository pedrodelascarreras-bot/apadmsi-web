import { Container } from "@/components/shared/container";
import { Counter } from "@/components/shared/counter";
import { Reveal } from "@/components/shared/reveal";
import { credentials, stats } from "@/lib/content";

const items = [
  { number: "1982", label: "año de fundación", suffix: "" },
  { number: "30", label: "jóvenes y adultos asisten cada día", suffix: "+" },
  { number: "20", label: "profesionales en el equipo", suffix: "+" },
  { number: "40", label: "concurrentes habilitados", suffix: "" },
];

type Variant = "a" | "b";

const themes = {
  a: {
    bg: "linear-gradient(135deg, #1E4744 0%, #2F5C59 100%)",
    blob: "radial-gradient(circle, rgba(201,169,97,0.15), transparent 70%)",
    headingColor: "var(--color-cream)",
    numberColor: "var(--color-cream)",
    labelColor: "rgba(250,246,240,0.6)",
    borderColor: "rgba(250,246,240,0.15)",
    textClass: "text-cream",
  },
  b: {
    bg: "var(--color-paper)",
    blob: "radial-gradient(circle, rgba(201,169,97,0.1), transparent 70%)",
    headingColor: "#2F5C59",
    numberColor: "#2F5C59",
    labelColor: "#4A7B78",
    borderColor: "rgba(47,92,89,0.15)",
    textClass: "",
  },
};

export function InstitutionalBand({ variant = "a" }: { variant?: Variant }) {
  const t = themes[variant];

  return (
    <section
      className={`relative overflow-hidden ${t.textClass} py-12 sm:py-14 lg:py-16`}
      style={{ background: t.bg }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-24 h-[400px] w-[400px]"
        style={{ background: t.blob }}
      />

      <Container className="relative z-10">
        {/* Nombre institucional */}
        <Reveal>
          <div className="mb-8 text-center">
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(1.1rem, 2.2vw, 1.5rem)",
                fontWeight: 500,
                lineHeight: 1.25,
                color: t.headingColor,
                fontVariationSettings: '"opsz" 144, "SOFT" 80',
              }}
            >
              {credentials.legalKicker}
              <br />
              {credentials.legalRest}
            </h2>
            <p
              className="font-script"
              style={{
                fontSize: "1.1rem",
                color: "var(--color-gold-warm)",
                marginTop: "0.5rem",
                fontWeight: 700,
              }}
            >
              {stats.eyebrow}
            </p>
          </div>
        </Reveal>

        {/* Grid de datos */}
        <div className="mx-auto grid max-w-[900px] grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4">
          {items.map((item, i) => (
            <Reveal key={item.label} delay={i * 100}>
              <div
                className="text-center"
                style={{
                  borderLeft: i > 0 ? `1px solid ${t.borderColor}` : "none",
                }}
              >
                <div
                  className="font-display leading-none"
                  style={{
                    fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                    fontWeight: 400,
                    fontVariationSettings: '"opsz" 144, "SOFT" 50',
                    marginBottom: "0.4rem",
                    color: t.numberColor,
                  }}
                >
                  <Counter to={Number(item.number)} />
                  {item.suffix && (
                    <sup
                      className="text-gold-warm"
                      style={{
                        fontSize: "0.45em",
                        marginLeft: "0.1em",
                        verticalAlign: "super",
                      }}
                    >
                      {item.suffix}
                    </sup>
                  )}
                </div>
                <div
                  className="mx-auto max-w-[160px]"
                  style={{
                    fontSize: "0.78rem",
                    color: t.labelColor,
                    lineHeight: 1.4,
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    fontWeight: 600,
                  }}
                >
                  {item.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
