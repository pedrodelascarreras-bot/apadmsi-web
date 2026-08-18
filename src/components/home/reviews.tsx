"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { reviews } from "@/lib/content";

/* ── Helpers ── */

function Star({ filled = true }: { filled?: boolean }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  );
}

function QuoteIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="text-burgundy"
      aria-hidden="true"
    >
      <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
    </svg>
  );
}

function ArrowButton({
  direction,
  onClick,
  disabled,
}: {
  direction: "left" | "right";
  onClick: () => void;
  disabled: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === "left" ? "Anterior" : "Siguiente"}
      className="grid h-10 w-10 place-items-center rounded-full border border-border bg-paper text-ink transition-all hover:border-burgundy hover:text-burgundy disabled:opacity-30 disabled:hover:border-border disabled:hover:text-ink"
      style={{ boxShadow: "0 2px 8px rgba(31,22,17,0.06)" }}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {direction === "left" ? (
          <polyline points="15 18 9 12 15 6" />
        ) : (
          <polyline points="9 6 15 12 9 18" />
        )}
      </svg>
    </button>
  );
}

type ReviewItem = (typeof reviews.items)[number];

function ReviewModal({
  review,
  onClose,
}: {
  review: ReviewItem;
  onClose: () => void;
}) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Reseña completa"
      className="fixed inset-0 z-[300] flex items-center justify-center px-4"
      style={{
        background: "rgba(15, 10, 8, 0.85)",
        animation: "modal-fade 0.2s ease-out both",
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Cerrar"
        className="absolute right-4 top-4 z-10 grid h-11 w-11 place-items-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/25"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      <article
        className="w-full max-w-[560px] rounded-[16px] bg-paper px-8 py-8 sm:px-10 sm:py-10"
        style={{
          boxShadow: "0 24px 80px rgba(31,22,17,0.3)",
          animation: "modal-rise 0.25s cubic-bezier(0.2,0.8,0.2,1) both",
        }}
      >
        <div className="mb-4 flex text-burgundy">
          {Array.from({ length: 5 }).map((_, idx) => (
            <Star key={idx} filled={idx < review.rating} />
          ))}
        </div>
        <p
          style={{ fontSize: "1.15rem", lineHeight: 1.7, color: "var(--color-burgundy)" }}
        >
          &ldquo;{review.text}&rdquo;
        </p>
        <div className="mt-6 flex items-baseline justify-between gap-3">
          <span className="text-base font-semibold text-ink">
            {review.author}
          </span>
          <span className="text-sm text-ink-soft">{review.date}</span>
        </div>
      </article>
    </div>
  );
}

/* ── Main component ── */

const VISIBLE = 3; // cards visible at a time on desktop

