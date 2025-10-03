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
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 relative">
          {/* Left Side - Navigation Links */}
          <div className="hidden md:flex items-center">
            {navItems.map((item, index) => (
              <div key={item.name} className="flex items-center">
                <Link
                  to={item.path}
                  className={`font-medium text-sm transition-colors duration-200 px-4 ${isActive(item.path)
                    ? "text-slate-900"
                    : "text-slate-600 hover:text-slate-900"
                    }`}
                >
                  {item.name}
                </Link>
                {index < navItems.length - 1 && (
                  <div className="w-px h-4 bg-gray-300 mx-2"></div>
                )}
              </div>
            ))}
          </div>

          {/* Center - Logo (Absolutely positioned for perfect centering) */}
          <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <img
                src="/Logo.png"
                alt="United Laboratories Nepal"
                className="h-14 w-auto object-contain"
              />
              <div className="font-poppins">
                <div className="font-extrabold text-base text-slate-800">United Laboratories</div>
                <div className="text-xs text-slate-600">Nepal Pvt. Ltd.</div>
              </div>
            </Link>
          </div>

          {/* Right Side - Contact, Button and Mobile Menu */}
          <div className="flex items-center">
            <Link
              to="/contact"
              className={`hidden md:block font-medium text-sm transition-colors duration-200 px-4 ${isActive("/contact")
                ? "text-slate-900"
                : "text-slate-600 hover:text-slate-900"
                }`}
            >
              Contact
            </Link>
            <div className="hidden md:block w-px h-4 bg-gray-300 mx-2"></div>
            <Link to="/contact" className="hidden md:block ml-4">
              <Button
                size="sm"
                className="bg-slate-900 hover:bg-slate-800 text-white font-medium px-4 py-2 rounded-md"
              >
                Get Quote
              </Button>
            </Link>

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