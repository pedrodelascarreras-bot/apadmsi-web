"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Direction = "up" | "fade" | "scale";

type Props = {
  children: ReactNode;
  /** Direction of the reveal animation. Default: "up" (fade + slide up). */
  as?: Direction;
  /** Delay in ms before the animation starts after entering viewport. */
  delay?: number;
  /** Duration in ms. Default 700. */
  duration?: number;
  /** Threshold for IntersectionObserver (0-1). Default 0 (any pixel). */
  threshold?: number;
  /** Root margin for IntersectionObserver. */
  rootMargin?: string;
  /** Wrapper element. Default "div". */
  tag?: keyof React.JSX.IntrinsicElements;
  className?: string;
  style?: React.CSSProperties;
};

/**
 * Wraps children in a div that animates in when scrolled into view.
 * Triggers once. Respects prefers-reduced-motion (skips animation).
 *
 * Robusto en mobile: si IntersectionObserver no existe, si el elemento ya
 * está en viewport al montar, o si por algún motivo el observer no llega
 * a disparar (timeout 250ms), igualmente revela el contenido.
 */
export function Reveal({
  children,
  as = "up",
  delay = 0,
  duration = 700,
  threshold = 0,
  rootMargin = "0px 0px 0px 0px",
  tag = "div",
  className = "",
  style,
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // 1. Si reduced-motion está activo: revelar sin animar
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setVisible(true);
      return;
    }

    // 2. Si IntersectionObserver no existe en el browser, revelar
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    // 3. Verificación inmediata: si el elemento ya está visible al montar,
    //    disparar la animación con un pequeño delay para que se VEA
    //    (sin doble RAF la transición se aplicaba al instante y no se notaba).
    const rect = el.getBoundingClientRect();
    const inViewport =
      rect.top < window.innerHeight && rect.bottom > 0 && rect.height > 0;
    if (inViewport) {
      let raf2 = 0;
      const raf1 = requestAnimationFrame(() => {
        raf2 = requestAnimationFrame(() => setVisible(true));
      });
      return () => {
        cancelAnimationFrame(raf1);
        if (raf2) cancelAnimationFrame(raf2);
      };
    }

    // 4. Observer normal con threshold 0 (cualquier pixel cuenta)
    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            obs.disconnect();
            break;
          }
        }
      },
      { threshold, rootMargin }
    );
    obs.observe(el);

    // 5. Safety net: si el observer no dispara (browser viejo, throttling), revelar a los 600ms
    const safety = window.setTimeout(() => {
      const r = el.getBoundingClientRect();
      const stillInViewport = r.top < window.innerHeight && r.bottom > 0;
      if (stillInViewport) {
        setVisible(true);
        obs.disconnect();
      }
    }, 600);

    return () => {
      obs.disconnect();
      clearTimeout(safety);
    };
  }, [threshold, rootMargin]);

  const Tag = tag as React.ElementType;
  const animClass = `reveal reveal-${as}${visible ? " is-visible" : ""}`;

  return (
    <Tag
      ref={ref}
      className={`${animClass} ${className}`.trim()}
      style={{
        ...style,
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
      }}
    >
      {children}
    </Tag>
  );
}
