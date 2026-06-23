import type { Metadata } from "next";
import { About } from "@/components/home/about";
import { Collaborators } from "@/components/home/collaborators";

export const metadata: Metadata = {
  title: "Quiénes somos",
  description:
    "Conocé APADMSI: nuestra misión, habilitaciones y el trabajo cotidiano del Centro de Día.",
};

export default function NosotrosPage() {
  return (
    <>
      <About />
      <Collaborators />
    </>
  );
}
