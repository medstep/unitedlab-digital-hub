import { useState, useEffect, useCallback } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Phone, Mail, Clock, ChevronRight, X, Menu } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", path: "#home", isScroll: true, scrollToTop: true },
    { name: "About", path: "#about", isScroll: true },
    { name: "Products", path: "#products", isScroll: true },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  // Track scroll position for header style changes
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Handle hash scrolling when location changes
  useEffect(() => {
    if (location.hash && location.pathname === "/") {
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const handleNavClick = useCallback(
    (item: { name: string; path: string; isScroll?: boolean; scrollToTop?: boolean }) => {
      if (item.isScroll) {
        if (item.scrollToTop) {
          if (location.pathname !== "/") {
            navigate("/");
          } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
        } else {
          if (location.pathname !== "/") {
            navigate("/" + item.path);
          } else {
            const element = document.querySelector(item.path);
            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
            }
          }
        }
      }
      setIsOpen(false);
    },
    [location.pathname, navigate]
  );

  const isNavActive = (item: { path: string; isScroll?: boolean }) => {
    if (item.isScroll) {
      return location.pathname === "/" && location.hash === item.path;
    }
    return isActive(item.path);
  };

  return (
    <nav className="relative z-50">
      {/* ─── Top Info Bar ─── */}
      <div
        className={`w-full bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-slate-300 transition-all duration-500 ${scrolled ? "h-0 opacity-0 overflow-hidden" : "h-auto opacity-100"
          }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-2 text-xs sm:text-sm">
            {/* Left – Contact */}
            <div className="flex items-center gap-5">
              <a
                href="tel:+9779851112329"
                className="flex items-center gap-1.5 hover:text-white transition-colors duration-200"
              >
                <Phone className="h-3 w-3" />
                <span className="hidden sm:inline">+977-9851112329</span>
              </a>
              <a
                href="mailto:unitedlabnepal@gmail.com"
                className="flex items-center gap-1.5 hover:text-white transition-colors duration-200"
              >
                <Mail className="h-3 w-3" />
                <span className="hidden sm:inline">unitedlabnepal@gmail.com</span>
              </a>
            </div>

            {/* Right – Hours */}
            <div className="flex items-center gap-1.5">
              <Clock className="h-3 w-3" />
              <span>Mon – Fri: 9 AM – 6 PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* ─── Main Header ─── */}
      <div
        className={`sticky top-0 z-50 w-full transition-all duration-500 ${scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-lg shadow-slate-900/5"
          : "bg-white"
          }`}
      >
        {/* Bottom accent border */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-70" />
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-[72px]">

            {/* ── Logo ── */}
            <Link to="/" className="flex items-center gap-3 group shrink-0">
              <img
                src="/logonew.png"
                alt="United Laboratories Nepal"
                className="h-24 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <div className="hidden sm:block font-poppins leading-tight">
                <div className="font-bold text-[18px] text-slate-900 tracking-tight">
                  United Laboratories
                </div>
                <div className="text-[11px] font-medium text-blue-600 uppercase tracking-widest">
                  Nepal Pvt. Ltd.
                </div>
              </div>
            </Link>

            {/* ── Desktop Nav Links ── */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => {
                const active = isNavActive(item);
                const baseClasses =
                  "relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg";
                const activeClasses = active
                  ? "text-blue-600"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-50";

                return item.isScroll ? (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item)}
                    className={`${baseClasses} ${activeClasses}`}
                  >
                    {item.name}
                    {/* Active underline indicator */}
                    <span
                      className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 rounded-full bg-blue-600 transition-all duration-300 ${active ? "w-5" : "w-0"
                        }`}
                    />
                  </button>
                ) : (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`${baseClasses} ${activeClasses}`}
                  >
                    {item.name}
                    <span
                      className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 rounded-full bg-blue-600 transition-all duration-300 ${active ? "w-5" : "w-0"
                        }`}
                    />
                  </Link>
                );
              })}
            </div>

            {/* ── CTA + Mobile Toggle ── */}
            <div className="flex items-center gap-3">
              <Link to="/contact" className="hidden md:inline-flex">
                <button className="group relative inline-flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg shadow-md shadow-blue-600/25 hover:shadow-lg hover:shadow-blue-600/30 transition-all duration-300 overflow-hidden">
                  {/* Shimmer overlay */}
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  <span className="relative z-10">Get Quote</span>
                  <ChevronRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </button>
              </Link>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden relative w-11 h-11 flex items-center justify-center rounded-lg border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all duration-200"
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <X className="h-5 w-5 text-slate-700" />
                ) : (
                  <Menu className="h-5 w-5 text-slate-700" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ─── Mobile Menu Overlay ─── */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${isOpen ? "visible" : "invisible"
          }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"
            }`}
          onClick={() => setIsOpen(false)}
        />

        {/* Slide-in Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-[300px] max-w-[85vw] bg-white shadow-2xl transition-transform duration-300 ease-out ${isOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          {/* Panel Header */}
          <div className="flex items-center justify-between px-6 h-[72px] border-b border-slate-100">
            <div className="font-poppins">
              <div className="font-bold text-sm text-slate-900">United Laboratories</div>
              <div className="text-[10px] font-medium text-blue-600 uppercase tracking-widest">
                Nepal Pvt. Ltd.
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-slate-100 transition-colors duration-200"
            >
              <X className="h-5 w-5 text-slate-500" />
            </button>
          </div>

          {/* Panel Links */}
          <div className="px-4 py-6 space-y-1">
            {navItems.map((item) => {
              const active = isNavActive(item);
              return item.isScroll ? (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${active
                    ? "bg-blue-50 text-blue-700"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    }`}
                >
                  {item.name}
                  <ChevronRight className={`h-4 w-4 transition-colors duration-200 ${active ? "text-blue-400" : "text-slate-300"}`} />
                </button>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${active
                    ? "bg-blue-50 text-blue-700"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    }`}
                >
                  {item.name}
                  <ChevronRight className={`h-4 w-4 transition-colors duration-200 ${active ? "text-blue-400" : "text-slate-300"}`} />
                </Link>
              );
            })}
          </div>

          {/* Panel CTA */}
          <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-slate-100 bg-slate-50/50">
            <Link to="/contact" onClick={() => setIsOpen(false)} className="block">
              <button className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg shadow-md transition-all duration-300">
                Get a Free Quote
                <ChevronRight className="h-4 w-4" />
              </button>
            </Link>
            {/* Contact info */}
            <div className="mt-4 space-y-2">
              <a href="tel:+9779851112329" className="flex items-center gap-2 text-xs text-slate-500 hover:text-slate-700 transition-colors">
                <Phone className="h-3 w-3" />
                +977-9851112329
              </a>
              <a href="mailto:unitedlabnepal@gmail.com" className="flex items-center gap-2 text-xs text-slate-500 hover:text-slate-700 transition-colors">
                <Mail className="h-3 w-3" />
                unitedlabnepal@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;