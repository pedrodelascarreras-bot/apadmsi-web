"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

/**
 * Intercepta clicks en links internos del sitio y los navega usando
 * document.startViewTransition() — produce una transición suave entre
 * páginas (fade-out + fade-in) en navegadores que soportan la API.
 *
 * Compatible con Next App Router. Los links externos, target=_blank,
 * anchors (#...) y modificadores con cmd/ctrl no se interceptan.
 */
export function ViewTransitions() {
  const router = useRouter();

  useEffect(() => {
    if (typeof window === "undefined") return;

    type StartFn = (cb: () => void | Promise<void>) => unknown;
    const docWithVT = document as Document & {
      startViewTransition?: StartFn;
    };
    if (typeof docWithVT.startViewTransition !== "function") return;

    function onClick(e: MouseEvent) {
      if (e.defaultPrevented) return;
      if (e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      const target = e.target as HTMLElement | null;
      if (!target) return;
      const link = target.closest<HTMLAnchorElement>("a[href]");
      if (!link) return;
      if (link.target && link.target !== "_self") return;
      if (link.hasAttribute("download")) return;

      const url = new URL(link.href, window.location.origin);
      // Solo links del mismo origin
      if (url.origin !== window.location.origin) return;
      // Mismo path con sólo cambio de hash → no transición
      if (
        url.pathname === window.location.pathname &&
        url.search === window.location.search &&
        url.hash
      ) {
        return;
      }
      // Mismo URL completo → ignorar
      if (url.href === window.location.href) return;

      e.preventDefault();
      docWithVT.startViewTransition?.(() => {
        router.push(url.pathname + url.search + url.hash);
      });
    }

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [router]);

  return null;
}
