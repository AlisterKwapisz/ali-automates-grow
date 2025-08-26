import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Calendar, MessageCircle, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to get started?
          </h2>
          <p className="text-xl text-muted-foreground">
            Choose how you'd like to connect with us
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Buttons */}
          <div className="space-y-6">
            <div className="grid gap-4">
              <Button variant="accent" size="lg" className="w-full text-lg py-6" asChild>
                <a href="https://calendly.com/bfyautomation/new-meeting" target="_blank" rel="noopener noreferrer">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book a call
                </a>
              </Button>
              
              <Button variant="outline" size="lg" className="w-full text-lg py-6">
                <Mail className="w-5 h-5 mr-2" />
                Email Me
              </Button>
              
              <Button variant="outline" size="lg" className="w-full text-lg py-6">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Me
              </Button>
              
              <Button variant="default" size="lg" className="w-full text-lg py-6">
                <Send className="w-5 h-5 mr-2" />
                Start a project
              </Button>
            </div>

            <div className="text-center pt-6">
              <p className="text-sm text-muted-foreground">
                Or reach out through the form →
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Send us a message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
              </div>
              
              <div>
                <Label htmlFor="company">Company</Label>
                <Input id="company" placeholder="Your company" />
              </div>
              
              <div>
                <Label htmlFor="goal">Goal</Label>
                <Input id="goal" placeholder="What would you like to automate?" />
              </div>
              
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your project..."
                  className="min-h-[100px]"
                />
              </div>
              
              <Button variant="accent" className="w-full">
                Send Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;