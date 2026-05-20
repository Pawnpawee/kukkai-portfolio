import ScrollDownHint from "@/components/ScrollDownHint";
import HeroSection from "@/sections/HeroSection";
import HighlightsSection from "@/sections/HighlightsSection";
import AboutMeSection from "@/sections/AboutMeSection";
import ContactSection from "@/sections/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <HighlightsSection />
      <AboutMeSection />
      <ContactSection />
      <ScrollDownHint />
    </>
  );
}
