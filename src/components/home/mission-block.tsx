import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { about } from "@/lib/content";

export function MissionBlock() {
  return (
    <section className="bg-cream-warm py-10 sm:py-12">
      <Container className="max-w-[820px]">
        <Reveal>
          <aside
            className="rounded-[14px] bg-paper px-6 py-6 sm:px-8 sm:py-7"
            style={{
              borderLeft: "4px solid var(--color-peach)",
              boxShadow: "0 6px 20px rgba(31,22,17,0.04)",
            }}
          >
            <p
              className="font-script text-burgundy"
              style={{
                fontSize: "1.4rem",
                lineHeight: 1,
                marginBottom: "0.75rem",
              }}
            >
              {about.mission.label}
            </p>
            <ul className="flex flex-col gap-3 list-none">
              {about.mission.statements.map((s) => (
                <li
                  key={s}
                  className="font-display text-ink"
                  style={{
                    fontSize: "1.02rem",
                    lineHeight: 1.5,
                    fontWeight: 500,
                    fontVariationSettings: '"opsz" 144, "SOFT" 80',
                  }}
                >
                  {s}
                </li>
              ))}
            </ul>
          </aside>
        </Reveal>
      </Container>
    </section>
  );
}
