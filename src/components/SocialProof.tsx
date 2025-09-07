import { Card, CardContent } from "@/components/ui/card";
import { Quote, TrendingUp, Clock, DollarSign, Heart } from "lucide-react";

const SocialProof = () => {
  const metrics = [
    {
      icon: TrendingUp,
      value: "4x increase",
      description: "in monthly placements"
    },
    {
      icon: Clock,
      value: "18 hours saved",
      description: "per recruiter per week"
    },
    {
      icon: DollarSign,
      value: "200% ROI",
      description: "in the first quarter"
    },
    {
      icon: Heart,
      value: "Zero turnover",
      description: "team morale improved dramatically"
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Results Our Clients Are Getting
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Case Study Snapshot */}
          <Card className="mb-8 border-primary/20">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  <span className="text-primary">TechRecruit Solutions</span> went from 3 placements per month to 12 placements per month in 90 days — without adding a single team member.
                </h3>
              </div>

              {/* Key Metrics */}
              <div className="grid md:grid-cols-4 gap-6 mb-8">
                {metrics.map((metric, index) => {
                  const IconComponent = metric.icon;
                  return (
                    <div key={index} className="text-center">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div className="font-bold text-lg text-foreground mb-1">
                        🚀 {metric.value}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {metric.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Client Quote */}
              <div className="bg-card/50 rounded-lg p-6 relative">
                <Quote className="w-8 h-8 text-primary/30 absolute top-4 left-4" />
                <blockquote className="text-lg text-muted-foreground italic pl-12 mb-4">
                  "I was skeptical about AI in recruitment, but BFYautomation proved me wrong. Our team is happier, our clients are getting better candidates faster, and our revenue has doubled. This isn't just automation — it's transformation."
                </blockquote>
                <div className="text-right">
                  <cite className="font-semibold text-foreground">
                    — Sarah Mitchell, Founder, TechRecruit Solutions
                  </cite>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;