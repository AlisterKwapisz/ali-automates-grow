import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Bot, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ToolsSection = () => {
  const tools = [
    {
      title: "Writer Wizard Hub",
      description: "AI-powered article generator that creates high-quality content in seconds",
      icon: <FileText className="h-8 w-8 text-primary" />,
      href: "/writer-wizard",
      features: ["Fast Generation", "SEO Optimized", "Human-like Quality"]
    },
    {
      title: "AI Employee Maker",
      description: "Create custom AI assistants that work 24/7 for your business",
      icon: <Bot className="h-8 w-8 text-primary" />,
      href: "/chatbot-lm",
      features: ["Custom AI Agents", "24/7 Availability", "Performance Analytics"]
    }
  ];

  return (
    <section id="tools" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Our AI Tools
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Access powerful AI tools designed to automate and enhance your business operations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {tools.map((tool, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                    {tool.icon}
                  </div>
                </div>
                <CardTitle className="text-xl font-bold">{tool.title}</CardTitle>
                <CardDescription className="text-base">
                  {tool.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3 mb-6">
                  {tool.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                <Button asChild className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Link to={tool.href}>
                    Access Tool
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            More tools coming soon...
          </p>
          <Button variant="outline" asChild>
            <a href="#contact">
              Request a Custom Tool
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
