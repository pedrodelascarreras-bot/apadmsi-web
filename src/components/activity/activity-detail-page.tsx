"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Container } from "@/components/shared/container";
import { Heart } from "@/components/shared/heart";
import { Lightbox } from "@/components/shared/lightbox";
import { Reveal } from "@/components/shared/reveal";
import type { ActivityDetail } from "@/lib/content";

type Props = {
  activity: ActivityDetail;
  images: string[];
};

export function ActivityDetailPage({ activity, images }: Props) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const hasImages = images.length > 0;

  return (
    <>
      {/* Hero de la página de actividad */}
      <section className="relative overflow-hidden bg-cream-warm py-16 sm:py-20 lg:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-20 h-[420px] w-[420px]"
          style={{
            background:
              "radial-gradient(circle, rgba(232,168,124,0.22), transparent 70%)",
          }}
        />
        <Container className="relative z-10 max-w-[820px]">
          <Link
            href="/#actividades"
            className="mb-5 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-burgundy hover:text-burgundy-deep"
          >
            <span aria-hidden="true">&larr;</span> Volver a actividades
          </Link>
          <Reveal>
            <p className="section-label">{activity.eyebrow}</p>
            <h1
              className="highlight"
              style={{
                fontSize: "clamp(2.2rem, 4.4vw, 3.4rem)",
                lineHeight: 1.1,
                marginBottom: "1.5rem",
              }}
              dangerouslySetInnerHTML={{ __html: activity.headlineHtml }}
            />
            <div className="flex items-center gap-3">
              <span
                className="font-display italic text-burgundy"
                style={{
                  fontSize: "0.92rem",
                  fontWeight: 600,
                  letterSpacing: "0.02em",
                }}
              >
                {activity.title}
              </span>
              <span aria-hidden="true" className="text-ink-soft">·</span>
              <span className="text-xs uppercase tracking-[0.14em] text-ink-soft">
                Programa diario
              </span>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Cuerpo del concepto */}
      <section className="bg-cream py-14 sm:py-20">
        <Container className="max-w-[760px]">
          <Reveal>
            <div>
              {activity.paragraphsHtml.map((html, i) => (
                <p
                  key={i}
                  className={i === 0 ? "dropcap text-ink" : "text-ink"}
                  style={{
                    fontSize: "1.1rem",
                    lineHeight: 1.75,
                    marginBottom: "1.4rem",
                  }}
                  dangerouslySetInnerHTML={{ __html: html }}
                />
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Galería */}
      <section className="bg-paper py-14 sm:py-20">
        <Container>
          <Reveal>
            <div className="mx-auto mb-10 max-w-[640px] text-center">
              <p className="section-label">{activity.galleryEyebrow}</p>
              <h2
                style={{
                  fontSize: "clamp(1.8rem, 3.4vw, 2.4rem)",
                  marginBottom: "1rem",
                  lineHeight: 1.2,
                }}
              >
                {activity.galleryHeading}
              </h2>
              <p
                className="text-ink-muted"
                style={{ fontSize: "1rem", lineHeight: 1.65 }}
              >
                {activity.galleryIntro}
              </p>
            </div>
          </Reveal>

          {hasImages ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
              {images.map((src, i) => (
                <Reveal key={src} as="scale" delay={i * 80}>
                  <button
                    type="button"
                    onClick={() => setLightboxIndex(i)}
                    aria-label={`Abrir foto ${i + 1}`}
                    className="group relative block aspect-[4/5] w-full overflow-hidden rounded-[12px] border border-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy focus-visible:ring-offset-2"
                  >
                    <Image
                      src={src}
                      alt={`${activity.title} · foto ${i + 1}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </button>
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="mx-auto max-w-[640px] rounded-[12px] border border-dashed border-border bg-cream px-8 py-10 text-center">
              <p
                className="font-script text-burgundy"
                style={{ fontSize: "1.5rem", marginBottom: "0.75rem" }}
              >
                cargando galería
              </p>
              <p
                className="text-ink-muted"
                style={{ fontSize: "0.95rem", lineHeight: 1.6 }}
              >
                Estamos subiendo las fotos de esta actividad.
              </p>
            </div>
          )}
        </Container>
      </section>

      {/* CTA inferior */}
      <section
        className="relative overflow-hidden text-cream py-16 sm:py-20"
        style={{
          background:
            "linear-gradient(160deg, var(--color-burgundy) 0%, var(--color-burgundy-deep) 100%)",
        }}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-[400px] w-[400px]"
          style={{
            background:
              "radial-gradient(circle, rgba(232,168,124,0.22), transparent 70%)",
          }}
        />
        <Container className="relative z-10 max-w-[680px] text-center">
          <p
            className="font-script"
            style={{
              color: "var(--color-peach)",
              fontSize: "1.5rem",
              marginBottom: "0.75rem",
            }}
          >
            tu aporte sostiene esta actividad
          </p>
          <h2
            className="text-cream"
            style={{
              fontSize: "clamp(1.8rem, 3.4vw, 2.4rem)",
              marginBottom: "1.5rem",
              lineHeight: 1.2,
            }}
          >
            Cada actividad es posible gracias a quienes nos acompañan.
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/donar"
              className="btn-burgundy inline-flex items-center gap-2 rounded-full border-[1.5px] border-burgundy bg-burgundy px-6 py-3 text-sm font-semibold shadow-[0_2px_0_0_var(--color-burgundy-deep)]"
              style={{ color: "#FFFFFF" }}
            >
              <span style={{ color: "#FFFFFF" }}>Quiero ayudar</span>
              <Heart size={14} />
            </Link>
            <Link
              href="/#actividades"
              className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-cream/30 bg-transparent px-6 py-3 text-sm font-semibold text-cream transition-all hover:border-cream"
            >
              Ver todas las actividades
            </Link>
          </div>
        </Container>
      </section>

      <Lightbox
        images={images}
        index={lightboxIndex}
        alt={activity.title}
        onClose={() => setLightboxIndex(null)}
        onChange={setLightboxIndex}
      />
    </>
  );
}
