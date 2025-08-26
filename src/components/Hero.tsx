import { Button } from "@/components/ui/button";
import { MessageCircle, Youtube, Instagram } from "lucide-react";

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

          {/* Micro trust */}
          <div className="flex flex-col items-center space-y-4">
            <div className="flex items-center space-x-6 text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Youtube className="w-5 h-5 text-red-500" />
                <span className="text-sm">YouTube</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xs font-bold">T</span>
                </div>
                <span className="text-sm">TikTok</span>
              </div>
              <div className="flex items-center space-x-2">
                <Instagram className="w-5 h-5 text-pink-600" />
                <span className="text-sm">Instagram</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Tutorials and builds published weekly
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;