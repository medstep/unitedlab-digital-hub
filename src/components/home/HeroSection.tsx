import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 hero-gradient"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center bg-primary-foreground/20 rounded-full px-4 py-2 mb-6">
              <Award className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Est. 2025 • GMP Certified</span>
            </div>
            
            <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-6 leading-tight">
              Premium <span className="text-secondary-light">Pharmaceutical</span> Manufacturing in Nepal
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              United Laboratories Nepal is your trusted partner for high-quality medicines, 
              supplements, and nutritional products. Founded by industry experts with decades 
              of experience in pharmaceutical excellence.
            </p>

            {/* Key Points */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {[
                "GMP Certified Facility",
                "ISO Quality Standards",
                "Expert R&D Team",
                "Modern Manufacturing"
              ].map((point) => (
                <div key={point} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-secondary-light mr-3" />
                  <span className="text-primary-foreground/90">{point}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/products">
                <Button size="lg" className="btn-secondary group">
                  Explore Products
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20">
                  Our Story
                </Button>
              </Link>
            </div>
          </div>

          {/* Stats/Visual */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              {/* Stat Cards */}
              <div className="card-professional p-6 text-center bg-primary-foreground/10 backdrop-blur-sm">
                <Users className="h-8 w-8 text-secondary-light mx-auto mb-3" />
                <div className="font-poppins font-bold text-2xl text-primary-foreground">50+</div>
                <div className="text-sm text-primary-foreground/80">Expert Team Members</div>
              </div>
              
              <div className="card-professional p-6 text-center bg-primary-foreground/10 backdrop-blur-sm">
                <Award className="h-8 w-8 text-secondary-light mx-auto mb-3" />
                <div className="font-poppins font-bold text-2xl text-primary-foreground">100%</div>
                <div className="text-sm text-primary-foreground/80">Quality Assured</div>
              </div>
              
              <div className="card-professional p-6 text-center bg-primary-foreground/10 backdrop-blur-sm col-span-2">
                <div className="font-poppins font-bold text-3xl text-primary-foreground mb-2">
                  Lal Babu Prasad & Manish Goyel
                </div>
                <div className="text-primary-foreground/80">Founders & Industry Veterans</div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-secondary-light/20 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-primary-foreground/20 rounded-full animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;