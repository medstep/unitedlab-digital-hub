import { Users, MapPin, Calendar, Award, Building2, Target } from "lucide-react";

const CompanyOverview = () => {
  return (
    <section id="about" className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-slate-50">

      {/* Extended Hero Background Blend */}
      <div className="absolute inset-0">
        {/* Seamless gradient continuation from Hero */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/40 via-white/60 to-slate-50/30"></div>
        <div className="absolute inset-0 bg-gradient-radial from-white/50 via-blue-50/20 to-transparent"></div>

        {/* Subtle floating elements for continuity */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-blue-100/20 to-cyan-100/15 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-r from-cyan-100/15 to-blue-100/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">

        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center text-slate-600 text-sm font-medium mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Building2 className="h-4 w-4 mr-2 text-blue-600" />
            Est. 2025 • Birgunj, Nepal • WHO-GMP Certified
          </div>

          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-slate-900 mb-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            About United Laboratories{" "}
            <span className="text-blue-600">
              Nepal
            </span>
          </h2>

          <div className="w-12 h-0.5 bg-blue-600 mx-auto mb-8 animate-expand" style={{ animationDelay: '0.6s' }}></div>
        </div>

        {/* Main Content - Creative Timeline Layout */}
        <div className="max-w-6xl mx-auto">

          {/* Company Story Timeline */}
          <div className="relative mb-20">
            {/* Central Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-slate-200 hidden lg:block"></div>

            {/* Timeline Items */}
            <div className="space-y-16 lg:space-y-24">

              {/* Mission Statement */}
              <div className="flex flex-col lg:flex-row items-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                <div className="lg:w-1/2 lg:pr-12 mb-8 lg:mb-0">
                  <div className="bg-white rounded-xl p-6 border border-slate-100 hover:border-blue-200 transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                        <Target className="h-5 w-5 text-blue-600" />
                      </div>
                      <h3 className="font-semibold text-lg text-slate-900">Our Mission</h3>
                    </div>
                    <p className="text-slate-600 leading-relaxed text-sm">
                      United Laboratories <span className="text-slate-900 font-medium">Nepal</span> was founded in 2025 with a clear mission: to provide
                      Nepal and the region with access to high-quality, affordable nutraceutical products that meet international standards.
                    </p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden lg:flex w-4 h-4 bg-blue-600 rounded-full border-2 border-white z-10 flex-shrink-0"></div>

                <div className="lg:w-1/2 lg:pl-12">
                  <div className="flex items-center space-x-4 text-slate-600">
                    <Calendar className="h-5 w-5 text-blue-500" />
                    <span className="font-medium">Founded in 2025</span>
                  </div>
                </div>
              </div>

              {/* Location & Facility */}
              <div className="flex flex-col lg:flex-row-reverse items-center animate-fade-in-up" style={{ animationDelay: '1s' }}>
                <div className="lg:w-1/2 lg:pl-12 mb-8 lg:mb-0">
                  <div className="bg-white rounded-xl p-6 border border-slate-100 hover:border-blue-200 transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                        <MapPin className="h-5 w-5 text-blue-600" />
                      </div>
                      <h3 className="font-semibold text-lg text-slate-900">Strategic Location</h3>
                    </div>
                    <p className="text-slate-600 leading-relaxed text-sm">
                      Located in the strategic industrial hub of <span className="text-slate-900 font-medium">Birgunj</span>, our facility is designed to
                      meet international GMP standards while serving the growing wellness needs of Nepal and the broader South Asian region.
                    </p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden lg:flex w-4 h-4 bg-blue-600 rounded-full border-2 border-white z-10 flex-shrink-0"></div>

                <div className="lg:w-1/2 lg:pr-12">
                  <div className="flex items-center space-x-4 text-slate-600">
                    <Building2 className="h-5 w-5 text-cyan-500" />
                    <span className="font-medium">Birgunj Industrial Hub</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Leadership Team - Creative Card Layout */}
          <div className="animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
            <div className="text-center mb-12">
              <h3 className="font-poppins font-semibold text-2xl text-slate-900 mb-4">
                Leadership Team
              </h3>
              <p className="text-slate-600 max-w-2xl mx-auto text-sm">
                Our experienced founders bring decades of expertise in nutraceutical manufacturing and business development.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

              {/* Founder 1 - LB Gupta */}
              <div className="group">
                <div className="bg-white rounded-xl p-6 border border-slate-100 hover:border-blue-200 transition-all duration-300">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="h-8 w-8 text-blue-600" />
                    </div>

                    <h4 className="font-poppins font-semibold text-lg text-slate-900 mb-2">
                      LB Gupta
                    </h4>
                    <p className="text-blue-600 font-medium mb-3 text-sm">Co-Founder & Managing Director</p>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      Decades of experience in pharmaceutical manufacturing and quality assurance, leading our strategic vision and operations.
                    </p>
                  </div>
                </div>
              </div>

              {/* Founder 2 - Munish Goyel */}
              <div className="group">
                <div className="bg-white rounded-xl p-6 border border-slate-100 hover:border-blue-200 transition-all duration-300">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="h-8 w-8 text-blue-600" />
                    </div>

                    <h4 className="font-poppins font-semibold text-lg text-slate-900 mb-2">
                      Munish Goyel
                    </h4>
                    <p className="text-blue-600 font-medium mb-3 text-sm">Co-Founder & Director</p>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      Expert in business development and market expansion, driving our growth strategy and partnership initiatives.
                    </p>
                  </div>
                </div>
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

export default CompanyOverview;