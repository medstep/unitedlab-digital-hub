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
    <section id="about" className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50 overflow-hidden">
      {/* Animated Background Elements - matching hero section */}
      <div className="absolute inset-0">
        {/* Subtle radial blur background */}
        <div className="absolute inset-0 bg-gradient-radial from-cyan-100/20 via-transparent to-blue-100/15 blur-sm"></div>
        <div className="absolute top-1/3 right-1/4 w-[100%] h-[100%] bg-gradient-radial from-white/30 via-cyan-50/15 to-transparent blur-2xl opacity-50"></div>

        {/* Floating geometric shapes */}
        <div className="absolute top-16 right-16 w-16 h-16 bg-cyan-100 rounded-full opacity-40 animate-pulse"></div>
        <div className="absolute top-32 left-20 w-12 h-12 bg-blue-100 rounded-lg opacity-50 animate-bounce" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-32 right-32 w-20 h-20 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-full opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-16 left-16 w-14 h-14 bg-blue-200 rounded-full opacity-40 animate-bounce" style={{ animationDelay: '0.8s' }}></div>

        {/* Enhanced gradient orbs */}
        <div className="absolute top-1/5 left-1/5 w-80 h-80 bg-gradient-to-r from-cyan-200/20 to-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/5 right-1/5 w-72 h-72 bg-gradient-to-r from-blue-200/20 to-cyan-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.8s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">

          <h2 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl text-slate-900 mb-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            About United Laboratories{" "}
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 bg-clip-text text-transparent animate-gradient">
              Nepal
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mx-auto mb-6 animate-fade-in" style={{ animationDelay: '0.6s' }}></div>
          <h3><p> 
                United Laboratories <span className="text-blue-600 font-semibold">Nepal</span> was founded in 2025 with a clear mission: to provide
                Nepal and the region with access to high-quality, affordable nutraceutical products.
              </p>
              <p>
                Our founders, <strong className="text-slate-900">LB Gupta</strong> and{" "}
                <strong className="text-slate-900">Munish Goyel</strong>, bring together decades
                of experience in nutraceutical manufacturing, quality control, and business development.
              </p>
              <p>
                Located in the strategic industrial hub of <strong className="text-slate-900">Birgunj</strong>, our facility is designed to
                meet international GMP standards while serving the growing wellness needs of <span className="text-blue-600 font-semibold">Nepal</span>.
              </p>
              </h3>
        </div>

       
        
        {/* Founders Section */}
        <div className="text-center animate-fade-in-up" style={{ animationDelay: '1.4s' }}>
          <h3 className="font-poppins font-bold text-2xl md:text-3xl text-slate-900 mb-8">
            Meet Our Founders
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {/* Founder 1 */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                <div className="w-28 h-28 bg-gradient-to-br from-slate-200 to-slate-300 rounded-full flex items-center justify-center">
                  <Users className="h-12 w-12 text-slate-500" />
                </div>
              </div>
              <h4 className="font-poppins font-bold text-xl text-slate-900 mb-2">
                LB Gupta
              </h4>
              <p className="text-slate-600 text-sm">Co-Founder & MD</p>
            </div>

            {/* Founder 2 */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <div className="w-32 h-32 bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                <div className="w-28 h-28 bg-gradient-to-br from-slate-200 to-slate-300 rounded-full flex items-center justify-center">
                  <Users className="h-12 w-12 text-slate-500" />
                </div>
              </div>
              <h4 className="font-poppins font-bold text-xl text-slate-900 mb-2">
                Munish Goyel
              </h4>
              <p className="text-slate-600 text-sm">Co-Founder</p>
            </div>
          </div>
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

export default CompanyOverview;