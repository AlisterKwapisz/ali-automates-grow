const Footer = () => {
  const links = [
    { name: "Work", href: "#work" },
    { name: "Proof", href: "#proof" },
    { name: "Contact", href: "#contact" },
    { name: "Privacy", href: "/privacy" },
  ];


  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">BFYautomation</h3>
            <p className="text-muted-foreground text-sm">
              Transforming businesses through custom AI automation solutions. Save time, scale operations, and focus on what matters most.
            </p>
          </div>

          {/* Links & Theme */}
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
        </div>

        {/* Bottom */}
        <div className="border-t pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} BFYautomation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;