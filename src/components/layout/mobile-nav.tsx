"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Heart } from "@/components/shared/heart";
import { NavIcon } from "@/components/layout/nav-icon";
import { navLinks } from "@/lib/content";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <button
        type="button"
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        onClick={() => setOpen((v) => !v)}
        className="text-ink hover:text-burgundy md:hidden inline-flex h-11 w-11 items-center justify-center rounded-full transition-colors"
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          {open ? (
            <>
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </>
          ) : (
            <>
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </>
          )}
        </svg>
      </button>

      {open && (
        <div
          id="mobile-nav-panel"
          className="fixed inset-x-0 top-20 z-40 lg:hidden bg-cream border-t border-border overflow-y-auto sm:top-24"
          style={{ overscrollBehavior: "contain", height: "calc(100dvh - 5rem)" }}
        >
          <nav
            aria-label="Mobile"
            className="flex flex-col gap-1 px-6 pt-6 pb-10"
            style={{ paddingBottom: "max(2.5rem, env(safe-area-inset-bottom))" }}
          >
            {navLinks.map((link) => {
              const isActive = pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 text-lg font-medium py-3 border-b border-border transition-colors"
                  style={{
                    color: isActive ? "var(--color-burgundy)" : undefined,
                    borderLeftWidth: isActive ? "3px" : "0px",
                    borderLeftColor: isActive ? "var(--color-burgundy)" : "transparent",
                    borderLeftStyle: "solid",
                    paddingLeft: isActive ? "0.75rem" : "0",
                  }}
                >
                  <NavIcon name={link.icon} size={22} className="text-burgundy" />
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/donar"
              onClick={() => setOpen(false)}
              className="btn-burgundy mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-burgundy px-5 py-3 font-semibold shadow-[0_2px_0_0_var(--color-burgundy-deep)]"
              style={{ color: "#FFFFFF" }}
            >
              <span style={{ color: "#FFFFFF" }}>Quiero ayudar</span>
              <Heart size={14} />
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
