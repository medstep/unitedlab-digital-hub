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
    <section id="product-showcase" className="relative py-18 bg-gradient-to-b from-slate-50 to-white">
      {/* Professional Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23334155' fill-opacity='0.8'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        {/* Subtle accent lines */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 py-8 relative z-10">
        <div className="text-center mb-18 animate-fade-in-up">
          

          <h2 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl text-slate-900 mb-7 animate-fade-in-up tracking-tight" style={{ animationDelay: '0.4s' }}>
            Specialize or customize your{" "}
            <span className="text-blue-600">
              Products by:
            </span>
          </h2>

          <div className="w-14 h-0.5 bg-blue-600 mx-auto mb-7 animate-fade-in" style={{ animationDelay: '0.6s' }}></div>

          <p className="text-base text-slate-600 max-w-4xl mb-5 mx-auto leading-relaxed font-light animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            From essential nutritional supplements to specialized formulations, we manufacture a comprehensive
            range of nutraceutical products to meet diverse wellness needs across <span className="text-slate-900 font-medium">Nepal</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14 max-w-6xl mx-auto">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index} className="bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:border-slate-300 transition-all duration-300 animate-fade-in-up group" style={{ animationDelay: category.delay }}>
                <CardContent className="p-7">
                  <div className="flex items-start space-x-5 mb-7">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${category.color} shadow-sm group-hover:shadow-md transition-shadow`}>
                      <Icon className="h-7 w-7" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-poppins font-semibold text-xl mb-3 text-slate-900 group-hover:text-blue-600 transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed text-sm">
                        {category.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-end pt-3 border-t border-slate-100">
                    <Link to="/products" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors group/link">
                      <span className="mr-2">View Products</span>
                      <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center animate-fade-in-up bg-slate-50 rounded-2xl p-10 max-w-4xl mx-auto border border-slate-200" style={{ animationDelay: '1s' }}>
          <h3 className="font-poppins font-semibold text-xl text-slate-900 mb-3">
            Ready to Explore Our Complete Range?
          </h3>
          <p className="text-slate-600 mb-7 text-base">
            Need a custom formulation? Contact us for specialized nutraceutical solutions made in <span className="text-slate-900 font-medium">Nepal</span>.
          </p>
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Link to="/products">
              <Button size="lg" className="group bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                View All Products
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
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
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default ProductShowcase;