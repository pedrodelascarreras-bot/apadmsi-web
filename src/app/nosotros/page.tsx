import type { Metadata } from "next";
import { About } from "@/components/home/about";
import { HistoryExpanded } from "@/components/home/history-expanded";
import { Collaborators } from "@/components/home/collaborators";
import { Gallery } from "@/components/home/gallery";
import { PressBand } from "@/components/home/press-band";

export const metadata: Metadata = {
  title: "Quiénes somos",
  description:
    "Conocé APADMSI: nuestra historia, misión, habilitaciones y el trabajo cotidiano del Centro de Día.",
};

export default function NosotrosPage() {
  return (
    <>
      <About />
      <HistoryExpanded />
      <Collaborators />
      <Gallery />
      <PressBand />
    </>
  );
}
