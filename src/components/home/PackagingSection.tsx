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
    <section className="relative py-18 bg-gradient-to-b from-white to-slate-50">
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
          {/* Professional Badge */}
          <div className="inline-flex items-center bg-slate-100 border border-slate-200 text-slate-700 px-6 py-3 rounded-lg text-sm font-medium shadow-sm mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Package className="h-4 w-4 mr-2 text-blue-600" />
            Premium Packaging • Quality Assured • International Standards
          </div>

          <h2 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl text-slate-900 mb-7 animate-fade-in-up tracking-tight" style={{ animationDelay: '0.4s' }}>
            Professional{" "}
            <span className="text-blue-600">
              Packaging Solutions
            </span>
          </h2>

          <div className="w-14 h-0.5 bg-blue-600 mx-auto mb-7 animate-fade-in" style={{ animationDelay: '0.6s' }}></div>

          <p className="text-base text-slate-600 max-w-4xl mx-auto leading-relaxed font-light animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
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
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200 hover:shadow-2xl hover:border-blue-300 transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1 relative overflow-hidden">

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
        <div className="text-center animate-fade-in-up bg-slate-50 rounded-2xl p-10 max-w-4xl mx-auto border border-slate-200" style={{ animationDelay: '1s' }}>
          <h3 className="font-poppins font-semibold text-xl text-slate-900 mb-3">
            Need Custom Packaging Solutions?
          </h3>
          <p className="text-slate-600 mb-7 text-base">
            Our packaging experts can design custom solutions tailored to your specific product requirements and market needs.
          </p>
          <div className="inline-flex flex-col sm:flex-row gap-3">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 text-sm">
              Request Custom Packaging
            </button>
            <button className="border border-slate-300 text-slate-700 hover:bg-slate-100 font-medium px-6 py-3 rounded-lg transition-all duration-300 text-sm">
              Download Packaging Guide
            </button>
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
        
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
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

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default PackagingSection;