import type { Metadata } from "next";
import { Activities } from "@/components/home/activities";
import { Gallery } from "@/components/home/gallery";

export const metadata: Metadata = {
  title: "Actividades",
  description:
    "Actividades terapéuticas, recreativas y ocupacionales del Centro de Día APADMSI.",
};

export default function ActividadesPage() {
  return (
    <>
      <Activities />
      <Gallery />
    </>
  );
}
