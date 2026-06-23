import { Hero } from "@/components/home/hero";
import { Credentials } from "@/components/home/credentials";
import { MissionBlock } from "@/components/home/mission-block";
import { DonateSection } from "@/components/home/donate-section";

export default function Home() {
  return (
    <>
      <Hero />
      <Credentials />
      <MissionBlock />
      <DonateSection />
    </>
  );
}
