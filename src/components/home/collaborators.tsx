import Image from "next/image";
import fs from "node:fs";
import path from "node:path";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { collaborators } from "@/lib/content";

const IMG_EXTS = ["svg", "png", "webp", "avif", "jpg", "jpeg"] as const;

function findLogo(slug: string | null): string | null {
  if (!slug) return null;
  const cwd = process.cwd();
  for (const ext of IMG_EXTS) {
    const rel = `/images/orgs/${slug}.${ext}`;
    if (fs.existsSync(path.join(cwd, "public", rel))) return rel;
  }
  return null;
}

function HeartHandIcon() {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="text-burgundy/60"
    >
      <path d="M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16" />
      <path d="m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-3.1 2.3" />
      <path d="m2 15 6 6" />
      <path d="M19.5 8.5c.7-.7 1.5-1.6 1.5-2.7A2.73 2.73 0 0 0 16 4a2.78 2.78 0 0 0-5 1.8c0 1.1.8 2 1.5 2.7L16 12l3.5-3.5Z" />
    </svg>
  );
}

export function Collaborators() {
  return (
    <section id="colaboradores" className="bg-cream-warm py-14 sm:py-16 lg:py-20">
      <Container>
        <Reveal>
          <div className="mx-auto mb-10 max-w-[860px] text-center">
            <p className="section-label">{collaborators.eyebrow}</p>
            <h2
              style={{
                fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                marginBottom: "0.75rem",
                lineHeight: 1.2,
                textWrap: "balance",
              }}
            >
              {collaborators.heading}
            </h2>
            <p
              className="text-ink-muted"
              style={{
                fontSize: "1rem",
                lineHeight: 1.65,
                textWrap: "balance",
              }}
            >
              {collaborators.intro}
            </p>
          </div>
        </Reveal>

        <div className="mx-auto grid max-w-[960px] gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {collaborators.items.map((item, idx) => {
            const logo = findLogo(item.logoSlug);

            return (
              <Reveal key={item.name} delay={idx * 80}>
                <article className="flex h-full flex-col items-center rounded-[14px] border border-border bg-paper px-5 py-6 text-center transition-all hover:-translate-y-[2px] hover:shadow-[0_10px_28px_rgba(31,22,17,0.07)]">
                  {/* Logo or icon */}
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-cream">
                    {logo ? (
                      <div className="relative h-10 w-10">
                        <Image
                          src={logo}
                          alt={`Logo ${item.name}`}
                          fill
                          sizes="40px"
                          className="rounded-full object-contain"
                        />
                      </div>
                    ) : (
                      <HeartHandIcon />
                    )}
                  </div>

                  <h3
                    className="font-display text-ink"
                    style={{
                      fontSize: "1rem",
                      fontWeight: 600,
                      lineHeight: 1.3,
                      marginBottom: "0.4rem",
                    }}
                  >
                    {item.name}
                  </h3>
                  <p
                    className="text-ink-muted"
                    style={{ fontSize: "0.88rem", lineHeight: 1.55 }}
                  >
                    {item.desc}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
