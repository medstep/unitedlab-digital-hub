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

        {/* Subtle Decorative Elements */}
        <div className="absolute top-1/3 left-1/3 w-32 h-32 bg-blue-400/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-cyan-400/5 rounded-full blur-2xl"></div>
      </div>

      {/* Main Hero Content */}
      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="font-poppins font-bold text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight drop-shadow-lg">
            Premium Nutraceutical
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Manufacturing
            </span>
            <span> in Nepal</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-gray-200 mb-10 leading-relaxed max-w-2xl mx-auto font-light drop-shadow-md">
            Your trusted partner for high-quality nutraceuticals and supplements in Nepal.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-24">
            <Link to="/products">
              <Button size="lg" className="btn-hero group min-w-[180px] h-12 text-base">
                Our Products
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="min-w-[180px] h-12 text-base bg-white/10 border-white/30 text-white hover:bg-white hover:text-slate-900">
                Get Quote
              </Button>
            </Link>
          </div>
        </div>

        {/* Key Features */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Building2 className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="font-semibold text-white mb-2">Modern Facility</h3>
              <p className="text-gray-300 text-sm">State-of-the-art manufacturing</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6 text-green-400" />
              </div>
              <h3 className="font-semibold text-white mb-2">GMP Certified</h3>
              <p className="text-gray-300 text-sm">International quality standards</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-cyan-400" />
              </div>
              <h3 className="font-semibold text-white mb-2">Expert Team</h3>
              <p className="text-gray-300 text-sm">Experienced professionals</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="border-b border-border"></div>
    </section>
  );
};

export default HeroSection;