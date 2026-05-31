import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/shared/container";
import { Copyable } from "@/components/shared/copyable";
import { Heart } from "@/components/shared/heart";
import { MercadoPagoButton } from "@/components/shared/mercadopago-button";
import { donate } from "@/lib/content";

export const metadata: Metadata = {
  title: "Donar",
  description:
    "Sumate como donante por transferencia bancaria, en efectivo, o como socio o voluntario. Tu colaboración sostiene el trabajo del Centro de Día.",
};

export default function DonarPage() {
  return (
    <>
      {/* Banner superior */}
      <section className="relative overflow-hidden bg-cream-warm py-14 sm:py-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-20 h-[420px] w-[420px]"
          style={{
            background:
              "radial-gradient(circle, rgba(232,168,124,0.22), transparent 70%)",
          }}
        />
        <Container className="relative z-10 max-w-[860px] text-center">
          <p className="section-label">{donate.eyebrow}</p>
          <h1
            style={{
              fontSize: "clamp(2.2rem, 4.4vw, 3.2rem)",
              lineHeight: 1.15,
              marginBottom: "1rem",
              textWrap: "balance",
            }}
          >
            <span
              dangerouslySetInnerHTML={{
                __html: donate.headlineHtml.replace(
                  /<em>(.*?)<\/em>/g,
                  '<em style="font-style: italic; color: var(--color-burgundy); background: linear-gradient(180deg, transparent 65%, rgba(232,168,124,0.4) 65%);">$1</em>'
                ),
              }}
            />
          </h1>
          <p
            className="mb-2 text-ink-muted"
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.65,
              textWrap: "balance",
            }}
          >
            {donate.lede}
          </p>
        </Container>
      </section>

      {/* MercadoPago */}
      <section
        className="py-14 sm:py-18"
        style={{ background: "#F7F2EC" }}
      >
        <Container className="max-w-[860px]">
          <div className="mx-auto mb-8 max-w-[580px] text-center">
            <p className="section-label">doná online</p>
          </div>
          <MercadoPagoButton />
        </Container>
      </section>

      {/* Transferencia bancaria */}
      <section className="bg-cream py-14 sm:py-18">
        <Container className="max-w-[920px]">
          <div className="mx-auto mb-8 max-w-[860px] text-center">
            <p className="section-label">por transferencia bancaria</p>
            <h2
              style={{
                fontSize: "clamp(1.8rem, 3.4vw, 2.4rem)",
                marginBottom: "0.75rem",
                lineHeight: 1.2,
                textWrap: "balance",
              }}
            >
              Datos de las cuentas.
            </h2>
            <p
              className="text-ink-muted"
              style={{
                fontSize: "1rem",
                lineHeight: 1.65,
                textWrap: "balance",
              }}
            >
              {donate.bankTransfer.intro}
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {donate.bankTransfer.accounts.map((acc) => (
              <article
                key={acc.currency}
                className="rounded-[16px] border border-border bg-paper p-7 transition-all hover:-translate-y-[2px] hover:shadow-[0_12px_32px_rgba(31,22,17,0.08)]"
              >
                <div className="mb-5 flex items-center justify-between gap-3">
                  <span
                    className="font-display text-ink"
                    style={{ fontSize: "1.2rem", fontWeight: 500 }}
                  >
                    {acc.label}
                  </span>
                  <span className="rounded-full bg-burgundy px-3 py-1 text-xs font-bold tracking-[0.05em] text-white">
                    {acc.currency}
                  </span>
                </div>
                <dl className="space-y-3 text-sm">
                  <Row dt="Banco">
                    <span className="text-ink" style={{ fontSize: "0.95rem", fontWeight: 500 }}>
                      {acc.bank}
                    </span>
                  </Row>
                  <Row dt="CBU">
                    <Copyable value={acc.cbu} ariaLabel="CBU" />
                  </Row>
                  <Row dt="Alias">
                    <Copyable value={acc.alias} ariaLabel="Alias" />
                  </Row>
                  <Row dt="Titular">
                    <span className="text-ink" style={{ fontSize: "0.95rem", fontWeight: 500 }}>
                      {acc.holder}
                    </span>
                  </Row>
                  <Row dt="CUIT">
                    <Copyable value={acc.cuitHolder} ariaLabel="CUIT" />
                  </Row>
                </dl>
              </article>
            ))}
          </div>

          <p className="mt-6 text-center text-sm text-ink-muted">
            Una vez hecha la transferencia,{" "}
            <Link
              href="/contacto"
              className="font-semibold text-burgundy underline decoration-peach underline-offset-4 hover:decoration-burgundy"
            >
              escribinos
            </Link>{" "}
            con el comprobante para emitir el recibo.
          </p>
        </Container>
      </section>

      {/* Donaciones en efectivo */}
      <section className="bg-cream py-14 sm:py-16">
        <Container className="max-w-[860px] text-center">
          <p className="section-label">en efectivo</p>
          <h2
            style={{
              fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              marginBottom: "0.75rem",
              lineHeight: 1.2,
              textWrap: "balance",
            }}
          >
            {donate.cash.title}
          </h2>
          <p
            className="mb-6 text-ink-muted"
            style={{
              fontSize: "1rem",
              lineHeight: 1.65,
              textWrap: "balance",
            }}
          >
            {donate.cash.desc}
          </p>
          <Link
            href={donate.cash.cta.href}
            className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-burgundy bg-burgundy px-6 py-3 text-sm font-semibold text-white shadow-[0_2px_0_0_var(--color-burgundy-deep)] transition-all hover:-translate-y-px hover:bg-burgundy-deep hover:shadow-[0_3px_0_0_var(--color-burgundy-deep)]"
          >
            {donate.cash.cta.label}
            <Heart size={14} />
          </Link>
        </Container>
      </section>

      {/* Otras formas de sumarte */}
      <section className="bg-cream-warm py-14 sm:py-16">
        <Container className="max-w-[920px]">
          <p className="section-label text-center">{donate.ways.label}</p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {donate.ways.items.map((way) => (
              <article
                key={way.title}
                className="rounded-[12px] border border-border bg-paper p-6 text-center"
              >
                <h3
                  className="font-display text-ink"
                  style={{
                    fontSize: "1.15rem",
                    fontWeight: 500,
                    marginBottom: "0.5rem",
                  }}
                >
                  {way.title}
                </h3>
                <p
                  className="text-ink-muted"
                  style={{ fontSize: "0.92rem", lineHeight: 1.55 }}
                >
                  {way.desc}
                </p>
              </article>
            ))}
          </div>
          <p
            className="mt-6 text-center italic text-ink-soft"
            style={{ fontSize: "0.9rem" }}
          >
            No hay requisitos específicos. Solo hacen falta tus ganas de participar.
          </p>
        </Container>
      </section>

      {/* FAQ chico */}
      <section className="bg-cream py-14 sm:py-16">
        <Container className="max-w-[760px]">
          <h2
            className="mb-6"
            style={{
              fontSize: "clamp(1.4rem, 2.4vw, 1.8rem)",
              lineHeight: 1.25,
            }}
          >
            Preguntas frecuentes.
          </h2>
          <div className="space-y-4">
            <Faq
              q="¿En qué se usa el dinero?"
              a="Las donaciones se destinan principalmente a sostener los sueldos del equipo profesional, las tres comidas diarias, los materiales de los talleres y las mejoras de infraestructura del Centro."
            />
            <Faq
              q="¿Recibo un recibo?"
              a="Sí. Una vez que recibimos el comprobante de la transferencia (o el efectivo), te emitimos un recibo institucional firmado por la dirección."
            />
            <Faq
              q="¿Aceptan donaciones en bienes o servicios?"
              a="Sí. Aceptamos donaciones en bienes (alimentos, materiales, ropa, equipamiento) y en servicios (mantenimiento, profesionales que aporten horas, etc.). Escribinos para coordinar."
            />
            <Faq
              q="¿APADMSI es una asociación civil sin fines de lucro?"
              a="Sí, somos una asociación civil sin fines de lucro fundada en 1982 (CUIT 30-64736769-7), reconocida por PAMI, Incluir Salud y Pensiones No Contributivas."
            />
          </div>
        </Container>
      </section>
    </>
  );
}

function Row({
  dt,
  children,
}: {
  dt: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-3">
      <dt className="shrink-0 text-xs font-bold uppercase tracking-[0.12em] text-ink-muted min-w-[60px]">
        {dt}
      </dt>
      <dd className="flex flex-1 items-center min-w-0">{children}</dd>
    </div>
  );
}

function Faq({ q, a }: { q: string; a: string }) {
  return (
    <details className="group rounded-[12px] border border-border bg-paper px-5 py-4 transition-colors hover:border-ink-soft">
      <summary className="flex cursor-pointer items-center justify-between gap-4 list-none">
        <span className="font-semibold text-ink">{q}</span>
        <span
          aria-hidden="true"
          className="text-burgundy transition-transform group-open:rotate-45"
          style={{ fontSize: "1.4rem", lineHeight: 1 }}
        >
          +
        </span>
      </summary>
      <p className="mt-3 text-ink-muted" style={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
        {a}
      </p>
    </details>
  );
}
