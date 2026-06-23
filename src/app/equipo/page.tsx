import type { Metadata } from "next";
import { EquipoCombined } from "@/components/pages/equipo-combined";

export const metadata: Metadata = {
  title: "Equipo",
  description:
    "Comisión Directiva y staff profesional del Centro de Día APADMSI.",
};

export default function EquipoPage() {
  return <EquipoCombined />;
}
