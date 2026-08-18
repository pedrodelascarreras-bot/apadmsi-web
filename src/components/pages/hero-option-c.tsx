import Link from "next/link";
import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { Container } from "@/components/shared/container";
import { Heart } from "@/components/shared/heart";
import { hero, about } from "@/lib/content";

/* Opción C: layout asimétrico — foto grande recortada en diagonal
   a la derecha, texto a la izquierda, misión debajo como tira horizontal. */

const HERO_IMAGE = "/images/fotodeportadaFUNDACION.PNG";
function heroImageExists() {
  return fs.existsSync(path.join(process.cwd(), "public", HERO_IMAGE));
}

export function HeroOptionC() {
  return (
    <section className="relative overflow-hidden py-12 sm:py-14 lg:py-16">
      <Container className="relative z-10">
        <div className="grid items-center gap-10 lg:gap-12 lg:grid-cols-[1fr_1.2fr]">
          {/* Izquierda — copy */}
          <div className="text-center sm:text-left">
            <p
              className="font-script text-2xl font-medium leading-none text-burgundy"
              style={{ display: "inline-block" }}
            >
              {hero.eyebrow}
            </p>

            <h1
              className="highlight mt-3 text-ink"
              style={{
                fontSize: "clamp(2rem, 3.8vw, 3rem)",
                fontWeight: 400,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}
              dangerouslySetInnerHTML={{ __html: hero.headlineHtml }}
            />

            <p
              className="mx-auto mt-5 max-w-[540px] text-ink-muted sm:mx-0"
              style={{ fontSize: "1.05rem", lineHeight: 1.65 }}
            >
              {hero.lede}
            </p>

            <div className="mt-7 flex flex-wrap items-center justify-center gap-4 sm:justify-start">
              <Link
                href={hero.ctaPrimary.href}
                className="btn-burgundy inline-flex items-center gap-2 rounded-full border-[1.5px] border-burgundy bg-burgundy px-6 py-3 text-sm font-semibold shadow-[0_2px_0_0_var(--color-burgundy-deep)]"
                style={{ color: "#FFFFFF" }}
              >
                <span style={{ color: "#FFFFFF" }}>{hero.ctaPrimary.label}</span>
                <Heart size={14} />
              </Link>
              <Link
                href={hero.ctaSecondary.href}
                className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-ink bg-transparent px-6 py-3 text-sm font-semibold text-ink transition-all"
              >
                {hero.ctaSecondary.label}
              </Link>
            </div>
          </div>

          {/* Derecha — foto con clip diagonal */}
          <div className="relative">
            <div
              className="relative overflow-hidden"
              style={{
                borderRadius: "16px 80px 16px 80px",
                aspectRatio: "4/3",
                boxShadow: "0 24px 64px rgba(201,171,110,0.25)",
                border: "2px solid var(--color-border)",
                background:
                  "linear-gradient(140deg, var(--color-paper), var(--color-cream-warm))",
              }}
            >
              {heroImageExists() && (
                <Image
                  src={HERO_IMAGE}
                  alt="Concurrentes y equipo de APADMSI durante una salida"
                  fill
                  priority
                  sizes="(max-width: 1024px) 95vw, 55vw"
                  className="object-cover"
                  style={{ objectPosition: "50% 30%" }}
                />
              )}
            </div>
            {/* Badge flotante */}
            <div
              className="absolute -bottom-4 -left-2 z-10 rounded-[12px] border border-border bg-paper px-5 py-3.5 sm:-left-6"
              style={{ boxShadow: "0 12px 40px rgba(31,22,17,0.12)" }}
            >
              <p
                className="font-display leading-tight text-burgundy"
                style={{ fontSize: "1.1rem", fontWeight: 500 }}
              >
                {hero.badge.text}
              </p>
              <p
                className="mt-0.5 font-script leading-tight text-ink"
                style={{ fontSize: "0.95rem" }}
              >
                {hero.badge.subtext}
              </p>
            </div>
            {/* Corazón decorativo */}
            <div
              aria-hidden="true"
              className="absolute -right-2 -top-3 z-10 grid h-12 w-12 place-items-center rounded-full sm:-right-4 sm:h-14 sm:w-14"
              style={{
                background: "var(--color-peach)",
                boxShadow: "0 8px 24px rgba(201,171,110,0.4)",
              }}
            >
              <Heart size={24} className="text-burgundy" />
            </div>
          </div>
        </div>

        {/* Misión — tira horizontal debajo */}
        <div
          className="mx-auto mt-14 rounded-[16px]"
          style={{
            maxWidth: "1000px",
            background: "var(--color-cream-warm)",
            border: "1px solid var(--color-border)",
            padding: "1.5rem 2rem",
          }}
        >
          <p
            className="font-script text-burgundy"
            style={{ fontSize: "1.15rem", lineHeight: 1, marginBottom: "0.8rem" }}
          >
            {about.mission.label}
          </p>
          <ul
            className="flex list-none flex-col gap-1.5 text-ink-muted"
            style={{ fontSize: "0.92rem", lineHeight: 1.55 }}
          >
            {about.mission.statements.map((s) => (
              <li key={s}>
                {s}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
