"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "apadmsi-reading-mode";

/**
 * Botón discreto que toggle un "modo lectura" — agrega .reading-mode al
 * <html> que aumenta el tamaño del texto, line-height y angosta el ancho
 * de párrafos en secciones largas. La preferencia se guarda en
 * localStorage para que persista entre páginas.
 */
export function ReadingMode() {
  const [active, setActive] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "1") {
        setActive(true);
        document.documentElement.classList.add("reading-mode");
      }
    } catch {
      // ignore
    }
  }, []);

  function toggle() {
    setActive((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add("reading-mode");
        try {
          localStorage.setItem(STORAGE_KEY, "1");
        } catch {}
      } else {
        document.documentElement.classList.remove("reading-mode");
        try {
          localStorage.removeItem(STORAGE_KEY);
        } catch {}
      }
      return next;
    });
  }

  if (!mounted) return null;

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={active}
      aria-label={
        active
          ? "Desactivar modo lectura"
          : "Activar modo lectura (texto más grande)"
      }
      title={active ? "Modo lectura activo" : "Modo lectura"}
      className={`fixed bottom-5 left-5 z-[80] hidden h-11 w-11 items-center justify-center rounded-full border transition-all hover:-translate-y-0.5 lg:inline-flex ${
        active
          ? "border-burgundy bg-burgundy text-white shadow-[0_4px_12px_rgba(122,22,32,0.3)]"
          : "border-border bg-paper/95 text-ink shadow-[0_4px_12px_rgba(31,22,17,0.08)] backdrop-blur-sm hover:border-burgundy hover:text-burgundy"
      }`}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M2 4h7a4 4 0 0 1 4 4v12" />
        <path d="M22 4h-7a4 4 0 0 0-4 4v12" />
        <path d="M4 8h5" />
        <path d="M4 12h5" />
        <path d="M15 8h5" />
        <path d="M15 12h5" />
      </svg>
    </button>
  );
}
