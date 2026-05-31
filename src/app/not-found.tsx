import Link from "next/link";
import { Container } from "@/components/shared/container";

export default function NotFound() {
  return (
    <section className="flex flex-1 items-center justify-center py-24 sm:py-32">
      <Container className="max-w-[560px] text-center">
        <p className="font-script text-2xl text-burgundy">página no encontrada</p>
        <h1
          className="mt-2"
          style={{
            fontSize: "clamp(2.4rem, 5vw, 3.6rem)",
            lineHeight: 1.1,
            marginBottom: "1rem",
          }}
        >
          404
        </h1>
        <p
          className="text-ink-muted"
          style={{ fontSize: "1.05rem", lineHeight: 1.65 }}
        >
          La dirección que ingresaste no existe o se movió. Volvé al inicio o
          escribinos si necesitás algo puntual.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-burgundy bg-burgundy px-6 py-3 text-sm font-semibold text-white shadow-[0_2px_0_0_var(--color-burgundy-deep)] transition-all hover:bg-burgundy-deep hover:-translate-y-px hover:shadow-[0_3px_0_0_var(--color-burgundy-deep)]"
          >
            Volver al inicio
          </Link>
          <Link
            href="/contacto"
            className="btn-outline-ink inline-flex items-center gap-2 rounded-full border-[1.5px] border-ink px-6 py-3 text-sm font-semibold"
          >
            Escribinos
          </Link>
        </div>
      </Container>
    </section>
  );
}
