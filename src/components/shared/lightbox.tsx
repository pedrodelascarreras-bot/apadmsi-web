"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";

type Props = {
  images: string[];
  index: number | null;
  alt?: string;
  onClose: () => void;
  onChange: (next: number) => void;
  mobileDisabled?: boolean;
};

export function Lightbox({ images, index, alt, onClose, onChange, mobileDisabled }: Props) {
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  const closeLightbox = useCallback(() => {
    onCloseRef.current();
  }, []);

  useEffect(() => {
    if (index === null) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    history.pushState({ lightbox: true }, "");

    function onPopState() {
      closeLightbox();
    }

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        history.back();
      }
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    }
    window.addEventListener("keydown", onKey);
    window.addEventListener("popstate", onPopState);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("popstate", onPopState);
      if (history.state?.lightbox) history.back();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index !== null]);

  if (index === null || images.length === 0) return null;
  if (mobileDisabled && typeof window !== "undefined" && window.innerWidth < 768) {
    onClose();
    return null;
  }

  function next() {
    if (index === null) return;
    onChange((index + 1) % images.length);
  }
  function prev() {
    if (index === null) return;
    onChange((index - 1 + images.length) % images.length);
  }

  const currentSrc = images[index];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Galería"
      className="fixed inset-0 z-[300] flex items-center justify-center"
      style={{
        background: "rgba(15, 10, 8, 0.92)",
        animation: "modal-fade 0.2s ease-out both",
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) history.back();
      }}
    >
      {/* Cerrar */}
      <button
        type="button"
        onClick={() => history.back()}
        aria-label="Cerrar galería"
        className="absolute right-4 top-4 z-10 grid h-11 w-11 place-items-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/25"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      {/* Counter */}
      <span className="absolute left-4 top-5 z-10 text-sm font-semibold uppercase tracking-[0.16em] text-white/80">
        {index + 1} / {images.length}
      </span>

      {/* Prev */}
      {images.length > 1 && (
        <button
          type="button"
          onClick={prev}
          aria-label="Anterior"
          className="absolute left-2 top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/25 sm:left-6"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
      )}

      {/* Imagen */}
      <div
        className="relative max-h-[90vh] max-w-[92vw]"
        style={{ width: "min(1200px, 92vw)", height: "min(90vh, 1000px)" }}
      >
        <Image
          src={currentSrc}
          alt={alt ?? `Imagen ${index + 1}`}
          fill
          sizes="(max-width: 1200px) 92vw, 1200px"
          className="object-contain"
          style={{
            animation: "modal-rise 0.25s cubic-bezier(0.2,0.8,0.2,1) both",
          }}
        />
      </div>

      {/* Next */}
      {images.length > 1 && (
        <button
          type="button"
          onClick={next}
          aria-label="Siguiente"
          className="absolute right-2 top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/25 sm:right-6"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      )}
    </div>
  );
}
