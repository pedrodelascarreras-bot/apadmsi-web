import type { Metadata } from "next";
import { notFound } from "next/navigation";
import fs from "node:fs";
import path from "node:path";
import { ActivityDetailPage } from "@/components/activity/activity-detail-page";
import { activityDetailPages, type ActivityDetail } from "@/lib/content";

type Params = Promise<{ slug: string }>;

const IMG_EXTS = ["jpg", "jpeg", "png", "webp"] as const;

function findExistingImages(detail: ActivityDetail): string[] {
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

export function generateStaticParams() {
  return Object.keys(activityDetailPages).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const activity = activityDetailPages[slug];
  if (!activity) return {};
  const description = activity.paragraphsHtml[0]
    .replace(/<[^>]*>/g, "")
    .slice(0, 160);
  return {
    title: activity.title,
    description,
    openGraph: {
      title: `${activity.title} · APADMSI`,
      description,
    },
  };
}

export default async function Page({ params }: { params: Params }) {
  const { slug } = await params;
  const activity = activityDetailPages[slug];
  if (!activity) notFound();
  const images = findExistingImages(activity);
  return <ActivityDetailPage activity={activity} images={images} />;
}
