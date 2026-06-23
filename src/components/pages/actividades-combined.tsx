"use client";

import Link from "next/link";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { AutoCarousel } from "@/components/shared/auto-carousel";
import { activities } from "@/lib/content";

type Item = {
  icon: string;
  title: string;
  desc: string;
  href?: string;
  image?: string;
};

function ActivityIcon({ code }: { code: string }) {
  const cls = "shrink-0 text-burgundy";
  const size = 22;
  const props = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: cls,
    "aria-hidden": true as const,
  };

  switch (code) {
    case "v":
      return (
        <svg {...props}>
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      );
    case "o":
      return (
        <svg {...props}>
          <rect x="2" y="7" width="20" height="14" rx="2" />
          <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
          <path d="M12 12v.01" />
        </svg>
      );
    case "s":
      return (
        <svg {...props}>
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case "a":
      return (
        <svg {...props}>
          <circle cx="13.5" cy="6.5" r="2.5" />
          <circle cx="19" cy="11.5" r="1.5" />
          <circle cx="6" cy="12.5" r="2.5" />
          <circle cx="17" cy="17.5" r="1.5" />
          <circle cx="10" cy="18" r="2" />
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.9 0 1.5-.7 1.5-1.5 0-.4-.1-.7-.4-1-.3-.3-.4-.6-.4-1 0-.8.7-1.5 1.5-1.5H16c3.3 0 6-2.7 6-6 0-5.2-4.5-9-10-9z" />
        </svg>
      );
    case "r":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
          <path d="M2 12h20" />
        </svg>
      );
    case "m":
      return (
        <svg {...props}>
          <path d="M9 18V5l12-2v13" />
          <circle cx="6" cy="18" r="3" />
          <circle cx="18" cy="16" r="3" />
        </svg>
      );
    case "p":
      return (
        <svg {...props}>
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      );
    case "fo":
      return (
        <svg {...props}>
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      );
    case "h":
      return (
        <svg {...props}>
          <path d="M7 20h10" />
          <path d="M12 20v-8" />
          <path d="M12 12c-3.5 0-6-2.5-6-6 0 3.5 2.5 6 6 6z" />
          <path d="M12 12c3.5 0 6-2.5 6-6 0 3.5-2.5 6-6 6z" />
          <path d="M12 6V2" />
        </svg>
      );
    case "c":
      return (
        <svg {...props}>
          <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
          <path d="M7 2v20" />
          <path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
        </svg>
      );
    case "ma":
      return (
        <svg {...props}>
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      );
    case "ef":
      return (
        <svg {...props}>
          <path d="M18 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
          <path d="m6 21 3-9" />
          <path d="m9 12 4.6-2.3a1 1 0 0 1 1.2.3l2 2.6" />
          <path d="m15 13-3.5 4.3" />
          <path d="M3 21h18" />
          <path d="M6 16h2" />
        </svg>
      );
    case "hs":
      return (
        <svg {...props}>
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      );
    case "sc":
      return (
        <svg {...props}>
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      );
    default:
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="10" />
        </svg>
      );
  }
}

