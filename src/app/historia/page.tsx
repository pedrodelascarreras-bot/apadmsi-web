import type { Metadata } from "next";
import { HistoriaOptionA } from "@/components/pages/historia-option-a";

export const metadata: Metadata = {
  title: "Historia",
  description:
    "Más de 40 años de historia: la línea de tiempo de APADMSI desde 1982 hasta hoy.",
};

export default function HistoriaPage() {
  return <HistoriaOptionA />;
}
