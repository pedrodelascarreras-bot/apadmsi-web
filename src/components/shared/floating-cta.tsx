"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Heart } from "@/components/shared/heart";

/**
 * FAB ("Floating Action Button") con CTA de donación.
 * Solo aparece en mobile/tablet (lg:hidden) y se muestra cuando se ha
 * scrolleado ~300px (después del hero).
 */
export function FloatingCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 300);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Link
      href="/donar"
      aria-label="Quiero ayudar a APADMSI"
      className={`btn-burgundy fixed right-4 z-[90] inline-flex items-center gap-2 rounded-full border-[1.5px] border-burgundy bg-burgundy px-5 py-3.5 text-sm font-semibold shadow-[0_8px_24px_rgba(122,22,32,0.35)] duration-300 lg:hidden ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
      style={{
        color: "#FFFFFF",
        // Safe area: en iPhone con notch (Home Indicator), respeta el área inferior
        bottom: "max(1rem, env(safe-area-inset-bottom))",
      }}
    >
      <Heart size={16} className="heart-pulse" />
      <span style={{ color: "#FFFFFF" }}>Quiero ayudar</span>
    </Link>
  );
}
