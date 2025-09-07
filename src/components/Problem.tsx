import { Clock, MessageSquare, TrendingDown, DollarSign } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Problem = () => {
  const painPoints = [
    {
      icon: Clock,
      stat: "15+ hours/week",
      description: "wasted on manual candidate outreach"
    },
    {
      icon: MessageSquare,
      stat: "Endless back-and-forth",
      description: "trying to engage passive candidates"
    },
    {
      icon: TrendingDown,
      stat: "Inconsistent results",
      description: "some weeks great, others terrible"
    },
    {
      icon: DollarSign,
      stat: "Revenue lost",
      description: "while competitors move faster"
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Your Best Recruiters Are Drowning in Admin Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            <strong>The reality:</strong> Your top performers spend 60% of their time on sourcing and follow-ups instead of building relationships and closing placements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {painPoints.map((point, index) => {
            const IconComponent = point.icon;
            return (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-destructive" />
                  </div>
                  <div className="font-bold text-lg text-foreground mb-2">
                    {point.stat}
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {point.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <p className="text-xl text-muted-foreground italic">
            "What if your recruiters could focus 100% on relationship-building and deal-closing while AI handles everything else?"
          </p>
        </div>
      </div>
    </section>
  );
};

export default Problem;