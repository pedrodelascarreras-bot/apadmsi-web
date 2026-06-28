"use client";

import { useEffect, useState } from "react";

const BOTTOM_MOBILE = "calc(max(1rem, env(safe-area-inset-bottom)) + 4.5rem)";
const BOTTOM_DESKTOP = "max(1rem, env(safe-area-inset-bottom))";

/**
 * Botón flotante "volver arriba" — aparece después de scrollear ~600px.
 * Se ubica en la esquina inferior izquierda (el CTA "Quiero ayudar" ya ocupa
 * la derecha en mobile y el header en desktop).
 */
export function BackToTop() {
  const [visible, setVisible] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 600);
    }
    function onResize() {
      setIsDesktop(window.matchMedia("(min-width: 1024px)").matches);
    }
    onScroll();
    onResize();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  function handleClick() {
    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const behavior: ScrollBehavior = reduceMotion ? "auto" : "smooth";
    // Triple fallback para asegurar que funcione siempre:
    try {
      window.scrollTo({ top: 0, left: 0, behavior });
    } catch {
      window.scrollTo(0, 0);
    }
    // Algunos browsers respetan scrollTo en documentElement/body en lugar de window
    if (document.documentElement) document.documentElement.scrollTop = 0;
    if (document.body) document.body.scrollTop = 0;
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Volver arriba"
      className={`btn-burgundy-icon group fixed z-[95] grid h-12 w-12 place-items-center rounded-full border-[1.5px] border-burgundy duration-300 sm:h-14 sm:w-14 ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      style={{
        cursor: "pointer",
        background: "var(--color-burgundy)",
        color: "#FFFFFF",
        boxShadow: "0 8px 24px rgba(201,171,110,0.35)",
        position: "fixed",
        right: "1rem",
        left: "auto",
        bottom: isDesktop ? BOTTOM_DESKTOP : BOTTOM_MOBILE,
      }}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="transition-transform duration-300 group-hover:-translate-y-0.5"
        aria-hidden="true"
      >
        <line x1="12" y1="19" x2="12" y2="5" />
        <polyline points="5 12 12 5 19 12" />
      </svg>
    </button>
  );
}
