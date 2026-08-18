import { HeroOptionC } from "@/components/pages/hero-option-c";
import { InstitutionalBand } from "@/components/home/institutional-band";
import { Stats } from "@/components/home/stats";
import { History } from "@/components/home/history";
import { Team } from "@/components/home/team";
import { Reviews } from "@/components/home/reviews";
import { DonateSection } from "@/components/home/donate-section";
import { Contact } from "@/components/home/contact";
import { ColorListener } from "@/components/paleta/color-listener";

export default function PreviewHome() {
  return (
    <>
      <ColorListener />
      <HeroOptionC />
      <InstitutionalBand variant="b" />
      <Stats />
      <History />
      <Team />
      <Reviews />
      <DonateSection />
      <Contact />
    </>
  );
}
