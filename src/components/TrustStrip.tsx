import LogoLoop from "./LogoLoop";
import { SiOpenai } from "react-icons/si";

const TrustStrip = () => {
  const platformLogos = [
    { 
      node: <img src="lovable-uploads/48ba36b1-58c4-4c88-8dc8-c19af16e1b76.png" alt="Platform 1" className="w-10 h-10 object-contain" />, 
      title: "Platform 1", 
      href: "#",
      ariaLabel: "Platform 1"
    },
    { 
      node: <img src="lovable-uploads/e247f3f6-15cb-4190-aaa2-34222e894018.png" alt="Platform 2" className="w-10 h-10 object-contain" />, 
      title: "Platform 2", 
      href: "#",
      ariaLabel: "Platform 2"
    },
    { 
      node: <img src="lovable-uploads/bc06378a-005e-4c18-8698-dc5e86ade269.png" alt="Platform 3" className="w-10 h-10 object-contain" />, 
      title: "Platform 3", 
      href: "#",
      ariaLabel: "Platform 3"
    },
    { 
      node: <img src="lovable-uploads/d7f59647-8050-4710-a9d7-0cd05a23f414.png" alt="Platform 4" className="w-10 h-10 object-contain" />, 
      title: "Platform 4", 
      href: "#",
      ariaLabel: "Platform 4"
    },
    { 
      node: <SiOpenai className="w-10 h-10" />, 
      title: "ChatGPT", 
      href: "https://openai.com",
      ariaLabel: "ChatGPT AI platform"
    },
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xl text-muted-foreground mb-6">
            Tools we work with:
          </p>
        </div>
        
        <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-12 border-0 shadow-lg">
          <div style={{ height: '120px', position: 'relative', overflow: 'hidden' }}>
            <LogoLoop
              logos={platformLogos}
              speed={60}
              direction="left"
              logoHeight={40}
              gap={80}
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