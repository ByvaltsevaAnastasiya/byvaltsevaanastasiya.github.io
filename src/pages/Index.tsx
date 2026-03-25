import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ShowreelSection from "@/components/ShowreelSection";
import PortfolioSection from "@/components/PortfolioSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <main className="bg-background min-h-screen">
    <Navbar />
    <HeroSection />
    <ShowreelSection />
    <PortfolioSection />
    <AboutSection />
    <SkillsSection />
    <ContactSection />
    <Footer />
  </main>
);

export default Index;
