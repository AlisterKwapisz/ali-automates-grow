import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-primary/5 to-transparent pointer-events-none"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-4xl mx-auto">
          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Stop using Google Sheets.{" "}
            <span className="text-primary">Get an automated CRM</span> for{" "}
            <span className="text-accent">free</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            We'll automate your lead gen followups and give you a CRM for 7 days free. Don't like it? Fire us.
          </p>

          {/* CTAs */}
          <div className="flex justify-center mb-12">
            <Button variant="cta" size="lg" className="text-lg px-8 py-6" asChild>
              <a href="https://calendly.com/bfyautomation/new-meeting" target="_blank" rel="noopener noreferrer">
                Book a call
              </a>
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;