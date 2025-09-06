import LogoLoop from "./LogoLoop";
import { SiOpenai, SiGooglegemini } from "react-icons/si";

const TrustStrip = () => {
  const platformLogos = [
    { 
      node: <img src="lovable-uploads/48ba36b1-58c4-4c88-8dc8-c19af16e1b76.png" alt="Platform 1" className="w-20 h-20 object-contain" />, 
      title: "Platform 1", 
      href: "#",
      ariaLabel: "Platform 1"
    },
    { 
      node: <img src="lovable-uploads/e247f3f6-15cb-4190-aaa2-34222e894018.png" alt="Perplexity" className="w-16 h-16 object-contain" />, 
      title: "Perplexity", 
      href: "https://perplexity.ai",
      ariaLabel: "Perplexity AI"
    },
    { 
      node: <img src="lovable-uploads/bc06378a-005e-4c18-8698-dc5e86ade269.png" alt="Platform 3" className="w-12 h-12 object-contain" />, 
      title: "Platform 3", 
      href: "#",
      ariaLabel: "Platform 3"
    },
    { 
      node: <img src="lovable-uploads/d7f59647-8050-4710-a9d7-0cd05a23f414.png" alt="Platform 4" className="w-12 h-12 object-contain" />, 
      title: "Platform 4", 
      href: "#",
      ariaLabel: "Platform 4"
    },
    { 
      node: <SiOpenai className="w-12 h-12" />, 
      title: "ChatGPT", 
      href: "https://openai.com",
      ariaLabel: "ChatGPT AI platform"
    },
    { 
      node: <SiGooglegemini className="w-12 h-12" />, 
      title: "Google Gemini", 
      href: "https://gemini.google.com",
      ariaLabel: "Google Gemini AI"
    },
  ];

  return (
    <section className="py-24 bg-secondary/30">
      <div className="w-full">
        <div className="text-center mb-16">
          <p className="text-2xl text-muted-foreground mb-8">
            Tools we work with:
          </p>
        </div>
        
        <div className="bg-card/50 backdrop-blur-sm py-16 border-0">
          <div style={{ height: '160px', position: 'relative', overflow: 'hidden' }}>
            <LogoLoop
              logos={platformLogos}
              speed={60}
              direction="left"
              logoHeight={56}
              gap={100}
              pauseOnHover
              scaleOnHover
              fadeOut
              ariaLabel="Tools we work with"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;