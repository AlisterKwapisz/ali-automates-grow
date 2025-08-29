import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Workflow, Sparkles } from "lucide-react";

const OfferCards = () => {
  const offers = [
    {
      number: "01",
      icon: Phone,
      title: "AI Voice Agents",
      description: "Phone and web agents that answer questions, qualify leads, and send texts live while on calls"
    },
    {
      number: "02",
      icon: Workflow,
      title: "AI Workflows", 
      description: "Lead scraping, enrichment, outreach, CRM sync, reporting, and automated follow-ups end-to-end"
    },
    {
      number: "03",
      icon: Sparkles,
      title: "Custom CRM Solutions",
      description: "CRM integrations, automated follow-ups, lead nurturing sequences, and form-to-CRM connections"
    }
  ];

  return (
    <section id="work" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            We do these 3 things for businesses
          </h2>
          <p className="text-xl text-muted-foreground">
            Lower costs, save time, and improve efficiency
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {offers.map((offer, index) => {
            const Icon = offer.icon;
            return (
              <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300 relative">
                <CardHeader className="pb-4">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">
                      {offer.number}
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4 mt-4 group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <CardTitle className="text-xl">{offer.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {offer.description}
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