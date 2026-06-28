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
          <p className="section-label">doná online</p>
          <h1
            style={{
              fontSize: "clamp(1.8rem, 3.6vw, 2.6rem)",
              lineHeight: 1.15,
              marginBottom: "0.75rem",
              textWrap: "balance",
            }}
          >
            Sumate hoy,{" "}
            <em
              style={{
                fontStyle: "italic",
                color: "var(--color-burgundy)",
                background:
                  "linear-gradient(180deg, transparent 65%, rgba(201,171,110,0.4) 65%)",
              }}
            >
              transformá
            </em>{" "}
            el mañana.
          </h1>
          <p
            className="text-ink-muted"
            style={{
              fontSize: "1rem",
              lineHeight: 1.6,
              textWrap: "balance",
            }}
          >
            Cada aporte nos ayuda a seguir acompañando y cuidando.
          </p>
        </div>

        {/* Two-panel card */}
        <DonatePanel accounts={[...donate.bankTransfer.accounts]} />
      </Container>
    </section>
  );
}
