import { Building2, Users, Target, Globe, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const CompanyOverview = () => {
  const highlights = [
    {
      icon: Building2,
      title: "State-of-the-Art Facility",
      description: "Modern nutraceutical manufacturing facility in Birgunj, Nepal with latest technology and equipment.",
      color: "bg-blue-100 text-blue-600",
      delay: "0.2s",
    },
    {
      icon: Users,
      title: "Expert Leadership",
      description: "Founded by LB Gupta and Manish Goyel, industry veterans with decades of nutraceutical experience.",
      color: "bg-cyan-100 text-cyan-600",
      delay: "0.4s",
    },
    {
      icon: Target,
      title: "Quality Focus",
      description: "Committed to producing premium nutritional supplements and wellness products that meet international quality standards.",
      color: "bg-green-100 text-green-600",
      delay: "0.6s",
    },
    {
      icon: Globe,
      title: "Growing Reach",
      description: "Expanding our presence across Nepal and preparing for international markets with world-class products.",
      color: "bg-purple-100 text-purple-600",
      delay: "0.8s",
    },
  ];

  return (
    <section id="about" className="relative py-18 bg-white">
      {/* Professional Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23334155' fill-opacity='0.3'%3E%3Cpath d='M50 50c13.807 0 25-11.193 25-25S63.807 0 50 0 25 11.193 25 25s11.193 25 25 25zm0 25c13.807 0 25-11.193 25-25S63.807 50 50 50s-25 11.193-25 25 11.193 25 25 25zM25 25c0 13.807-11.193 25-25 25S-25 38.807-25 25s11.193-25 25-25 25 11.193 25 25zm50 0c0 13.807-11.193 25-25 25s-25-11.193-25-25 11.193-25 25-25 25 11.193 25 25z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        {/* Subtle accent lines */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 py-14 relative z-10">
        <div className="text-center mb-14 animate-fade-in-up">
          <h2 className="font-poppins font-bold text-2xl md:text-3xl lg:text-4xl text-slate-900 mb-5 animate-fade-in-up tracking-tight" style={{ animationDelay: '0.4s' }}>
            About United Laboratories{" "}
            <span className="text-blue-600">
              Nepal
            </span>
          </h2>

          <div className="w-12 h-0.5 bg-blue-600 mx-auto mb-9 animate-fade-in" style={{ animationDelay: '0.6s' }}></div>

          <div className="max-w-3xl mx-auto space-y-5 text-sm text-slate-600 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <p className="font-light">
              United Laboratories <span className="text-slate-900 font-medium">Nepal</span> was founded in 2025 with a clear mission: to provide
              Nepal and the region with access to high-quality, affordable nutraceutical products.
            
            
              Our founders, <strong className="text-slate-900 font-semibold">LB Gupta</strong> and{" "}
              <strong className="text-slate-900 font-semibold">Munish Goyel</strong>, bring together decades
              of experience in nutraceutical manufacturing, quality control, and business development.
            
            
              Located in the strategic industrial hub of <strong className="text-slate-900 font-semibold">Birgunj</strong>, our facility is designed to
              meet international GMP standards while serving the growing wellness needs of <span className="text-slate-900 font-medium">Nepal</span>.
            </p>
          </div>
        </div>

        

        {/* Founders Section */}
        <div className="bg-slate-50 rounded-2xl p-10 max-w-4xl mx-auto border border-slate-200 animate-fade-in-up" style={{ animationDelay: '1.4s' }}>
          <div className="text-center mb-10">
            <h3 className="font-poppins font-semibold text-2xl text-slate-900 mb-3">
              Leadership Team
            </h3>
            <p className="text-slate-600 text-base font-light max-w-xl mx-auto">
              Our experienced founders bring decades of expertise in nutraceutical manufacturing and business development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {/* Founder 1 */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-all duration-300">
              <div className="w-16 h-16 bg-slate-100 rounded-2xl mx-auto mb-5 flex items-center justify-center">
                <Users className="h-8 w-8 text-slate-600" />
              </div>
              <div className="text-center">
                <h4 className="font-poppins font-semibold text-xl text-slate-900 mb-2">
                  LB Gupta
                </h4>
                <p className="text-blue-600 font-medium mb-3">Co-Founder & Managing Director</p>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Decades of experience in pharmaceutical manufacturing and quality assurance, leading our strategic vision and operations.
                </p>
              </div>
            </div>

            {/* Founder 2 */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-all duration-300">
              <div className="w-16 h-16 bg-slate-100 rounded-2xl mx-auto mb-5 flex items-center justify-center">
                <Users className="h-8 w-8 text-slate-600" />
              </div>
              <div className="text-center">
                <h4 className="font-poppins font-semibold text-xl text-slate-900 mb-2">
                  Munish Goyel
                </h4>
                <p className="text-blue-600 font-medium mb-3">Co-Founder & Director</p>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Expert in business development and market expansion, driving our growth strategy and partnership initiatives.
                </p>
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

export default CompanyOverview;