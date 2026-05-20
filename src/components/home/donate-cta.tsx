import Link from "next/link";
import { Container } from "@/components/shared/container";
import { Copyable } from "@/components/shared/copyable";
import { Heart } from "@/components/shared/heart";
import { Reveal } from "@/components/shared/reveal";
import { donate } from "@/lib/content";

export function DonateCta() {
  return (
    <section
      id="donar"
      className="relative overflow-hidden text-cream py-16 sm:py-20 lg:py-28"
      style={{
        background:
          "linear-gradient(160deg, var(--color-burgundy) 0%, var(--color-burgundy-deep) 100%)",
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-[500px] w-[500px]"
        style={{
          background:
            "radial-gradient(circle, rgba(232,168,124,0.25), transparent 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-32 h-[400px] w-[400px]"
        style={{
          background:
            "radial-gradient(circle, rgba(201,169,97,0.18), transparent 70%)",
        }}
      />

      <Container className="relative z-10">
        {/* Header centrado arriba */}
        <Reveal>
          <div className="mx-auto mb-12 max-w-[860px] text-center">
            <p
              className="font-script"
              style={{
                color: "var(--color-peach)",
                fontSize: "1.6rem",
                lineHeight: 1,
                display: "inline-block",
                marginBottom: "0.75rem",
              }}
            >
              <span className="font-sans" style={{ color: "var(--color-gold-warm)" }}>↳ </span>
              {donate.eyebrow}
            </p>
            <h2
              className="text-cream"
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                marginBottom: "1rem",
                lineHeight: 1.15,
                textWrap: "balance",
              }}
            >
              <span
                dangerouslySetInnerHTML={{
                  __html: donate.headlineHtml.replace(
                    /<em>(.*?)<\/em>/g,
                    '<em style="font-style: italic; color: var(--color-peach); background: linear-gradient(180deg, transparent 70%, rgba(201,169,97,0.4) 70%);">$1</em>'
                  ),
                }}
              />
            </h2>

            <p
              className="font-script"
              style={{
                color: "var(--color-peach)",
                fontSize: "1.5rem",
                lineHeight: 1.1,
                marginBottom: "1.5rem",
                display: "block",
              }}
            >
              {donate.punch}
            </p>

            <p
              style={{
                color: "rgba(251,246,238,0.88)",
                fontSize: "1.05rem",
                lineHeight: 1.65,
                marginBottom: "1.25rem",
                textWrap: "balance",
              }}
            >
              {donate.lede}
            </p>

            <p
              style={{
                fontSize: "0.92rem",
                color: "rgba(251,246,238,0.72)",
                lineHeight: 1.7,
              }}
            >
              {donate.companyLink.text}{" "}
              <Link
                href={donate.companyLink.href}
                className="text-peach underline decoration-peach/50 underline-offset-[3px] transition-colors hover:decoration-peach"
              >
                {donate.companyLink.label} &rarr;
              </Link>
            </p>
          </div>
        </Reveal>

        {/* Datos bancarios — bloque centrado, ancho completo */}
        <div>
          <Reveal delay={150}>
            <div
              className="mx-auto max-w-[920px] rounded-[16px] border px-6 py-7 sm:px-8 sm:py-8"
              style={{
                background: "rgba(251,246,238,0.05)",
                borderColor: "rgba(251,246,238,0.2)",
              }}
            >
              <p
                className="font-script"
                style={{
                  color: "var(--color-peach)",
                  fontSize: "1.4rem",
                  lineHeight: 1,
                  display: "inline-block",
                  marginBottom: "0.4rem",
                }}
              >
                {donate.bankTransfer.eyebrow}
              </p>
              <p
                className="mb-6"
                style={{
                  color: "rgba(251,246,238,0.78)",
                  fontSize: "0.95rem",
                  lineHeight: 1.55,
                  textWrap: "balance",
                }}
              >
                {donate.bankTransfer.intro}
              </p>

              <div className="grid gap-3 md:grid-cols-2">
                {donate.bankTransfer.accounts.map((acc) => (
                  <div
                    key={acc.currency}
                    className="rounded-[12px] border bg-cream/[0.03] p-4"
                    style={{ borderColor: "rgba(251,246,238,0.18)" }}
                  >
                    <div className="mb-3 flex items-center justify-between gap-3">
                      <span
                        className="text-sm font-semibold"
                        style={{ color: "var(--color-cream)" }}
                      >
                        {acc.label}
                      </span>
                      <span
                        className="rounded-full px-2.5 py-0.5 text-xs font-bold"
                        style={{
                          background: "var(--color-peach)",
                          color: "var(--color-burgundy-deep)",
                          letterSpacing: "0.05em",
                        }}
                      >
                        {acc.currency}
                      </span>
                    </div>
                    <dl className="space-y-2 text-sm">
                      <Row dt="Banco">
                        <span style={{ color: "rgba(251,246,238,0.92)", fontSize: "0.92rem", fontWeight: 500 }}>
                          {acc.bank}
                        </span>
                      </Row>
                      <Row dt="CBU">
                        <Copyable value={acc.cbu} variant="dark" ariaLabel="CBU" />
                      </Row>
                      <Row dt="Alias">
                        <Copyable value={acc.alias} variant="dark" ariaLabel="Alias" />
                      </Row>
                      <Row dt="Titular">
                        <span style={{ color: "rgba(251,246,238,0.92)", fontSize: "0.92rem", fontWeight: 500 }}>
                          {acc.holder}
                        </span>
                      </Row>
                      <Row dt="CUIT">
                        <Copyable value={acc.cuitHolder} variant="dark" ariaLabel="CUIT" />
                      </Row>
                    </dl>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Donaciones en efectivo — bloque centrado */}
        <Reveal delay={250}>
          <div
            className="mx-auto mt-8 max-w-[760px] rounded-[14px] border px-6 py-7 text-center sm:px-8"
            style={{
              background: "rgba(251,246,238,0.04)",
              borderColor: "rgba(251,246,238,0.18)",
            }}
          >
            <h3
              className="font-display text-cream"
              style={{
                fontSize: "1.2rem",
                fontWeight: 500,
                marginBottom: "0.5rem",
                textWrap: "balance",
              }}
            >
              {donate.cash.title}
            </h3>
            <p
              className="mb-5"
              style={{
                fontSize: "0.95rem",
                color: "rgba(251,246,238,0.78)",
                lineHeight: 1.55,
                textWrap: "balance",
              }}
            >
              {donate.cash.desc}
            </p>
            <Link
              href={donate.cash.cta.href}
              className="btn-peach inline-flex items-center gap-2 rounded-full border-[1.5px] border-peach bg-peach px-5 py-2.5 text-sm font-bold text-burgundy-deep"
            >
              {donate.cash.cta.label}
            </Link>
          </div>
        </Reveal>

        {/* Otras formas de sumarte (socio / voluntario / empresa) */}
        <div className="mt-12">
          <Reveal>
            <p
              className="mb-5 font-script text-center"
              style={{
                color: "var(--color-peach)",
                fontSize: "1.5rem",
                lineHeight: 1,
              }}
            >
              {donate.ways.label}
            </p>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-3">
            {donate.ways.items.map((way, idx) => (
              <Reveal key={way.title} delay={idx * 100}>
                <article
                  className="h-full rounded-[12px] border p-6 text-center"
                  style={{
                    background: "rgba(251,246,238,0.04)",
                    borderColor: "rgba(251,246,238,0.15)",
                  }}
                >
                  <h3
                    className="font-display text-cream mb-2"
                    style={{ fontSize: "1.15rem", fontWeight: 500 }}
                  >
                    {way.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.92rem",
                      color: "rgba(251,246,238,0.78)",
                      lineHeight: 1.5,
                    }}
                  >
                    {way.desc}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
          <p
            className="mt-5 text-center"
            style={{
              fontSize: "0.85rem",
              color: "rgba(251,246,238,0.6)",
              fontStyle: "italic",
            }}
          >
            No hay requisitos específicos. Solo hacen falta tus ganas de participar.
          </p>
        </div>

        {/* CTA final con corazón */}
        <Reveal delay={300}>
          <div className="mt-10 text-center">
            <Link
              href="/donar"
              className="btn-burgundy inline-flex items-center gap-2 rounded-full border-[1.5px] border-burgundy bg-burgundy px-6 py-3 text-sm font-semibold shadow-[0_2px_0_0_var(--color-burgundy-deep)]"
              style={{ color: "#FFFFFF" }}
            >
              <span style={{ color: "#FFFFFF" }}>Quiero ayudar</span>
              <Heart size={14} />
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
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
      <dt
        className="shrink-0 text-xs uppercase tracking-[0.12em]"
        style={{
          color: "rgba(251,246,238,0.55)",
          minWidth: "60px",
          fontWeight: 600,
        }}
      >
        {dt}
      </dt>
      <dd className="flex flex-1 items-center min-w-0">{children}</dd>
    </div>
  );
}
