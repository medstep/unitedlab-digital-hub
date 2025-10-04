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
        <section className="relative py-18 bg-gradient-to-br from-orange-50 via-white to-red-50 overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0">
                {/* Subtle radial blur background */}
                <div className="absolute inset-0 bg-gradient-radial from-orange-100/25 via-transparent to-red-100/20 blur-sm"></div>
                <div className="absolute top-1/4 right-1/3 w-[110%] h-[110%] bg-gradient-radial from-white/35 via-orange-50/20 to-transparent blur-2xl opacity-50"></div>

                {/* Floating geometric shapes */}
                <div className="absolute top-20 left-16 w-18 h-18 bg-orange-100 rounded-full opacity-50 animate-pulse"></div>
                <div className="absolute top-40 right-24 w-14 h-14 bg-red-100 rounded-lg opacity-40 animate-bounce" style={{ animationDelay: '1.2s' }}></div>
                <div className="absolute bottom-40 left-24 w-16 h-16 bg-blue-100 rounded-full opacity-45 animate-pulse" style={{ animationDelay: '2.2s' }}></div>
                <div className="absolute bottom-24 right-20 w-20 h-20 bg-gradient-to-r from-orange-100 to-red-100 rounded-full opacity-35 animate-bounce" style={{ animationDelay: '0.7s' }}></div>

                {/* Enhanced gradient orbs */}
                <div className="absolute top-1/6 left-1/6 w-84 h-84 bg-gradient-to-r from-orange-200/22 to-red-200/22 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/6 right-1/6 w-76 h-76 bg-gradient-to-r from-red-200/22 to-orange-200/18 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.6s' }}></div>
            </div>

            <div className="container mx-auto px-6 py-8 relative z-10">
                <div className="text-center mb-14 animate-fade-in-up">


                    <h2 className="font-poppins font-bold text-2xl md:text-3xl lg:text-4xl text-slate-900 mb-5 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                        Process For Third Party{" "}
                        <span className="bg-gradient-to-r from-orange-600 via-red-500 to-orange-700 bg-clip-text text-transparent animate-gradient">
                            Nutraceutical Manufacturing
                        </span>{" "}
                        Services
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-orange-600 to-red-500 rounded-full mx-auto mb-5 animate-fade-in" style={{ animationDelay: '0.6s' }}></div>
                    <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
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
                            <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-fade-in-up group" style={{ animationDelay: step.delay }}>
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
                <div className="text-center mt-14 animate-fade-in-up" style={{ animationDelay: '1.4s' }}>
                    <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-7 shadow-lg max-w-4xl mx-auto">
                        <h3 className="font-poppins font-bold text-xl text-slate-900 mb-3">
                            Why Choose United Laboratories Nepal?
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-center">
                            <div className="space-y-2">
                                <div className="w-16 h-16 bg-gradient-to-r from-orange-100 to-red-100 rounded-full flex items-center justify-center mx-auto">
                                    <Factory className="h-7 w-7 text-orange-600" />
                                </div>
                                <h4 className="font-semibold text-slate-900">WHO-GMP Certified</h4>
                                <p className="text-xs text-slate-600">International quality standards in Birgunj, Nepal</p>
                            </div>
                            <div className="space-y-2">
                                <div className="w-16 h-16 bg-gradient-to-r from-orange-100 to-red-100 rounded-full flex items-center justify-center mx-auto">
                                    <Truck className="h-7 w-7 text-orange-600" />
                                </div>
                                <h4 className="font-semibold text-slate-900">Pan-Nepal Delivery</h4>
                                <p className="text-xs text-slate-600">Fast delivery across all 7 provinces</p>
                            </div>
                            <div className="space-y-2">
                                <div className="w-16 h-16 bg-gradient-to-r from-orange-100 to-red-100 rounded-full flex items-center justify-center mx-auto">
                                    <CheckCircle className="h-7 w-7 text-orange-600" />
                                </div>
                                <h4 className="font-semibold text-slate-900">Quality Assured</h4>
                                <p className="text-xs text-slate-600">Rigorous QC at every manufacturing step</p>
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

export default ManufacturingProcess;