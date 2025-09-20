import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
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
    <nav className="bg-white/90 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-3 items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-slate-900 rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">UL</span>
            </div>
            <div className="font-poppins">
              <div className="font-semibold text-lg text-slate-900">United Laboratories</div>
              <div className="text-xs text-slate-600">Nepal Pvt. Ltd.</div>
            </div>
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center justify-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-medium text-sm transition-colors duration-200 ${isActive(item.path)
                  ? "text-slate-900 border-b-2 border-slate-900 pb-1"
                  : "text-slate-600 hover:text-slate-900"
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right Side - Button and Mobile Menu */}
          <div className="flex items-center justify-end">
            <Button
              size="sm"
              className="hidden md:block bg-slate-900 hover:bg-slate-800 text-white font-medium px-6"
            >
              Get Quote
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-slate-600 hover:text-slate-900"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 bg-white">
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`font-medium px-4 py-3 text-sm transition-colors duration-200 ${isActive(item.path)
                    ? "text-slate-900 bg-slate-50"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                    }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-4 pt-3">
                <Button
                  size="sm"
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium"
                >
                  Get Quote
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;