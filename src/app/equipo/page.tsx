import type { Metadata } from "next";
import { EquipoOptionC } from "@/components/pages/equipo-option-c";

export const metadata: Metadata = {
  title: "Equipo",
  description:
    "Comisión Directiva y staff profesional del Centro de Día APADMSI.",
};

export default function EquipoPage() {
  return <EquipoOptionC />;
}
