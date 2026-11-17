import { CompanyStrip } from "./components/CompanyStrip";
import { ContactSection } from "./components/ContactSection";
import { FeatureGridSection } from "./components/FeatureGridSection";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { HowItWorksSection } from "./components/HowItWorksSection";
import { SiteAnimations } from "./components/SiteAnimations";
import { TrustSection } from "./components/TrustSection";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <SiteAnimations />
      <Hero />
      <FeatureGridSection />
      <TrustSection />
      <HowItWorksSection />
      <CompanyStrip />
      <ContactSection />
      <Footer />
    </div>
  );
}
