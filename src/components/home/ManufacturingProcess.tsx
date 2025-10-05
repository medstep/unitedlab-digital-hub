import { CheckCircle, FileText, Package, Truck, Factory, Calculator, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ManufacturingProcess = () => {
    const processSteps = [
        {
            step: "Step 1",
            title: "Finalizing Composition & Quantity",
            description: "We begin by understanding your product needs and quantity requirements:",
            icon: FileText,
            color: "bg-blue-100 text-blue-600",
            points: [
                "Choose formulas and composition",
                "5,000-10,000 boxes = 1 lac tablets/capsules",
                "Minimum syrup order: 3,000-5,000 units",
                "Compliance with Nepal FDA guidelines"
            ],
            delay: "0.2s",
        },
        {
            step: "Step 2",
            title: "Quotation & Budget Finalization",
            description: "Based on your order, our team prepares a comprehensive quotation:",
            icon: Calculator,
            color: "bg-green-100 text-green-600",
            points: [
                "Includes pricing, packaging, and blueprint",
                "Breakdown of materials & deliverables",
                "Shared by company representative",
                "Transparent pricing with no hidden costs"
            ],
            delay: "0.4s",
        },
        {
            step: "Step 3",
            title: "Document Submission",
            description: "The client must submit the following approved documents:",
            icon: CheckCircle,
            color: "bg-cyan-100 text-cyan-600",
            points: [
                "Drug License & GST Number",
                "PAN, Aadhaar, Canceled Cheque",
                "Originals must be available for verification",
                "Nepal regulatory compliance documents"
            ],
            delay: "0.6s",
        },
        {
            step: "Step 4",
            title: "Packing Material Finalization",
            description: "We offer full customization based on your brand requirements:",
            icon: Package,
            color: "bg-purple-100 text-purple-600",
            points: [
                "Choose packaging design and colors",
                "Provide logo and company name",
                "Certified material with full product info",
                "Nepal-specific labeling requirements"
            ],
            delay: "0.8s",
        },
        {
            step: "Step 5",
            title: "Product Manufacturing",
            description: "After approvals, our WHO-GMP certified experts begin production:",
            icon: Factory,
            color: "bg-orange-100 text-orange-600",
            points: [
                "Raw material is sorted & purified",
                "Production begins in certified units",
                "Final QC before packaging",
                "Birgunj facility with international standards"
            ],
            delay: "1.0s",
        },
        {
            step: "Step 6",
            title: "Product Delivery",
            description: "We ensure fast and safe delivery nationwide across Nepal:",
            icon: Truck,
            color: "bg-red-100 text-red-600",
            points: [
                "Every batch is counted and checked",
                "Dispatched by our logistics team",
                "Delivery within 5-6 days (location based)",
                "Coverage across all 7 provinces of Nepal"
            ],
            delay: "1.2s",
        },
    ];

    return (
        <section className="relative py-20 bg-gradient-to-br from-orange-50 via-white to-red-50">

            {/* Extended Hero Background Blend with Orange/Red Theme */}
            <div className="absolute inset-0">
                {/* Seamless gradient continuation maintaining orange/red theme */}
                <div className="absolute inset-0 bg-gradient-to-b from-orange-50/40 via-white/60 to-red-50/30"></div>
                <div className="absolute inset-0 bg-gradient-radial from-white/50 via-orange-50/20 to-transparent"></div>
                
                {/* Subtle floating elements for continuity with orange/red theme */}
                <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-orange-100/20 to-red-100/15 rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-r from-red-100/15 to-orange-100/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            <div className="container mx-auto px-6 py-8 relative z-10">
                {/* Header Section */}
                <div className="text-center mb-16 animate-fade-in-up">
                    

                    <h2 className="font-poppins font-bold text-3xl md:text-4xl text-slate-900 mb-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                        Process For Third Party{" "}
                        <span className="bg-gradient-to-r from-orange-600 via-red-500 to-orange-700 bg-clip-text text-transparent animate-gradient">
                            Nutraceutical Manufacturing
                        </span>{" "}
                        Services
                    </h2>

                    <div className="w-12 h-0.5 bg-gradient-to-r from-orange-600 to-red-500 mx-auto mb-8 animate-expand" style={{ animationDelay: '0.6s' }}></div>

                    <p className="text-slate-600 max-w-2xl mx-auto text-sm leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                        With our manufacturing services, we focus on delivering high-quality nutraceuticals at affordable rates.
                        United Laboratories has built a reputation nationally and globally by combining excellence with efficiency.
                        Here's a step-by-step insight into how we manage the third-party nutraceutical manufacturing process in{" "}
                        <span className="text-orange-600 font-semibold">Nepal</span>:
                    </p>
                </div>

                {/* Process Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                    {processSteps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <Card key={index} className="bg-white border border-slate-100 hover:border-orange-200 shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in-up group" style={{ animationDelay: step.delay }}>
                                <CardContent className="p-7">
                                    {/* Step Badge */}
                                    <div className="flex items-center justify-between mb-5">
                                        <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                            {step.step}
                                        </div>
                                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${step.color} shadow-md group-hover:scale-110 transition-transform duration-300`}>
                                            <Icon className="h-5 w-5" />
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="font-poppins font-bold text-lg mb-3 text-slate-900 group-hover:text-orange-600 transition-colors">
                                        {step.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-slate-600 leading-relaxed mb-5 text-xs">
                                        {step.description}
                                    </p>

                                    {/* Points */}
                                    <ul className="space-y-2">
                                        {step.points.map((point, pointIndex) => (
                                            <li key={pointIndex} className="flex items-start space-x-2">
                                                <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                                <span className="text-slate-600 text-xs leading-relaxed">{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>

                {/* Bottom Info */}
                <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '1.4s' }}>
                    <div className="bg-white rounded-xl p-8 max-w-4xl mx-auto border border-slate-100 hover:border-orange-200 transition-all duration-300">
                        <h3 className="font-poppins font-semibold text-xl text-slate-900 mb-6">
                            Why Choose United Laboratories Nepal?
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                            <div className="space-y-3">
                                <div className="w-12 h-12 bg-gradient-to-r from-orange-100 to-red-100 rounded-lg flex items-center justify-center mx-auto">
                                    <Factory className="h-6 w-6 text-orange-600" />
                                </div>
                                <h4 className="font-semibold text-slate-900 text-sm">WHO-GMP Certified</h4>
                                <p className="text-xs text-slate-600 leading-relaxed">International quality standards in Birgunj, Nepal</p>
                            </div>
                            <div className="space-y-3">
                                <div className="w-12 h-12 bg-gradient-to-r from-orange-100 to-red-100 rounded-lg flex items-center justify-center mx-auto">
                                    <Truck className="h-6 w-6 text-orange-600" />
                                </div>
                                <h4 className="font-semibold text-slate-900 text-sm">Pan-Nepal Delivery</h4>
                                <p className="text-xs text-slate-600 leading-relaxed">Fast delivery across all 7 provinces</p>
                            </div>
                            <div className="space-y-3">
                                <div className="w-12 h-12 bg-gradient-to-r from-orange-100 to-red-100 rounded-lg flex items-center justify-center mx-auto">
                                    <CheckCircle className="h-6 w-6 text-orange-600" />
                                </div>
                                <h4 className="font-semibold text-slate-900 text-sm">Quality Assured</h4>
                                <p className="text-xs text-slate-600 leading-relaxed">Rigorous QC at every manufacturing step</p>
                            </div>
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

export default ManufacturingProcess;