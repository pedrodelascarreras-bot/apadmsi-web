import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { history } from "@/lib/content";

export function HistoryExpanded() {
  const items = history.timeline;
  const pendingSide: "left" | "right" =
    items.length % 2 === 0 ? "left" : "right";

  return (
    <section className="bg-cream py-16 sm:py-20 lg:py-24">
      <Container>
        <Reveal>
          <div className="mx-auto mb-10 max-w-[860px] text-center">
            <p className="section-label">{history.eyebrow}</p>
            <h2
              style={{
                fontSize: "clamp(2rem, 3.8vw, 3rem)",
                marginBottom: "1.5rem",
                lineHeight: 1.15,
                textWrap: "balance",
              }}
            >
              {history.heading}
            </h2>
            <p
              className="text-ink-muted"
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.7,
                textWrap: "balance",
              }}
            >
              {history.intro}
            </p>
          </div>
        </Reveal>

        <div className="mt-4">
          <div className="relative mx-auto max-w-[1080px]">
            <span
              aria-hidden="true"
              className="absolute top-2 bottom-2 w-px left-5 lg:left-1/2 lg:-translate-x-1/2"
              style={{ background: "var(--color-border)" }}
            />

            <ul className="list-none flex flex-col gap-6 lg:gap-8">
              {items.map((item, idx) => {
                const isLeft = idx % 2 === 0;
                return (
                  <Reveal key={item.year} tag="li" delay={idx * 60}>
                    <TimelineRow
                      side={isLeft ? "left" : "right"}
                      year={item.year}
                      title={item.title}
                      desc={item.desc}
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
                />
              </Reveal>
            </ul>
          </div>
        </div>
      </Container>
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
}: {
  side: "left" | "right";
  year: string;
  title: string | null;
  desc: string;
  dashed?: boolean;
  yearScript?: boolean;
}) {
  const cardClass =
    side === "left"
      ? "pl-12 lg:pl-0 lg:pr-10 lg:text-right lg:col-start-1"
      : "pl-12 lg:pl-10 lg:col-start-2";

  return (
    <div className="relative grid grid-cols-1 lg:grid-cols-2 lg:gap-x-14">
      <span
        aria-hidden="true"
        className="absolute z-10 h-4 w-4 rounded-full top-2 lg:top-3 left-5 -translate-x-1/2 lg:left-1/2"
        style={
          dashed
            ? {
                background: "var(--color-cream)",
                border: "2px dashed var(--color-border)",
              }
            : {
                background: "var(--color-burgundy)",
                border: "4px solid var(--color-cream)",
                boxShadow: "0 0 0 1px var(--color-border)",
              }
        }
      />

      <div className={cardClass}>
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
                  fontSize: "1.7rem",
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
              fontSize: "1rem",
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
