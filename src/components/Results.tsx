import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Clock, DollarSign, BarChart } from "lucide-react";

const Results = () => {
  const businessBenefits = [
    {
      icon: TrendingUp,
      title: "50-80% more placements",
      description: "with your current team size"
    },
    {
      icon: Clock,
      title: "15+ hours saved per recruiter per week",
      description: "freed up for high-value activities"
    },
    {
      icon: DollarSign,
      title: "Higher revenue per employee",
      description: "without hiring costs"
    },
    {
      icon: BarChart,
      title: "Predictable pipeline",
      description: "you can count on month after month"
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Changes When You Partner With BFYautomation
          </h2>
          <p className="text-xl text-muted-foreground">
            Transformative results for your business and your team
          </p>
        </div>

        {/* Business Benefits */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            For Your Business:
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessBenefits.map((result, index) => {
              const IconComponent = result.icon;
              return (
                <Card key={index} className="text-center group hover:shadow-lg transition-shadow">
                  <CardContent className="pt-8 pb-6">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      📈 {result.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {result.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Results;