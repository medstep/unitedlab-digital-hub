import { CardContent } from "@/components/ui/card";
import { Card } from "@/components/ui/card";
import { MapPin, Users, Target, Award, Factory } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Background with same styling as homepage */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
            style={{
              backgroundImage: 'url(/manufacturing-facility.png)',
            }}
          ></div>
          <div className="absolute inset-0 backdrop-blur-sm bg-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-slate-800/50 to-slate-900/70"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-poppins font-bold text-5xl md:text-6xl text-white mb-6 leading-tight drop-shadow-lg">
              About <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">United Laboratories</span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed max-w-2xl mx-auto font-light drop-shadow-md">
              Committed to improving wellness in Nepal through innovative nutraceutical manufacturing.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-poppins font-bold text-4xl text-slate-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                United Laboratories Nepal was founded in 2025 by industry veterans Lal Babu Prasad and Munish Goyel,
                bringing decades of combined experience in nutraceutical excellence to Nepal.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Factory className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Modern Facility</h3>
                <p className="text-slate-600 text-sm">State-of-the-art manufacturing in Birgunj</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">GMP Certified</h3>
                <p className="text-slate-600 text-sm">International quality standards</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-cyan-600" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Expert Team</h3>
                <p className="text-slate-600 text-sm">50+ experienced professionals</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mr-4">
                    <Target className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-poppins font-bold text-2xl text-slate-900">Our Mission</h3>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  To manufacture high-quality, affordable nutraceutical products that improve wellness
                  outcomes and enhance quality of life for people across Nepal and beyond.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-sm">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mr-4">
                    <Award className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="font-poppins font-bold text-2xl text-slate-900">Our Vision</h3>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  To become Nepal's leading nutraceutical company, recognized for innovation,
                  quality, and social responsibility in advancing global wellness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 trust-gradient">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="card-professional">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-poppins font-bold text-2xl text-foreground">Our Mission</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To manufacture and supply high-quality, affordable nutraceutical products
                  that improve wellness outcomes and enhance the quality of life for people
                  across Nepal and beyond. We are committed to maintaining the highest
                  standards of safety, efficacy, and reliability in all our products.
                </p>
              </CardContent>
            </Card>

            <Card className="card-professional">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mr-4">
                    <Award className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="font-poppins font-bold text-2xl text-foreground">Our Vision</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To become Nepal's leading nutraceutical company, recognized for innovation,
                  quality, and social responsibility. We envision a future where access to
                  essential nutritional supplements is universal, and where our products contribute
                  significantly to global wellness and health.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-poppins font-bold text-4xl text-slate-900 mb-4">
                Our Location
              </h2>
              <p className="text-lg text-slate-600">
                Strategically located in Birgunj, Nepal's industrial hub
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-poppins font-bold text-xl text-slate-900">Birgunj, Nepal</h3>
                    <p className="text-slate-600">Province 2, Nepal</p>
                  </div>
                </div>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Our manufacturing facility is strategically positioned in Birgunj, providing excellent
                  connectivity for raw material sourcing and product distribution across Nepal and neighboring regions.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-slate-600">Major transportation networks</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-slate-600">Skilled workforce access</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-slate-600">Regional expansion potential</span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-lg p-8 text-center">
                <div className="text-6xl mb-4">🏭</div>
                <h4 className="font-poppins font-semibold text-lg text-slate-900 mb-2">
                  Manufacturing Excellence
                </h4>
                <p className="text-slate-600">
                  State-of-the-art facility designed for optimal production
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;