"use client";

import Link from "next/link";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { AutoCarousel } from "@/components/shared/auto-carousel";
import { activities } from "@/lib/content";

/* Option C: dos mitades lado a lado — actividades a la izquierda, galería a la derecha */

export function ActividadesOptionC({
  galleryImages,
}: {
  galleryImages: string[];
}) {
  const items = activities.items;

  return (
    <section style={{ background: "var(--color-paper)", padding: "3rem 0 2.5rem" }}>
      <Container>
        <Reveal>
          <div className="mx-auto mb-8 max-w-[1000px] text-center">
            <p className="section-label">{activities.eyebrow}</p>
            <h1
              className="highlight"
              style={{
                fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
                lineHeight: 1.15,
                textWrap: "balance",
              }}
            >
              {activities.heading}
            </h1>
          </div>
        </Reveal>

        {/* Dos columnas: actividades | galería */}
        <div className="mx-auto grid max-w-[1000px] gap-8 lg:grid-cols-[1.2fr_1fr]">
          {/* Izquierda: actividades */}
          <Reveal delay={100}>
            <div>
              <h2
                className="font-display text-ink"
                style={{
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  marginBottom: "0.8rem",
                  color: "var(--color-burgundy)",
                }}
              >
                Actividades
              </h2>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {items.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[10px] text-ink"
                    style={{
                      padding: "0.65rem 0.85rem",
                      fontSize: "0.85rem",
                      fontWeight: 500,
                      background: "var(--color-cream-warm)",
                      border: "1px solid var(--color-border)",
                    }}
                  >
                    {item.title}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Derecha: galería */}
          <Reveal delay={200}>
            <div className="flex flex-col gap-4">
              <h2
                className="font-display"
                style={{
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "var(--color-burgundy)",
                }}
              >
                Galería
              </h2>
              <div
                className="overflow-hidden rounded-[14px]"
                style={{
                  aspectRatio: "4/3",
                  border: "1px solid var(--color-border)",
                  boxShadow: "0 6px 20px rgba(31,22,17,0.08)",
                }}
              >
                {galleryImages.length > 0 && (
                  <AutoCarousel
                    images={galleryImages.slice(0, 8)}
                    alt="Galería APADMSI"
                    interval={3500}
                    sizes="(max-width: 1024px) 95vw, 450px"
                  />
                )}
              </div>
              <p className="text-ink-muted" style={{ fontSize: "0.85rem", lineHeight: 1.5 }}>
                {galleryImages.length} fotos del día a día del Centro, agrupadas por actividad.
              </p>
              <div className="flex gap-3">
                <Link
                  href="/galeria"
                  className="inline-flex items-center gap-2 rounded-full"
                  style={{
                    color: "#FFFFFF",
                    background: "var(--color-burgundy)",
                    padding: "0.65rem 1.3rem",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                  }}
                >
                  Ver galería
                </Link>
                <Link
                  href={activities.cta.button.href}
                  className="inline-flex items-center gap-2 rounded-full"
                  style={{
                    color: "var(--color-burgundy)",
                    border: "1.5px solid var(--color-burgundy)",
                    padding: "0.65rem 1.3rem",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                  }}
                >
                  {activities.cta.button.label}
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
