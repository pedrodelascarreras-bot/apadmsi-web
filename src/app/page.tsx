import { Hero } from "@/components/home/hero";
import { Credentials } from "@/components/home/credentials";
import { Stats } from "@/components/home/stats";
import { About } from "@/components/home/about";
import { DonateSection } from "@/components/home/donate-section";

export default function Home() {
  return (
    <>
      <Hero />
      <Credentials />
      <Stats />
      <About />
      <DonateSection />
    </>
  );
}
