import { Pill, Tablets, Beef, Droplets, Eye, Package, Wind, Wheat } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const DosageForm = () => {
    const dosageForms = [
        {
            icon: Pill,
            title: "Tablets",
            description: "Compressed solid dosage forms for precise medication delivery and easy administration.",
            color: "bg-blue-100 text-blue-600",
            delay: "0.2s",
        },
        {
            icon: Tablets,
            title: "Hard Gelatin Capsules",
            description: "Encapsulated formulations providing controlled release and enhanced bioavailability.",
            color: "bg-green-100 text-green-600",
            delay: "0.3s",
        },
        {
            icon: Beef,
            title: "Proteins",
            description: "High-quality protein supplements for nutritional support and muscle development.",
            color: "bg-red-100 text-red-600",
            delay: "0.4s",
        },
        {
            icon: Droplets,
            title: "Syrup-Liquid",
            description: "Liquid formulations for easy consumption and rapid absorption of nutrients.",
            color: "bg-cyan-100 text-cyan-600",
            delay: "0.5s",
        },
        {
            icon: Eye,
            title: "Oral Drops",
            description: "Concentrated liquid drops for precise dosing and enhanced therapeutic effect.",
            color: "bg-purple-100 text-purple-600",
            delay: "0.6s",
        },
        {
            icon: Package,
            title: "Powder Sachets",
            description: "Convenient single-dose powder sachets for easy mixing and consumption.",
            color: "bg-yellow-100 text-yellow-600",
            delay: "0.7s",
        },
        {
            icon: Wind,
            title: "Oral Sprays",
            description: "Convenient spray formulations for quick absorption and ease of use.",
            color: "bg-pink-100 text-pink-600",
            delay: "0.8s",
        },
        {
            icon: Wheat,
            title: "Fiber Supplements",
            description: "High-quality dietary fiber supplements for digestive health and wellness.",
            color: "bg-orange-100 text-orange-600",
            delay: "0.9s",
        },
    ];

    return (
        <section id="products" className="relative py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">

            {/* Extended Hero Background Blend */}
            <div className="absolute inset-0">
                {/* Seamless gradient continuation from Hero */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-50/40 via-white/60 to-blue-50/30"></div>
                <div className="absolute inset-0 bg-gradient-radial from-white/50 via-slate-50/20 to-transparent"></div>
                
                {/* Subtle floating elements for continuity */}
                <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-slate-100/20 to-blue-100/15 rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-blue-100/15 to-slate-100/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Header Section */}
                <div className="text-center mb-16 animate-fade-in-up">
                    

                    <h2 className="font-poppins font-bold text-3xl md:text-4xl text-slate-900 mb-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                        Products & Dosage{" "}
                        <span className="text-blue-600">
                            Forms
                        </span>
                    </h2>

                    <div className="w-12 h-0.5 bg-blue-600 mx-auto mb-8 animate-expand" style={{ animationDelay: '0.6s' }}></div>
                    
                    <p className="text-slate-600 max-w-2xl mx-auto text-sm leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                        We manufacture a comprehensive range of dosage forms to meet diverse therapeutic needs and patient preferences across <span className="text-slate-900 font-medium">Nepal</span>.
                    </p>
                </div>

                {/* Dosage Forms Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 max-w-7xl mx-auto">
                    {dosageForms.map((form, index) => {
                        const Icon = form.icon;
                        return (
                            <Card key={index} className="bg-white border border-slate-100 hover:border-blue-200 shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in-up group" style={{ animationDelay: form.delay }}>
                                <CardContent className="p-5 text-center">
                                    {form.title === "Tablets" ? (
                                        <div className="w-50 h-50 mx-auto mb-6 rounded-2xl overflow-hidden shadow-sm group-hover:shadow-md transition-shadow duration-300">
                                            <img
                                                src="/tablets.png"
                                                alt="Tablets"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    ) : form.title === "Hard Gelatin Capsules" ? (
                                        <div className="w-50 h-50 mx-auto mb-6 rounded-2xl overflow-hidden shadow-sm group-hover:shadow-md transition-shadow duration-300">
                                            <img
                                                src="/Capsules.png"
                                                alt="Hard Gelatin Capsules"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    ) : form.title === "Proteins" ? (
                                        <div className="w-50 h-50 mx-auto mb-6 rounded-2xl overflow-hidden shadow-sm group-hover:shadow-md transition-shadow duration-300">
                                            <img
                                                src="/Protein.png"
                                                alt="Proteins"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    ) : form.title === "Syrup-Liquid" ? (
                                        <div className="w-50 h-50 mx-auto mb-6 rounded-2xl overflow-hidden shadow-sm group-hover:shadow-md transition-shadow duration-300">
                                            <img
                                                src="/Syrup.png"
                                                alt="Syrup-Liquid"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    ) : form.title === "Oral Drops" ? (
                                        <div className="w-50 h-50 mx-auto mb-6 rounded-2xl overflow-hidden shadow-sm group-hover:shadow-md transition-shadow duration-300">
                                            <img
                                                src="/Oral.png"
                                                alt="Oral Drops"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    ) : form.title === "Powder Sachets" ? (
                                        <div className="w-50 h-50 mx-auto mb-6 rounded-2xl overflow-hidden shadow-sm group-hover:shadow-md transition-shadow duration-300">
                                            <img
                                                src="/Sachet.png"
                                                alt="Sachet Powder"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    ) : form.title === "Oral Sprays" ? (
                                        <div className="w-50 h-50 mx-auto mb-6 rounded-2xl overflow-hidden shadow-sm group-hover:shadow-md transition-shadow duration-300">
                                            <img
                                                src="/Spray.png"
                                                alt="Oral Spray"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    ) : form.title === "Fiber Supplements" ? (
                                        <div className="w-50 h-50 mx-auto mb-6 rounded-2xl overflow-hidden shadow-sm group-hover:shadow-md transition-shadow duration-300">
                                            <img
                                                src="/Fiber.png"
                                                alt="Fiber Supplement"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    ) : (
                                        <div className={`w-18 h-18 ${form.color} rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-sm group-hover:shadow-md transition-shadow duration-300`}>
                                            <Icon className="h-9 w-9" />
                                        </div>
                                    )}
                                    <h3 className="font-poppins font-semibold text-lg mb-3 text-slate-900 group-hover:text-blue-600 transition-colors">
                                        {form.title}
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed text-sm">
                                        {form.description}
                                    </p>
                                </CardContent>
                            </Card>
                        );
                    })}
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

export default DosageForm;