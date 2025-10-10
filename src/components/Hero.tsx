import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
const Hero = () => {
  return <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-primary/5 to-transparent pointer-events-none"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-4xl mx-auto">
          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Save{" "}
            <span className="text-primary">15+ Hours Per Week</span>{" "}
            with <span className="text-accent">Custom AI Automation</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">Transform your business operations with AI-powered automation. Focus on strategy and growth while our custom AI solutions handle repetitive tasks, streamline workflows, and scale your output - without hiring.</p>

          {/* Value Props */}
          <div className="grid md:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-green-500 mb-2">✅</div>
              <div className="font-semibold text-foreground mb-1">Free AI Consultation - Zero Risk</div>
              <div className="text-sm text-muted-foreground">Discover your automation potential</div>
            </div>
            <div className="text-center">
              <div className="text-green-500 mb-2">✅</div>
              <div className="font-semibold text-foreground mb-1">No Extra Headcount</div>
              <div className="text-sm text-muted-foreground">Your current team, supercharged</div>
            </div>
            <div className="text-center">
              <div className="text-green-500 mb-2">✅</div>
              <div className="font-semibold text-foreground mb-1">15+ Hours Saved Per Week</div>
              <div className="text-sm text-muted-foreground">Guaranteed efficiency gains</div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button variant="cta" size="lg" className="text-lg px-8 py-6" asChild>
              <a href="https://calendly.com/bfyautomation/free-consultation" target="_blank" rel="noopener noreferrer">Get Your Free Consultation</a>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
              <a href="#how-it-works">
                See How It Works
              </a>
            </Button>
          </div>

          {/* Trust Indicator */}
          <p className="text-muted-foreground text-sm">
            Trusted by 50+ businesses transforming with AI
          </p>

        </div>
      </div>
    </section>;
};
export default Hero;