export function Reviews() {
  const [selected, setSelected] = useState<number | null>(null);
  const [page, setPage] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const hasReviews = reviews.items.length > 0;
  const totalPages = Math.max(1, Math.ceil(reviews.items.length / VISIBLE));

  const canPrev = page > 0;
  const canNext = page < totalPages - 1;

  const prev = useCallback(() => setPage((p) => Math.max(0, p - 1)), []);
  const next = useCallback(
    () => setPage((p) => Math.min(totalPages - 1, p + 1)),
    [totalPages],
  );

  /* Scroll the track on page change (mobile touch scroll) */
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.firstElementChild as HTMLElement | null;
    if (!card) return;
    const gap = 20; // matches gap-5
    const cardW = card.offsetWidth + gap;
    el.scrollTo({ left: page * VISIBLE * cardW, behavior: "smooth" });
  }, [page]);

  return (
    <section className="bg-paper py-16 sm:py-20 lg:py-24">
      <Container>
        {/* ── Header ── */}
        <Reveal>
          <div className="mx-auto mb-10 max-w-[860px] text-center">
            <p className="section-label">{reviews.eyebrow}</p>
            <h2
              style={{
                fontSize: "clamp(1.8rem, 3.4vw, 2.6rem)",
                marginBottom: "1rem",
                lineHeight: 1.2,
                textWrap: "balance",
              }}
            >
              {reviews.heading}
            </h2>
            <p
              className="text-ink-muted"
              style={{
                fontSize: "1.02rem",
                lineHeight: 1.65,
                textWrap: "balance",
              }}
            >
              {reviews.intro}
            </p>

            {/* Rating badge */}
            {reviews.summary && (
              <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-border bg-cream-warm px-5 py-2 text-ink">
                <span className="flex text-burgundy">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      filled={i < Math.round(reviews.summary!.average)}
                    />
                  ))}
                </span>
                <span className="font-display text-lg font-semibold">
                  {reviews.summary.average.toFixed(1)}
                </span>
                <span className="text-sm text-ink-muted">
                  {reviews.summary.count} reseñas
                </span>
              </div>
            )}
          </div>
        </Reveal>

        {/* ── Cards carousel ── */}
        {hasReviews ? (
          <>
            {/* Scrollable track with side arrows */}
            <div className="relative mx-auto max-w-[1080px]">
              {/* Left arrow — positioned to the left of cards */}
              {reviews.items.length > VISIBLE && (
                <div className="absolute left-0 top-0 bottom-0 z-10 hidden items-center sm:flex" style={{ transform: "translateX(calc(-100% - 16px))" }}>
                  <ArrowButton
                    direction="left"
                    onClick={prev}
                    disabled={!canPrev}
                  />
                </div>
              )}

              {/* Right arrow — positioned to the right of cards */}
              {reviews.items.length > VISIBLE && (
                <div className="absolute right-0 top-0 bottom-0 z-10 hidden items-center sm:flex" style={{ transform: "translateX(calc(100% + 16px))" }}>
                  <ArrowButton
                    direction="right"
                    onClick={next}
                    disabled={!canNext}
                  />
                </div>
              )}

              <div
                ref={trackRef}
                className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-2 sm:overflow-hidden"
                style={{
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                  WebkitOverflowScrolling: "touch",
                }}
              >
                {reviews.items.map((r, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setSelected(i)}
                    className="flex w-[85vw] shrink-0 snap-start cursor-pointer flex-col rounded-[14px] bg-paper text-left transition-all hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(31,22,17,0.08)] sm:w-[calc((100%-2*1.25rem)/3)]"
                    style={{
                      border: "1px solid var(--color-border)",
                      boxShadow: "0 2px 12px rgba(31,22,17,0.04)",
                      padding: "1.75rem 1.75rem 1.5rem",
                    }}
                  >
                    {/* Quote icon */}
                    <QuoteIcon />

                    {/* Stars */}
                    <div className="mt-3 mb-4 flex text-burgundy">
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <Star key={idx} filled={idx < r.rating} />
                      ))}
                    </div>

                    {/* Review text */}
                    <p
                      className="flex-1"
                      style={{
                        fontSize: "0.9rem",
                        lineHeight: 1.6,
                        display: "-webkit-box",
                        WebkitLineClamp: 6,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        color: "var(--color-burgundy)",
                      }}
                    >
                      &ldquo;{r.text}&rdquo;
                    </p>

                    {/* Author */}
                    <div className="mt-5 border-t border-border pt-4">
                      <p
                        className="font-semibold text-ink"
                        style={{ fontSize: "0.92rem" }}
                      >
                        {r.author}
                      </p>
                      <p
                        className="text-ink-muted"
                        style={{ fontSize: "0.8rem", marginTop: "0.15rem" }}
                      >
                        {r.date}
                      </p>
                    </div>
                  </button>
                ))}
              </div>

              {/* Page dots — below cards */}
              {reviews.items.length > VISIBLE && (
                <div className="mt-6 hidden items-center justify-center sm:flex">
                  <div className="flex items-center gap-1.5">
                    {Array.from({ length: totalPages }).map((_, idx) => (
                      <button
                        key={idx}
                        type="button"
                        aria-label={`Página ${idx + 1}`}
                        onClick={() => setPage(idx)}
                        className="rounded-full transition-all"
                        style={{
                          width: page === idx ? 20 : 8,
                          height: 8,
                          background:
                            page === idx
                              ? "var(--color-burgundy)"
                              : "var(--color-border)",
                        }}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

          </>
        ) : (
          <div className="mx-auto max-w-[640px] rounded-[12px] border border-dashed border-border bg-cream px-8 py-10 text-center">
            <p
              className="font-script text-burgundy"
              style={{ fontSize: "1.5rem", marginBottom: "0.75rem" }}
            >
              próximamente
            </p>
            <p
              className="text-ink-muted"
              style={{
                fontSize: "1rem",
                lineHeight: 1.65,
                marginBottom: "1.25rem",
              }}
            >
              Estamos cargando las reseñas. Mientras tanto, podés leerlas (y
              dejar la tuya) directamente en Google Maps.
            </p>
            <a
              href={reviews.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-ink inline-flex items-center gap-2 rounded-full border-[1.5px] border-ink px-5 py-2.5 text-sm font-semibold"
            >
              Ver reseñas en Google Maps
            </a>
          </div>
        )}
      </Container>

      {selected !== null && (
        <ReviewModal
          review={reviews.items[selected]}
          onClose={() => setSelected(null)}
        />
      )}
    </section>
  );
}
