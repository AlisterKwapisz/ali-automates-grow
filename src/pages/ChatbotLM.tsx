import { Button } from "@/components/ui/button";
import { ArrowLeft, Bot, Users } from "lucide-react";
import { Link } from "react-router-dom";

const ChatbotLM = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" asChild>
                <Link to="/">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Home
                </Link>
              </Button>
              <h1 className="text-xl font-bold text-primary">AI Employee Maker</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-primary/10 rounded-full">
                <Bot className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Create Your AI Employee
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Build custom AI assistants that work 24/7 for your business
            </p>
            <div className="flex justify-center">
              <Button size="lg" className="text-lg px-8 py-6">
                <Users className="h-5 w-5 mr-2" />
                Create AI Employee
              </Button>
            </div>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 bg-card rounded-lg border">
              <div className="text-2xl mb-4">🤖</div>
              <h3 className="text-lg font-semibold mb-2">Custom AI Agents</h3>
              <p className="text-muted-foreground">
                Train AI employees for specific business tasks
              </p>
            </div>
            <div className="text-center p-6 bg-card rounded-lg border">
              <div className="text-2xl mb-4">⚡</div>
              <h3 className="text-lg font-semibold mb-2">24/7 Availability</h3>
              <p className="text-muted-foreground">
                Your AI employees never sleep or take breaks
              </p>
            </div>
            <div className="text-center p-6 bg-card rounded-lg border">
              <div className="text-2xl mb-4">📊</div>
              <h3 className="text-lg font-semibold mb-2">Performance Analytics</h3>
              <p className="text-muted-foreground">
                Track and optimize your AI employee performance
              </p>
            </div>
          </div>

          {/* Coming Soon Notice */}
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-primary mb-4">
              Integration in Progress
            </h2>
            <p className="text-muted-foreground mb-4">
              We're currently integrating the AI Employee Maker functionality into this unified platform. 
              The full chatbot creation features will be available soon.
            </p>
            <p className="text-sm text-muted-foreground">
              In the meantime, you can access the original app at your subdomain.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ChatbotLM;
