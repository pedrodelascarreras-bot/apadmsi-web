import { Container } from "@/components/shared/container";
import { DonatePanel } from "@/components/donate/donate-panel";
import { ColorListener } from "@/components/paleta/color-listener";

export default function PreviewDonar() {
  return (
    <>
      <ColorListener />
      <section className="bg-cream-warm py-12 sm:py-16 lg:py-20">
        <Container className="max-w-[1080px]">
          <div className="mx-auto mb-10 max-w-[700px] text-center">
            <p className="section-label">sumate a APADMSI</p>
            <h1
              style={{
                fontSize: "clamp(1.8rem, 3.6vw, 2.6rem)",
                lineHeight: 1.15,
                marginBottom: "0.75rem",
                textWrap: "balance",
              }}
            >
              Tu aporte ayuda a que este proyecto{" "}
              <em
                style={{
                  fontStyle: "italic",
                  color: "var(--color-burgundy)",
                  background:
                    "none",
                }}
              >
                siga creciendo
              </em>
              .
            </h1>
            <p
              className="text-ink-muted"
              style={{ fontSize: "1rem", lineHeight: 1.6, textWrap: "balance" }}
            >
              Cada donacion, sin importar su monto, contribuye a sostener el trabajo cotidiano de APADMSI.
            </p>
          </div>
          <DonatePanel />
        </Container>
      </section>
    </>
  );
}
