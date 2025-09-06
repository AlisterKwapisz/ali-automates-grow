import { Card } from "@/components/ui/card";
import LogoLoop from "./LogoLoop";
import { SiN8N, SiOpenai } from "react-icons/si";
import { TbBrandZapier } from "react-icons/tb";
import { SiGooglegemini } from "react-icons/si";

const TrustStrip = () => {
  const platformLogos = [
    { 
      src: "/lovable-uploads/0d745a31-feeb-4661-b03b-85765e39c9db.png",
      title: "Make.com", 
      href: "https://make.com",
      ariaLabel: "Make.com automation platform"
    },
    { 
      src: "/lovable-uploads/10a451c1-5421-4a2d-b4e3-dd2b72503de7.png",
      title: "N8n", 
      href: "https://n8n.io",
      ariaLabel: "N8n workflow automation"
    },
    { 
      src: "/lovable-uploads/8cebf587-e331-411c-b39d-2b196a963cf3.png",
      title: "Google Gemini", 
      href: "https://gemini.google.com",
      ariaLabel: "Google Gemini AI"
    },
    { 
      src: "/lovable-uploads/573b71be-79e3-4214-93d9-72166cc84774.png",
      title: "Perplexity", 
      href: "https://perplexity.ai",
      ariaLabel: "Perplexity AI search"
    },
    { 
      node: <SiOpenai className="w-8 h-8" />, 
      title: "ChatGPT", 
      href: "https://openai.com",
      ariaLabel: "ChatGPT by OpenAI"
    },
    { 
      src: "/lovable-uploads/9f4b2d04-b295-4554-ada8-cf4b0eef15ff.png",
      title: "Notion", 
      href: "https://notion.so",
      ariaLabel: "Notion workspace"
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