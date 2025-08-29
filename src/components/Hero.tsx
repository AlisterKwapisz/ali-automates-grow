import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            AI agents and automations that{" "}
            <span className="text-primary">save hours</span> and{" "}
            <span className="text-accent">grow revenue</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Practical, build-ready systems for lead gen, content ops, and support
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="accent" size="lg" className="text-lg px-8 py-6" asChild>
              <a href="https://calendly.com/bfyautomation/new-meeting" target="_blank" rel="noopener noreferrer">
                Book a call
              </a>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp Me
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;