export function ActividadesCombined({
  galleryImages,
}: {
  galleryImages: string[];
}) {
  const items = activities.items;

  return (
    <section className="relative bg-cream-warm py-10 sm:py-14 lg:py-16">
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
          <div className="mx-auto mb-6 max-w-[1100px] text-center">
            <p className="section-label">{activities.eyebrow}</p>
            <h2
              className="highlight"
              style={{
                fontSize: "clamp(1.8rem, 3.4vw, 2.6rem)",
                marginBottom: "0.75rem",
                lineHeight: 1.15,
                textWrap: "balance",
              }}
            >
              {activities.heading}
            </h2>
          </div>
        </Reveal>

        {/* Two-column layout: Activities | Gallery */}
        <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-8 lg:grid-cols-[1fr_400px] lg:gap-10">
          {/* Left: Activity list */}
          <div>
            {/* Official intro banner */}
            <Reveal delay={80}>
              <div
                className="mb-5 flex flex-col gap-3 rounded-[12px] bg-paper px-5 py-4 sm:flex-row sm:items-center sm:gap-6 sm:px-7"
                style={{
                  border: "1px solid var(--color-border)",
                  boxShadow: "0 4px 16px rgba(31,22,17,0.04)",
                }}
              >
                <h3
                  className="font-display shrink-0 text-burgundy"
                  style={{
                    fontSize: "clamp(1.1rem, 2vw, 1.35rem)",
                    fontWeight: 600,
                    lineHeight: 1.25,
                  }}
                >
                  {activities.officialIntro.label}
                </h3>
                <p
                  className="text-ink-muted"
                  style={{ fontSize: "0.88rem", lineHeight: 1.55 }}
                >
                  {activities.officialIntro.text}
                </p>
              </div>
            </Reveal>

            {/* Activity grid — compact 2-column */}
            <div className="grid grid-cols-1 gap-x-6 sm:grid-cols-2">
              {items.map((item, i) => (
                <Reveal key={item.title} delay={i * 30}>
                  <div
                    className="flex items-center gap-3 py-2.5"
                    style={{ borderBottom: "1px solid var(--color-border)" }}
                  >
                    <ActivityIcon code={item.icon} />
                    <span
                      className="font-display text-ink"
                      style={{
                        fontSize: "0.88rem",
                        fontWeight: 500,
                        lineHeight: 1.3,
                      }}
                    >
                      {item.title}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* CTA compact */}
            <Reveal delay={300}>
              <div
                className="mt-5 rounded-[12px] bg-burgundy px-5 py-4 text-center text-white sm:px-7"
                style={{ boxShadow: "0 8px 28px rgba(122,22,32,0.15)" }}
              >
                <p
                  className="text-white"
                  style={{
                    fontSize: "0.95rem",
                    fontWeight: 500,
                    marginBottom: "0.5rem",
                  }}
                >
                  {activities.cta.title}
                </p>
                <Link
                  href={activities.cta.button.href}
                  className="btn-peach inline-flex items-center gap-2 rounded-full border-[1.5px] border-peach bg-peach px-5 py-2 text-sm font-bold text-burgundy-deep"
                >
                  {activities.cta.button.label}
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Right: Gallery preview */}
          <Reveal as="scale" delay={150}>
            <div className="flex flex-col gap-4">
              <div
                className="relative overflow-hidden rounded-[14px] border border-border"
                style={{
                  aspectRatio: "3/4",
                  boxShadow: "0 10px 36px rgba(31,22,17,0.10)",
                }}
              >
                {galleryImages.length > 0 ? (
                  <AutoCarousel
                    images={galleryImages}
                    alt="Galería APADMSI"
                    interval={3500}
                    sizes="(max-width: 1024px) 95vw, 400px"
                  />
                ) : (
                  <div
                    className="absolute inset-0 grid place-items-center font-semibold uppercase text-ink-soft"
                    style={{
                      fontSize: "0.85rem",
                      letterSpacing: "0.1em",
                      background: "var(--color-cream-warm)",
                    }}
                  >
                    FOTOS
                  </div>
                )}
              </div>

              <Link
                href="/galeria"
                className="btn-burgundy group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full"
                style={{
                  cursor: "pointer",
                  color: "#FFFFFF",
                  background: "var(--color-burgundy)",
                  border: "1.5px solid var(--color-burgundy)",
                  boxShadow: "0 2px 0 0 var(--color-burgundy-deep)",
                  padding: "0.85rem 1.5rem",
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  lineHeight: 1,
                }}
              >
                <span style={{ color: "#FFFFFF" }}>Ver galería completa</span>
                <svg
                  width="16"
                  height="16"
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
        </div>
      </Container>
    </section>
  );
}
