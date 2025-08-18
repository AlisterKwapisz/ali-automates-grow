import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      duration: "1 week setup",
      price: "from €1,000",
      features: [
        "Single automation setup",
        "Basic training included", 
        "2 weeks delivery",
        "Email support"
      ]
    },
    {
      name: "Pro",
      duration: "2 to 4 weeks",
      price: "from €3,500", 
      popular: true,
      features: [
        "Multiple automation workflows",
        "Live handover & SOPs",
        "Team training included",
        "Priority support",
        "Custom integrations"
      ]
    },
    {
      name: "Growth",
      duration: "Monthly retainer", 
      price: "from €1,500",
      features: [
        "Monthly optimization",
        "New automation builds",
        "Performance monitoring",
        "Strategic consultation",
        "Unlimited revisions"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-muted-foreground mb-2">
            Choose the package that fits your needs
          </p>
          <p className="text-sm text-muted-foreground">
            Pricing is guide only - final quote after scoping
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`text-center relative ${
                plan.popular ? 'border-accent shadow-lg scale-105' : ''
              } hover:shadow-lg transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-accent text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <p className="text-muted-foreground text-sm">{plan.duration}</p>
                <div className="text-3xl font-bold text-accent mt-4">
                  {plan.price}
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <Check className="w-4 h-4 text-accent mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={plan.popular ? "accent" : "outline"} 
                  className="w-full"
                >
                  Get started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;