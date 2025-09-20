import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted text-foreground border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 bg-primary rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">UL</span>
              </div>
              <div className="font-poppins">
                <div className="font-semibold text-lg">United Laboratories</div>
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
            <h3 className="font-poppins font-semibold text-lg">Quick Links</h3>
            <div className="space-y-2">
              {["Home", "About", "Products", "Quality", "Contact"].map((item) => (
                <Link
                  key={item}
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="font-poppins font-semibold text-lg">Products</h3>
            <div className="space-y-2">
              {[
                "Nutritional Supplements",
                "Nutraceutical Products",
                "Vitamins & Minerals",
                "Herbal Products",
                "Wellness Supplements"
              ].map((item) => (
                <div key={item} className="text-sm text-muted-foreground">
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-poppins font-semibold text-lg">Contact Us</h3>
            <div className="space-y-3">
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
        <div className="border-t border-border mt-8 pt-8">
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