import { Card } from "@/components/ui/card";

const TrustStrip = () => {
  const platforms = [
    "Make.com",
    "N8n"
  ];

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-muted-foreground mb-4">
            Tools we work with:
          </p>
        </div>
        
        <Card className="p-6">
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
            {platforms.map((platform, index) => (
              <div
                key={platform}
                className="flex items-center space-x-2 text-muted-foreground"
              >
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-sm font-medium">{platform}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default TrustStrip;