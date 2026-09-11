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
            <p className="section-label">Sumáte a APADMSI</p>
            <h2
              style={{
                fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                lineHeight: 1.2,
                marginBottom: "0.5rem",
                textWrap: "balance",
              }}
            >
              Tu aporte ayuda a que este proyecto siga creciendo
            </h2>
            <div className="text-ink-muted">
              {donate.lede.split("\n\n").map((par) => (
                <p
                  key={par}
                  style={{
                    fontSize: "0.95rem",
                    lineHeight: 1.6,
                    marginTop: "0.75rem",
                  }}
                >
                  {par}
                </p>
              ))}
            </div>
          </div>
        </Reveal>
        <DonatePanel />
      </Container>
    </section>
  );
}
