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
    <nav className="relative">
      {/* Floating Navigation Bar */}
      <div className="fixed top-2 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-6xl px-4">
        <div className="bg-white/90 backdrop-blur-xl border border-black-800 rounded-xl shadow-2xl shadow-blue-500/10 overflow-hidden">

          {/* Animated Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 via-white/80 to-cyan-50/50 opacity-60"></div>

          {/* Main Navigation Content */}
          <div className="relative flex items-center justify-between px-6 py-3">

            {/* Left Side - Logo with Glow Effect */}
            <Link to="/" className="flex items-center space-x-3 group relative z-10">
              <div className="relative">
                {/* Glow effect behind logo */}
                <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-lg scale-150 group-hover:bg-blue-500/30 transition-all duration-500"></div>
                <img
                  src="/fav.png"
                  alt="United Laboratories Nepal"
                  className="relative h-10 w-auto object-contain transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                />
              </div>
              <div className="font-poppins hidden sm:block">
                <div className="font-bold text-sm text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                  United Laboratories
                </div>
                <div className="text-xs text-slate-600 group-hover:text-blue-500 transition-colors duration-300">
                  Nepal Pvt. Ltd.
                </div>
              </div>
            </Link>

            {/* Center - Navigation Pills */}
            <div className="hidden lg:flex items-center space-x-1 bg-slate-100/50 rounded-full p-1 backdrop-blur-sm">
              {navItems.map((item, index) => (
                <div key={item.name} className="relative">
                  {item.isScroll ? (
                    <button
                      onClick={() => handleNavClick(item)}
                      className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 group ${location.pathname === '/' && location.hash === item.path
                          ? "text-white bg-gradient-to-r from-blue-600 to-cyan-600 shadow-lg"
                          : "text-slate-700 hover:text-blue-600 hover:bg-white/80"
                        }`}
                    >
                      {/* Active background glow */}
                      {location.pathname === '/' && location.hash === item.path && (
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full blur opacity-50 -z-10"></div>
                      )}

                      <span className="relative z-10">{item.name}</span>

                      {/* Hover dot indicator */}
                      <div className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full transition-all duration-300 ${location.pathname === '/' && location.hash === item.path ? "opacity-0" : "opacity-0 group-hover:opacity-100"
                        }`}></div>
                    </button>
                  ) : (
                    <Link
                      to={item.path}
                      className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 group ${isActive(item.path)
                          ? "text-white bg-gradient-to-r from-blue-600 to-cyan-600 shadow-lg"
                          : "text-slate-700 hover:text-blue-600 hover:bg-white/80"
                        }`}
                    >
                      {/* Active background glow */}
                      {isActive(item.path) && (
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full blur opacity-50 -z-10"></div>
                      )}

                      <span className="relative z-10">{item.name}</span>

                      {/* Hover dot indicator */}
                      <div className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full transition-all duration-300 ${isActive(item.path) ? "opacity-0" : "opacity-0 group-hover:opacity-100"
                        }`}></div>
                    </Link>
                  )}
                </div>
              ))}

              {/* Contact Link */}
              <Link
                to="/contact"
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 group ${isActive("/contact")
                    ? "text-white bg-gradient-to-r from-blue-600 to-cyan-600 shadow-lg"
                    : "text-slate-700 hover:text-blue-600 hover:bg-white/80"
                  }`}
              >
                {/* Active background glow */}
                {isActive("/contact") && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full blur opacity-50 -z-10"></div>
                )}

                <span className="relative z-10">Contact</span>

                {/* Hover dot indicator */}
                <div className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full transition-all duration-300 ${isActive("/contact") ? "opacity-0" : "opacity-0 group-hover:opacity-100"
                  }`}></div>
              </Link>
            </div>

            {/* Right Side - CTA Button & Mobile Menu */}
            <div className="flex items-center space-x-3">
              {/* Animated CTA Button */}
              <Link to="/contact" className="hidden md:block">
                <button className="relative px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Shimmer effect */}
                  <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer"></div>

                  <span className="relative z-10 text-sm">Get Quote</span>
                </button>
              </Link>

              {/* Creative Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden relative w-10 h-10 bg-slate-100 hover:bg-blue-100 rounded-full flex items-center justify-center transition-all duration-300 group"
              >
                <div className="relative w-5 h-5">
                  {/* Animated hamburger/close icon */}
                  <span className={`absolute top-1 left-0 w-5 h-0.5 bg-slate-700 group-hover:bg-blue-600 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''
                    }`}></span>
                  <span className={`absolute top-2.5 left-0 w-5 h-0.5 bg-slate-700 group-hover:bg-blue-600 transition-all duration-300 ${isOpen ? 'opacity-0' : ''
                    }`}></span>
                  <span className={`absolute top-4 left-0 w-5 h-0.5 bg-slate-700 group-hover:bg-blue-600 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''
                    }`}></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-40 w-full max-w-sm px-4 lg:hidden">
          <div className="bg-white/95 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl shadow-blue-500/10 overflow-hidden animate-fade-in-up">
            <div className="p-6 space-y-3">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.isScroll ? (
                    <button
                      onClick={() => {
                        handleNavClick(item);
                        setIsOpen(false);
                      }}
                      className={`w-full text-left px-4 py-3 rounded-xl font-medium transition-all duration-300 ${location.pathname === '/' && location.hash === item.path
                          ? "text-white bg-gradient-to-r from-blue-600 to-cyan-600 shadow-lg"
                          : "text-slate-700 hover:text-blue-600 hover:bg-blue-50"
                        }`}
                    >
                      {item.name}
                    </button>
                  ) : (
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-3 rounded-xl font-medium transition-all duration-300 ${isActive(item.path)
                          ? "text-white bg-gradient-to-r from-blue-600 to-cyan-600 shadow-lg"
                          : "text-slate-700 hover:text-blue-600 hover:bg-blue-50"
                        }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}

              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-xl font-medium transition-all duration-300 ${isActive("/contact")
                    ? "text-white bg-gradient-to-r from-blue-600 to-cyan-600 shadow-lg"
                    : "text-slate-700 hover:text-blue-600 hover:bg-blue-50"
                  }`}
              >
                Contact
              </Link>

              <div className="pt-3 border-t border-slate-200">
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  <button className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    Get Quote
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Spacer for fixed navigation */}
      <div className="h-20"></div>

      {/* Custom CSS for animations */}
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(-12deg); }
          100% { transform: translateX(200%) skewX(-12deg); }
        }
        
        .animate-shimmer {
          animation: shimmer 1.5s ease-in-out;
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.3s ease-out forwards;
        }
      `}</style>
    </nav>
  );
};

export default Navigation;