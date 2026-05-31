import Link from "next/link";
import fs from "node:fs";
import path from "node:path";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { AutoCarousel } from "@/components/shared/auto-carousel";

const GALLERY_DIRS = [
  "arte-terapia",
  "cocina",
  "huerta",
  "manualidades",
  "musicoterapia",
  "recreativas",
  "viaje-institucional",
];

function collectGalleryImages(): string[] {
  const cwd = process.cwd();
  const images: string[] = [];
  for (const dir of GALLERY_DIRS) {
    const abs = path.join(cwd, "public", "images", dir);
    if (!fs.existsSync(abs)) continue;
    const files = fs.readdirSync(abs).filter((f) => /\.(jpe?g|png|webp)$/i.test(f)).sort();
    for (const f of files) {
      images.push(`/images/${dir}/${f}`);
    }
  }
  return images;
}

export function Gallery() {
  const images = collectGalleryImages();

  return (
    <section className="bg-cream py-10 sm:py-12 lg:py-14">
      <Container>
        <div className="mx-auto grid max-w-[1080px] items-center gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-14">
          {/* Texto / CTA */}
          <Reveal>
            <div>
              <p className="section-label">galería</p>
              <h2
                style={{
                  fontSize: "clamp(2rem, 3.8vw, 2.8rem)",
                  lineHeight: 1.15,
                  marginBottom: "1.25rem",
                  textWrap: "balance",
                }}
              >
                Las palabras alcanzan hasta acá.
              </h2>
              <p
                className="text-ink-muted"
                style={{
                  fontSize: "1.05rem",
                  lineHeight: 1.7,
                  marginBottom: "1.75rem",
                  textWrap: "balance",
                  maxWidth: "500px",
                }}
              >
                El día a día del Centro se cuenta mejor en imágenes. Los
                talleres, las salidas, los festejos, la mesa compartida.
                Recorré las fotos a tu ritmo, agrupadas por actividad.
              </p>

              <Link
                href="/galeria"
                className="btn-burgundy group inline-flex items-center gap-3 whitespace-nowrap rounded-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-burgundy"
                style={{
                  cursor: "pointer",
                  color: "#FFFFFF",
                  background: "var(--color-burgundy)",
                  border: "1.5px solid var(--color-burgundy)",
                  boxShadow: "0 2px 0 0 var(--color-burgundy-deep)",
                  padding: "0.95rem 1.85rem",
                  fontSize: "1rem",
                  fontWeight: 600,
                  lineHeight: 1,
                }}
              >
                <span style={{ color: "#FFFFFF" }}>Ver galería completa</span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#FFFFFF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>
          </Reveal>

          {/* Carrusel automático con todas las fotos */}
          <Reveal as="scale" delay={150}>
            <div
              className="relative overflow-hidden rounded-[16px] border border-border"
              style={{
                aspectRatio: "4/3",
                boxShadow: "0 14px 48px rgba(31,22,17,0.10)",
              }}
            >
              {images.length > 0 ? (
                <AutoCarousel
                  images={images}
                  alt="Galería APADMSI"
                  interval={3500}
                  sizes="(max-width: 1024px) 95vw, 540px"
                />
              ) : (
                <div className="absolute inset-0 grid place-items-center font-semibold uppercase text-ink-soft"
                  style={{ fontSize: "0.85rem", letterSpacing: "0.1em", background: "var(--color-cream-warm)" }}
                >
                  FOTOS
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
