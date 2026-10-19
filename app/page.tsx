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
import StudioTicker from "@/components/StudioTicker";
import {
  IndustriesSection,
  LaunchSupport,
  StudioIntroduction,
  StudioPartnership,
  WebsiteStandards,
} from "@/components/StudioSections";

export default function HomePage() {
  return (
    <main id="main">
      <Hero />
      <LogoBar />
      <StudioTicker />
      <StudioIntroduction />
      <Services />
      <IndustriesSection />
      <Approach />
      <WebsiteStandards />
      <Proof />
      <StudioPartnership />
      <Testimonials />
      <LaunchSupport />
      <CtaBand />
      <FAQ />
      <Contact />
      <StickyCta />
    </main>
  );
}
