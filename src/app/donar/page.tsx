import type { Metadata } from "next";
import { Container } from "@/components/shared/container";
import { donate } from "@/lib/content";
import { DonatePanel } from "@/components/donate/donate-panel";

export const metadata: Metadata = {
  title: "Donar",
  description:
    "Sumate como donante por MercadoPago o transferencia bancaria. Tu colaboración sostiene el trabajo del Centro de Día.",
};

export default function DonarPage() {
  return (
    <section className="bg-cream-warm py-12 sm:py-16 lg:py-20">
      <Container className="max-w-[1080px]">
        {/* Header */}
        <div className="mx-auto mb-10 max-w-[700px] text-center">
          <p className="section-label">Sumáte a APADMSI</p>
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
                background: "none",
              }}
            >
              siga creciendo
            </em>
            .
          </h1>
          <p
            className="text-ink-muted"
            style={{
              fontSize: "1rem",
              lineHeight: 1.6,
              textWrap: "balance",
            }}
          >
            Cada donación, sin importar su monto, contribuye a sostener el trabajo cotidiano de APADMSI.
          </p>
        </div>

        {/* Two-panel card */}
        <DonatePanel />
      </Container>
    </section>
  );
}
