"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Heart } from "@/components/shared/heart";
import { Lightbox } from "@/components/shared/lightbox";
import type { ActivityDetail } from "@/lib/content";

type Props = {
  activity: ActivityDetail | null;
  images: string[];
  onClose: () => void;
};

export function ActivityModal({ activity, images, onClose }: Props) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    if (!activity) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);

    // Foco inicial al panel para accesibilidad
    dialogRef.current?.focus();

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [activity, onClose]);

  if (!activity) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="activity-modal-title"
      className="fixed inset-0 z-[200] flex items-stretch justify-center overflow-y-auto overscroll-contain"
      style={{
        background: "rgba(31, 22, 17, 0.55)",
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: "blur(4px)",
        animation: "modal-fade 0.2s ease-out both",
        WebkitOverflowScrolling: "touch",
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={dialogRef}
        tabIndex={-1}
        className="relative my-10 w-full max-w-[920px] rounded-[16px] bg-cream shadow-[0_24px_60px_rgba(31,22,17,0.4)] focus:outline-none mx-4"
        style={{
          animation: "modal-rise 0.25s cubic-bezier(0.2,0.8,0.2,1) both",
        }}
      >
        {/* Botón cerrar */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar"
          className="absolute right-3 top-3 z-10 grid h-10 w-10 place-items-center rounded-full border border-border bg-paper text-ink transition-all hover:border-burgundy hover:text-burgundy"
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
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Cabecera */}
        <header className="px-6 pt-10 pb-6 sm:px-10 sm:pt-12 sm:pb-8">
          <p className="section-label">{activity.eyebrow}</p>
          <h2
            id="activity-modal-title"
            className="highlight"
            style={{
              fontSize: "clamp(1.8rem, 3.4vw, 2.6rem)",
              lineHeight: 1.15,
            }}
            dangerouslySetInnerHTML={{ __html: activity.headlineHtml }}
          />
        </header>

        {/* Cuerpo de texto */}
        <div className="border-t border-border px-6 py-7 sm:px-10 sm:py-9">
          {activity.paragraphsHtml.map((html, i) => (
            <p
              key={i}
              className="text-ink"
              style={{
                fontSize: "1.02rem",
                lineHeight: 1.7,
                marginBottom: "1.1rem",
              }}
              dangerouslySetInnerHTML={{ __html: html }}
            />
          ))}
        </div>

        {/* Galería */}
        <div className="border-t border-border bg-paper px-6 py-8 sm:px-10 sm:py-10">
          <div className="mb-6">
            <p className="section-label">{activity.galleryEyebrow}</p>
            <h3
              style={{
                fontSize: "clamp(1.2rem, 2vw, 1.5rem)",
                marginBottom: "0.5rem",
                lineHeight: 1.25,
              }}
            >
              {activity.galleryHeading}
            </h3>
            <p
              className="text-ink-muted"
              style={{ fontSize: "0.95rem", lineHeight: 1.6 }}
            >
              {activity.galleryIntro}
            </p>
          </div>

          {images.length > 0 ? (
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {images.map((src, i) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => setLightboxIndex(i)}
                  aria-label={`Abrir foto ${i + 1} de ${activity.title}`}
                  className="group relative aspect-[4/5] overflow-hidden rounded-[10px] border border-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy focus-visible:ring-offset-2"
                >
                  <Image
                    src={src}
                    alt={`${activity.title} · foto ${i + 1}`}
                    fill
                    sizes="(max-width: 640px) 50vw, 280px"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 grid place-items-center bg-ink/0 opacity-0 transition-opacity group-hover:bg-ink/30 group-hover:opacity-100"
                  >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="7" />
                      <path d="m21 21-4.3-4.3" />
                      <path d="M11 8v6M8 11h6" />
                    </svg>
                  </span>
                </button>
              ))}
            </div>
          ) : (
            <p className="text-ink-soft text-sm italic">
              Estamos cargando las fotos de esta actividad.
            </p>
          )}
        </div>

        {/* CTA */}
        <footer className="rounded-b-[16px] border-t border-border bg-cream-warm px-6 py-7 text-center sm:px-10">
          <p
            className="font-script text-burgundy mb-4"
            style={{ fontSize: "1.3rem" }}
          >
            tu aporte sostiene esta actividad
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/donar"
              onClick={onClose}
              className="btn-burgundy inline-flex items-center gap-2 rounded-full border-[1.5px] border-burgundy bg-burgundy px-6 py-3 text-sm font-semibold shadow-[0_2px_0_0_var(--color-burgundy-deep)]"
              style={{ color: "#FFFFFF" }}
            >
              <span style={{ color: "#FFFFFF" }}>Quiero ayudar</span>
              <Heart size={14} />
            </Link>
            <button
              type="button"
              onClick={onClose}
              className="btn-outline-ink inline-flex items-center gap-2 rounded-full border-[1.5px] border-ink px-6 py-3 text-sm font-semibold"
            >
              Volver
            </button>
          </div>
        </footer>
      </div>

      <Lightbox
        mobileDisabled
        images={images}
        index={lightboxIndex}
        alt={activity.title}
        onClose={() => setLightboxIndex(null)}
        onChange={setLightboxIndex}
      />
    </div>
  );
}
