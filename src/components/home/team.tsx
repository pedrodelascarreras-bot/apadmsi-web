import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { team } from "@/lib/content";
import { TeamListCollapsible } from "./team-list-collapsible";

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

        {/* Autoridades — cards compactas sin avatar */}
        <div className="mx-auto grid max-w-[1080px] gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {team.members.map((member, idx) => (
            <Reveal key={member.name} delay={idx * 100}>
              <article
                className="group flex h-full flex-col rounded-[16px] bg-paper px-6 pt-6 pb-5 transition-all hover:-translate-y-[2px] hover:shadow-[0_12px_32px_rgba(31,22,17,0.08)]"
                style={{
                  borderLeft: "3px solid var(--color-burgundy)",
                  border: "1px solid var(--color-border)",
                  borderLeftWidth: 3,
                  borderLeftColor: "var(--color-burgundy)",
                }}
              >
                {/* Rol — chip */}
                <span className="mb-3 inline-block self-start rounded-full bg-cream-warm px-3 py-1 text-[0.66rem] font-bold uppercase tracking-[0.16em] text-burgundy">
                  {member.role}
                </span>

                {/* Nombre */}
                <h3
                  className="font-display text-ink"
                  style={{
                    fontSize: "1.12rem",
                    fontWeight: 600,
                    lineHeight: 1.25,
                    marginBottom: "0.6rem",
                    fontVariationSettings: '"opsz" 144, "SOFT" 80',
                  }}
                >
                  {member.name}
                </h3>

                {/* Descripción */}
                <p
                  className="text-ink-muted"
                  style={{
                    fontSize: "0.88rem",
                    lineHeight: 1.6,
                  }}
                >
                  {member.desc}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Equipo docente y de cuidado diario */}
        <Reveal delay={250}>
          <div className="mt-12">
            <TeamListCollapsible
              label={team.daily.label}
              intro={team.daily.intro}
              members={team.daily.members}
            />
          </div>
        </Reveal>

        {/* Equipo profesional especializado */}
        <Reveal delay={300}>
          <div className="mt-6">
            <TeamListCollapsible
              label="equipo profesional especializado"
              intro="Profesionales que vienen por horas a lo largo de la semana para el seguimiento individual de cada concurrente."
              members={team.professionals}
            />
          </div>
        </Reveal>

        {/* Línea de cierre */}
        <Reveal delay={400}>
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
      </Container>
    </section>
  );
}
