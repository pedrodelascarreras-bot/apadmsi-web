import Image from "next/image";
import Link from "next/link";
import fs from "node:fs";
import path from "node:path";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { videoTour } from "@/lib/content";

function posterExists() {
  return fs.existsSync(
    path.join(process.cwd(), "public", videoTour.posterImage)
  );
}

export function VideoTour() {
  const hasEmbed = Boolean(videoTour.embedUrl);

  return (
    <section
      className="relative overflow-hidden bg-cream py-16 sm:py-20 lg:py-24"
    >
      {/* Blob peach top-right */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-20 h-[340px] w-[340px]"
        style={{
          background:
            "radial-gradient(circle, rgba(232,168,124,0.18), transparent 70%)",
        }}
      />

      <Container className="relative z-10">
        <Reveal>
          <div className="mx-auto mb-10 max-w-[700px] text-center">
            <p className="section-label">{videoTour.eyebrow}</p>
            <h2
              className="highlight"
              style={{
                fontSize: "clamp(1.8rem, 3.4vw, 2.6rem)",
                marginBottom: "1rem",
                lineHeight: 1.2,
              }}
            >
              {videoTour.heading}
            </h2>
            <p
              className="text-ink-muted"
              style={{ fontSize: "1.02rem", lineHeight: 1.65 }}
            >
              {videoTour.intro}
            </p>
          </div>
        </Reveal>

        <Reveal as="scale" delay={150}>
          <div
            className="relative mx-auto w-full max-w-[920px] overflow-hidden rounded-[16px]"
            style={{
              aspectRatio: "16/9",
              boxShadow: "0 16px 50px rgba(31,22,17,0.18)",
              border: "1px solid var(--color-border)",
            }}
          >
            {hasEmbed ? (
              <iframe
                src={videoTour.embedUrl ?? ""}
                title="Video institucional APADMSI"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full border-0"
              />
            ) : (
              <>
                {posterExists() ? (
                  <Image
                    src={videoTour.posterImage}
                    alt="Vista del Centro"
                    fill
                    sizes="(max-width: 1024px) 90vw, 920px"
                    className="object-cover"
                  />
                ) : (
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(140deg, var(--color-cream-warm) 0%, var(--color-sand) 100%)",
                    }}
                  />
                )}
                {/* Overlay oscuro suave */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(160deg, rgba(31,22,17,0.15), rgba(31,22,17,0.55))",
                  }}
                />
                {/* Play button + texto */}
                <div className="absolute inset-0 grid place-items-center text-center">
                  <div className="px-6">
                    <span
                      className="mx-auto mb-5 grid h-20 w-20 place-items-center rounded-full"
                      style={{
                        background: "rgba(255,255,255,0.92)",
                        boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
                      }}
                      aria-hidden="true"
                    >
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="var(--color-burgundy)"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </span>
                    <p
                      className="font-script text-cream"
                      style={{ fontSize: "1.4rem", marginBottom: "0.25rem" }}
                    >
                      próximamente
                    </p>
                    <p
                      className="font-display text-cream"
                      style={{
                        fontSize: "clamp(1.2rem, 2vw, 1.6rem)",
                        fontWeight: 500,
                        lineHeight: 1.2,
                        marginBottom: "1.5rem",
                        maxWidth: "440px",
                        marginInline: "auto",
                      }}
                    >
                      Estamos preparando un video del Centro. Mientras tanto,
                      podés conocernos en persona.
                    </p>
                    <Link
                      href={videoTour.cta.href}
                      className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-cream bg-transparent px-6 py-3 text-sm font-semibold text-cream transition-all hover:bg-cream hover:text-ink"
                    >
                      {videoTour.cta.label} &rarr;
                    </Link>
                  </div>
                </div>
              </>
            )}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
