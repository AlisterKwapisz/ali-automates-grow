import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Calendar, MessageSquare } from "lucide-react";

const Results = () => {
  const results = [
    {
      icon: MapPin,
      title: "Lower operational costs",
      description: "Reduce manual work and overhead expenses"
    },
    {
      icon: Calendar,
      title: "Save time every week", 
      description: "Automate repetitive tasks and processes"
    },
    {
      icon: MessageSquare,
      title: "Improved efficiency",
      description: "Streamline workflows and boost productivity"
    }
  ];

  return (
    <section id="proof" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What we guarantee
          </h2>
          <p className="text-xl text-muted-foreground">
            Lower costs, saved time, and improved efficiency
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {results.map((result, index) => {
            const Icon = result.icon;
            return (
              <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-8 pb-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">
                    {result.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {result.description}
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

export default Results;