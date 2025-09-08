import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
const Hero = () => {
  return <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-primary/5 to-transparent pointer-events-none"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-4xl mx-auto">
          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Get{" "}
            <span className="text-primary">5–10 Quality Placements</span>{" "}
            in 90 Days — <span className="text-accent">Guaranteed</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Stop wasting 15+ hours per week on manual candidate outreach. Our AI-powered recruitment automation finds, engages, and nurtures top talent while your team focuses on what they do best — closing deals.
          </p>

          {/* Value Props */}
          <div className="grid md:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-green-500 mb-2">✅</div>
              <div className="font-semibold text-foreground mb-1">Zero Risk</div>
              <div className="text-sm text-muted-foreground">We work until placements are made</div>
            </div>
            <div className="text-center">
              <div className="text-green-500 mb-2">✅</div>
              <div className="font-semibold text-foreground mb-1">No Extra Headcount</div>
              <div className="text-sm text-muted-foreground">Your current team, supercharged</div>
            </div>
            <div className="text-center">
              <div className="text-green-500 mb-2">✅</div>
              <div className="font-semibold text-foreground mb-1">Proven Results</div>
              <div className="text-sm text-muted-foreground">5-10 placements in 90 days</div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button variant="cta" size="lg" className="text-lg px-8 py-6" asChild>
              <a href="https://calendly.com/bfyautomation/new-meeting" target="_blank" rel="noopener noreferrer">Get Your Free Consultation</a>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
              <a href="#how-it-works">
                See How It Works
              </a>
            </Button>
          </div>

          {/* Trust Indicator */}
          <p className="text-muted-foreground text-sm">
            Trusted by 50+ recruitment agencies
          </p>

        </div>
      </div>
    </section>;
};
export default Hero;