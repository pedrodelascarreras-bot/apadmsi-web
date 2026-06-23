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

export function InstitutionalBand() {
  return (
    <section
      className="relative overflow-hidden text-cream py-12 sm:py-14 lg:py-16"
      style={{
        background: "linear-gradient(135deg, #2A1F18 0%, #3D2E25 100%)",
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-24 h-[400px] w-[400px]"
        style={{
          background:
            "radial-gradient(circle, rgba(201,169,97,0.15), transparent 70%)",
        }}
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
                color: "var(--color-cream)",
                fontVariationSettings: '"opsz" 144, "SOFT" 80',
              }}
            >
              <span style={{ opacity: 0.8 }}>{credentials.legalKicker}</span>
              <br />
              <em
                className="not-italic"
                style={{ color: "var(--color-peach)", fontWeight: 600 }}
              >
                {credentials.legalRest}
              </em>
            </h2>
            <p
              className="font-script"
              style={{
                fontSize: "1.1rem",
                color: "var(--color-gold-warm)",
                marginTop: "0.5rem",
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
                  borderLeft:
                    i > 0 ? "1px solid rgba(250,246,240,0.15)" : "none",
                }}
              >
                <div
                  className="font-display leading-none text-cream"
                  style={{
                    fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                    fontWeight: 400,
                    fontVariationSettings: '"opsz" 144, "SOFT" 50',
                    marginBottom: "0.4rem",
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
                    color: "rgba(250,246,240,0.6)",
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
