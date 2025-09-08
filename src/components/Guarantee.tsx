import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Shield } from "lucide-react";
const Guarantee = () => {
  const guaranteePoints = ["Real hires that stick (not just interviews)", "Zero additional investment if we don't deliver", "Full transparency with weekly progress reports", "No long-term contracts - results speak for themselves"];
  return <section id="guarantee" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <Shield className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Our Iron-Clad Placement Guarantee
          </h2>
        </div>

        <Card className="max-w-4xl mx-auto border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
          <CardContent className="p-8 lg:p-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                "We guarantee 5-10 qualified candidate placements within 90 days, or we continue working at no additional cost until the placements are made."
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="font-semibold text-lg mb-4">What This Means:</h4>
                <ul className="space-y-3">
                  {guaranteePoints.map((point, index) => <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{point}</span>
                    </li>)}
                </ul>
              </div>

              <div className="bg-card/50 rounded-lg p-6">
                
                
                <Button variant="cta" size="lg" className="w-full" asChild>
                  <a href="https://calendly.com/bfyautomation/new-meeting" target="_blank" rel="noopener noreferrer">
                    Start Your Risk-Free Pilot
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>;
};
export default Guarantee;