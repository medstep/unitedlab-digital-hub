import { Link, useLocation, useNavigate } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleScrollLink = (targetId: string, scrollToTop = false) => {
    if (scrollToTop) {
      // Handle Home link - scroll to top
      if (location.pathname !== '/') {
        // If not on home page, navigate to home
        navigate('/');
      } else {
        // If on home page, scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      // Handle other scroll links
      if (location.pathname !== '/') {
        // Navigate to home with hash
        navigate('/' + targetId);
      } else {
        // If we're on home page, scroll to the section
        const element = document.querySelector(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <footer className="bg-muted text-foreground border-t border-border">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-7">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/fav.png" 
                alt="United Laboratories Nepal" 
                className="h-10 w-auto object-contain"
              />
              <div className="font-poppins">
                <div className="font-semibold text-base">United Laboratories</div>
                <div className="text-sm text-muted-foreground">Nepal Pvt. Ltd.</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Leading nutraceutical manufacturer in Nepal, committed to producing 
              high-quality nutritional supplements and wellness products since 2025.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-poppins font-semibold text-base">Quick Links</h3>
            <div className="space-y-2">
              <button
                onClick={() => handleScrollLink('#home', true)}
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 text-left"
              >
                Home
              </button>
              <button
                onClick={() => handleScrollLink('#about')}
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 text-left"
              >
                About
              </button>
              <button
                onClick={() => handleScrollLink('#products')}
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 text-left"
              >
                Products
              </button>
              <Link
                to="/gallery"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                Gallery
              </Link>
              <Link
                to="/contact"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="font-poppins font-semibold text-base">Products</h3>
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">
                Tablets & Capsules
              </div>
              <div className="text-sm text-muted-foreground">
                Syrups & Liquids
              </div>
              <div className="text-sm text-muted-foreground">
                Herbal Extracts
              </div>
              <div className="text-sm text-muted-foreground">
                Protein Supplements
              </div>
              <div className="text-sm text-muted-foreground">
                Oral Drops & Oral Sprays
              </div>
              <div className="text-sm text-muted-foreground">
                Sachets
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-poppins font-semibold text-base">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 mt-0.5 text-muted-foreground" />
                <div className="text-sm text-muted-foreground">
                  <div>Birgunj, Nepal</div>
                  <div>Province 2</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">+977-9851112329</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">unitedlabnepal@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-4 w-4 mt-0.5 text-muted-foreground" />
                <div className="text-sm text-muted-foreground">
                  <div>Mon - Fri: 9:00 AM - 6:00 PM</div>
                  <div>Sat: 9:00 AM - 2:00 PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-7 pt-7">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-muted-foreground">
              © 2025 United Laboratories Nepal Pvt. Ltd. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <span className="text-sm text-muted-foreground">GMP Certified</span>
              <span className="text-sm text-muted-foreground">ISO Compliant</span>
              <span className="text-sm text-muted-foreground">Quality Assured</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;