import { Link } from "react-router-dom";
import { ArrowRight, Pill, Leaf, Heart, Brain, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ProductShowcase = () => {
  const categories = [
    {
      icon: Heart,
      title: "By Health Concern",
      description: "Targeted solutions for specific health conditions and wellness concerns.",
      color: "bg-red-100 text-red-600",
      delay: "0.2s",
    },
    {
      icon: Brain,
      title: "Age-Related",
      description: "Specialized formulations designed for different life stages and age groups.",
      color: "bg-purple-100 text-purple-600",
      delay: "0.4s",
    },
    {
      icon: Leaf,
      title: "Herbal Extracts",
      description: "Pure plant-based extracts combining traditional wisdom with modern science.",
      color: "bg-green-100 text-green-600",
      delay: "0.6s",
    },
    {
      icon: Pill,
      title: "Supplements & Superfoods",
      description: "Essential vitamins, minerals, and nutrient-dense superfoods for daily health maintenance.",
      color: "bg-blue-100 text-blue-600",
      delay: "0.8s",
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-cyan-50 via-white to-blue-50 overflow-hidden">
      {/* Animated Background Elements - matching hero section */}
      <div className="absolute inset-0">
        {/* Subtle radial blur background */}
        <div className="absolute inset-0 bg-gradient-radial from-blue-100/25 via-transparent to-cyan-100/20 blur-sm"></div>
        <div className="absolute top-1/4 left-1/3 w-[110%] h-[110%] bg-gradient-radial from-white/35 via-blue-50/20 to-transparent blur-2xl opacity-50"></div>

        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-16 w-18 h-18 bg-blue-100 rounded-full opacity-50 animate-pulse"></div>
        <div className="absolute top-40 right-24 w-14 h-14 bg-cyan-100 rounded-lg opacity-40 animate-bounce" style={{ animationDelay: '1.2s' }}></div>
        <div className="absolute bottom-40 left-24 w-16 h-16 bg-green-100 rounded-full opacity-45 animate-pulse" style={{ animationDelay: '2.2s' }}></div>
        <div className="absolute bottom-24 right-20 w-20 h-20 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full opacity-35 animate-bounce" style={{ animationDelay: '0.7s' }}></div>
        <div className="absolute top-1/2 left-8 w-12 h-12 bg-purple-100 rounded-lg opacity-40 animate-pulse" style={{ animationDelay: '1.8s' }}></div>

        {/* Enhanced gradient orbs */}
        <div className="absolute top-1/6 right-1/6 w-84 h-84 bg-gradient-to-r from-cyan-200/22 to-blue-200/22 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/6 left-1/6 w-76 h-76 bg-gradient-to-r from-blue-200/22 to-green-200/18 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.6s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold shadow-sm mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Star className="h-4 w-4 mr-2" />
            Premium Quality • WHO-GMP Certified • Made in Nepal
          </div>

          <h2 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl text-slate-900 mb-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Specialize or customize your{" "}
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 bg-clip-text text-transparent animate-gradient">
              Products by:
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mx-auto mb-6 animate-fade-in" style={{ animationDelay: '0.6s' }}></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            From essential nutritional supplements to specialized formulations, we manufacture a comprehensive
            range of nutraceutical products to meet diverse wellness needs across <span className="text-blue-600 font-semibold">Nepal</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-fade-in-up group" style={{ animationDelay: category.delay }}>
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${category.color} shadow-md`}>
                      <Icon className="h-7 w-7" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-poppins font-semibold text-xl mb-3 text-slate-900 group-hover:text-blue-600 transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {category.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <Link to="/products" className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-4 py-2 rounded-lg transition-all duration-300 group shadow-md hover:shadow-lg">
                      <span className="mr-2">View Products</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Link to="/products">
              <Button size="lg" className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                View All Products
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
           
          </div>
          <p className="text-slate-600 mt-6 animate-fade-in" style={{ animationDelay: '1.2s' }}>
            Need a custom formulation? Contact us for specialized nutraceutical solutions made in <span className="text-blue-600 font-semibold">Nepal</span>.
          </p>
        </div>
      </div>

      {/* Custom CSS for animations - matching hero section */}
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

export default ProductShowcase;