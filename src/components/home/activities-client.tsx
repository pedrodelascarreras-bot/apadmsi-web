"use client";

import Link from "next/link";
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

export function ActivitiesClient({
  items,
  cta,
  eyebrow,
  heading,
  intro,
  officialIntro,
}: Props) {
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
        {/* Header */}
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

        {/* Grid minimalista — 2 columnas, 7 filas */}
        <div className="mx-auto grid max-w-[820px] grid-cols-1 gap-3 sm:grid-cols-2">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={(i % 4) * 60}>
              <div
                className="flex items-center gap-4 rounded-[10px] bg-paper px-5 py-4 transition-all hover:-translate-y-[1px] hover:shadow-[0_6px_20px_rgba(31,22,17,0.06)]"
                style={{
                  borderLeft: "3px solid var(--color-burgundy)",
                  border: "1px solid var(--color-border)",
                  borderLeftWidth: 3,
                  borderLeftColor: "var(--color-burgundy)",
                }}
              >
                <span
                  className="font-display text-ink"
                  style={{
                    fontSize: "0.95rem",
                    fontWeight: 500,
                    lineHeight: 1.3,
                    letterSpacing: "-0.005em",
                  }}
                >
                  {item.title}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        {/* CTA card */}
        <Reveal delay={300}>
          <div
            className="mx-auto mt-10 max-w-[820px] rounded-[16px] bg-burgundy px-6 py-7 text-center text-white sm:px-10 sm:py-8"
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
