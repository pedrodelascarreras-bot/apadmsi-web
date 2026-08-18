"use client";

import { useState } from "react";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { team, reviews } from "@/lib/content";

type Tab = "comision" | "staff" | "testimonios";
type ReviewItem = (typeof reviews.items)[number];

function ReviewModal({ review, onClose }: { review: ReviewItem; onClose: () => void }) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[300] flex items-center justify-center px-4"
      style={{ background: "rgba(15,10,8,0.85)" }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <article
        className="w-full max-w-[560px] rounded-[16px] bg-paper px-8 py-8 sm:px-10 sm:py-10"
        style={{ boxShadow: "0 24px 80px rgba(31,22,17,0.3)" }}
      >
        <div className="mb-4 flex text-burgundy" style={{ gap: "2px" }}>
          {Array.from({ length: 5 }).map((_, i) => (
            <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill={i < review.rating ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.5"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
          ))}
        </div>
        <p className="text-ink" style={{ fontSize: "1.15rem", lineHeight: 1.7 }}>&ldquo;{review.text}&rdquo;</p>
        <div className="mt-6 flex items-baseline justify-between gap-3">
          <span className="text-base font-semibold text-ink">{review.author}</span>
          <span className="text-sm text-ink-soft">{review.date}</span>
        </div>
      </article>
    </div>
  );
}

const TABS: { key: Tab; label: string; icon: "people" | "briefcase" | "quote" }[] = [
  { key: "comision", label: "Comisión Directiva", icon: "people" },
  { key: "staff", label: "Staff Profesional", icon: "briefcase" },
  { key: "testimonios", label: "Testimonios", icon: "quote" },
];

