import type { Metadata } from "next";
import { Activities } from "@/components/home/activities";

export const metadata: Metadata = {
  title: "Actividades",
  description:
    "Actividades terapéuticas, recreativas y ocupacionales del Centro de Día APADMSI.",
};

export default function ActividadesPage() {
  return <Activities />;
}
