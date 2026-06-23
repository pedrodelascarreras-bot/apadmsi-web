"use client";

import { useState, useCallback } from "react";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { team, reviews } from "@/lib/content";

function PeopleIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-burgundy"
      aria-hidden="true"
    >
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function Star({ filled = true }: { filled?: boolean }) {
  return (
    <svg
      width="14"
      height="14"
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
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="text-burgundy"
      aria-hidden="true"
    >
      <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
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

export function EquipoCombined() {
  const [selected, setSelected] = useState<number | null>(null);
  const [reviewIdx, setReviewIdx] = useState(0);

  const reviewItems = reviews.items;
  const prevReview = useCallback(
    () => setReviewIdx((i) => (i - 1 + reviewItems.length) % reviewItems.length),
    [reviewItems.length],
  );
  const nextReview = useCallback(
    () => setReviewIdx((i) => (i + 1) % reviewItems.length),
    [reviewItems.length],
  );

  return (
    <section className="bg-cream py-10 sm:py-14 lg:py-16">
      <Container>
        {/* Header */}
        <Reveal>
          <div className="mx-auto mb-6 max-w-[1100px] text-center">
            <p className="section-label">{team.eyebrow}</p>
            <h2
              className="highlight"
              style={{
                fontSize: "clamp(1.8rem, 3.4vw, 2.6rem)",
                marginBottom: "0.5rem",
                lineHeight: 1.15,
                textWrap: "balance",
              }}
              dangerouslySetInnerHTML={{ __html: team.headlineHtml }}
            />
            <p
              className="text-ink-muted"
              style={{
                fontSize: "0.95rem",
                lineHeight: 1.6,
                textWrap: "balance",
              }}
            >
              {team.intro}
            </p>
          </div>
        </Reveal>

        {/* Three-column: Comisión | Staff | Testimonios */}
        <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-5 md:grid-cols-3">
          {/* Comisión Directiva */}
          <Reveal delay={100}>
            <div
              className="h-full rounded-[14px] border border-border bg-paper px-5 py-5 sm:px-6 sm:py-6"
              style={{ boxShadow: "0 4px 16px rgba(31,22,17,0.04)" }}
            >
              <div className="mb-4 flex items-center gap-2.5">
                <PeopleIcon />
                <h3
                  className="font-display text-burgundy"
                  style={{ fontSize: "1rem", fontWeight: 600 }}
                >
                  {team.daily.label}
                </h3>
              </div>
              <ul className="space-y-2 list-none">
                {team.daily.members.map((p) => (
                  <li key={p.name || p.role} className="flex items-center gap-2.5">
                    <span
                      className="shrink-0 rounded-full bg-burgundy"
                      style={{ width: 5, height: 5 }}
                      aria-hidden="true"
                    />
                    <span
                      className="text-ink"
                      style={{ fontSize: "0.85rem", lineHeight: 1.35 }}
                    >
                      {p.name || p.role}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Staff */}
          <Reveal delay={200}>
            <div
              className="h-full rounded-[14px] border border-border bg-paper px-5 py-5 sm:px-6 sm:py-6"
              style={{ boxShadow: "0 4px 16px rgba(31,22,17,0.04)" }}
            >
              <div className="mb-4 flex items-center gap-2.5">
                <PeopleIcon />
                <h3
                  className="font-display text-burgundy"
                  style={{ fontSize: "1rem", fontWeight: 600 }}
                >
                  Staff
                </h3>
              </div>
              <ul className="space-y-2 list-none">
                {team.professionals.map((p) => (
                  <li key={p.name || p.role} className="flex items-center gap-2.5">
                    <span
                      className="shrink-0 rounded-full bg-burgundy"
                      style={{ width: 5, height: 5 }}
                      aria-hidden="true"
                    />
                    <span
                      className="text-ink"
                      style={{ fontSize: "0.85rem", lineHeight: 1.35 }}
                    >
                      {p.name || p.role}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Testimonios — single card with arrows */}
          <Reveal delay={300}>
            <div
              className="flex h-full flex-col rounded-[14px] border border-border bg-paper px-5 py-5 sm:px-6 sm:py-6"
              style={{ boxShadow: "0 4px 16px rgba(31,22,17,0.04)" }}
            >
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <QuoteIcon />
                  <h3
                    className="font-display text-burgundy"
                    style={{ fontSize: "1rem", fontWeight: 600 }}
                  >
                    Testimonios
                  </h3>
                </div>
                {reviews.summary && (
                  <div className="flex items-center gap-1.5">
                    <span className="flex text-burgundy">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          filled={i < Math.round(reviews.summary!.average)}
                        />
                      ))}
                    </span>
                    <span
                      className="font-display font-semibold text-ink"
                      style={{ fontSize: "0.85rem" }}
                    >
                      {reviews.summary.average.toFixed(1)}
                    </span>
                  </div>
                )}
              </div>

              {/* Current review */}
              {reviewItems.length > 0 && (
                <button
                  type="button"
                  onClick={() => setSelected(reviewIdx)}
                  className="flex flex-1 cursor-pointer flex-col text-left"
                >
                  <div className="mb-2 flex text-burgundy">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Star
                        key={idx}
                        filled={idx < reviewItems[reviewIdx].rating}
                      />
                    ))}
                  </div>
                  <p
                    className="flex-1 text-ink"
                    style={{
                      fontSize: "0.85rem",
                      lineHeight: 1.55,
                      display: "-webkit-box",
                      WebkitLineClamp: 5,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    &ldquo;{reviewItems[reviewIdx].text}&rdquo;
                  </p>
                  <p
                    className="mt-2 font-semibold text-ink"
                    style={{ fontSize: "0.82rem" }}
                  >
                    {reviewItems[reviewIdx].author}
                  </p>
                  <p
                    className="text-ink-muted"
                    style={{ fontSize: "0.72rem", marginTop: "0.1rem" }}
                  >
                    {reviewItems[reviewIdx].date}
                  </p>
                </button>
              )}

              {/* Navigation */}
              <div className="mt-3 flex items-center justify-between border-t border-border pt-3">
                <span
                  className="text-ink-muted"
                  style={{ fontSize: "0.72rem" }}
                >
                  {reviewIdx + 1} / {reviewItems.length}
                </span>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={prevReview}
                    aria-label="Anterior"
                    className="grid h-8 w-8 place-items-center rounded-full border border-border bg-paper text-ink transition-all hover:border-burgundy hover:text-burgundy"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <polyline points="15 18 9 12 15 6" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    onClick={nextReview}
                    aria-label="Siguiente"
                    className="grid h-8 w-8 place-items-center rounded-full border border-border bg-paper text-ink transition-all hover:border-burgundy hover:text-burgundy"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <polyline points="9 6 15 12 9 18" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Google Maps link */}
              <a
                href={reviews.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-[0.08em] text-burgundy transition-colors hover:text-burgundy-deep"
              >
                Ver en Google Maps
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </Reveal>
        </div>

        {/* Closing */}
        {team.closing && (
          <Reveal delay={400}>
            <p
              className="mx-auto mt-6 text-center text-ink-muted"
              style={{
                fontSize: "0.88rem",
                lineHeight: 1.6,
                textWrap: "balance",
                maxWidth: "700px",
              }}
            >
              {team.closing}
            </p>
          </Reveal>
        )}
      </Container>

      {selected !== null && (
        <ReviewModal
          review={reviewItems[selected]}
          onClose={() => setSelected(null)}
        />
      )}
    </section>
  );
}
