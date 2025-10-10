import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, Clock } from "lucide-react";

const Urgency = () => {
  const benefits = [
    "Free AI Consultation & Process Audit ($2,000 value)",
    "Custom automation roadmap tailored to your business", 
    "90-day efficiency guarantee with weekly optimization calls",
    "Priority support and ongoing refinements"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="max-w-4xl mx-auto border-primary/20">
          <CardContent className="p-8 lg:p-12">
            <div className="text-center mb-8">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Limited Availability - Only 5 New Clients Per Month
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                To ensure exceptional results, we limit our client intake. Each client gets dedicated AI optimization, custom solutions, and white-glove service throughout implementation.
              </p>
            </div>

            <div className="bg-gradient-to-r from-accent/20 to-primary/20 rounded-lg p-6 mb-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">
                  3 spots remaining for {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                </h3>
              </div>
            </div>

            <div className="mb-8">
              <h4 className="font-semibold text-lg mb-4 text-center">
                What You Get When You Act Now:
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <Button variant="cta" size="lg" className="text-lg px-8 py-6" asChild>
                <a href="https://calendly.com/bfyautomation/free-consultation" target="_blank" rel="noopener noreferrer">
                  Claim Your Free Consultation Now
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Urgency;