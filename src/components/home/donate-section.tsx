import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { donate } from "@/lib/content";
import { DonatePanel } from "@/components/donate/donate-panel";

export function DonateSection() {
  return (
    <section id="donar" className="bg-cream-warm py-14 sm:py-16 lg:py-20">
      <Container className="max-w-[1080px]">
        <Reveal>
          <div className="mx-auto mb-8 max-w-[640px] text-center">
            <p className="section-label">doná online</p>
            <h2
              style={{
                fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                lineHeight: 1.2,
                marginBottom: "0.5rem",
                textWrap: "balance",
              }}
            >
              Sumate hoy,{" "}
              <em
                style={{
                  fontStyle: "italic",
                  color: "var(--color-burgundy)",
                  background:
                    "linear-gradient(180deg, transparent 65%, rgba(232,168,124,0.4) 65%)",
                }}
              >
                transformá
              </em>{" "}
              el mañana.
            </h2>
            <p
              className="text-ink-muted"
              style={{ fontSize: "0.95rem", lineHeight: 1.6 }}
            >
              Cada aporte nos ayuda a seguir acompañando y cuidando.
            </p>
          </div>
        </Reveal>
        <DonatePanel accounts={[...donate.bankTransfer.accounts]} />
      </Container>
    </section>
  );
}
