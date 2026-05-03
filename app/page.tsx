import { RevealOnScroll } from "./RevealOnScroll";
import { CloseStrip } from "./landing/CloseStrip";
import { CommercialSection } from "./landing/CommercialSection";
import { ContactSection } from "./landing/ContactSection";
import { Header } from "./landing/Header";
import { Hero } from "./landing/Hero";
import { ScopeSection } from "./landing/ScopeSection";
import { ServicesSection } from "./landing/ServicesSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <main>
        <RevealOnScroll>
          <ServicesSection />
        </RevealOnScroll>
        <RevealOnScroll>
          <CloseStrip />
        </RevealOnScroll>
        <RevealOnScroll>
          <CommercialSection />
        </RevealOnScroll>
        <RevealOnScroll>
          <ScopeSection />
        </RevealOnScroll>
        <RevealOnScroll>
          <ContactSection />
        </RevealOnScroll>
      </main>
    </div>
  );
}
