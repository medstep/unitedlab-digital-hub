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
        <section id="products" className="relative py-20 bg-gradient-to-b from-white to-slate-50">
            {/* Professional Background Pattern */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 opacity-[0.02]">
                    <div className="absolute top-0 left-0 w-full h-full" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='50' height='50' viewBox='0 0 50 50' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23334155' fill-opacity='0.6'%3E%3Ccircle cx='25' cy='25' r='2'/%3E%3Ccircle cx='10' cy='10' r='1'/%3E%3Ccircle cx='40' cy='10' r='1'/%3E%3Ccircle cx='10' cy='40' r='1'/%3E%3Ccircle cx='40' cy='40' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}></div>
                </div>

                {/* Subtle accent lines */}
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-18 animate-fade-in-up">

                    <h2 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl text-slate-900 mb-7 animate-fade-in-up tracking-tight" style={{ animationDelay: '0.4s' }}>
                        Products & Dosage{" "}
                        <span className="text-blue-600">
                            Forms
                        </span>
                    </h2>

                    <div className="w-14 h-0.5 bg-blue-600 mx-auto mb-7 animate-fade-in" style={{ animationDelay: '0.6s' }}></div>

                    <p className="text-base text-slate-600 max-w-4xl mx-auto leading-relaxed font-light animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                        We manufacture a comprehensive range of dosage forms to meet diverse therapeutic needs and patient preferences across <span className="text-slate-900 font-medium">Nepal</span>.
                    </p>
                </div>

                {/* Dosage Forms Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 max-w-7xl mx-auto">
                    {dosageForms.map((form, index) => {
                        const Icon = form.icon;
                        return (
                            <Card key={index} className="bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300 animate-fade-in-up group" style={{ animationDelay: form.delay }}>
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
                                    ) : form.title === "Sachet Powder" ? (
                                        <div className="w-50 h-50 mx-auto mb-6 rounded-2xl overflow-hidden shadow-sm group-hover:shadow-md transition-shadow duration-300">
                                            <img
                                                src="/Sachet.png"
                                                alt="Sachet Powder"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    ) : form.title === "Oral Spray" ? (
                                        <div className="w-50 h-50 mx-auto mb-6 rounded-2xl overflow-hidden shadow-sm group-hover:shadow-md transition-shadow duration-300">
                                            <img
                                                src="/Spray.png"
                                                alt="Oral Spray"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    ) : form.title === "Fiber Supplement" ? (
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

                {/* Additional Info */}
                <div className="text-center mt-20 animate-fade-in-up bg-slate-50 rounded-2xl p-12 max-w-5xl mx-auto border border-slate-200" style={{ animationDelay: '1s' }}>
                    <h3 className="font-poppins font-semibold text-2xl text-slate-900 mb-6">
                        Advanced Manufacturing Capabilities
                    </h3>
                    <p className="text-slate-600 max-w-3xl mx-auto leading-relaxed text-lg">
                        Our state-of-the-art manufacturing facility in <span className="text-slate-900 font-medium">Birgunj, Nepal</span> is equipped with advanced technology to produce all these dosage forms under strict GMP guidelines, ensuring consistent quality and efficacy.
                    </p>
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

export default DosageForm;