import { Card } from "@/components/ui/card";
import LogoLoop from "./LogoLoop";
import { SiZapier, SiOpenai, SiGoogle } from "react-icons/si";
import { Settings, Building2, Workflow, Search, Sparkles } from "lucide-react";

const TrustStrip = () => {
  const platformLogos = [
    { 
      node: <img src="/lovable-uploads/a96cbb26-a866-4967-9f59-38cc59c52442.png" alt="Make.com" className="w-8 h-8" />, 
      title: "Make.com", 
      href: "https://make.com",
      ariaLabel: "Make.com automation platform"
    },
    { 
      node: <img src="/lovable-uploads/7679ff79-0066-419f-9f86-fbc037cfd018.png" alt="GoHighLevel" className="w-8 h-8" />, 
      title: "GoHighLevel", 
      href: "https://gohighlevel.com",
      ariaLabel: "GoHighLevel CRM platform"
    },
    { 
      node: <div className="flex items-center gap-2"><Workflow className="w-6 h-6" /><span className="text-sm font-medium">n8n</span></div>, 
      title: "n8n", 
      href: "https://n8n.io",
      ariaLabel: "n8n automation platform"
    },
    { 
      node: <SiOpenai className="w-8 h-8" />, 
      title: "ChatGPT", 
      href: "https://openai.com",
      ariaLabel: "ChatGPT AI assistant"
    },
    { 
      node: <div className="flex items-center gap-2"><Search className="w-6 h-6" /><span className="text-sm font-medium">Perplexity</span></div>, 
      title: "Perplexity", 
      href: "https://perplexity.ai",
      ariaLabel: "Perplexity AI search"
    },
    { 
      node: <div className="flex items-center gap-2"><SiGoogle className="w-6 h-6" /><span className="text-sm font-medium">Gemini</span></div>, 
      title: "Google Gemini", 
      href: "https://gemini.google.com",
      ariaLabel: "Google Gemini AI"
    },
    { 
      node: <SiZapier className="w-8 h-8" />, 
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