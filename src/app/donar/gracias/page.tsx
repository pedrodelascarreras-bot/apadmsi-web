import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/shared/container";
import { Heart } from "@/components/shared/heart";
import { ShareButtons } from "@/components/shared/share-buttons";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Gracias",
  description:
    "Gracias por tu aporte. Tu donación sostiene el trabajo del Centro de Día.",
};

export default function GraciasPage() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-20 h-[420px] w-[420px]"
        style={{
          background:
            "radial-gradient(circle, rgba(232,168,124,0.22), transparent 70%)",
        }}
      />
      <Container className="relative z-10 max-w-[640px] text-center">
        <div
          className="mx-auto mb-8 grid h-20 w-20 place-items-center rounded-full"
          style={{
            background: "var(--color-peach)",
            boxShadow: "0 12px 32px rgba(232,168,124,0.4)",
          }}
        >
          <Heart size={40} className="text-burgundy" />
        </div>

        <p className="font-script text-2xl text-burgundy">
          gracias por estar acá
        </p>

        <h1
          className="mt-2"
          style={{
            fontSize: "clamp(2.2rem, 4.4vw, 3rem)",
            lineHeight: 1.1,
            marginBottom: "1.25rem",
          }}
        >
          Tu aporte nos ayuda a seguir.
        </h1>

        <p
          className="text-ink-muted"
          style={{ fontSize: "1.05rem", lineHeight: 1.7 }}
        >
          Tu ayuda hace posible que el Centro siga funcionando. Cada
          aporte, por más pequeño que sea, sostiene el cuidado diario de
          nuestros concurrentes.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-burgundy bg-burgundy px-6 py-3 text-sm font-semibold text-white shadow-[0_2px_0_0_var(--color-burgundy-deep)] transition-all hover:bg-burgundy-deep hover:-translate-y-px hover:shadow-[0_3px_0_0_var(--color-burgundy-deep)]"
          >
            Volver al inicio
          </Link>
          <a
            href={`mailto:${site.email}`}
            className="btn-outline-ink inline-flex items-center gap-2 rounded-full border-[1.5px] border-ink px-6 py-3 text-sm font-semibold"
          >
            Escribinos
          </a>
        </div>

        <div
          className="mt-12 flex justify-center rounded-[12px] border border-border bg-paper px-5 py-5"
        >
          <ShareButtons variant="light" />
        </div>
      </Container>
    </section>
  );
}
