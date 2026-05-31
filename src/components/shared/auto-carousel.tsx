"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Props = {
  images: string[];
  alt?: string;
  interval?: number;
  sizes?: string;
  className?: string;
};

export function AutoCarousel({
  images,
  alt = "",
  interval = 4000,
  sizes = "(max-width: 1024px) 95vw, 920px",
  className = "",
}: Props) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className={className} style={{ position: "relative", overflow: "hidden", width: "100%", height: "100%" }}>
      {images.map((src, i) => {
        const active = i === current;
        return (
          <div
            key={src}
            style={{
              position: "absolute",
              inset: 0,
              opacity: active ? 1 : 0,
              zIndex: active ? 1 : 0,
              transition: "opacity 1s ease-in-out",
            }}
          >
            <Image
              src={src}
              alt={alt ? `${alt} ${i + 1}` : ""}
              fill
              sizes={sizes}
              className="object-cover"
              priority={i === 0}
            />
          </div>
        );
      })}

      {images.length > 1 && images.length <= 10 && (
        <div
          style={{
            position: "absolute",
            bottom: 12,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 10,
            display: "flex",
            gap: 6,
          }}
        >
          {images.map((_, i) => (
            <span
              key={i}
              aria-hidden="true"
              style={{
                display: "block",
                borderRadius: 999,
                width: i === current ? 18 : 6,
                height: 6,
                background:
                  i === current
                    ? "rgba(255,255,255,0.95)"
                    : "rgba(255,255,255,0.45)",
                transition: "all 0.5s ease",
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
