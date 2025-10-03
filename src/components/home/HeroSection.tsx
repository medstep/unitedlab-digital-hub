import { Link } from "react-router-dom";
import { ArrowRight, Award, Building2, Users, CheckCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[80vh] bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Subtle radial blur background */}
        <div className="absolute inset-0 bg-gradient-radial from-blue-100/30 via-transparent to-cyan-100/20 blur-sm"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-radial from-white/40 via-blue-50/20 to-transparent blur-2xl opacity-60"></div>

        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-100 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-cyan-100 rounded-lg opacity-40 animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-blue-200 rounded-full opacity-50 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-40 w-24 h-24 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full opacity-30 animate-bounce" style={{ animationDelay: '0.5s' }}></div>

        {/* Enhanced gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-200/25 to-cyan-200/25 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-200/25 to-blue-200/25 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 pt-4 pb-2 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-start min-h-[calc(90vh-4rem)]">

          {/* Left Side - Text Content */}
          <div className="space-y-10 animate-fade-in-up lg:pr-0 relative z-20">
            {/* Badge */}
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold shadow-sm animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Star className="h-4 w-4 mr-2" />
              Est. 2025 • WHO-GMP Certified • ISO Compliant
            </div>

            {/* Main Heading */}
            <div className="space-y-4 relative">
              <h1 className="font-poppins font-bold text-3xl lg:text-4xl xl:text-6xl text-slate-900 leading-tight animate-fade-in-up lg:pr-20 xl:pr-32" style={{ animationDelay: '0.4s' }}>
                Third Party
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 bg-clip-text text-transparent animate-gradient lg:relative lg:z-30">
                  Nutraceutical
                </span>
                <br />
                <span className="lg:relative lg:z-30">Manufacturing</span>
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full animate-fade-in" style={{ animationDelay: '0.6s' }}></div>
            </div>

            {/* Subtitle */}
            <p className="text-xl text-slate-600 leading-relaxed max-w-lg animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              Your trusted partner for high-quality nutraceuticals and supplements in <span className="text-blue-600 font-semibold">Nepal</span>.
              Combining innovation with excellence since 2025.
            </p>

            {/* Key Points */}
            <div className="space-y-3 animate-fade-in-up" style={{ animationDelay: '1s' }}>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-slate-700 font-medium">WHO-GMP Certified Manufacturing</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-slate-700 font-medium">International Quality Standards</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-slate-700 font-medium">Expert Team of 50+ Professionals</span>
              </div>
            </div>




          </div>

          {/* Right Side - Hero Image */}
          <div className="relative animate-fade-in-right lg:-ml-20 xl:-ml-32 lg:-mt-4 z-10" style={{ animationDelay: '0.6s' }}>
            <div className="relative">
              {/* Subtle decorative elements behind image */}
              <div className="absolute -top-2 -right-2 w-full h-full bg-gradient-to-br from-blue-50 to-cyan-50 transform rotate-1 opacity-60"></div>
              <div className="absolute -bottom-2 -left-2 w-full h-full bg-gradient-to-br from-cyan-50 to-blue-50 transform -rotate-1 opacity-40"></div>

              {/* Main image - seamless integration */}
              <div className="relative transform hover:scale-[1.02] transition-all duration-700 ease-out">
                {/* Gradient overlay for edge blending */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-50/20 via-transparent to-blue-50/20 rounded-2xl z-10 pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-slate-50/10 via-transparent to-white/30 rounded-2xl z-10 pointer-events-none"></div>

                <img
                  src="/Hero.png"
                  alt="United Laboratories Nepal Manufacturing"
                  className="w-[85%] h-auto object-cover rounded-3xl shadow-2xl shadow-blue-200/50 mx-auto"
                  style={{
                    maskImage: 'radial-gradient(ellipse at center, black 60%, transparent 100%)',
                    WebkitMaskImage: 'radial-gradient(ellipse at center, black 60%, transparent 100%)'
                  }}
                />
              </div>
            </div>

            {/* CTA Buttons below image */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
              <button
                onClick={() => {
                  const element = document.querySelector('#product-showcase');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <Button
                  size="lg"
                  className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Explore Products
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </button>
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg"
                >
                  Get Quote
                </Button>
              </Link>
            </div>

            {/* Stats below buttons */}
            <div className="grid grid-cols-4 gap-6 pt-8 animate-fade-in-up" style={{ animationDelay: '1.4s' }}>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">50+</div>
                <div className="text-sm text-slate-600">Expert Team</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">100%</div>
                <div className="text-sm text-slate-600">Quality Assured</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-600">WHO-GMP</div>
                <div className="text-sm text-slate-600">Certified</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600">ISO</div>
                <div className="text-sm text-slate-600">Certified</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes gradient {
          0%, 100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-fade-in-right {
          animation: fade-in-right 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-gradient {
          animation: gradient 3s ease-in-out infinite;
        }
        
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </section>
  );
};

export default HeroSection;