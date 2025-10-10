import { Card, CardContent } from "@/components/ui/card";
import { Quote, TrendingUp, Clock, DollarSign, Heart } from "lucide-react";

const SocialProof = () => {
  const metrics = [
    {
      icon: TrendingUp,
      value: "75% Faster",
      description: "content creation and delivery"
    },
    {
      icon: Clock,
      value: "20 Hours Saved",
      description: "per week on reporting and admin"
    },
    {
      icon: DollarSign,
      value: "3x Output",
      description: "more content produced monthly"
    },
    {
      icon: Heart,
      value: "45 Days",
      description: "to achieve full ROI"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-secondary/30">
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
                  <span className="text-primary">SEO Agency Success:</span> From struggling with 10 clients to scaling to 30+ clients in 90 days - without adding a single team member.
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
                  "I was drowning in client reports and manual content optimization. BFYautomation's AI solutions freed up 20 hours per week, letting me triple my client roster without hiring. Our revenue has doubled, and my team actually has work-life balance now. This changed everything."
                </blockquote>
                <div className="text-right">
                  <cite className="font-semibold text-foreground">
                    - Marcus Chen, Founder, Growth Digital SEO
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