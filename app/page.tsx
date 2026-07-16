import { ContactSection } from "./components/ContactSection";
import { FeatureGridSection } from "./components/FeatureGridSection";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { SiteAnimations } from "./components/SiteAnimations";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { TrustSection } from "./components/TrustSection";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <SiteAnimations />
      <Hero />
      <FeatureGridSection />
      <TrustSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
