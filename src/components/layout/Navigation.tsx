import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Quality", path: "/quality" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-primary/5 text-muted-foreground py-2 px-4 text-sm border-b border-primary/10">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-3.5 w-3.5" />
              <span>+977-9851112329</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-3.5 w-3.5" />
              <span>unitedlabnepal@gmail.com</span>
            </div>
          </div>
          <div className="hidden md:block text-sm">
            Birgunj, Nepal | Est. 2025
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-background/95 border-b border-border sticky top-0 z-50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-9 h-9 bg-primary rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">UL</span>
              </div>
              <div className="font-poppins">
                <div className="font-semibold text-lg text-foreground">United Laboratories</div>
                <div className="text-xs text-muted-foreground">Nepal Pvt. Ltd.</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`font-medium transition-colors duration-200 ${
                    isActive(item.path)
                      ? "text-primary border-b-2 border-primary"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Button className="btn-hero">Request Quote</Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden py-4 border-t border-border bg-card">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`font-medium px-4 py-2 rounded-lg transition-colors duration-200 ${
                      isActive(item.path)
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground hover:bg-accent"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="px-4">
                  <Button className="btn-hero w-full">Request Quote</Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navigation;