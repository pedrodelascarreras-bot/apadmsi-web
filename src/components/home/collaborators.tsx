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
      width="44"
      height="44"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.4"
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
        {(collaborators.eyebrow || collaborators.heading || collaborators.intro) && (
        <Reveal>
          <div className="mx-auto mb-12 max-w-[860px] text-center">
            {collaborators.eyebrow && <p className="section-label">{collaborators.eyebrow}</p>}
            {collaborators.heading && <h2
              style={{
                fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                marginBottom: "1rem",
                lineHeight: 1.2,
                textWrap: "balance",
              }}
            >
              {collaborators.heading}
            </h2>}
            {collaborators.intro && <p
              className="text-ink-muted"
              style={{
                fontSize: "1rem",
                lineHeight: 1.65,
                textWrap: "balance",
              }}
            >
              {collaborators.intro}
            </p>}
          </div>
        </Reveal>
        )}

        <ul
          className="mx-auto grid max-w-[1080px] gap-5 sm:grid-cols-2 lg:grid-cols-3 list-none"
          style={{ gridAutoRows: "1fr" }}
        >
          {collaborators.items.map((item, idx) => {
            const logo = findLogo(item.logoSlug);

            return (
              <Reveal key={item.abbr} delay={idx * 80} tag="li" className="flex">
                <article className="teal-ctx flex w-full flex-col items-center rounded-[14px] border border-border bg-cream px-6 py-7 text-center transition-all hover:-translate-y-[2px] hover:shadow-[0_10px_28px_rgba(31,22,17,0.08)]">
                  {/* Logo / shield icon */}
                  <div className="mb-4 grid h-16 w-16 place-items-center rounded-full bg-paper" style={{ border: "1px solid var(--color-border)" }}>
                    {logo ? (
                      <div className="relative h-10 w-10">
                        <Image
                          src={logo}
                          alt={`Logo ${item.name}`}
                          fill
                          sizes="40px"
                          className="object-contain"
                        />
                      </div>
                    ) : (
                      <ShieldIcon color={item.color} />
                    )}
                  </div>

                  {/* Name */}
                  <h3
                    className="font-display font-bold"
                    style={{
                      fontSize: "1.02rem",
                      fontWeight: 700,
                      lineHeight: 1.3,
                      marginBottom: "0.5rem",
                      color: "var(--color-burgundy)",
                    }}
                  >
                    {item.name}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-ink-muted"
                    style={{ fontSize: "0.85rem", lineHeight: 1.55 }}
                  >
                    {item.desc}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
