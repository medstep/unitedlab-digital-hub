import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", path: "#home", isScroll: true, scrollToTop: true },
    { name: "About", path: "#about", isScroll: true },
    { name: "Products", path: "#products", isScroll: true },
    { name: "Gallery", path: "/gallery" },
  ];

  const isActive = (path: string) => location.pathname === path;

  // Handle hash scrolling when location changes
  useEffect(() => {
    if (location.hash && location.pathname === '/') {
      // Small delay to ensure the page has loaded
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  const handleNavClick = (item: { name: string; path: string; isScroll?: boolean; scrollToTop?: boolean }) => {
    if (item.isScroll) {
      if (item.scrollToTop) {
        // Handle Home link - scroll to top
        if (location.pathname !== '/') {
          // If not on home page, navigate to home
          navigate('/');
        } else {
          // If on home page, scroll to top
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      } else {
        // Handle other scroll links (like About)
        if (location.pathname !== '/') {
          // Navigate to home with hash
          navigate('/' + item.path);
        } else {
          // If we're on home page, scroll to the section
          const element = document.querySelector(item.path);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    }
  };

  return (
    <nav className="bg-white/95 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 relative">
          {/* Left Side - Navigation Links */}
          <div className="hidden md:flex items-center">
            {navItems.map((item, index) => (
              <div key={item.name} className="flex items-center">
                {item.isScroll ? (
                  <button
                    onClick={() => handleNavClick(item)}
                    className={`relative font-semibold text-sm transition-all duration-300 px-4 py-2 rounded-lg group ${location.pathname === '/' && location.hash === item.path
                      ? "text-blue-600 bg-blue-50"
                      : "text-slate-700 hover:text-blue-600 hover:bg-blue-50/50"
                      }`}
                  >
                    {item.name}
                    {/* Animated underline */}
                    <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-blue-600 transition-all duration-300 ${location.pathname === '/' && location.hash === item.path ? "w-6" : "w-0 group-hover:w-6"
                      }`}></span>
                  </button>
                ) : (
                  <Link
                    to={item.path}
                    className={`relative font-semibold text-sm transition-all duration-300 px-4 py-2 rounded-lg group ${isActive(item.path)
                      ? "text-blue-600 bg-blue-50"
                      : "text-slate-700 hover:text-blue-600 hover:bg-blue-50/50"
                      }`}
                  >
                    {item.name}
                    {/* Animated underline */}
                    <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-blue-600 transition-all duration-300 ${isActive(item.path) ? "w-6" : "w-0 group-hover:w-6"
                      }`}></span>
                  </Link>
                )}
                {index < navItems.length - 1 && (
                  <div className="w-px h-5 bg-gray-200 mx-3"></div>
                )}
              </div>
            ))}
          </div>

          {/* Center - Logo (Absolutely positioned for perfect centering) */}
          <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center">
            <Link to="/" className="flex items-center space-x-3 group transition-all duration-300 hover:scale-105">
              <img
                src="/fav.png"
                alt="United Laboratories Nepal"
                className="h-14 w-auto object-contain transition-all duration-300 group-hover:brightness-110"
              />
              <div className="font-poppins">
                <div className="font-extrabold text-base text-slate-900 group-hover:text-blue-600 transition-colors duration-300">United Laboratories</div>
                <div className="text-xs text-slate-600 group-hover:text-blue-500 transition-colors duration-300">Nepal Pvt. Ltd.</div>
              </div>
            </Link>
          </div>

          {/* Right Side - Contact, Button and Mobile Menu */}
          <div className="flex items-center">
            <Link
              to="/contact"
              className={`hidden md:block relative font-semibold text-sm transition-all duration-300 px-4 py-2 rounded-lg group ${isActive("/contact")
                ? "text-blue-600 bg-blue-50"
                : "text-slate-700 hover:text-blue-600 hover:bg-blue-50/50"
                }`}
            >
              Contact
              {/* Animated underline */}
              <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-blue-600 transition-all duration-300 ${isActive("/contact") ? "w-6" : "w-0 group-hover:w-6"
                }`}></span>
            </Link>
            <div className="hidden md:block w-px h-5 bg-gray-200 mx-3"></div>
            <Link to="/contact" className="hidden md:block ml-2">
              <Button
                size="sm"
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Get Quote
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-6 border-t border-gray-100 bg-white/95 backdrop-blur-md shadow-lg">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                item.isScroll ? (
                  <button
                    key={item.name}
                    onClick={() => {
                      handleNavClick(item);
                      setIsOpen(false);
                    }}
                    className={`font-semibold px-6 py-3 text-sm rounded-lg mx-4 transition-all duration-300 text-left ${location.pathname === '/' && location.hash === item.path
                      ? "text-blue-600 bg-blue-50 shadow-sm"
                      : "text-slate-700 hover:text-blue-600 hover:bg-blue-50/50"
                      }`}
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`font-semibold px-6 py-3 text-sm rounded-lg mx-4 transition-all duration-300 ${isActive(item.path)
                      ? "text-blue-600 bg-blue-50 shadow-sm"
                      : "text-slate-700 hover:text-blue-600 hover:bg-blue-50/50"
                      }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              ))}
              <Link
                to="/contact"
                className={`font-semibold px-6 py-3 text-sm rounded-lg mx-4 transition-all duration-300 ${isActive("/contact")
                  ? "text-blue-600 bg-blue-50 shadow-sm"
                  : "text-slate-700 hover:text-blue-600 hover:bg-blue-50/50"
                  }`}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <div className="px-4 pt-4">
                <Button
                  size="sm"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
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