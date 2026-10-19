import Approach from "@/components/Approach";
import Contact from "@/components/Contact";
import CtaBand from "@/components/CtaBand";
import Hero from "@/components/Hero";
import FAQ from "@/components/FAQ";
import LogoBar from "@/components/LogoBar";
import Proof from "@/components/Proof";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import StickyCta from "@/components/StickyCta";

export default function HomePage() {
  return (
    <main id="main">
      <Hero />
      <LogoBar />
      <Services />
      <Approach />
      <Proof />
      <Testimonials />
      <CtaBand />
      <FAQ />
      <Contact />
      <StickyCta />
    </main>
  );
}
