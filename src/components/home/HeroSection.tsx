import { Link } from "react-router-dom";
import { ArrowRight, Award, Building2, Users, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Manufacturing Facility Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-80"
          style={{
            backgroundImage: 'url(/manufacturing-facility.png)',
          }}
        ></div>
        {/* Blur and Darken Overlay */}
        <div className="absolute inset-0 backdrop-blur-sm bg-black/40"></div>
        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-slate-800/50 to-slate-900/70"></div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/8 rounded-full blur-3xl"></div>
      </div>

      {/* Main Hero Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-8 text-sm font-medium text-white/90">
            <Award className="h-4 w-4 mr-2 text-blue-400" />
            Est. 2025 • GMP Certified • ISO Compliant
          </div>

          {/* Main Heading */}
          <h1 className="font-poppins font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-8 leading-tight drop-shadow-lg">
            Premium Nutraceutical
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Manufacturing
            </span> in Nepal
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed max-w-4xl mx-auto font-light drop-shadow-md">
            United Laboratories Nepal is your trusted partner for high-quality nutraceuticals,
            supplements, and nutritional products with decades of industry expertise.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
            <Link to="/products">
              <Button size="lg" className="btn-hero group min-w-[200px] h-14 text-lg shadow-lg hover:shadow-xl">
                Explore Products
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="min-w-[200px] h-14 text-lg glass-card hover:bg-primary hover:text-primary-foreground border-primary/30">
                Get Quote
              </Button>
            </Link>
          </div>
        </div>

        {/* Stats Section */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Stat 1 */}
            <div className="text-center p-8 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 hover:border-blue-400/50 hover:scale-105 transition-all duration-300 shadow-xl">
              <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Building2 className="h-8 w-8 text-blue-400" />
              </div>
              <div className="font-poppins font-bold text-3xl text-blue-400 mb-2">Modern</div>
              <div className="text-sm text-gray-300 font-medium">Manufacturing Facility</div>
            </div>

            {/* Stat 2 */}
            <div className="text-center p-8 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 hover:border-cyan-400/50 hover:scale-105 transition-all duration-300 shadow-xl">
              <div className="w-16 h-16 bg-cyan-500/20 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Users className="h-8 w-8 text-cyan-400" />
              </div>
              <div className="font-poppins font-bold text-3xl text-cyan-400 mb-2">50+</div>
              <div className="text-sm text-gray-300 font-medium">Expert Team Members</div>
            </div>

            {/* Stat 3 */}
            <div className="text-center p-8 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 hover:border-green-400/50 hover:scale-105 transition-all duration-300 shadow-xl">
              <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Award className="h-8 w-8 text-green-400" />
              </div>
              <div className="font-poppins font-bold text-3xl text-green-400 mb-2">100%</div>
              <div className="text-sm text-gray-300 font-medium">Quality Assured</div>
            </div>

            {/* Stat 4 */}
            <div className="text-center p-8 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 hover:border-orange-400/50 hover:scale-105 transition-all duration-300 shadow-xl">
              <div className="w-16 h-16 bg-orange-500/20 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Target className="h-8 w-8 text-orange-400" />
              </div>
              <div className="font-poppins font-bold text-3xl text-orange-400 mb-2">GMP</div>
              <div className="text-sm text-gray-300 font-medium">Certified Standards</div>
            </div>
          </div>
        </div>

        {/* Founders Section */}
        <div className="max-w-4xl mx-auto mt-20 text-center">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-10 shadow-xl">
            <h3 className="font-poppins font-bold text-2xl text-blue-400 mb-4">
              Founded by Industry Veterans
            </h3>
            <p className="text-lg text-gray-300 mb-6">
              <strong className="text-white text-xl">Lal Babu Prasad</strong> and{" "}
              <strong className="text-white text-xl">Munish Goyel</strong>
            </p>
            <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Decades of combined experience in nutraceutical manufacturing and quality excellence,
              bringing world-class expertise to Nepal's wellness industry.
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