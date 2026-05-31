"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Cursor personalizado: un círculo cremoso con texto que aparece sobre
 * elementos con `data-cursor="..."`. El valor del data-attribute es el
 * texto a mostrar (ej. "Ver", "Donar", "Abrir").
 *
 * Solo se monta en pantallas con pointer:fine (no se ve en mobile/tablet).
 * Respeta prefers-reduced-motion.
 */
export function CustomCursor() {
  const ref = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [hover, setHover] = useState<{ visible: boolean; label: string }>({
    visible: false,
    label: "",
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;
    setEnabled(true);

    let raf = 0;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    function move(e: MouseEvent) {
      targetX = e.clientX;
      targetY = e.clientY;

      const target = e.target as HTMLElement | null;
      if (!target) return;
      const triggerEl = target.closest<HTMLElement>("[data-cursor]");
      if (triggerEl) {
        const label = triggerEl.dataset.cursor ?? "";
        setHover({ visible: true, label });
      } else {
        setHover((prev) => (prev.visible ? { visible: false, label: prev.label } : prev));
      }
    }

    function loop() {
      currentX += (targetX - currentX) * 0.18;
      currentY += (targetY - currentY) * 0.18;
      const el = ref.current;
      if (el) {
        el.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(loop);
    }

    function leave() {
      setHover({ visible: false, label: "" });
    }

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseout", leave);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseout", leave);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`pointer-events-none fixed left-0 top-0 z-[400] grid place-items-center rounded-full font-display font-semibold text-burgundy-deep transition-all duration-200 ease-out ${
        hover.visible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        width: "72px",
        height: "72px",
        background: "var(--color-peach)",
        fontSize: "0.78rem",
        letterSpacing: "0.06em",
        textTransform: "uppercase",
        boxShadow: "0 8px 24px rgba(232,168,124,0.45)",
        mixBlendMode: "normal",
        transform: "translate3d(-100px, -100px, 0) translate(-50%, -50%)",
      }}
    >
      {hover.label}
    </div>
  );
}
