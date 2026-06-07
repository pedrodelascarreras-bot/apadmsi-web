"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";

type Item = {
  icon: string;
  title: string;
  desc: string;
  href?: string;
  image?: string;
};

type Props = {
  items: Item[];
  cta: {
    title: string;
    desc: string;
    button: { label: string; href: string };
  };
  eyebrow: string;
  heading: string;
  intro: string;
  officialIntro: { label: string; text: string };
  activityImages: Record<string, string[]>;
};

function slugFromHref(href: string | undefined): string | null {
  if (!href) return null;
  const m = href.match(/^\/actividades\/([^/?#]+)/);
  return m ? m[1] : null;
}

export function ActivitiesClient({
  items,
  cta,
  eyebrow,
  heading,
  intro,
  officialIntro,
  activityImages,
}: Props) {
  const MOBILE_LIMIT = 4;
  const [openSet, setOpenSet] = useState<Set<number>>(new Set());
  const [showAll, setShowAll] = useState(false);

  function toggle(i: number) {
    setOpenSet((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  }

  return (
    <section
      id="actividades"
      className="relative bg-cream-warm py-16 sm:py-20 lg:py-24"
    >
      {/* Blob peach bottom-right */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 h-[300px] w-[300px]"
        style={{
          background:
            "radial-gradient(circle, rgba(232,168,124,0.2), transparent 70%)",
        }}
      />

      <Container className="relative z-10">
        {/* Header — centrado y ancho cómodo */}
        <Reveal>
          <div className="mx-auto mb-10 max-w-[840px] text-center">
            <p className="section-label">{eyebrow}</p>
            <h2
              className="highlight"
              style={{
                fontSize: "clamp(2rem, 3.8vw, 3rem)",
                marginBottom: "1.25rem",
                lineHeight: 1.15,
                textWrap: "balance",
              }}
            >
              {heading}
            </h2>
            <p
              className="text-ink-muted"
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.7,
                textWrap: "balance",
              }}
            >
              {intro}
            </p>
          </div>
        </Reveal>

        {/* Frase institucional destacada */}
        <Reveal delay={120}>
          <aside
            className="mb-10 flex flex-col gap-2 rounded-[12px] bg-paper px-6 py-5 sm:flex-row sm:items-center sm:gap-6 sm:px-7"
            style={{
              borderLeft: "4px solid var(--color-burgundy)",
              boxShadow: "0 4px 16px rgba(31,22,17,0.04)",
            }}
          >
            <span
              className="font-script shrink-0 text-burgundy"
              style={{ fontSize: "1.6rem", lineHeight: 1 }}
            >
              {officialIntro.label}
            </span>
            <span
              className="text-ink-muted"
              style={{ fontSize: "0.98rem", lineHeight: 1.55 }}
            >
              {officialIntro.text}
            </span>
          </aside>
        </Reveal>

        {/* Grid acordeón — 1 col mobile, 2 col tablet, 3 col desktop */}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => {
            const slug = slugFromHref(item.href);
            const previewImage =
              (slug ? activityImages[slug]?.[0] : undefined) ?? item.image;
            const isOpen = openSet.has(i);
            const hiddenOnMobile = !showAll && i >= MOBILE_LIMIT;

            return (
              <Reveal key={item.title} delay={(i % 6) * 60}>
                <div
                  className={`overflow-hidden rounded-[14px] border bg-paper transition-all ${
                    isOpen
                      ? "border-burgundy/30 bg-cream/50 shadow-[0_8px_24px_rgba(31,22,17,0.06)]"
                      : "border-border"
                  }${hiddenOnMobile ? " hidden md:block" : ""}`}
                >
                  <button
                    type="button"
                    onClick={() => toggle(i)}
                    aria-expanded={isOpen}
                    aria-controls={`act-panel-${i}`}
                    className="group flex w-full items-center gap-3 px-4 py-3.5 text-left transition-colors hover:bg-cream-warm/40 focus-visible:bg-cream-warm/60 focus-visible:outline-none sm:px-5 sm:py-4"
                  >
                    {/* Avatar / icono — más chico para multi-col */}
                    {previewImage ? (
                      <span
                        className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full sm:h-12 sm:w-12"
                        style={{
                          border: "2px solid var(--color-paper)",
                          boxShadow:
                            "0 0 0 1px var(--color-border), 0 2px 8px rgba(31,22,17,0.08)",
                        }}
                      >
                        <Image
                          src={previewImage}
                          alt=""
                          fill
                          sizes="48px"
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </span>
                    ) : (
                      <span
                        className="grid h-11 w-11 shrink-0 place-items-center rounded-full font-display italic sm:h-12 sm:w-12"
                        style={{
                          background: "var(--color-burgundy)",
                          color: "var(--color-paper)",
                          fontSize: item.icon.length > 1 ? "0.78rem" : "1.05rem",
                          fontWeight: 500,
                          fontVariationSettings: '"opsz" 144, "SOFT" 100',
                          boxShadow: "0 2px 8px rgba(185,28,44,0.25)",
                        }}
                        aria-hidden="true"
                      >
                        {item.icon}
                      </span>
                    )}

                    {/* Título */}
                    <span
                      className="flex-1 font-display text-ink min-w-0"
                      style={{
                        fontSize: "0.95rem",
                        fontWeight: 500,
                        lineHeight: 1.25,
                        letterSpacing: "-0.005em",
                      }}
                    >
                      {item.title}
                    </span>

                    {/* Chevron desplegable — uniforme para todas */}
                    <span
                      aria-hidden="true"
                      className="grid h-7 w-7 shrink-0 place-items-center rounded-full transition-transform"
                      style={{
                        background: isOpen
                          ? "var(--color-burgundy)"
                          : "var(--color-cream)",
                        color: isOpen
                          ? "var(--color-cream)"
                          : "var(--color-burgundy)",
                        transform: isOpen ? "rotate(180deg)" : "rotate(0)",
                      }}
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </span>
                  </button>

                  {/* Panel expandible — uniforme para todas */}
                  {item.desc && (
                    <div
                      id={`act-panel-${i}`}
                      className="grid transition-all duration-300 ease-out"
                      style={{
                        gridTemplateRows: isOpen ? "1fr" : "0fr",
                      }}
                    >
                      <div className="overflow-hidden">
                        <div
                          className="px-4 pb-4 pl-[calc(2.75rem+0.75rem)] text-ink-muted sm:px-5 sm:pl-[calc(3rem+0.75rem)]"
                          style={{
                            fontSize: "0.88rem",
                            lineHeight: 1.55,
                          }}
                        >
                          {item.desc}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>

        {!showAll && items.length > MOBILE_LIMIT && (
          <div className="mt-4 flex justify-center md:hidden">
            <button
              type="button"
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-paper px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-burgundy hover:text-burgundy"
            >
              Ver las {items.length - MOBILE_LIMIT} actividades restantes
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
          </div>
        )}

        {/* CTA card */}
        <Reveal delay={300}>
          <div
            className="mt-8 rounded-[16px] bg-burgundy px-6 py-7 text-center text-white sm:px-10 sm:py-8"
            style={{
              boxShadow: "0 12px 40px rgba(122,22,32,0.18)",
            }}
          >
            <h3
              className="text-white"
              style={{
                fontSize: "clamp(1.2rem, 2.2vw, 1.5rem)",
                fontWeight: 500,
                marginBottom: "0.5rem",
              }}
            >
              {cta.title}
            </h3>
            <p
              className="mb-5"
              style={{
                color: "rgba(255,255,255,0.9)",
                fontSize: "0.95rem",
                lineHeight: 1.55,
                textWrap: "balance",
              }}
            >
              {cta.desc}
            </p>
            <Link
              href={cta.button.href}
              className="btn-peach inline-flex items-center gap-2 rounded-full border-[1.5px] border-peach bg-peach px-6 py-2.5 text-sm font-bold text-burgundy-deep"
            >
              {cta.button.label}
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
