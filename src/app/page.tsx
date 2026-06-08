import { Hero } from "@/components/home/hero";
import { Credentials } from "@/components/home/credentials";
import { About } from "@/components/home/about";
import { Stats } from "@/components/home/stats";
import { Activities } from "@/components/home/activities";
import { Gallery } from "@/components/home/gallery";
import { History } from "@/components/home/history";
import { Team } from "@/components/home/team";
import { Collaborators } from "@/components/home/collaborators";
import { DonateCta } from "@/components/home/donate-cta";
import { Reviews } from "@/components/home/reviews";
import { PressBand } from "@/components/home/press-band";
import { Contact } from "@/components/home/contact";
export default function Home() {
  return (
    <>
      <Hero />
      <Credentials />
      <About />
      <Stats />
      <Activities />
      <Gallery />
      <History />
      <Team />
      <Collaborators />
      <Reviews />
      <PressBand />
      <DonateCta />
      <Contact />
    </>
  );
}
