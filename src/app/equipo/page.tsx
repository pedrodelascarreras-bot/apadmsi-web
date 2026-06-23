import type { Metadata } from "next";
import { Team } from "@/components/home/team";
import { Reviews } from "@/components/home/reviews";

export const metadata: Metadata = {
  title: "Equipo",
  description:
    "Comisión Directiva y staff profesional del Centro de Día APADMSI.",
};

export default function EquipoPage() {
  return (
    <>
      <Team />
      <Reviews />
    </>
  );
}
