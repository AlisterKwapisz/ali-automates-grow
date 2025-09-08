import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FileSearch, Rocket } from "lucide-react";
const FinalCTA = () => {
  return <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Transform Your Recruitment Process?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stop letting great candidates slip away while your team burns out on manual tasks. Start your risk-free pilot today.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
          {/* Option 1: Free Audit */}
          <Card className="hover:shadow-lg transition-shadow border-primary/20">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <FileSearch className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Option 1: Free AI Consultation</h3>
              <p className="text-muted-foreground mb-6">Get Your Free Consultation</p>
              <Button variant="outline" size="lg" className="w-full" asChild>
                <a href="https://calendly.com/bfyautomation/free-consultation" target="_blank" rel="noopener noreferrer">
                  Get Your Free Recruitment Audit
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Option 2: Direct Pilot */}
          <Card className="hover:shadow-lg transition-shadow border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Rocket className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Option 2: Direct Pilot
              </h3>
              <p className="text-muted-foreground mb-6">
                Go straight to results — 5-10 placements in 90 days, guaranteed
              </p>
              <Button variant="cta" size="lg" className="w-full" asChild>
                <a href="https://calendly.com/bfyautomation/new-meeting" target="_blank" rel="noopener noreferrer">
                  Start Your Risk-Free Pilot Now
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Final Trust Signal */}
        <div className="text-center">
          <p className="text-muted-foreground">
            Join 50+ agencies already using AI to dominate their markets
          </p>
        </div>
      </div>
    </section>;
};
export default FinalCTA;