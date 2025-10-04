import { Users, MapPin, Calendar, Award, Building2, Target } from "lucide-react";

const CompanyOverview = () => {
  return (
    <section id="about" className="relative py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">

      {/* Dynamic Background Elements */}
      <div className="absolute inset-0">
        {/* Animated gradient mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 via-transparent to-cyan-100/15 animate-gradient-shift"></div>

        {/* Floating geometric elements */}
        <div className="absolute top-20 right-20 w-32 h-32 border-2 border-blue-200/30 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-32 left-16 w-24 h-24 bg-gradient-to-r from-cyan-200/20 to-blue-200/20 rounded-lg rotate-45 animate-pulse"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-blue-100/40 rounded-full animate-bounce-slow"></div>

        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23334155' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3Ccircle cx='10' cy='10' r='1'/%3E%3Ccircle cx='50' cy='10' r='1'/%3E%3Ccircle cx='10' cy='50' r='1'/%3E%3Ccircle cx='50' cy='50' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">

        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 px-6 py-3 rounded-full text-sm font-medium shadow-lg mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Building2 className="h-4 w-4 mr-2" />
            Est. 2025 • Birgunj, Nepal • WHO-GMP Certified
          </div>

          <h2 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl text-slate-900 mb-6 animate-fade-in-up tracking-tight" style={{ animationDelay: '0.4s' }}>
            About United Laboratories{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Nepal
            </span>
          </h2>

          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full mx-auto mb-8 animate-expand" style={{ animationDelay: '0.6s' }}></div>
        </div>

        {/* Main Content - Creative Timeline Layout */}
        <div className="max-w-6xl mx-auto">

          {/* Company Story Timeline */}
          <div className="relative mb-20">
            {/* Central Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-200 via-cyan-200 to-blue-200 rounded-full hidden lg:block"></div>

            {/* Timeline Items */}
            <div className="space-y-16 lg:space-y-24">

              {/* Mission Statement */}
              <div className="flex flex-col lg:flex-row items-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                <div className="lg:w-1/2 lg:pr-12 mb-8 lg:mb-0">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-blue-100/50 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4">
                        <Target className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="font-bold text-xl text-slate-900">Our Mission</h3>
                    </div>
                    <p className="text-slate-600 leading-relaxed">
                      United Laboratories <span className="text-slate-900 font-semibold">Nepal</span> was founded in 2025 with a clear mission: to provide
                      Nepal and the region with access to high-quality, affordable nutraceutical products that meet international standards.
                    </p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden lg:flex w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full border-4 border-white shadow-lg z-10 flex-shrink-0"></div>

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
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-cyan-100/50 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mr-4">
                        <MapPin className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="font-bold text-xl text-slate-900">Strategic Location</h3>
                    </div>
                    <p className="text-slate-600 leading-relaxed">
                      Located in the strategic industrial hub of <span className="text-slate-900 font-semibold">Birgunj</span>, our facility is designed to
                      meet international GMP standards while serving the growing wellness needs of Nepal and the broader South Asian region.
                    </p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden lg:flex w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full border-4 border-white shadow-lg z-10 flex-shrink-0"></div>

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
              <h3 className="font-poppins font-bold text-2xl md:text-3xl text-slate-900 mb-4">
                Leadership Team
              </h3>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Our experienced founders bring decades of expertise in nutraceutical manufacturing and business development.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

              {/* Founder 1 - LB Gupta */}
              <div className="group relative">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-blue-100/50 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1">

                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-3xl rounded-tr-2xl"></div>

                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Users className="h-10 w-10 text-white" />
                    </div>

                    <div className="text-center">
                      <h4 className="font-poppins font-bold text-xl text-slate-900 mb-2">
                        LB Gupta
                      </h4>
                      <p className="text-blue-600 font-semibold mb-4">Co-Founder & Managing Director</p>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        Decades of experience in pharmaceutical manufacturing and quality assurance, leading our strategic vision and operations with unwavering commitment to excellence.
                      </p>
                    </div>
                  </div>

                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                </div>
              </div>

              {/* Founder 2 - Munish Goyel */}
              <div className="group relative">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-cyan-100/50 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:-rotate-1">

                  {/* Decorative corner */}
                  <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-br-3xl rounded-tl-2xl"></div>

                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Users className="h-10 w-10 text-white" />
                    </div>

                    <div className="text-center">
                      <h4 className="font-poppins font-bold text-xl text-slate-900 mb-2">
                        Munish Goyel
                      </h4>
                      <p className="text-cyan-600 font-semibold mb-4">Co-Founder & Director</p>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        Expert in business development and market expansion, driving our growth strategy and partnership initiatives across Nepal and international markets.
                      </p>
                    </div>
                  </div>

                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Company Values Badge */}
          <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '1.4s' }}>
            <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-2xl shadow-xl">
              <Award className="h-6 w-6 mr-3" />
              <span className="font-semibold">Committed to Excellence • Innovation • Quality</span>
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
          100% { width: 4rem; }
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
      `}</style>
    </section>
  );
};

export default CompanyOverview;