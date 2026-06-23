import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { history, FOUNDED_YEAR } from "@/lib/content";

const yearsActive = new Date().getFullYear() - FOUNDED_YEAR;

export function HistoryExpanded() {
  const items = history.timeline;
  const pendingSide: "left" | "right" =
    items.length % 2 === 0 ? "left" : "right";

  return (
    <section className="relative overflow-hidden">
      {/* Hero banner */}
      <div
        className="relative py-16 sm:py-20 lg:py-24 text-cream"
        style={{
          background:
            "linear-gradient(135deg, #2A1F18 0%, #3D2E25 40%, #4A3228 100%)",
        }}
      >
        {/* Decorative blobs */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-[10%] top-0 h-full w-1/2"
          style={{
            background:
              "radial-gradient(ellipse, rgba(232,168,124,0.12), transparent 70%)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-[5%] bottom-0 h-1/2 w-1/3"
          style={{
            background:
              "radial-gradient(ellipse, rgba(185,28,44,0.08), transparent 70%)",
          }}
        />

        <Container className="relative z-10">
          <Reveal>
            <div className="mx-auto max-w-[860px] text-center">
              {/* Badge */}
              <div
                className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2"
                style={{
                  background: "rgba(232,168,124,0.15)",
                  border: "1px solid rgba(232,168,124,0.3)",
                }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--color-peach)"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="9" />
                  <polyline points="12 7 12 12 15 14" />
                </svg>
                <span
                  className="font-semibold"
                  style={{ fontSize: "0.82rem", letterSpacing: "0.06em", color: "var(--color-peach)" }}
                >
                  {yearsActive}+ AÑOS DE HISTORIA
                </span>
              </div>

              <h1
                className="highlight"
                style={{
                  fontSize: "clamp(2rem, 4vw, 3.2rem)",
                  lineHeight: 1.15,
                  textWrap: "balance",
                  color: "var(--color-cream)",
                  fontWeight: 400,
                }}
              >
                {history.heading}
              </h1>
              <p
                style={{
                  fontSize: "1.08rem",
                  lineHeight: 1.7,
                  textWrap: "balance",
                  marginTop: "1.25rem",
                  color: "rgba(251,246,238,0.75)",
                }}
              >
                {history.intro}
              </p>

              {/* Stats row */}
              <div
                className="mx-auto mt-8 flex flex-wrap items-center justify-center gap-8 sm:gap-12"
              >
                {[
                  { value: FOUNDED_YEAR.toString(), label: "Fundación" },
                  { value: `${items.length}`, label: "Hitos" },
                  { value: `${yearsActive}+`, label: "Años" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div
                      className="font-display"
                      style={{
                        fontSize: "2rem",
                        fontWeight: 500,
                        color: "var(--color-peach)",
                        lineHeight: 1,
                        fontVariationSettings: '"opsz" 144, "SOFT" 80',
                      }}
                    >
                      {stat.value}
                    </div>
                    <div
                      style={{
                        fontSize: "0.75rem",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        fontWeight: 600,
                        color: "rgba(251,246,238,0.5)",
                        marginTop: "0.25rem",
                      }}
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </Container>
      </div>

      {/* Timeline section */}
      <div className="bg-cream py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="relative mx-auto max-w-[1080px]">
            {/* Gradient line instead of plain border */}
            <span
              aria-hidden="true"
              className="absolute top-2 bottom-2 left-5 lg:left-1/2 lg:-translate-x-1/2"
              style={{
                width: "2px",
                background:
                  "linear-gradient(180deg, var(--color-burgundy) 0%, var(--color-peach) 50%, var(--color-border) 100%)",
                borderRadius: "1px",
              }}
            />

            <ul className="list-none flex flex-col gap-8 lg:gap-10">
              {items.map((item, idx) => {
                const isLeft = idx % 2 === 0;
                return (
                  <Reveal key={item.year} tag="li" delay={idx * 60}>
                    <TimelineRow
                      side={isLeft ? "left" : "right"}
                      year={item.year}
                      title={item.title}
                      desc={item.desc}
                      index={idx}
                    />
                  </Reveal>
                );
              })}

              <Reveal tag="li" delay={items.length * 60}>
                <TimelineRow
                  side={pendingSide}
                  dashed
                  year="próximamente"
                  title={null}
                  desc={history.pendingNote}
                  yearScript
                  index={items.length}
                />
              </Reveal>
            </ul>
          </div>
        </Container>
      </div>
    </section>
  );
}

function TimelineRow({
  side,
  year,
  title,
  desc,
  dashed = false,
  yearScript = false,
  index = 0,
}: {
  side: "left" | "right";
  year: string;
  title: string | null;
  desc: string;
  dashed?: boolean;
  yearScript?: boolean;
  index?: number;
}) {
  const cardClass =
    side === "left"
      ? "pl-14 lg:pl-0 lg:pr-12 lg:text-right lg:col-start-1"
      : "pl-14 lg:pl-12 lg:col-start-2";

  return (
    <div className="relative grid grid-cols-1 lg:grid-cols-2 lg:gap-x-14">
      {/* Dot with ring */}
      <span
        aria-hidden="true"
        className="absolute z-10 top-1 lg:top-2 left-5 -translate-x-1/2 lg:left-1/2"
        style={
          dashed
            ? {
                width: "18px",
                height: "18px",
                borderRadius: "50%",
                background: "var(--color-cream)",
                border: "2px dashed var(--color-border)",
              }
            : {
                width: "18px",
                height: "18px",
                borderRadius: "50%",
                background: "var(--color-burgundy)",
                border: "4px solid var(--color-cream)",
                boxShadow:
                  "0 0 0 2px var(--color-burgundy), 0 2px 8px rgba(185,28,44,0.2)",
              }
        }
      />

      {/* Card */}
      <div
        className={cardClass}
        style={{
          background: index % 2 === 0 ? "rgba(251,246,238,0.5)" : "transparent",
          borderRadius: "12px",
          padding: index % 2 === 0 ? "1rem 1.25rem" : "0.5rem 0",
        }}
      >
        <div
          className={
            yearScript
              ? "font-script text-burgundy"
              : "font-display text-burgundy"
          }
          style={
            yearScript
              ? { fontSize: "1.4rem", lineHeight: 1, marginBottom: "0.4rem" }
              : {
                  fontSize: "1.8rem",
                  fontWeight: 500,
                  lineHeight: 1,
                  marginBottom: "0.5rem",
                  fontVariationSettings: '"opsz" 144, "SOFT" 80',
                }
          }
        >
          {year}
        </div>

        {title && (
          <h3
            className="font-semibold text-ink"
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.4,
              marginBottom: "0.5rem",
            }}
          >
            {title}
          </h3>
        )}

        <p
          className="text-ink-muted"
          style={{
            fontSize: title ? "0.98rem" : "0.95rem",
            lineHeight: 1.65,
            textWrap: "pretty",
          }}
        >
          {desc}
        </p>
      </div>
    </div>
  );
}
