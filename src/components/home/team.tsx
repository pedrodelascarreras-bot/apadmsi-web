import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { team } from "@/lib/content";

function RoleList({
  members,
}: {
  members: readonly { name: string; role: string }[];
}) {
  return (
    <ul className="space-y-2.5 list-none">
      {members.map((p) => (
        <li
          key={p.name || p.role}
          className="flex items-center gap-3 rounded-[8px] bg-cream px-4 py-2.5"
          style={{
            borderLeft: "3px solid var(--color-burgundy)",
          }}
        >
          {p.name ? (
            <span className="flex flex-col gap-0.5 min-w-0">
              <span
                className="font-display text-ink"
                style={{ fontSize: "0.95rem", fontWeight: 600, lineHeight: 1.25 }}
              >
                {p.name}
              </span>
              <span
                className="text-xs uppercase tracking-[0.1em] text-ink-muted"
                style={{ lineHeight: 1.3 }}
              >
                {p.role}
              </span>
            </span>
          ) : (
            <span
              className="font-display text-ink"
              style={{ fontSize: "0.92rem", fontWeight: 500, lineHeight: 1.3 }}
            >
              {p.role}
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}

export function Team() {
  return (
    <section id="equipo" className="bg-cream py-16 sm:py-20 lg:py-24">
      <Container>
        <Reveal>
          <div className="mx-auto mb-12 max-w-[860px] text-center">
            <p className="section-label">{team.eyebrow}</p>
            <h2
              className="highlight"
              style={{
                fontSize: "clamp(2rem, 3.8vw, 3rem)",
                marginBottom: "1.5rem",
                lineHeight: 1.15,
                textWrap: "balance",
              }}
              dangerouslySetInnerHTML={{ __html: team.headlineHtml }}
            />
            <p
              className="text-ink-muted"
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.7,
                textWrap: "balance",
              }}
            >
              {team.intro}
            </p>
          </div>
        </Reveal>

        {/* Dos columnas: Comisión Directiva + Staff */}
        <div className="mx-auto grid max-w-[960px] gap-6 md:grid-cols-2">
          {/* Comisión Directiva */}
          <Reveal delay={100}>
            <div
              className="h-full rounded-[16px] border border-border bg-paper px-6 py-7 sm:px-8 sm:py-8"
              style={{ boxShadow: "0 6px 20px rgba(31,22,17,0.04)" }}
            >
              <p className="section-label" style={{ marginBottom: "1rem" }}>
                {team.daily.label}
              </p>
              <RoleList members={team.daily.members} />
            </div>
          </Reveal>

          {/* Staff */}
          <Reveal delay={200}>
            <div
              className="h-full rounded-[16px] border border-border bg-paper px-6 py-7 sm:px-8 sm:py-8"
              style={{ boxShadow: "0 6px 20px rgba(31,22,17,0.04)" }}
            >
              <p className="section-label" style={{ marginBottom: "1rem" }}>
                Staff
              </p>
              <RoleList members={team.professionals} />
            </div>
          </Reveal>
        </div>

        {/* Línea de cierre */}
        {team.closing && (
          <Reveal delay={300}>
            <div className="mt-10 flex w-full justify-center">
              <p
                className="text-ink-muted"
                style={{
                  fontSize: "0.95rem",
                  lineHeight: 1.65,
                  textAlign: "center",
                  textWrap: "balance",
                  maxWidth: "720px",
                }}
              >
                {team.closing}
              </p>
            </div>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
