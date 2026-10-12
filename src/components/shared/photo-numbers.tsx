"use client";

import { useEffect, useRef } from "react";

// TEMPORAL: numera cada foto del sitio para que el cliente elija cuáles sacar.
// Borrar este archivo y su uso en layout.tsx cuando termine la revisión.
const PHOTOS = [
  "/images/about-centro.jpg",
  "/images/arte-terapia/arte-terapia-1.jpg",
  "/images/arte-terapia/arte-terapia-2.jpg",
  "/images/arte-terapia/arte-terapia-3.jpg",
  "/images/arte-terapia/arte-terapia-4.jpg",
  "/images/arte-terapia/arte-terapia-5.jpg",
  "/images/cocina/cocina-1.jpg",
  "/images/cocina/cocina-2.jpg",
  "/images/cocina/cocina-3.jpg",
  "/images/cocina/cocina-4.jpg",
  "/images/cocina/cocina-5.jpg",
  "/images/cocina/cocina-6.jpg",
  "/images/cocina/cocina-7.jpg",
  "/images/cocina/cocina-8.jpg",
  "/images/cocina/cocina-9.jpg",
  "/images/cocina/cocina-10.jpg",
  "/images/equipo-apadmsi.jpg",
  "/images/fotodeportadaFUNDACION.PNG",
  "/images/hero-grupo.jpg",
  "/images/huerta/huerta-1.jpg",
  "/images/huerta/huerta-2.jpg",
  "/images/huerta/huerta-3.jpg",
  "/images/huerta/huerta-4.jpg",
  "/images/huerta/huerta-5.jpg",
  "/images/huerta/huerta-6.jpg",
  "/images/huerta/huerta-7.jpg",
  "/images/huerta/huerta-8.jpg",
  "/images/huerta/huerta-9.jpg",
  "/images/huerta/huerta-10.jpg",
  "/images/manualidades/manualidades-4.jpg",
  "/images/manualidades/manualidades-5.jpg",
  "/images/musicoterapia/musicoterapia-1.jpg",
  "/images/musicoterapia/musicoterapia-2.jpg",
  "/images/musicoterapia/musicoterapia-3.jpg",
  "/images/musicoterapia/musicoterapia-4.jpg",
  "/images/recreativas/recreativas-6.jpg",
  "/images/recreativas/recreativas-7.jpg",
  "/images/recreativas/recreativas-8.jpg",
  "/images/recreativas/recreativas-9.jpg",
  "/images/recreativas/recreativas-10.jpg",
  "/images/recreativas/recreativas-11.jpg",
  "/images/recreativas/recreativas-12.jpg",
  "/images/recreativas/recreativas-13.jpg",
  "/images/recreativas/recreativas-14.jpg",
  "/images/viaje-institucional/viaje-institucional-1.jpg",
  "/images/viaje-institucional/viaje-institucional-2.jpg",
  "/images/viaje-institucional/viaje-institucional-3.jpg",
  "/images/viaje-institucional/viaje-institucional-4.jpg",
  "/images/viaje-institucional/viaje-institucional-5.jpg",
  "/images/viaje-institucional/viaje-institucional-6.jpg",
  "/images/viaje-institucional/viaje-institucional-7.jpg",
  "/images/viaje-institucional/viaje-institucional-8.jpg",
  "/images/viaje-institucional/viaje-institucional-9.jpg",
  "/images/viaje-institucional/viaje-institucional-10.jpg",
  "/images/viaje-institucional/viaje-institucional-11.jpg",
];

const INDEX = new Map(PHOTOS.map((p, i) => [p, i + 1]));

function photoPath(img: HTMLImageElement): string | null {
  const raw = img.getAttribute("src") ?? "";
  try {
    const u = new URL(raw, window.location.origin);
    // next/image: /_next/image?url=%2Fimages%2F...
    const path = u.pathname === "/_next/image" ? u.searchParams.get("url") : u.pathname;
    return path ? decodeURIComponent(path) : null;
  } catch {
    return null;
  }
}

/**
 * Capa fija por encima de la página: no toca el árbol de React, solo dibuja
 * un badge con el número sobre cada <img> visible que esté en la lista.
 */
export function PhotoNumbers() {
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const layer = layerRef.current;
    if (!layer) return;
    let frame = 0;

    function draw() {
      const badges: string[] = [];
      document.querySelectorAll("img").forEach((img) => {
        const path = photoPath(img);
        const n = path ? INDEX.get(path) : undefined;
        if (!n) return;
        const r = img.getBoundingClientRect();
        if (r.width < 20 || r.height < 20) return;
        if (r.bottom < 0 || r.top > window.innerHeight) return;
        const style = getComputedStyle(img);
        if (style.visibility === "hidden" || style.opacity === "0") return;
        const top = Math.max(r.top, 0) + 6;
        const left = Math.max(r.left, 0) + 6;
        badges.push(
          `<div style="position:fixed;top:${top}px;left:${left}px;background:#B91C2C;color:#fff;font:700 18px/1 system-ui,sans-serif;padding:6px 10px;border-radius:999px;border:2px solid #fff;box-shadow:0 2px 6px rgba(0,0,0,.4)">#${n}</div>`,
        );
      });
      const html = badges.join("");
      if (layer!.innerHTML !== html) layer!.innerHTML = html;
      frame = requestAnimationFrame(draw);
    }

    frame = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div
      ref={layerRef}
      aria-hidden
      style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 2147483647 }}
    />
  );
}
