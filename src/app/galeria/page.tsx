import type { Metadata } from "next";
import fs from "node:fs";
import path from "node:path";
import { GalleryPageClient } from "@/components/gallery/gallery-page-client";

export const metadata: Metadata = {
  title: "Galería · APADMSI",
  description:
    "Una galería con momentos del día a día en APADMSI: talleres, salidas, festejos y vida en el Centro.",
};

const EXTS = ["jpg", "jpeg", "png", "webp"] as const;

const CATEGORIES = [
  {
    slug: "viaje-institucional",
    label: "Viaje institucional",
    dir: "/images/viaje-institucional",
    namePrefix: "viaje-institucional",
    max: 20,
  },
  {
    slug: "cocina",
    label: "Cocina",
    dir: "/images/cocina",
    namePrefix: "cocina",
    max: 12,
  },
  {
    slug: "huerta",
    label: "Huerta",
    dir: "/images/huerta",
    namePrefix: "huerta",
    max: 12,
  },
  {
    slug: "arte-terapia",
    label: "Arte terapia",
    dir: "/images/arte-terapia",
    namePrefix: "arte-terapia",
    max: 12,
  },
  {
    slug: "musicoterapia",
    label: "Musicoterapia",
    dir: "/images/musicoterapia",
    namePrefix: "musicoterapia",
    max: 12,
  },
  {
    slug: "manualidades",
    label: "Manualidades",
    dir: "/images/manualidades",
    namePrefix: "manualidades",
    max: 12,
  },
  {
    slug: "recreativas",
    label: "Recreación y salidas",
    dir: "/images/recreativas",
    namePrefix: "recreativas",
    max: 15,
  },
] as const;

type ImageItem = {
  src: string;
  alt: string;
  category: string;
  categoryLabel: string;
};

function findFromCategory(
  dir: string,
  namePrefix: string,
  max: number,
): string[] {
  const cwd = process.cwd();
  const out: string[] = [];
  for (let i = 1; i <= max; i++) {
    for (const ext of EXTS) {
      const rel = `${dir}/${namePrefix}-${i}.${ext}`;
      if (fs.existsSync(path.join(cwd, "public", rel))) {
        out.push(rel);
        break;
      }
    }
  }
  return out;
}

function collectAllImages(): ImageItem[] {
  const items: ImageItem[] = [];
  for (const cat of CATEGORIES) {
    const found = findFromCategory(cat.dir, cat.namePrefix, cat.max);
    for (const src of found) {
      items.push({
        src,
        alt: `${cat.label} en APADMSI`,
        category: cat.slug,
        categoryLabel: cat.label,
      });
    }
  }
  return items;
}

export default function GaleriaPage() {
  const images = collectAllImages();
  const categories = CATEGORIES.map((c) => ({ slug: c.slug, label: c.label }));

  return <GalleryPageClient images={images} categories={[...categories]} />;
}
