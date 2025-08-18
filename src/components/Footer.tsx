import { Youtube, Instagram, ExternalLink } from "lucide-react";

const Footer = () => {
  const links = [
    { name: "Work", href: "#work" },
    { name: "Proof", href: "#proof" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
    { name: "Privacy", href: "/privacy" },
  ];

  const socialLinks = [
    { name: "YouTube", icon: Youtube, href: "#", color: "text-red-500" },
    { 
      name: "TikTok", 
      icon: () => (
        <div className="w-5 h-5 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
          <span className="text-white text-xs font-bold">T</span>
        </div>
      ), 
      href: "#" 
    },
    { name: "Instagram", icon: Instagram, href: "#", color: "text-pink-600" },
    { name: "Linktree", icon: ExternalLink, href: "#", color: "text-green-500" },
  ];

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">Ali Automates</h3>
            <p className="text-muted-foreground text-sm">
              Most likely building an automation right now
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className={`hover:opacity-75 transition-opacity ${social.color || 'text-muted-foreground'}`}
                    aria-label={social.name}
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Ali Automates. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;