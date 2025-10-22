import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import ToolsSection from "@/components/ToolsSection";
import Problem from "@/components/Problem";
import OfferCards from "@/components/OfferCards";
import Guarantee from "@/components/Guarantee";
import Results from "@/components/Results";
import SocialProof from "@/components/SocialProof";
import FAQ from "@/components/FAQ";
import Urgency from "@/components/Urgency";
import FinalCTA from "@/components/FinalCTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <TrustStrip />
        <ToolsSection />
        <Problem />
        <OfferCards />
        <Guarantee />
        <Results />
        <FAQ />
        <Urgency />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
