import { Card } from "@/components/ui/card";
import LogoLoop from "./LogoLoop";
import { SiStripe, SiSalesforce } from "react-icons/si";
import { TbBrandZapier } from "react-icons/tb";
import { Settings, Zap } from "lucide-react";

const TrustStrip = () => {
  const platformLogos = [
    { 
      node: <Settings className="w-8 h-8" />, 
      title: "Make.com", 
      href: "https://make.com",
      ariaLabel: "Make.com automation platform"
    },
    { 
      node: <Zap className="w-8 h-8" />, 
      title: "GoHighLevel", 
      href: "https://gohighlevel.com",
      ariaLabel: "GoHighLevel CRM platform"
    },
    { 
      node: <SiStripe className="w-8 h-8" />, 
      title: "Stripe", 
      href: "https://stripe.com",
      ariaLabel: "Stripe payment processing"
    },
    { 
      node: <SiSalesforce className="w-8 h-8" />, 
      title: "Salesforce", 
      href: "https://salesforce.com",
      ariaLabel: "Salesforce CRM"
    },
    { 
      node: <TbBrandZapier className="w-8 h-8" />, 
      title: "Zapier", 
      href: "https://zapier.com",
      ariaLabel: "Zapier automation platform"
    },
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
          <div style={{ height: '80px', position: 'relative', overflow: 'hidden' }}>
            <LogoLoop
              logos={platformLogos}
              speed={60}
              direction="left"
              logoHeight={32}
              gap={60}
              pauseOnHover
              scaleOnHover
              fadeOut
              ariaLabel="Automation tools we work with"
            />
          </div>
        </Card>
      </div>
    </section>
  );
};

export default TrustStrip;