function TabIcon({ icon, active }: { icon: string; active: boolean }) {
  const color = active ? "#FFFFFF" : "var(--color-burgundy)";
  const size = 18;
  const props = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: 1.6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (icon) {
    case "people":
      return (<svg {...props}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>);
    case "briefcase":
      return (<svg {...props}><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" /></svg>);
    case "quote":
      return (<svg {...props} fill={color} stroke="none"><path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" /></svg>);
    default:
      return null;
  }
}

function InitialsCircle({ name, index }: { name: string; index: number }) {
  const initials = name.split(" ").map(w => w[0]).slice(0, 2).join("").toUpperCase();
  return (
    <div
      style={{
        width: "44px",
        height: "44px",
        borderRadius: "12px",
        background: index % 2 === 0
          ? "linear-gradient(135deg, rgba(201,171,110,0.08), rgba(201,171,110,0.15))"
          : "linear-gradient(135deg, rgba(201,171,110,0.12), rgba(201,171,110,0.25))",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "0.85rem",
        fontWeight: 600,
        color: "var(--color-burgundy)",
        flexShrink: 0,
      }}
    >
      {initials}
    </div>
  );
}

export function EquipoOptionC() {
  const [tab, setTab] = useState<Tab>("comision");
  const [selected, setSelected] = useState<number | null>(null);
  const items = reviews.items;

  return (
    <section
      style={{
        background: "var(--color-cream)",
        minHeight: "calc(100vh - 80px)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <div style={{ padding: "2.5rem 0 0" }}>
        <Container>
          <Reveal>
            <div className="mx-auto max-w-[1000px] text-center">
              <p className="section-label">{team.eyebrow}</p>
              <h1
                className="highlight"
                style={{
                  fontSize: "clamp(2rem, 3.8vw, 3rem)",
                  lineHeight: 1.15,
                  textWrap: "balance",
                  marginBottom: "1.2rem",
                }}
                dangerouslySetInnerHTML={{ __html: team.headlineHtml }}
              />
              <p
                className="mx-auto text-ink-muted"
                style={{
                  fontSize: "0.95rem",
                  lineHeight: 1.75,
                  maxWidth: "580px",
                  textAlign: "center",
                  textWrap: "balance",
                }}
              >
                {team.intro}
              </p>
            </div>
          </Reveal>
        </Container>
      </div>

      {/* Tabs */}
      <div style={{ marginTop: "2.5rem" }}>
        <Container>
          <div
            className="mx-auto flex max-w-[1000px] rounded-full bg-paper"
            style={{
              border: "1px solid var(--color-border)",
              padding: "5px",
              gap: "5px",
            }}
            role="tablist"
          >
            {TABS.map((t) => {
              const isActive = tab === t.key;
              return (
                <button
                  key={t.key}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setTab(t.key)}
                  className="flex flex-1 items-center justify-center gap-2.5 rounded-full py-3.5 transition-all"
                  style={{
                    fontSize: "1.05rem",
                    fontWeight: isActive ? 600 : 400,
                    color: isActive ? "#FFFFFF" : "var(--color-ink-muted)",
                    background: isActive ? "var(--color-burgundy)" : "transparent",
                    border: "none",
                    cursor: "pointer",
                    boxShadow: isActive ? "0 4px 12px rgba(201,171,110,0.2)" : "none",
                  }}
                >
                  <TabIcon icon={t.icon} active={isActive} />
                  <span className="hidden sm:inline">{t.label}</span>
                </button>
              );
            })}
          </div>
        </Container>
      </div>

      {/* Tab content */}
      <div style={{ flex: 1, padding: "1.5rem 0 2rem" }}>
        <Container>
          <div className="mx-auto max-w-[1000px]">
            {/* ── Comisión Directiva ── */}
            {tab === "comision" && (
              <Reveal>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
                    gap: "1rem",
                  }}
                >
                  {team.daily.members.map((p, i) => {
                    const name = p.name || p.role;
                    return (
                      <div
                        key={name}
                        className="group flex items-center gap-4 rounded-[14px] bg-paper transition-all"
                        style={{
                          padding: "1.1rem 1.3rem",
                          border: "1px solid var(--color-border)",
                          boxShadow: "0 2px 8px rgba(31,22,17,0.03)",
                        }}
                      >
                        <InitialsCircle name={name} index={i} />
                        <div>
                          <p
                            className="font-display text-ink"
                            style={{
                              fontSize: "1rem",
                              fontWeight: 600,
                              lineHeight: 1.3,
                            }}
                          >
                            {name}
                          </p>
                          <p
                            className="text-ink-muted"
                            style={{ fontSize: "0.78rem", marginTop: "0.1rem" }}
                          >
                            Comisión Directiva
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Reveal>
            )}

            {/* ── Staff Profesional ── */}
            {tab === "staff" && (
              <Reveal>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
                    gap: "1rem",
                  }}
                >
                  {team.professionals.map((p, i) => {
                    const name = p.name || p.role;
                    return (
                      <div
                        key={name}
                        className="group flex items-center gap-4 rounded-[14px] bg-paper transition-all"
                        style={{
                          padding: "1.1rem 1.3rem",
                          border: "1px solid var(--color-border)",
                          boxShadow: "0 2px 8px rgba(31,22,17,0.03)",
                        }}
                      >
                        <InitialsCircle name={name} index={i} />
                        <div>
                          <p
                            className="font-display text-ink"
                            style={{
                              fontSize: "1rem",
                              fontWeight: 600,
                              lineHeight: 1.3,
                            }}
                          >
                            {name}
                          </p>
                          <p
                            className="text-ink-muted"
                            style={{ fontSize: "0.78rem", marginTop: "0.1rem" }}
                          >
                            Staff profesional
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Reveal>
            )}

            {/* ── Testimonios ── */}
            {tab === "testimonios" && (
              <Reveal>
                <div>
                  {/* Rating summary */}
                  <div
                    className="mb-5 flex flex-col items-center gap-3 rounded-[14px] sm:flex-row sm:justify-between"
                    style={{
                      background: "linear-gradient(135deg, #2F5C59 0%, #3D6C69 100%)",
                      padding: "1.25rem 1.75rem",
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className="font-display"
                        style={{
                          fontSize: "2rem",
                          fontWeight: 500,
                          color: "#FFFFFF",
                          lineHeight: 1,
                        }}
                      >
                        {reviews.summary?.average.toFixed(1)}
                      </span>
                      <div>
                        <div className="flex" style={{ gap: "2px", color: "var(--color-peach)" }}>
                          {Array.from({ length: 5 }).map((_, i) => (
                            <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill={i < Math.round(reviews.summary?.average ?? 0) ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.5"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
                          ))}
                        </div>
                        <p style={{ fontSize: "0.78rem", color: "rgba(251,246,238,0.7)", marginTop: "0.1rem" }}>
                          {reviews.summary?.count} reseñas en Google Maps
                        </p>
                      </div>
                    </div>
                    <a
                      href={reviews.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full transition-colors"
                      style={{
                        fontSize: "0.85rem",
                        fontWeight: 600,
                        color: "#FFFFFF",
                        background: "rgba(255,255,255,0.15)",
                        padding: "0.5rem 1.25rem",
                        border: "1px solid rgba(255,255,255,0.25)",
                      }}
                    >
                      Ver en Google Maps
                    </a>
                  </div>

                  {/* Review cards grid */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {items.slice(0, 6).map((r, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setSelected(i)}
                        className="group flex cursor-pointer flex-col rounded-[14px] bg-paper text-left transition-all hover:-translate-y-[2px] hover:shadow-[0_8px_28px_rgba(31,22,17,0.08)]"
                        style={{
                          border: "1px solid var(--color-border)",
                          padding: "1.5rem",
                          position: "relative",
                          overflow: "hidden",
                        }}
                      >
                        {/* Top accent bar */}
                        <div
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            height: "3px",
                            background: i % 3 === 0
                              ? "var(--color-burgundy)"
                              : i % 3 === 1
                              ? "var(--color-peach)"
                              : "linear-gradient(90deg, var(--color-burgundy), var(--color-peach))",
                          }}
                        />

                        {/* Quote mark */}
                        <svg
                          width="28"
                          height="28"
                          viewBox="0 0 24 24"
                          fill="#C9AB6E"
                          style={{ marginBottom: "0.5rem" }}
                        >
                          <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                        </svg>

                        {/* Stars */}
                        <div className="mb-2 flex" style={{ gap: "1px", color: "#C9AB6E" }}>
                          {Array.from({ length: 5 }).map((_, idx) => (
                            <svg key={idx} width="16" height="16" viewBox="0 0 24 24" fill={idx < r.rating ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.5"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
                          ))}
                        </div>

                        {/* Text */}
                        <p
                          className="flex-1"
                          style={{
                            fontSize: "0.95rem",
                            lineHeight: 1.7,
                            color: "#1A3A38",
                            display: "-webkit-box",
                            WebkitLineClamp: 4,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                          }}
                        >
                          &ldquo;{r.text}&rdquo;
                        </p>

                        {/* Author */}
                        <div
                          className="mt-4 flex items-center gap-3"
                          style={{
                            borderTop: "1px solid rgba(47,92,89,0.15)",
                            paddingTop: "0.75rem",
                          }}
                        >
                          <div
                            style={{
                              width: "36px",
                              height: "36px",
                              borderRadius: "50%",
                              background: "linear-gradient(135deg, #C9AB6E, #A8894D)",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              fontSize: "0.8rem",
                              fontWeight: 700,
                              color: "#FFFFFF",
                              flexShrink: 0,
                            }}
                          >
                            {r.author.split(" ").map(w => w[0]).slice(0, 2).join("")}
                          </div>
                          <div>
                            <p className="font-semibold" style={{ fontSize: "0.88rem", color: "#1A3A38" }}>{r.author}</p>
                            <p style={{ fontSize: "0.75rem", color: "#4A7B78" }}>{r.date}</p>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </Reveal>
            )}
          </div>
        </Container>
      </div>

      {selected !== null && <ReviewModal review={items[selected]} onClose={() => setSelected(null)} />}
    </section>
  );
}
