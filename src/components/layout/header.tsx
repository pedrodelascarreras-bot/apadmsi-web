import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/shared/container";
import { Heart } from "@/components/shared/heart";
import { MobileNav } from "@/components/layout/mobile-nav";
import { NavLinks } from "@/components/layout/nav-links";
import { site } from "@/lib/content";

export function Header() {
  return (
    <header
      className="sticky top-0 z-50 border-b border-border backdrop-blur-md"
      style={{ backgroundColor: "rgba(251, 246, 238, 0.94)" }}
    >
      {/* Blob decorativo top-right */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-20 h-[200px] w-[260px]"
        style={{
          background:
            "radial-gradient(circle, rgba(232,168,124,0.30), transparent 70%)",
        }}
      />
      {/* Blob decorativo bottom-left */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-16 -left-20 h-[160px] w-[220px]"
        style={{
          background:
            "radial-gradient(circle, rgba(232,168,124,0.25), transparent 70%)",
        }}
      />

      <Container
        as="nav"
        className="relative z-10 flex h-20 items-center justify-between gap-4 sm:h-24 lg:h-28"
      >
        {/* Brand */}
        <Link
          href="/"
          aria-label={`${site.name} · inicio`}
          className="flex shrink-0 items-center gap-3 text-ink no-underline"
        >
          <span className="relative block h-14 w-[84px] shrink-0 sm:h-[72px] sm:w-[108px] lg:h-20 lg:w-[120px]">
            <Image
              src="/logo.png"
              alt={`${site.brandShort} · ${site.tagline}`}
              fill
              priority
              sizes="120px"
              className="object-contain"
            />
          </span>
          <span className="flex flex-col leading-[1.15]">
            <strong className="font-display text-base font-bold tracking-wide sm:text-xl">
              {site.name}
            </strong>
            <span className="hidden whitespace-nowrap text-sm text-ink-muted tracking-wide sm:block">
              {site.tagline}
            </span>
            <span className="whitespace-nowrap text-[0.7rem] text-ink-muted tracking-wide sm:hidden">
              Centro de Día
            </span>
          </span>
        </Link>

        <NavLinks />

        {/* CTA */}
        <Link
          href="/#donar"
          data-cursor="Donar"
          className="btn-burgundy hidden lg:inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full border-[1.5px] border-burgundy bg-burgundy px-6 py-3 text-sm font-semibold shadow-[0_2px_0_0_var(--color-burgundy-deep)]"
          style={{ color: "#FFFFFF" }}
        >
          <span style={{ color: "#FFFFFF" }}>Quiero ayudar</span>
          <Heart size={14} className="heart-pulse" />
        </Link>

        {/* Mobile / tablet menu */}
        <div className="lg:hidden">
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
