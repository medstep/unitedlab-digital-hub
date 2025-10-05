import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
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
    <section className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-slate-50">

      {/* Extended Hero Background Blend */}
      <div className="absolute inset-0">
        {/* Seamless gradient continuation from Hero */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/40 via-white/60 to-slate-50/30"></div>
        <div className="absolute inset-0 bg-gradient-radial from-white/50 via-blue-50/20 to-transparent"></div>
        
        {/* Subtle floating elements for continuity */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-blue-100/20 to-slate-100/15 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-slate-100/15 to-blue-100/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center text-slate-600 text-sm font-medium mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <HelpCircle className="h-4 w-4 mr-2 text-blue-600" />
            Expert Answers • Common Questions • Industry Insights
          </div>

          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-slate-900 mb-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Frequently Asked Questions{" "}
            <span className="text-blue-600">
              about Nutraceuticals
            </span>
          </h2>
          
          <div className="w-12 h-0.5 bg-blue-600 mx-auto mb-8 animate-expand" style={{ animationDelay: '0.6s' }}></div>
          
          
        </div>

        {/* FAQ Items */}
        <div className="max-w-5xl mx-auto space-y-2">
          {faqs.map((faq, index) => (
            <Card key={index} className="bg-white border border-slate-100 hover:border-blue-200 shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in-up" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
              <CardContent className="p-0">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-5 flex items-center justify-between hover:bg-slate-50 transition-colors duration-200"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-7 h-7 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-slate-600 font-semibold text-xs">{index + 1}</span>
                    </div>
                    <h3 className="font-poppins font-semibold text-base text-slate-900 pr-4 leading-tight">
                      {faq.question}
                    </h3>
                  </div>
                  <div className="flex-shrink-0 ml-4">
                    {openFAQ === index ? (
                      <ChevronUp className="h-4 w-4 text-slate-500" />
                    ) : (
                      <ChevronDown className="h-4 w-4 text-slate-500" />
                    )}
                  </div>
                </button>
                
                {openFAQ === index && (
                  <div className="px-5 pb-5 animate-fade-in">
                    <div className="ml-11 pt-4 border-t border-slate-100">
                      <p className="text-slate-600 leading-relaxed text-xs">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Support Section */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <div className="bg-white rounded-xl p-8 max-w-4xl mx-auto border border-slate-100 hover:border-blue-200 transition-all duration-300">
            <h3 className="font-poppins font-semibold text-xl text-slate-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-slate-600 mb-6 text-sm leading-relaxed">
              Our expert team is here to help you with any specific questions about nutraceutical manufacturing, 
              quality standards, or custom formulations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  const element = document.querySelector('#get-in-touch');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                Contact Our Experts
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

export default FAQSection;