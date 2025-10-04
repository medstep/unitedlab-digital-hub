import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "What are nutraceuticals?",
      answer: "Nutraceuticals are products derived from food sources that provide extra health benefits beyond basic nutritional value. They combine 'nutrition' and 'pharmaceutical' to create products that support health, prevent diseases, and enhance well-being. At United Laboratories Nepal, we manufacture high-quality nutraceuticals including vitamins, minerals, herbal extracts, and dietary supplements that meet international WHO-GMP standards.",
    },
    {
      question: "What certifications should you look for in a nutraceutical manufacturer?",
      answer: "When choosing a nutraceutical manufacturer, look for WHO-GMP (Good Manufacturing Practice) certification, ISO compliance, and local regulatory approvals. United Laboratories Nepal holds WHO-GMP certification and follows international quality standards. We also comply with Nepal's pharmaceutical regulations and maintain strict quality control measures throughout our manufacturing process in Birgunj.",
    },
    {
      question: "What is the expected growth of the nutraceutical market in Nepal?",
      answer: "The nutraceutical market in Nepal is experiencing significant growth, driven by increasing health awareness, rising disposable income, and growing demand for preventive healthcare solutions. The market is expected to grow at a CAGR of 8-12% over the next five years. United Laboratories Nepal is positioned to capitalize on this growth with our state-of-the-art manufacturing facility and comprehensive product range.",
    },
    {
      question: "What is the typical lead time for nutraceutical product manufacturing?",
      answer: "The typical lead time for nutraceutical manufacturing at United Laboratories Nepal ranges from 15-30 days, depending on the product complexity and order quantity. This includes formulation finalization (2-3 days), raw material procurement (5-7 days), production (7-14 days), quality testing (2-3 days), and packaging (2-3 days). We ensure timely delivery across all 7 provinces of Nepal within 5-6 days of dispatch.",
    },
    {
      question: "What packaging options are available for nutraceutical products?",
      answer: "United Laboratories Nepal offers comprehensive packaging solutions including bottles, blister packs, sachets, pouches, and tubes. We provide complete customization with your brand logo, colors, and design. Our packaging materials are certified and include full product information as per Nepal's labeling requirements. We also offer eco-friendly packaging options and tamper-evident sealing for product safety.",
    },
    {
      question: "What types of products do nutraceutical manufacturers offer?",
      answer: "United Laboratories Nepal manufactures a wide range of nutraceutical products including tablets, hard gelatin capsules, syrups and liquids, oral drops, sachet powders, oral sprays, protein supplements, herbal extracts, and fiber supplements. We specialize in products categorized by health concerns, age-related formulations, and therapeutic areas, all manufactured in our WHO-GMP certified facility in Birgunj.",
    },
    {
      question: "Who is the leading nutraceutical manufacturer in Nepal?",
      answer: "United Laboratories Nepal Pvt. Ltd. is emerging as a leading nutraceutical manufacturer in Nepal, established in 2025 with state-of-the-art WHO-GMP certified facilities in Birgunj. Founded by industry veterans LB Gupta and Munish Goyel, we combine decades of experience with modern technology to deliver high-quality products. Our commitment to international standards and local expertise makes us the preferred choice for third-party nutraceutical manufacturing in Nepal.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-50 via-white to-gray-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Subtle radial blur background */}
        <div className="absolute inset-0 bg-gradient-radial from-gray-100/25 via-transparent to-slate-100/20 blur-sm"></div>
        <div className="absolute top-1/4 left-1/3 w-[110%] h-[110%] bg-gradient-radial from-white/35 via-gray-50/20 to-transparent blur-2xl opacity-50"></div>

        {/* Floating geometric shapes */}
        <div className="absolute top-20 right-20 w-16 h-16 bg-gray-100 rounded-full opacity-40 animate-pulse"></div>
        <div className="absolute top-40 left-24 w-12 h-12 bg-slate-100 rounded-lg opacity-50 animate-bounce" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-40 right-28 w-18 h-18 bg-blue-100 rounded-full opacity-45 animate-pulse" style={{ animationDelay: '2.2s' }}></div>
        <div className="absolute bottom-24 left-20 w-20 h-20 bg-gradient-to-r from-gray-100 to-slate-100 rounded-full opacity-35 animate-bounce" style={{ animationDelay: '0.8s' }}></div>

        {/* Enhanced gradient orbs */}
        <div className="absolute top-1/6 left-1/6 w-80 h-80 bg-gradient-to-r from-gray-200/18 to-slate-200/18 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/6 right-1/6 w-72 h-72 bg-gradient-to-r from-slate-200/18 to-gray-200/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.8s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center bg-slate-100 text-slate-800 px-4 py-2 rounded-full text-sm font-semibold shadow-sm mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <HelpCircle className="h-4 w-4 mr-2" />
            Expert Answers • Common Questions • Industry Insights
          </div>

          <h2 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl text-slate-900 mb-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Frequently Asked Questions{" "}
            <span className="bg-gradient-to-r from-slate-600 via-gray-500 to-slate-700 bg-clip-text text-transparent animate-gradient">
              about Nutraceuticals
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-slate-600 to-gray-500 rounded-full mx-auto mb-6 animate-fade-in" style={{ animationDelay: '0.6s' }}></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            Get answers to the most common questions about nutraceutical manufacturing, 
            quality standards, and our services at United Laboratories Nepal.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
              <CardContent className="p-0">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-6 flex items-center justify-between hover:bg-slate-50/50 transition-colors duration-200 rounded-lg"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-slate-100 to-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-slate-600 font-semibold text-sm">{index + 1}</span>
                    </div>
                    <h3 className="font-poppins font-semibold text-lg text-slate-900 pr-4">
                      {faq.question}
                    </h3>
                  </div>
                  <div className="flex-shrink-0">
                    {openFAQ === index ? (
                      <ChevronUp className="h-5 w-5 text-slate-600" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-slate-600" />
                    )}
                  </div>
                </button>
                
                {openFAQ === index && (
                  <div className="px-6 pb-6 animate-fade-in">
                    <div className="ml-12 pt-4 border-t border-slate-100">
                      <p className="text-slate-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
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

export default FAQSection;