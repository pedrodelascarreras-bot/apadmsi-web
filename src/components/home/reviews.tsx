"use client";

import { useState } from "react";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { reviews } from "@/lib/content";

function Star({ filled = true }: { filled?: boolean }) {
  return (
    <svg
      width="18"
      height="18"
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
          className="text-ink"
          style={{ fontSize: "1.15rem", lineHeight: 1.7 }}
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

const MOBILE_LIMIT = 3;

export function Reviews() {
  const [selected, setSelected] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);
  const hasReviews = reviews.items.length > 0;

  return (
    <section className="bg-paper py-16 sm:py-20 lg:py-24">
      <Container>
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
                  · {reviews.summary.count} reseñas
                </span>
              </div>
            )}
          </div>
        </Reveal>

        {hasReviews ? (
          <>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {reviews.items.map((r, i) => (
                <Reveal key={i} delay={i * 90}>
                  <button
                    type="button"
                    onClick={() => setSelected(i)}
                    className={`h-full w-full cursor-pointer rounded-[12px] bg-paper text-left transition-all hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(31,22,17,0.08)]${
                      !showAll && i >= MOBILE_LIMIT ? " hidden sm:block" : ""
                    }`}
                    style={{
                      border: "1px solid rgba(31,22,17,0.08)",
                      boxShadow: "0 2px 12px rgba(31,22,17,0.04)",
                      padding: "1.5rem 1.75rem",
                    }}
                  >
                    <div className="mb-3 flex text-burgundy">
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <span
                          key={idx}
                          className="star-pop"
                          style={{ animationDelay: `${idx * 90 + 200}ms` }}
                        >
                          <Star filled={idx < r.rating} />
                        </span>
                      ))}
                    </div>
                    <p
                      className="text-ink"
                      style={{ fontSize: "0.98rem", lineHeight: 1.6 }}
                    >
                      &ldquo;{r.text}&rdquo;
                    </p>
                    <div className="mt-4 flex items-baseline justify-between gap-3 text-sm">
                      <span className="font-semibold text-ink">{r.author}</span>
                      <span className="text-ink-soft">{r.date}</span>
                    </div>
                  </button>
                </Reveal>
              ))}
            </div>
            {!showAll && reviews.items.length > MOBILE_LIMIT && (
              <div className="mt-6 flex justify-center sm:hidden">
                <button
                  type="button"
                  onClick={() => setShowAll(true)}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-cream-warm px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-burgundy hover:text-burgundy"
                >
                  Ver las {reviews.items.length - MOBILE_LIMIT} reseñas restantes
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
              </div>
            )}
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
              Ver reseñas en Google Maps &rarr;
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
