import fs from "node:fs";
import path from "node:path";
import { activities, activityDetailPages } from "@/lib/content";
import { ActivitiesClient } from "./activities-client";

const IMG_EXTS = ["jpg", "jpeg", "png", "webp"] as const;

function findExistingImages(slug: string): string[] {
  const detail = activityDetailPages[slug];
  if (!detail) return [];
  const cwd = process.cwd();
  const found: string[] = [];
  for (let i = 1; i <= detail.imageCount; i++) {
    for (const ext of IMG_EXTS) {
      const rel = `${detail.imagesDir}/${detail.slug}-${i}.${ext}`;
      if (fs.existsSync(path.join(cwd, "public", rel))) {
        found.push(rel);
        break;
      }
    }
  }
  return found;
}

export function Activities() {
  // En server, calculo qué imágenes existen para cada actividad y se las paso
  // al cliente como props (el cliente no puede acceder al filesystem).
  const activityImages: Record<string, string[]> = {};
  for (const slug of Object.keys(activityDetailPages)) {
    activityImages[slug] = findExistingImages(slug);
  }

  return (
    <ActivitiesClient
      items={[...activities.items]}
      cta={activities.cta}
      eyebrow={activities.eyebrow}
      heading={activities.heading}
      intro={activities.intro}
      officialIntro={activities.officialIntro}
      activityImages={activityImages}
    />
  );
}
