import { Button } from "@/components/ui/button";
import { Menu, X, User, LogOut } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "@/contexts/AuthContext";
import AuthModal from "./AuthModal";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { user, signOut } = useAuthContext();

  const navItems = [
    { name: "Tools", href: "#tools", isLink: false },
    { name: "Our Guarantee", href: "#guarantee", isLink: false },
    { name: "Testimonials", href: "#testimonials", isLink: false },
    { name: "Contact", href: "#contact", isLink: false },
  ];

  const toolItems = [
    { name: "Writer Wizard", href: "/writer-wizard", isLink: true },
    { name: "AI Employee", href: "/chatbot-lm", isLink: true },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <h1 className="text-xl font-bold text-primary">BFYautomation</h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              item.isLink ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
                >
                  {item.name}
                </a>
              )
            ))}
            {/* Tools Dropdown */}
            <div className="relative group">
              <button className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium flex items-center">
                Tools
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-background border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  {toolItems.map((tool) => (
                    <Link
                      key={tool.name}
                      to={tool.href}
                      className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-secondary/50 transition-colors"
                    >
                      {tool.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#contact"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </a>
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm">
                    <User className="h-4 w-4 mr-2" />
                    {user.profile?.full_name || user.email}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem asChild>
                    <Link to="/writer-wizard">Writer Wizard</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/chatbot-lm">AI Employee</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => signOut()}>
                    <LogOut className="h-4 w-4 mr-2" />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Button variant="outline" size="sm" onClick={() => setIsAuthModalOpen(true)}>
                  Sign In
                </Button>
                <Button variant="accent" size="sm" asChild>
                  <a href="https://calendly.com/bfyautomation/new-meeting" target="_blank" rel="noopener noreferrer">
                    Book a call
                  </a>
                </Button>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-background">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                item.isLink ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                )
              ))}
              
              {/* Mobile Tools Section */}
              <div className="px-3 py-2">
                <div className="text-sm font-semibold text-foreground mb-2">AI Tools</div>
                {toolItems.map((tool) => (
                  <Link
                    key={tool.name}
                    to={tool.href}
                    className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary transition-colors ml-4"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {tool.name}
                  </Link>
                ))}
              </div>
              
              <div className="flex flex-col space-y-2 px-3 pt-4">
                {user ? (
                  <>
                    <Button variant="outline" size="sm" className="w-full" asChild>
                      <Link to="/writer-wizard">Writer Wizard</Link>
                    </Button>
                    <Button variant="outline" size="sm" className="w-full" asChild>
                      <Link to="/chatbot-lm">AI Employee</Link>
                    </Button>
                    <Button variant="outline" size="sm" className="w-full" onClick={() => signOut()}>
                      <LogOut className="h-4 w-4 mr-2" />
                      Sign Out
                    </Button>
                  </>
                ) : (
                  <>
                    <Button variant="outline" size="sm" className="w-full" onClick={() => setIsAuthModalOpen(true)}>
                      Sign In
                    </Button>
                    <Button variant="accent" size="sm" className="w-full" asChild>
                      <a href="https://calendly.com/bfyautomation/new-meeting" target="_blank" rel="noopener noreferrer">
                        Book a call
                      </a>
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
      
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </header>
  );
};

export default Header;