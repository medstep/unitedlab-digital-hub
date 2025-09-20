import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary-foreground rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-xl">UL</span>
              </div>
              <div className="font-poppins">
                <div className="font-bold text-lg">United Laboratories</div>
                <div className="text-sm opacity-90">Nepal Pvt. Ltd.</div>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed">
              Leading pharmaceutical manufacturer in Nepal, committed to producing 
              high-quality medicines and supplements since 2025.
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
                  className="block text-sm opacity-90 hover:opacity-100 transition-opacity duration-200"
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
                "Pharmaceutical Products",
                "Vitamins & Minerals",
                "Herbal Products",
                "Health Supplements"
              ].map((item) => (
                <div key={item} className="text-sm opacity-90">
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
                <MapPin className="h-5 w-5 mt-0.5 opacity-90" />
                <div className="text-sm opacity-90">
                  <div>Birgunj, Nepal</div>
                  <div>Province 2</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 opacity-90" />
                <span className="text-sm opacity-90">+977-9851112329</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 opacity-90" />
                <span className="text-sm opacity-90">unitedlabnepal@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 mt-0.5 opacity-90" />
                <div className="text-sm opacity-90">
                  <div>Mon - Fri: 9:00 AM - 6:00 PM</div>
                  <div>Sat: 9:00 AM - 2:00 PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm opacity-90">
              © 2025 United Laboratories Nepal Pvt. Ltd. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <span className="text-sm opacity-90">GMP Certified</span>
              <span className="text-sm opacity-90">ISO Compliant</span>
              <span className="text-sm opacity-90">Quality Assured</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;