import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { team } from "@/lib/content";

function PeopleIcon() {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-burgundy"
      aria-hidden="true"
    >
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function BulletList({
  members,
}: {
  members: readonly { name: string; role: string }[];
}) {
  return (
    <ul className="space-y-3 list-none">
      {members.map((p) => (
        <li
          key={p.name || p.role}
          className="flex items-center gap-3"
        >
          {/* Burgundy bullet dot */}
          <span
            className="shrink-0 rounded-full bg-burgundy"
            style={{ width: 7, height: 7 }}
            aria-hidden="true"
          />
          <span
            className="text-ink"
            style={{
              fontSize: "0.92rem",
              lineHeight: 1.4,
            }}
          >
            {p.name || p.role}
          </span>
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

        {/* Two cards side by side */}
        <div className="mx-auto grid max-w-[960px] gap-6 md:grid-cols-2">
          {/* Comisión Directiva */}
          <Reveal delay={100}>
            <div
              className="h-full rounded-[16px] border border-border bg-paper px-7 py-8 sm:px-9 sm:py-9"
              style={{ boxShadow: "0 6px 20px rgba(31,22,17,0.04)" }}
            >
              <div className="mb-6 flex flex-col items-center gap-3 text-center">
                <PeopleIcon />
                <h3
                  className="font-display text-burgundy"
                  style={{ fontSize: "1.15rem", fontWeight: 600 }}
                >
                  {team.daily.label}
                </h3>
              </div>
              <BulletList members={team.daily.members} />
            </div>
          </Reveal>

          {/* Staff */}
          <Reveal delay={200}>
            <div
              className="h-full rounded-[16px] border border-border bg-paper px-7 py-8 sm:px-9 sm:py-9"
              style={{ boxShadow: "0 6px 20px rgba(31,22,17,0.04)" }}
            >
              <div className="mb-6 flex flex-col items-center gap-3 text-center">
                <PeopleIcon />
                <h3
                  className="font-display text-burgundy"
                  style={{ fontSize: "1.15rem", fontWeight: 600 }}
                >
                  Staff
                </h3>
              </div>
              <BulletList members={team.professionals} />
            </div>
          </Reveal>
        </div>

        {/* Closing line */}
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
