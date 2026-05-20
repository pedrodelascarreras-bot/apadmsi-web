import Image from "next/image";
import fs from "node:fs";
import path from "node:path";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { recognition } from "@/lib/content";

const IMG_EXTS = ["svg", "png", "webp", "avif", "jpg", "jpeg"] as const;

function findOrgLogo(slug: string | null): string | null {
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

export function Recognition() {
  return (
    <section className="bg-paper py-14 sm:py-16 lg:py-20">
      <Container>
        <Reveal>
          <div className="mx-auto mb-12 max-w-[860px] text-center">
            <p className="section-label">{recognition.eyebrow}</p>
            <h2
              style={{
                fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                marginBottom: "1rem",
                lineHeight: 1.2,
                textWrap: "balance",
              }}
            >
              {recognition.heading}
            </h2>
            <p
              className="text-ink-muted"
              style={{
                fontSize: "1rem",
                lineHeight: 1.65,
                textWrap: "balance",
              }}
            >
              {recognition.intro}
            </p>
          </div>
        </Reveal>

        <ul className="mx-auto grid max-w-[1080px] gap-4 sm:grid-cols-2 lg:gap-5 list-none">
          {recognition.items.map((item, idx) => {
            const logo = findOrgLogo(item.logoSlug);
            const isHabilitacion = item.kind === "habilitacion";

            return (
              <Reveal key={item.kind} delay={idx * 100} tag="li">
                <article
                  className="group flex h-full items-stretch overflow-hidden rounded-[14px] border border-border bg-cream transition-all hover:-translate-y-[2px] hover:border-burgundy/30 hover:shadow-[0_10px_28px_rgba(31,22,17,0.08)]"
                >
                  {/* Bloque de logo / sello a la izquierda */}
                  <div
                    className="grid w-[110px] shrink-0 place-items-center sm:w-[130px]"
                    style={{
                      background: logo ? "var(--color-paper)" : item.color,
                      borderRight: "1px solid var(--color-border)",
                    }}
                  >
                    {logo ? (
                      <div className="relative h-16 w-[88px] sm:h-20 sm:w-[100px]">
                        <Image
                          src={logo}
                          alt={`Logo ${item.abbr}`}
                          fill
                          sizes="100px"
                          className="object-contain"
                        />
                      </div>
                    ) : isHabilitacion ? (
                      <ShieldIcon color="#FBF6EE" />
                    ) : (
                      <span
                        className="font-display text-cream"
                        style={{
                          fontSize:
                            item.abbr.length > 5
                              ? "0.95rem"
                              : "1.35rem",
                          fontWeight: 700,
                          letterSpacing: "0.02em",
                          textAlign: "center",
                          lineHeight: 1.1,
                          padding: "0 0.5rem",
                          fontVariationSettings: '"opsz" 144, "SOFT" 100',
                        }}
                      >
                        {item.abbr}
                      </span>
                    )}
                  </div>

                  {/* Texto a la derecha */}
                  <div className="flex flex-1 flex-col justify-center px-5 py-5 sm:px-6">
                    <p
                      className="text-xs font-bold uppercase tracking-[0.12em]"
                      style={{ color: item.color, marginBottom: "0.3rem" }}
                    >
                      {item.abbr}
                    </p>
                    <h3
                      className="font-display text-ink"
                      style={{
                        fontSize: "1.05rem",
                        fontWeight: 600,
                        lineHeight: 1.3,
                        marginBottom: "0.5rem",
                      }}
                    >
                      {item.name}
                    </h3>
                    <p
                      className="text-ink-muted"
                      style={{ fontSize: "0.88rem", lineHeight: 1.5 }}
                      dangerouslySetInnerHTML={{ __html: item.desc }}
                    />
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
