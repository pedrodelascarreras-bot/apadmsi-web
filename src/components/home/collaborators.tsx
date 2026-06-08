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

function ShieldIcon({ color }: { color: string }) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 2 4 5v7c0 5 3.5 9 8 10 4.5-1 8-5 8-10V5l-8-3Z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  );
}

export function Collaborators() {
  return (
    <section id="colaboradores" className="bg-paper py-14 sm:py-16 lg:py-20">
      <Container>
        <Reveal>
          <div className="mx-auto mb-12 max-w-[860px] text-center">
            <p className="section-label">{collaborators.eyebrow}</p>
            <h2
              style={{
                fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                marginBottom: "1rem",
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

        <ul className="mx-auto grid max-w-[1080px] gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5 list-none">
          {collaborators.items.map((item, idx) => {
            const logo = findLogo(item.logoSlug);

            return (
              <Reveal key={item.abbr} delay={idx * 80} tag="li">
                <article
                  className="group flex h-full items-stretch overflow-hidden rounded-[14px] border border-border bg-cream transition-all hover:-translate-y-[2px] hover:border-burgundy/30 hover:shadow-[0_10px_28px_rgba(31,22,17,0.08)]"
                >
                  {/* Logo / sello a la izquierda */}
                  <div
                    className="grid w-[100px] shrink-0 place-items-center sm:w-[120px]"
                    style={{
                      background: logo ? "var(--color-paper)" : item.color,
                      borderRight: "1px solid var(--color-border)",
                    }}
                  >
                    {logo ? (
                      <div className="relative h-14 w-[80px] sm:h-16 sm:w-[92px]">
                        <Image
                          src={logo}
                          alt={`Logo ${item.name}`}
                          fill
                          sizes="92px"
                          className="object-contain"
                        />
                      </div>
                    ) : (
                      <ShieldIcon color="#FBF6EE" />
                    )}
                  </div>

                  {/* Texto a la derecha */}
                  <div className="flex flex-1 flex-col justify-center px-4 py-4 sm:px-5">
                    <p
                      className="text-xs font-bold uppercase tracking-[0.12em]"
                      style={{ color: item.color, marginBottom: "0.25rem" }}
                    >
                      {item.abbr}
                    </p>
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
                      style={{ fontSize: "0.85rem", lineHeight: 1.5 }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
