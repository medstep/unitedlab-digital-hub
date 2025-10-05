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
      pdfFile: "Health Concern.pdf"
    },
    {
      icon: Brain,
      title: "Age-Related",
      description: "Specialized formulations designed for different life stages and age groups.",
      color: "bg-purple-100 text-purple-600",
      delay: "0.4s",
      pdfFile: "Age.pdf"
    },
    {
      icon: Leaf,
      title: "Herbal Extracts",
      description: "Pure plant-based extracts combining traditional wisdom with modern science.",
      color: "bg-green-100 text-green-600",
      delay: "0.6s",
      pdfFile: "Extracts.pdf"
    },
    {
      icon: Pill,
      title: "Supplements & Superfoods",
      description: "Essential vitamins, minerals, and nutrient-dense superfoods for daily health maintenance.",
      color: "bg-blue-100 text-blue-600",
      delay: "0.8s",
      pdfFile: "Supplements.pdf"
    },
  ];

  const openPDF = (pdfFile: string) => {
    window.open(`/${pdfFile}`, '_blank');
  };

  return (
    <section id="product-showcase" className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-slate-50">

      {/* Extended Hero Background Blend */}
      <div className="absolute inset-0">
        {/* Seamless gradient continuation from Hero */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/40 via-white/60 to-slate-50/30"></div>
        <div className="absolute inset-0 bg-gradient-radial from-white/50 via-blue-50/20 to-transparent"></div>

        {/* Subtle floating elements for continuity */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-blue-100/20 to-slate-100/15 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-r from-slate-100/15 to-blue-100/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 py-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in-up">
         

          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-slate-900 mb-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Specialize or customize your{" "}
            <span className="text-blue-600">
              Products by:
            </span>
          </h2>

          <div className="w-12 h-0.5 bg-blue-600 mx-auto mb-8 animate-expand" style={{ animationDelay: '0.6s' }}></div>

          <p className="text-slate-600 max-w-2xl mx-auto text-sm leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            From essential nutritional supplements to specialized formulations, we manufacture a comprehensive
            range of nutraceutical products to meet diverse wellness needs across <span className="text-slate-900 font-medium">Nepal</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14 max-w-6xl mx-auto">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index} className="bg-white border border-slate-100 hover:border-blue-200 shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in-up group" style={{ animationDelay: category.delay }}>
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
                    <button
                      onClick={() => openPDF(category.pdfFile)}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors group/link"
                    >
                      <span className="mr-2">View Products</span>
                      <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <div className="bg-white rounded-xl p-8 max-w-4xl mx-auto border border-slate-100 hover:border-blue-200 transition-all duration-300">
            <h3 className="font-poppins font-semibold text-xl text-slate-900 mb-4">
              Ready to Explore Our Complete Range?
            </h3>
            <p className="text-slate-600 mb-6 text-sm leading-relaxed">
              Need a custom formulation? Contact us for specialized nutraceutical solutions made in <span className="text-slate-900 font-medium">Nepal</span>.
            </p>
            <div className="inline-flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => openPDF('All.pdf')}
              >
                <Button size="lg" className="group bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                  View All Products
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced CSS for creative animations */}
      <style>{`
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes expand {
          0% { width: 0; }
          100% { width: 3rem; }
        }
        
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
        
        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 8s ease infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
        
        .animate-expand {
          animation: expand 1s ease-out forwards;
          width: 0;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </section>
  );
};

export default ProductShowcase;