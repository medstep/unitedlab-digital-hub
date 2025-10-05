import { Package, Pill, Droplets, Wheat } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const PackagingSection = () => {
  const packagingCategories = [
    {
      icon: Pill,
      title: "Tablets & Capsules",
      description: "Professional packaging solutions for solid dosage forms with maximum protection and shelf life.",
      color: "bg-blue-100 text-blue-600",
      delay: "0.2s",
      packagingTypes: [
        "Blister Packaging",
        "Alu-Alu Packaging",
        "Strip Packaging",
        "Bottle Packaging"
      ]
    },
    {
      icon: Droplets,
      title: "Liquids",
      description: "Specialized liquid packaging ensuring product integrity and easy dispensing for various formulations.",
      color: "bg-cyan-100 text-cyan-600",
      delay: "0.4s",
      packagingTypes: [
        "Oral Drops Bottles",
        "Oral Spray Bottles",
        "Syrup Bottles"
      ]
    },
    {
      icon: Wheat,
      title: "Powders",
      description: "Moisture-resistant packaging solutions for powder formulations maintaining product quality.",
      color: "bg-green-100 text-green-600",
      delay: "0.6s",
      packagingTypes: [
        "Jar Packaging",
        "Sachet Packaging"
      ]
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">

      {/* Extended Hero Background Blend */}
      <div className="absolute inset-0">
        {/* Seamless gradient continuation from Hero */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/40 via-white/60 to-blue-50/30"></div>
        <div className="absolute inset-0 bg-gradient-radial from-white/50 via-slate-50/20 to-transparent"></div>
        
        {/* Subtle floating elements for continuity */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-slate-100/20 to-blue-100/15 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-blue-100/15 to-slate-100/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 py-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in-up">
          

          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-slate-900 mb-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Professional{" "}
            <span className="text-blue-600">
              Packaging Solutions
            </span>
          </h2>

          <div className="w-12 h-0.5 bg-blue-600 mx-auto mb-8 animate-expand" style={{ animationDelay: '0.6s' }}></div>

          <p className="text-slate-600 max-w-2xl mx-auto text-sm leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            We offer comprehensive packaging solutions tailored to each dosage form, ensuring product integrity,
            shelf stability, and compliance with international packaging standards in <span className="text-slate-900 font-medium">Nepal</span>.
          </p>
        </div>

        {/* Creative Hexagonal Layout */}
        <div className="relative mb-14">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 max-w-7xl mx-auto">

            {/* Central Hub */}
            <div className="relative flex-shrink-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-64 h-64 bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 rounded-full flex items-center justify-center shadow-2xl relative overflow-hidden group">
                {/* Animated background rings */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-cyan-400/20 animate-pulse"></div>
                <div className="absolute inset-4 rounded-full border-2 border-white/30 animate-spin-slow"></div>

                {/* Central content */}
                <div className="text-center z-10 relative">
                  <Package className="h-16 w-16 text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-white font-bold text-xl mb-2">Packaging</h3>
                  <p className="text-blue-100 text-sm">Solutions</p>
                </div>

                {/* Floating particles */}
                <div className="absolute top-8 left-8 w-2 h-2 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute top-16 right-12 w-1 h-1 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-12 left-16 w-1.5 h-1.5 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>
              </div>
            </div>

            {/* Packaging Categories in Orbital Layout */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {packagingCategories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <div key={index} className="relative animate-fade-in-up group" style={{ animationDelay: `${0.4 + index * 0.2}s` }}>
                    {/* Connection Line to Center */}
                    <div className="hidden lg:block absolute top-1/2 -left-8 w-8 h-0.5 bg-gradient-to-r from-slate-300 to-transparent transform -translate-y-1/2 group-hover:from-blue-400 transition-colors duration-300"></div>

                    {/* Category Card */}
                    <div className="bg-white rounded-xl p-6 border border-slate-100 hover:border-blue-200 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden">

                      {/* Background Pattern */}
                      <div className="absolute top-0 right-0 w-20 h-20 opacity-5">
                        <Icon className="w-full h-full text-slate-400" />
                      </div>

                      {/* Header */}
                      <div className="flex items-center mb-6">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${category.color} shadow-md group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                          <Icon className="h-6 w-6" />
                        </div>
                        <div className="ml-4 flex-1">
                          <h4 className="font-bold text-lg text-slate-900 group-hover:text-blue-600 transition-colors">
                            {category.title}
                          </h4>
                          <div className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 mt-1 group-hover:w-16 transition-all duration-300"></div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-slate-600 text-sm leading-relaxed mb-6">
                        {category.description}
                      </p>

                      {/* Packaging Types - Creative Pills Layout */}
                      <div className="space-y-3">
                        {category.packagingTypes.map((type, typeIndex) => (
                          <div key={typeIndex} className="group/pill relative">
                            <div className="flex items-center p-3 bg-gradient-to-r from-slate-50 to-blue-50/50 rounded-full border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all duration-300 cursor-pointer">

                              {/* Animated dot */}
                              <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mr-3 flex-shrink-0 group-hover/pill:animate-pulse"></div>

                              {/* Type name */}
                              <span className="text-sm font-medium text-slate-700 group-hover/pill:text-blue-700 flex-1">
                                {type}
                              </span>

                              {/* Hover arrow */}
                              <div className="w-4 h-4 text-slate-400 group-hover/pill:text-blue-500 group-hover/pill:translate-x-1 transition-all opacity-0 group-hover/pill:opacity-100">
                                →
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Action Area */}
                      <div className="mt-6 pt-4 border-t border-slate-100">
                        <button className="w-full bg-gradient-to-r from-slate-800 to-slate-900 hover:from-blue-600 hover:to-cyan-600 text-white font-medium py-3 px-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-sm group-hover:scale-105 transform">
                          Explore Options
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>



        {/* Call to Action */}
        
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

export default PackagingSection;