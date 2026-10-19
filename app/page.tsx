import Approach from "@/components/Approach";
import Contact from "@/components/Contact";
import CtaBand from "@/components/CtaBand";
import Hero from "@/components/Hero";
import LogoBar from "@/components/LogoBar";
import Proof from "@/components/Proof";
import Services from "@/components/Services";

export default function HomePage() {
  return (
    <main id="main">
      <Hero />
      <LogoBar />
      <Services />
      <Approach />
      <Proof />
      <CtaBand />
      <Contact />
    </main>
  );
}
