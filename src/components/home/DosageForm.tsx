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
            title: "Sachet Powder",
            description: "Convenient single-dose powder sachets for easy mixing and consumption.",
            color: "bg-yellow-100 text-yellow-600",
            delay: "0.7s",
        },
        {
            icon: Wind,
            title: "Oral Spray",
            description: "Convenient spray formulations for quick absorption and ease of use.",
            color: "bg-pink-100 text-pink-600",
            delay: "0.8s",
        },
        {
            icon: Wheat,
            title: "Fiber Supplement",
            description: "High-quality dietary fiber supplements for digestive health and wellness.",
            color: "bg-orange-100 text-orange-600",
            delay: "0.9s",
        },
    ];

    return (
        <section className="relative py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
            {/* Animated Background Elements - matching hero section */}
            <div className="absolute inset-0">
                {/* Subtle radial blur background */}
                <div className="absolute inset-0 bg-gradient-radial from-blue-100/25 via-transparent to-slate-100/20 blur-sm"></div>
                <div className="absolute top-1/4 right-1/3 w-[110%] h-[110%] bg-gradient-radial from-white/35 via-slate-50/20 to-transparent blur-2xl opacity-50"></div>

                {/* Floating geometric shapes */}
                <div className="absolute top-24 left-20 w-16 h-16 bg-slate-100 rounded-full opacity-50 animate-pulse"></div>
                <div className="absolute top-48 right-28 w-12 h-12 bg-blue-100 rounded-lg opacity-40 animate-bounce" style={{ animationDelay: '1.3s' }}></div>
                <div className="absolute bottom-48 left-28 w-18 h-18 bg-cyan-100 rounded-full opacity-45 animate-pulse" style={{ animationDelay: '2.1s' }}></div>
                <div className="absolute bottom-28 right-24 w-20 h-20 bg-gradient-to-r from-slate-100 to-blue-100 rounded-full opacity-35 animate-bounce" style={{ animationDelay: '0.9s' }}></div>
                <div className="absolute top-1/2 right-8 w-14 h-14 bg-purple-100 rounded-lg opacity-40 animate-pulse" style={{ animationDelay: '1.7s' }}></div>

                {/* Enhanced gradient orbs */}
                <div className="absolute top-1/6 left-1/6 w-88 h-88 bg-gradient-to-r from-slate-200/20 to-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/6 right-1/6 w-80 h-80 bg-gradient-to-r from-blue-200/20 to-slate-200/18 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.9s' }}></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16 animate-fade-in-up">
                    {/* Badge */}
                    <div className="inline-flex items-center bg-slate-100 text-slate-800 px-4 py-2 rounded-full text-sm font-semibold shadow-sm mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                        <Pill className="h-4 w-4 mr-2" />
                        Advanced Manufacturing • Multiple Forms • Made in Nepal
                    </div>

                    <h2 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl text-slate-900 mb-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                        Dosage{" "}
                        <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 bg-clip-text text-transparent animate-gradient">
                            Forms
                        </span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mx-auto mb-6 animate-fade-in" style={{ animationDelay: '0.6s' }}></div>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                        We manufacture a comprehensive range of dosage forms to meet diverse therapeutic needs and patient preferences across <span className="text-blue-600 font-semibold">Nepal</span>.
                    </p>
                </div>

                {/* Dosage Forms Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {dosageForms.map((form, index) => {
                        const Icon = form.icon;
                        return (
                            <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-fade-in-up group" style={{ animationDelay: form.delay }}>
                                <CardContent className="p-6 text-center">
                                    {form.title === "Tablets" ? (
                                        <div className="w-62 h-62 mx-auto mb-4 rounded-xl overflow-hidden shadow-md group-hover:scale-110 transition-transform duration-300">
                                            <img
                                                src="/tablets.png"
                                                alt="Tablets"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    ) : form.title === "Hard Gelatin Capsules" ? (
                                        <div className="w-62 h-62 mx-auto mb-4 rounded-xl overflow-hidden shadow-md group-hover:scale-110 transition-transform duration-300">
                                            <img
                                                src="/Capsules.png"
                                                alt="Hard Gelatin Capsules"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    ) : form.title === "Proteins" ? (
                                        <div className="w-62 h-62 mx-auto mb-4 rounded-xl overflow-hidden shadow-md group-hover:scale-110 transition-transform duration-300">
                                            <img
                                                src="/Protein.png"
                                                alt="Proteins"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    ) : form.title === "Syrup-Liquid" ? (
                                        <div className="w-62 h-62 mx-auto mb-4 rounded-xl overflow-hidden shadow-md group-hover:scale-110 transition-transform duration-300">
                                            <img
                                                src="/Syrup.png"
                                                alt="Syrup-Liquid"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    ) : form.title === "Oral Drops" ? (
                                        <div className="w-62 h-62 mx-auto mb-4 rounded-xl overflow-hidden shadow-md group-hover:scale-110 transition-transform duration-300">
                                            <img
                                                src="/Oral.png"
                                                alt="Oral Drops"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    ) : form.title === "Sachet Powder" ? (
                                        <div className="w-62 h-62 mx-auto mb-4 rounded-xl overflow-hidden shadow-md group-hover:scale-110 transition-transform duration-300">
                                            <img
                                                src="/Sachet.png"
                                                alt="Sachet Powder"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    ) : form.title === "Oral Spray" ? (
                                        <div className="w-62 h-62 mx-auto mb-4 rounded-xl overflow-hidden shadow-md group-hover:scale-110 transition-transform duration-300">
                                            <img
                                                src="/Spray.png"
                                                alt="Oral Spray"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    ) : form.title === "Fiber Supplement" ? (
                                        <div className="w-62 h-62 mx-auto mb-4 rounded-xl overflow-hidden shadow-md group-hover:scale-110 transition-transform duration-300">
                                            <img
                                                src="/Fiber.png"
                                                alt="Fiber Supplement"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    ) : (
                                        <div className={`w-16 h-16 ${form.color} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                                            <Icon className="h-8 w-8" />
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

                {/* Additional Info */}
                <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: '1s' }}>
                    <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        Our state-of-the-art manufacturing facility in <span className="text-blue-600 font-semibold">Birgunj, Nepal</span> is equipped with advanced technology to produce all these dosage forms under strict GMP guidelines, ensuring consistent quality and efficacy.
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

export default DosageForm;