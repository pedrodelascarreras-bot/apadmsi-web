import Link from "next/link";
import { Container } from "@/components/shared/container";
import { Heart } from "@/components/shared/heart";
import { Reveal } from "@/components/shared/reveal";
import { donate } from "@/lib/content";

export function DonateCta() {
  return (
    <section
      id="donar"
      className="relative overflow-hidden text-cream py-16 sm:py-20 lg:py-24"
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
        <Reveal>
          <div className="mx-auto max-w-[720px] text-center">
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
                marginBottom: "2rem",
                textWrap: "balance",
              }}
            >
              {donate.lede}
            </p>

            {/* CTA principal */}
            <Link
              href="/donar"
              className="group inline-flex items-center gap-2.5 rounded-full border-[2px] border-peach bg-peach px-8 py-3.5 text-base font-bold transition-all hover:-translate-y-[1px] hover:shadow-[0_6px_20px_rgba(232,168,124,0.4)]"
              style={{
                color: "var(--color-burgundy-deep)",
                letterSpacing: "0.01em",
              }}
            >
              Quiero ayudar
              <Heart size={16} />
            </Link>

            <p
              className="mt-5"
              style={{
                fontSize: "0.88rem",
                color: "rgba(251,246,238,0.6)",
                lineHeight: 1.6,
              }}
            >
              Podés donar con MercadoPago, transferencia bancaria o en efectivo.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
