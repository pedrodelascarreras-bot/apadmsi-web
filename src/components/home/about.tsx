import fs from "node:fs";
import path from "node:path";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { AutoCarousel } from "@/components/shared/auto-carousel";
import { about } from "@/lib/content";

const ABOUT_IMAGES = [
  "/images/about-centro.jpg",
  "/images/viaje-institucional/viaje-institucional-5.jpg",
  "/images/recreativas/recreativas-1.jpg",
  "/images/cocina/cocina-3.jpg",
];

function existingImages() {
  const cwd = process.cwd();
  return ABOUT_IMAGES.filter((rel) =>
    fs.existsSync(path.join(cwd, "public", rel)),
  );
}

export function About() {
  const images = existingImages();

  return (
    <section id="nosotros" className="py-16 sm:py-20 lg:py-28">
      <Container>
        {/* Eyebrow + headline centrados arriba */}
        <Reveal>
          <div className="mx-auto mb-10 max-w-[860px] text-center">
            <p className="section-label">{about.eyebrow}</p>
            <h2
              className="highlight"
              style={{
                fontSize: "clamp(2rem, 3.8vw, 3rem)",
                lineHeight: 1.15,
                textWrap: "balance",
              }}
              dangerouslySetInnerHTML={{ __html: about.headlineHtml }}
            />
          </div>
        </Reveal>

        {/* Carrusel automático */}
        <Reveal as="scale" delay={150}>
          <div
            className="relative mx-auto mb-12 w-full max-w-[920px] overflow-hidden rounded-[16px]"
            style={{
              aspectRatio: "16/9",
              boxShadow: "0 14px 48px rgba(31,22,17,0.12)",
              border: "1px solid var(--color-border)",
            }}
          >
            {images.length > 0 ? (
              <AutoCarousel
                images={images}
                alt="APADMSI Centro de Día"
                interval={5000}
                sizes="(max-width: 1024px) 95vw, 920px"
              />
            ) : (
              <div
                className="absolute inset-0 grid place-items-center font-semibold uppercase text-ink-soft"
                style={{
                  fontSize: "0.85rem",
                  letterSpacing: "0.1em",
                  background:
                    "linear-gradient(140deg, var(--color-cream-warm) 0%, var(--color-sand) 100%)",
                }}
              >
                FOTO
              </div>
            )}
          </div>
        </Reveal>

        {/* Párrafos */}
        <Reveal delay={250}>
          <div className="mx-auto max-w-[760px]">
            {about.paragraphsHtml.map((html, i) => (
              <p
                key={i}
                className={i === 0 ? "dropcap text-ink" : "text-ink"}
                style={{
                  fontSize: "1.08rem",
                  marginBottom: "1.25rem",
                  lineHeight: 1.7,
                  textWrap: "balance",
                }}
                dangerouslySetInnerHTML={{ __html: html }}
              />
            ))}
          </div>
        </Reveal>

        {/* Bloque destacado de misión */}
        <Reveal delay={350}>
          <aside
            className="mx-auto mt-10 max-w-[760px] rounded-[14px] bg-cream-warm px-6 py-6 sm:px-8 sm:py-7"
            style={{
              borderLeft: "4px solid var(--color-peach)",
              boxShadow: "0 6px 20px rgba(31,22,17,0.04)",
            }}
          >
            <p
              className="font-script text-burgundy"
              style={{
                fontSize: "1.4rem",
                lineHeight: 1,
                marginBottom: "0.75rem",
              }}
            >
              {about.mission.label}
            </p>
            <ul className="flex flex-col gap-3 list-none">
              {about.mission.statements.map((s) => (
                <li
                  key={s}
                  className="font-display text-ink"
                  style={{
                    fontSize: "1.05rem",
                    lineHeight: 1.5,
                    fontWeight: 500,
                    fontVariationSettings: '"opsz" 144, "SOFT" 80',
                  }}
                >
                  <span
                    aria-hidden="true"
                    className="mr-2 text-peach"
                    style={{ fontSize: "1.2em", verticalAlign: "-0.1em" }}
                  >
                    ↳
                  </span>
                  {s}
                </li>
              ))}
            </ul>
          </aside>
        </Reveal>

      </Container>
    </section>
  );
}
