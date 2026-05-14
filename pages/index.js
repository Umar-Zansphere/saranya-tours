import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ConsulateSection from "@/components/ConsulateSection";
import BusinessSection from "@/components/BusinessSection";
import ServicesSection from "@/components/ServicesSection";
import DestinationsSection from "@/components/DestinationsSection";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";
import StatsBar from "@/components/StatsBar";
import CorporateCTA from "@/components/CorporateCTA";
import OfficeSection from "@/components/OfficeSection";
import WhatsAppCTA from "@/components/WhatsAppCTA";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <BusinessSection />
      <ServicesSection />
      <ConsulateSection />
      <DestinationsSection />
      <StatsBar />
      <CorporateCTA />
      <TeamSection />
      <OfficeSection />
      <Footer />
      <WhatsAppCTA />
    </main>
  );
}
