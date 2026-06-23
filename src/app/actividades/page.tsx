import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import { ActividadesCombined } from "@/components/pages/actividades-combined";

export const metadata: Metadata = {
  title: "Actividades",
  description:
    "Actividades terapéuticas, recreativas y ocupacionales del Centro de Día APADMSI.",
};

const GALLERY_DIRS = [
  "arte-terapia",
  "cocina",
  "huerta",
  "manualidades",
  "musicoterapia",
  "recreativas",
  "viaje-institucional",
];

function collectGalleryImages(): string[] {
  const cwd = process.cwd();
  const images: string[] = [];
  for (const dir of GALLERY_DIRS) {
    const abs = path.join(cwd, "public", "images", dir);
    if (!fs.existsSync(abs)) continue;
    const files = fs
      .readdirSync(abs)
      .filter((f) => /\.(jpe?g|png|webp)$/i.test(f))
      .sort();
    for (const f of files) {
      images.push(`/images/${dir}/${f}`);
    }
  }
  return images;
}

export default function ActividadesPage() {
  const galleryImages = collectGalleryImages();
  return <ActividadesCombined galleryImages={galleryImages} />;
}
