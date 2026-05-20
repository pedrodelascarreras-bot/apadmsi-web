"use client";

import Image from "next/image";
import { useState } from "react";
import { Lightbox } from "@/components/shared/lightbox";

type Props = {
  src: string;
  alt: string;
};

export function HeroImage({ src, alt }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="absolute inset-0 cursor-zoom-in md:cursor-zoom-in"
        aria-label="Ver imagen en grande"
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
          style={{ objectPosition: "50% 30%", filter: "saturate(0.75)" }}
        />
      </button>

      {open && (
        <Lightbox
          images={[src]}
          index={0}
          alt={alt}
          onClose={() => setOpen(false)}
          onChange={() => {}}
          mobileDisabled
        />
      )}
    </>
  );
}
