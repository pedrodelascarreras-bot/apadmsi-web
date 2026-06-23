"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";
import { NavIcon } from "@/components/layout/nav-icon";
import { navLinks } from "@/lib/content";

export function NavLinks() {
  const pathname = usePathname();

  return (
    <ul className="hidden lg:flex items-center gap-6 list-none xl:gap-9">
      {navLinks.map((link, i) => {
        const isActive = pathname.startsWith(link.href);

        return (
          <Fragment key={link.href}>
            {i > 0 && (
              <li
                aria-hidden="true"
                className="h-10 w-px"
                style={{ background: "var(--color-border)" }}
              />
            )}
            <li>
              <Link
                href={link.href}
                className="group relative flex flex-col items-center gap-1.5 transition-colors hover:text-burgundy"
                style={{ color: isActive ? "var(--color-burgundy)" : undefined }}
              >
                <NavIcon
                  name={link.icon}
                  size={26}
                  className="text-burgundy transition-transform group-hover:-translate-y-0.5"
                />
                <span className="whitespace-nowrap text-[0.78rem] font-semibold leading-tight">
                  {link.label}
                </span>
                {isActive && (
                  <span
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      bottom: "-10px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "20px",
                      height: "2px",
                      borderRadius: "1px",
                      background: "var(--color-burgundy)",
                    }}
                  />
                )}
              </Link>
            </li>
          </Fragment>
        );
      })}
    </ul>
  );
}
