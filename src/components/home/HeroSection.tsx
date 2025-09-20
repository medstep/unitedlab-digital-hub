import { Link } from "react-router-dom";
import { ArrowRight, Award, Building2, Users, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative bg-background">
      {/* Main Hero Content */}
      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center bg-muted text-muted-foreground rounded-full px-4 py-2 mb-8 text-sm font-medium">
            <Award className="h-4 w-4 mr-2" />
            Est. 2025 • GMP Certified • ISO Compliant
          </div>

          {/* Main Heading */}
          <h1 className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
            Premium Nutraceutical
            <br />
            <span className="text-primary">Manufacturing</span> in Nepal
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
            United Laboratories Nepal is your trusted partner for high-quality nutraceuticals,
            supplements, and nutritional products with decades of industry expertise.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link to="/products">
              <Button size="lg" className="btn-hero group min-w-[180px]">
                Explore Products
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="min-w-[180px]">
                Get Quote
              </Button>
            </Link>
          </div>
        </div>

        {/* Stats Section */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Stat 1 */}
            <div className="text-center p-6 rounded-lg bg-card border border-primary/20 hover:shadow-md hover:border-primary/40 transition-all duration-200">
              <div className="w-12 h-12 bg-primary/15 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Building2 className="h-6 w-6 text-primary" />
              </div>
              <div className="font-poppins font-bold text-2xl text-primary mb-1">Modern</div>
              <div className="text-sm text-muted-foreground">Manufacturing Facility</div>
            </div>

            {/* Stat 2 */}
            <div className="text-center p-6 rounded-lg bg-card border border-secondary/20 hover:shadow-md hover:border-secondary/40 transition-all duration-200">
              <div className="w-12 h-12 bg-secondary/15 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-secondary" />
              </div>
              <div className="font-poppins font-bold text-2xl text-secondary mb-1">50+</div>
              <div className="text-sm text-muted-foreground">Expert Team Members</div>
            </div>

            {/* Stat 3 */}
            <div className="text-center p-6 rounded-lg bg-card border border-trust/20 hover:shadow-md hover:border-trust/40 transition-all duration-200">
              <div className="w-12 h-12 bg-trust/15 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6 text-trust" />
              </div>
              <div className="font-poppins font-bold text-2xl text-trust mb-1">100%</div>
              <div className="text-sm text-muted-foreground">Quality Assured</div>
            </div>

            {/* Stat 4 */}
            <div className="text-center p-6 rounded-lg bg-card border border-accent-orange/20 hover:shadow-md hover:border-accent-orange/40 transition-all duration-200">
              <div className="w-12 h-12 bg-accent-orange/15 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Target className="h-6 w-6 text-accent-orange" />
              </div>
              <div className="font-poppins font-bold text-2xl text-accent-orange mb-1">GMP</div>
              <div className="text-sm text-muted-foreground">Certified Standards</div>
            </div>
          </div>
        </div>

        {/* Founders Section */}
        <div className="max-w-3xl mx-auto mt-16 text-center">
          <div className="bg-primary/5 rounded-lg p-8 border border-primary/20">
            <h3 className="font-poppins font-semibold text-lg text-primary mb-2">
              Founded by Industry Veterans
            </h3>
            <p className="text-muted-foreground mb-4">
              <strong className="text-foreground">Lal Babu Prasad</strong> and{" "}
              <strong className="text-foreground">Manish Goyel</strong>
            </p>
            <p className="text-sm text-muted-foreground">
              Decades of combined experience in nutraceutical manufacturing and quality excellence
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="border-b border-border"></div>
    </section>
  );
};

export default HeroSection;