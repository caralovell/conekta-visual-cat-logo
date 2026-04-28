import HeroSection from "@/components/HeroSection";
import DigitalSignageSection from "@/components/DigitalSignageSection";
import BudgetSection from "@/components/BudgetSection";
import FooterSection from "@/components/FooterSection";
import SectionDivider from "@/components/SectionDivider";

const Index = () => (
  <div className="min-h-screen">
    <HeroSection />
    <SectionDivider />
    <DigitalSignageSection />
    <BudgetSection />
    <FooterSection />
  </div>
);

export default Index;
