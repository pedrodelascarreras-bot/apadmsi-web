"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { Container } from "@/components/shared/container";
import { Lightbox } from "@/components/shared/lightbox";

type ImageItem = {
  src: string;
  alt: string;
  category: string;
  categoryLabel: string;
};

type Props = {
  images: ImageItem[];
  categories: Array<{ slug: string; label: string }>;
};

export function GalleryPageClient({ images, categories }: Props) {
  const [active, setActive] = useState<string>("todas");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = useMemo(() => {
    if (active === "todas") return images;
    return images.filter((i) => i.category === active);
  }, [images, active]);

  const lightboxSrcs = useMemo(() => filtered.map((i) => i.src), [filtered]);

  // Conteo por categoría — para mostrar pequeña etiqueta junto al chip
  const counts = useMemo(() => {
    const c: Record<string, number> = { todas: images.length };
    for (const img of images) {
      c[img.category] = (c[img.category] ?? 0) + 1;
    }
    return c;
  }, [images]);

  return (
    <main className="bg-cream">
      {/* Hero / Header de la galería */}
      <section
        className="relative overflow-hidden pt-16 pb-10 sm:pt-20 lg:pt-24"
        style={{
          background:
            "linear-gradient(180deg, var(--color-paper) 0%, var(--color-cream) 100%)",
        }}
      >
        {/* Blob decorativo */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-24 h-[360px] w-[420px]"
          style={{
            background:
              "radial-gradient(circle, rgba(201,171,110,0.22), transparent 70%)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 -bottom-16 h-[280px] w-[320px]"
          style={{
            background:
              "radial-gradient(circle, rgba(168,137,77,0.10), transparent 70%)",
          }}
        />

        <Container>
          <div className="relative z-10">
            {/* Breadcrumb minimal */}
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-ink-muted transition-colors hover:text-burgundy"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
              Volver al inicio
            </Link>

            <div className="mt-6 max-w-[820px]">
              <p className="section-label">galería</p>
              <h1
                style={{
                  fontSize: "clamp(2.4rem, 5vw, 3.6rem)",
                  lineHeight: 1.1,
                  marginBottom: "1.25rem",
                  textWrap: "balance",
                }}
              >
                Momentos del Centro.
              </h1>
              <p
                className="text-ink-muted"
                style={{
                  fontSize: "1.1rem",
                  lineHeight: 1.65,
                  textWrap: "balance",
                  maxWidth: "640px",
                }}
              >
                El día a día de APADMSI en imágenes: los talleres, las salidas,
                los festejos, las manos en la masa y la mesa compartida. Hacé
                click en cualquier foto para verla en grande.
              </p>
            </div>

            {/* Filtros */}
            <div
              role="tablist"
              aria-label="Filtrar por categoría"
              className="mt-12 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
            >
              <FilterChip
                label="Todas"
                count={counts["todas"]}
                active={active === "todas"}
                onClick={() => setActive("todas")}
              />
              {categories.map((c) => (
                <FilterChip
                  key={c.slug}
                  label={c.label}
                  count={counts[c.slug] ?? 0}
                  active={active === c.slug}
                  onClick={() => setActive(c.slug)}
                />
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Mosaico tipo Pinterest — CSS columns para variedad natural */}
      <section className="py-10 sm:py-14 lg:py-16">
        <Container>
          {filtered.length === 0 ? (
            <div className="mx-auto max-w-[480px] rounded-[16px] border border-dashed border-border bg-paper px-8 py-12 text-center">
              <p
                className="font-script text-burgundy"
                style={{ fontSize: "1.6rem", marginBottom: "0.5rem" }}
              >
                próximamente
              </p>
              <p
                className="text-ink-muted"
                style={{ fontSize: "0.98rem", lineHeight: 1.6 }}
              >
                Estamos cargando fotos de esta categoría. Probá con otra o vení
                pronto.
              </p>
            </div>
          ) : (
            <div
              className="gallery-masonry"
              style={{
                columnGap: "1rem",
              }}
            >
              {filtered.map((img, i) => (
                <button
                  key={img.src}
                  type="button"
                  onClick={() => setLightboxIndex(i)}
                  aria-label={`Ver ${img.alt} en grande`}
                  className="gallery-tile group mb-4 block w-full overflow-hidden rounded-[14px] border border-border bg-paper transition-all duration-300 hover:-translate-y-[3px] hover:shadow-[0_18px_40px_rgba(31,22,17,0.14)]"
                  style={{
                    cursor: "zoom-in",
                    breakInside: "avoid",
                    pageBreakInside: "avoid",
                  }}
                >
                  <span className="relative block w-full overflow-hidden">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={800}
                      height={1000}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                    {/* Overlay de categoría + icono zoom */}
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:p-4"
                      style={{
                        background:
                          "linear-gradient(180deg, transparent 0%, rgba(15,10,8,0.55) 100%)",
                      }}
                    >
                      <span
                        className="rounded-full bg-white/90 px-3 py-1 text-[0.7rem] font-bold uppercase tracking-[0.1em] text-burgundy backdrop-blur-sm"
                      >
                        {img.categoryLabel}
                      </span>
                      <span
                        className="grid h-9 w-9 place-items-center rounded-full bg-white/90 text-burgundy backdrop-blur-sm"
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="11" cy="11" r="7" />
                          <line x1="21" y1="21" x2="16.65" y2="16.65" />
                          <line x1="11" y1="8" x2="11" y2="14" />
                          <line x1="8" y1="11" x2="14" y2="11" />
                        </svg>
                      </span>
                    </span>
                  </span>
                </button>
              ))}
            </div>
          )}
        </Container>
      </section>

      <Lightbox
        images={lightboxSrcs}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onChange={setLightboxIndex}
        alt={
          lightboxIndex !== null ? filtered[lightboxIndex]?.alt : undefined
        }
      />

      <style jsx>{`
        .gallery-masonry {
          column-count: 1;
        }
        @media (min-width: 640px) {
          .gallery-masonry {
            column-count: 2;
          }
        }
        @media (min-width: 1024px) {
          .gallery-masonry {
            column-count: 3;
          }
        }
        @media (min-width: 1400px) {
          .gallery-masonry {
            column-count: 4;
          }
        }
      `}</style>
    </main>
  );
}

function FilterChip({
  label,
  count,
  active,
  onClick,
}: {
  label: string;
  count: number;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      onClick={onClick}
      className="group inline-flex items-center gap-2.5 rounded-full font-semibold transition-all duration-200"
      style={{
        cursor: "pointer",
        padding: "0.6rem 1.4rem",
        fontSize: "0.88rem",
        letterSpacing: "0.01em",
        color: active ? "#FFFFFF" : "#2F5C59",
        background: active ? "var(--color-burgundy)" : "var(--color-paper)",
        border: active
          ? "1.5px solid var(--color-burgundy)"
          : "1.5px solid var(--color-border)",
        boxShadow: active
          ? "0 4px 12px rgba(139,105,20,0.25)"
          : "0 1px 3px rgba(31,22,17,0.04)",
        transform: active ? "scale(1.03)" : "scale(1)",
      }}
    >
      <span>{label}</span>
      <span
        className="rounded-full font-bold"
        style={{
          padding: "0.15rem 0.5rem",
          fontSize: "0.72rem",
          background: active ? "rgba(255,255,255,0.22)" : "var(--color-cream)",
          color: active ? "#FFFFFF" : "#FFFFFF",
        }}
      >
        {count}
      </span>
    </button>
  );
}
