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
    <section className="relative py-16 bg-slate-50">
      {/* Professional Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-[0.015]">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23334155' fill-opacity='0.4'%3E%3Cpath d='M0 0h40v40H0V0zm40 40h40v40H40V40zm0-40h2l-2 2V0zm0 4l4-4h2l-6 6V4zm0 4l8-8h2L40 10V8zm0 4L52 0h2L40 14v-2zm0 4L56 0h2L40 18v-2zm0 4L60 0h2L40 22v-2zm0 4L64 0h2L40 26v-2zm0 4L68 0h2L40 30v-2zm0 4L72 0h2L40 34v-2zm0 4L76 0h2L40 38v-2zm0 4L80 0v2L42 40h-2zm4 0L80 4v2L46 40h-2zm4 0L80 8v2L50 40h-2zm4 0l28-28v2L54 40h-2zm4 0l24-24v2L58 40h-2zm4 0l20-20v2L62 40h-2zm4 0l16-16v2L66 40h-2zm4 0l12-12v2L70 40h-2zm4 0l8-8v2l-6 6h-2zm4 0l4-4v2L78 40h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        {/* Subtle accent lines */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-14 animate-fade-in-up">
          {/* Professional Badge */}
          <div className="inline-flex items-center bg-white border border-slate-200 text-slate-700 px-5 py-2 rounded-lg text-xs font-medium shadow-sm mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <HelpCircle className="h-4 w-4 mr-2 text-blue-600" />
            Expert Answers • Common Questions • Industry Insights
          </div>

          <h2 className="font-poppins font-bold text-2xl md:text-3xl lg:text-4xl text-slate-900 mb-6 animate-fade-in-up tracking-tight" style={{ animationDelay: '0.4s' }}>
            Frequently Asked Questions{" "}
            <span className="text-blue-600">
              about Nutraceuticals
            </span>
          </h2>
          
          <div className="w-12 h-0.5 bg-blue-600 mx-auto mb-6 animate-fade-in" style={{ animationDelay: '0.6s' }}></div>
          
          <p className="text-sm text-slate-600 max-w-4xl mx-auto leading-relaxed font-light animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            Get answers to the most common questions about nutraceutical manufacturing, 
            quality standards, and our services at United Laboratories Nepal.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-5xl mx-auto space-y-2">
          {faqs.map((faq, index) => (
            <Card key={index} className="bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
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
        <div className="text-center mt-16 animate-fade-in-up bg-white rounded-2xl p-8 max-w-4xl mx-auto border border-slate-200 shadow-sm" style={{ animationDelay: '1s' }}>
          <h3 className="font-poppins font-semibold text-xl text-slate-900 mb-3">
            Still Have Questions?
          </h3>
          <p className="text-slate-600 mb-6 leading-relaxed text-base">
            Our expert team is here to help you with any specific questions about nutraceutical manufacturing, 
            quality standards, or custom formulations.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => {
                const element = document.querySelector('#home');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 text-sm"
            >
              Contact Our Experts
            </button>
            <button
              onClick={() => {
                window.location.href = 'tel:+977-9851112329';
              }}
              className="border border-slate-300 text-slate-700 hover:bg-slate-100 font-medium px-6 py-3 rounded-lg transition-all duration-300 text-sm"
            >
              Call: +977-9851112329
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

export default FAQSection;