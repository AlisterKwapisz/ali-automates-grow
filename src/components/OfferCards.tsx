import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, MessageCircle, UserCheck } from "lucide-react";

const OfferCards = () => {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Discovery & Process Mapping",
      description: "We analyze your workflows to identify automation opportunities and map your processes. This starts with your Free AI Consultation where we uncover time-saving potential specific to your business."
    },
    {
      number: "02",
      icon: MessageCircle,
      title: "Custom AI Development", 
      description: "We build AI agents tailored to your specific processes and integrate them seamlessly into your existing workflows. Every solution is custom-built to solve your unique challenges."
    },
    {
      number: "03",
      icon: UserCheck,
      title: "Deploy & Optimize",
      description: "Launch your automation and start seeing results immediately. We continuously monitor, refine, and optimize based on real performance data to maximize your efficiency gains."
    }
  ];

  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our AI-Powered Automation Process
          </h2>
          <p className="text-xl text-muted-foreground">
            We build custom AI solutions that save time and scale your operations
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300 relative">
                <CardHeader className="pb-4">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">
                      {step.number}
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4 mt-4 group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OfferCards;