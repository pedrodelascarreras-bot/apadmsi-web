import { Container } from "@/components/shared/container";
import { Counter } from "@/components/shared/counter";
import { Reveal } from "@/components/shared/reveal";
import { stats } from "@/lib/content";

export function Stats() {
  return (
    <section
      className="relative overflow-hidden text-cream py-14 sm:py-16 lg:py-20"
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
        <Reveal>
          <div className="mb-12 text-center">
            <p
              className="font-script text-gold-warm"
              style={{ fontSize: "1.6rem", marginBottom: "0.25rem" }}
            >
              {stats.eyebrow}
            </p>
            <h2
              className="text-cream"
              style={{
                fontSize: "clamp(1.6rem, 2.5vw, 2rem)",
                fontWeight: 400,
                textWrap: "balance",
              }}
            >
              {stats.heading}
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4 lg:gap-8">
          {stats.items.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 100}>
              <div
                className="pl-5 sm:pl-6"
                style={{ borderLeft: "1px solid rgba(250,246,240,0.18)" }}
              >
                <div
                  className="font-display leading-none text-cream"
                  style={{
                    fontSize: "clamp(2.5rem, 4.5vw, 3.4rem)",
                    fontWeight: 400,
                    fontVariationSettings: '"opsz" 144, "SOFT" 50',
                    marginBottom: "0.5rem",
                  }}
                >
                  <Counter to={Number(stat.number)} />
                  {"suffix" in stat && stat.suffix && (
                    <sup
                      className="text-gold-warm"
                      style={{
                        fontSize: "0.5em",
                        marginLeft: "0.15em",
                        verticalAlign: "super",
                      }}
                    >
                      {stat.suffix}
                    </sup>
                  )}
                </div>
                <div
                  className="max-w-[200px]"
                  style={{
                    fontSize: "0.92rem",
                    color: "rgba(250,246,240,0.72)",
                    lineHeight: 1.4,
                  }}
                >
                  {stat.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
