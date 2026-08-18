import Link from "next/link";
import fs from "node:fs";
import path from "node:path";
import { Container } from "@/components/shared/container";
import { Heart } from "@/components/shared/heart";
import { HeroImage } from "@/components/home/hero-image";
import { hero, about } from "@/lib/content";

const HERO_IMAGE = "/images/fotodeportadaFUNDACION.PNG";
function heroImageExists() {
  return fs.existsSync(path.join(process.cwd(), "public", HERO_IMAGE));
}

export function Hero() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-16 lg:py-20">
      {/* Blob decorativo cálido */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[10%] top-[10%] h-[80%] w-1/2"
        style={{
          background:
            "radial-gradient(ellipse, rgba(201,171,110,0.18), transparent 70%)",
        }}
      />

      <Container className="relative z-10">
        <div className="grid items-center gap-12 sm:gap-10 lg:gap-16 lg:grid-cols-[1.05fr_1fr]">
          {/* Columna izquierda — copy */}
          <div className="text-center sm:text-left">
            <p
              className="fade-up font-script text-2xl font-medium leading-none text-burgundy"
              style={{ display: "inline-block" }}
            >
              {hero.eyebrow}
            </p>

            <h1
              className="highlight fade-up mt-3 text-ink"
              style={{
                fontSize: "clamp(2.4rem, 5.2vw, 4.2rem)",
                fontWeight: 400,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                animationDelay: "0.1s",
              }}
              dangerouslySetInnerHTML={{ __html: hero.headlineHtml }}
            />

            <p
              className="fade-up mx-auto mt-6 max-w-[540px] text-ink-muted sm:mx-0"
              style={{
                fontSize: "clamp(1.05rem, 1.4vw, 1.18rem)",
                lineHeight: 1.65,
                animationDelay: "0.2s",
              }}
            >
              {hero.lede}
            </p>

            <div
              className="fade-up mx-auto mt-5 max-w-[540px] sm:mx-0"
              style={{ animationDelay: "0.25s" }}
            >
              <p
                className="font-script text-burgundy"
                style={{ fontSize: "1.15rem", lineHeight: 1, marginBottom: "0.5rem" }}
              >
                {about.mission.label}
              </p>
              <ul className="flex flex-col gap-1.5 list-none text-ink-muted" style={{ fontSize: "0.92rem", lineHeight: 1.55 }}>
                {about.mission.statements.map((s) => (
                  <li key={s}>
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="fade-up mt-8 flex flex-wrap items-center justify-center gap-4 sm:justify-start"
              style={{ animationDelay: "0.3s" }}
            >
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
                className="hero-secondary-cta inline-flex items-center gap-2 rounded-full border-[1.5px] border-ink bg-transparent px-6 py-3 text-sm font-semibold transition-all"
              >
                {hero.ctaSecondary.label}
              </Link>
            </div>

          </div>

          {/* Columna derecha — visual */}
          <div className="fade-up relative" style={{ animationDelay: "0.15s" }}>
            <div
              className="relative overflow-hidden rounded-[12px]"
              style={{
                aspectRatio: "4/3",
                background:
                  "linear-gradient(140deg, var(--color-cream-warm) 0%, var(--color-sand) 100%)",
                boxShadow: "0 20px 60px rgba(122, 22, 32, 0.08)",
              }}
            >
              {heroImageExists() ? (
                <HeroImage
                  src={HERO_IMAGE}
                  alt="Concurrentes y equipo de APADMSI durante una salida"
                />
              ) : (
                <>
                  <div
                    className="absolute inset-0 grid place-items-center text-center font-semibold uppercase text-ink-soft"
                    style={{
                      fontSize: "0.85rem",
                      letterSpacing: "0.1em",
                      lineHeight: 1.8,
                      whiteSpace: "pre-line",
                    }}
                  >
                    {"FOTO\nConcurrentes en\nactividad cotidiana"}
                  </div>
                  <div
                    aria-hidden="true"
                    className="absolute inset-0"
                    style={{
                      background:
                        "repeating-linear-gradient(45deg, transparent, transparent 14px, rgba(168,137,77,0.04) 14px, rgba(168,137,77,0.04) 15px)",
                    }}
                  />
                </>
              )}
            </div>

            {/* Corazón circular peach (esquina superior derecha) */}
            <div
              aria-hidden="true"
              className="absolute -right-2 -top-4 z-10 grid h-14 w-14 place-items-center rounded-full sm:-right-4 sm:h-[70px] sm:w-[70px]"
              style={{
                background: "var(--color-peach)",
                boxShadow: "0 8px 24px rgba(201,171,110,0.4)",
              }}
            >
              <Heart size={28} className="text-burgundy" />
            </div>

            {/* Badge editorial (esquina inferior izquierda) */}
            <div
              className="absolute -bottom-4 -left-2 z-10 max-w-[230px] rounded-[12px] border border-border bg-paper px-5 py-4 sm:-left-6"
              style={{ boxShadow: "0 12px 40px rgba(31,22,17,0.12)" }}
            >
              <p
                className="font-display text-burgundy leading-tight"
                style={{
                  fontSize: "1.2rem",
                  fontWeight: 500,
                  fontVariationSettings: '"opsz" 144, "SOFT" 100',
                }}
              >
                {hero.badge.text}
              </p>
              <p
                className="mt-1 font-script text-ink leading-tight"
                style={{ fontSize: "1rem" }}
              >
                {hero.badge.subtext}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
