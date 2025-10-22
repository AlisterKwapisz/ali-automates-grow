import { Button } from "@/components/ui/button";
import { ArrowLeft, FileText, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const WriterWizard = () => {
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
              <h1 className="text-xl font-bold text-primary">Writer Wizard Hub</h1>
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
                <FileText className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4">
              AI-Powered Article Generator
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Create high-quality articles with the power of artificial intelligence
            </p>
            <div className="flex justify-center">
              <Button size="lg" className="text-lg px-8 py-6">
                <Sparkles className="h-5 w-5 mr-2" />
                Start Writing
              </Button>
            </div>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 bg-card rounded-lg border">
              <div className="text-2xl mb-4">🚀</div>
              <h3 className="text-lg font-semibold mb-2">Fast Generation</h3>
              <p className="text-muted-foreground">
                Generate articles in seconds, not hours
              </p>
            </div>
            <div className="text-center p-6 bg-card rounded-lg border">
              <div className="text-2xl mb-4">🎯</div>
              <h3 className="text-lg font-semibold mb-2">SEO Optimized</h3>
              <p className="text-muted-foreground">
                Built-in SEO optimization for better rankings
              </p>
            </div>
            <div className="text-center p-6 bg-card rounded-lg border">
              <div className="text-2xl mb-4">✍️</div>
              <h3 className="text-lg font-semibold mb-2">Human-like Quality</h3>
              <p className="text-muted-foreground">
                AI-generated content that reads naturally
              </p>
            </div>
          </div>

          {/* Coming Soon Notice */}
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-primary mb-4">
              Integration in Progress
            </h2>
            <p className="text-muted-foreground mb-4">
              We're currently integrating the Writer Wizard Hub functionality into this unified platform. 
              The full article generation features will be available soon.
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

export default WriterWizard;
