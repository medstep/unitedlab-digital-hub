import { MapPin, Users, Target, Award, Calendar, Factory } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const founders = [
    {
      name: "Lal Babu Prasad",
      role: "Co-Founder & CEO",
      description: "20+ years of experience in pharmaceutical manufacturing and business development.",
    },
    {
      name: "Manish Goyel",
      role: "Co-Founder & CTO",
      description: "Expert in pharmaceutical R&D, quality control, and regulatory compliance.",
    },
  ];

  const milestones = [
    {
      year: "2025",
      title: "Company Founded",
      description: "United Laboratories Nepal established in Birgunj",
    },
    {
      year: "2025",
      title: "GMP Certification",
      description: "Achieved Good Manufacturing Practice certification",
    },
    {
      year: "2025",
      title: "Production Launch",
      description: "Commenced manufacturing of pharmaceutical products",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-20 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-poppins font-bold text-4xl md:text-5xl mb-6">
              About United Laboratories Nepal
            </h1>
            <p className="text-xl leading-relaxed opacity-90">
              We are committed to improving healthcare in Nepal through innovative 
              pharmaceutical manufacturing and unwavering quality standards.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 trust-gradient">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="font-poppins font-bold text-3xl md:text-4xl text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  United Laboratories Nepal was born from a vision to bridge the gap between 
                  high-quality pharmaceutical products and accessibility in Nepal. Founded in 2025 
                  by industry veterans Lal Babu Prasad and Manish Goyel, our company represents 
                  decades of combined experience in pharmaceutical excellence.
                </p>
                <p>
                  Located strategically in Birgunj, Nepal's industrial gateway, our state-of-the-art 
                  facility is designed to meet international standards while serving local healthcare needs. 
                  We combine traditional pharmaceutical wisdom with modern manufacturing technologies.
                </p>
                <p>
                  Our commitment extends beyond manufacturing - we are dedicated to advancing healthcare 
                  education, supporting medical research, and contributing to Nepal's pharmaceutical 
                  independence and growth.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Card className="card-professional">
                <CardContent className="p-6 text-center">
                  <Factory className="h-8 w-8 text-primary mx-auto mb-3" />
                  <div className="font-poppins font-bold text-2xl text-foreground mb-2">Modern</div>
                  <div className="text-sm text-muted-foreground">Manufacturing Facility</div>
                </CardContent>
              </Card>
              <Card className="card-professional">
                <CardContent className="p-6 text-center">
                  <Award className="h-8 w-8 text-primary mx-auto mb-3" />
                  <div className="font-poppins font-bold text-2xl text-foreground mb-2">GMP</div>
                  <div className="text-sm text-muted-foreground">Certified Quality</div>
                </CardContent>
              </Card>
              <Card className="card-professional">
                <CardContent className="p-6 text-center">
                  <Users className="h-8 w-8 text-primary mx-auto mb-3" />
                  <div className="font-poppins font-bold text-2xl text-foreground mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Expert Team</div>
                </CardContent>
              </Card>
              <Card className="card-professional">
                <CardContent className="p-6 text-center">
                  <Target className="h-8 w-8 text-primary mx-auto mb-3" />
                  <div className="font-poppins font-bold text-2xl text-foreground mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Quality Focus</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-foreground mb-4">
              Meet Our Founders
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Led by industry veterans with a shared vision for pharmaceutical excellence in Nepal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {founders.map((founder, index) => (
              <Card key={index} className="card-professional professional-hover">
                <CardContent className="p-8 text-center">
                  <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="font-poppins font-bold text-xl text-foreground mb-2">
                    {founder.name}
                  </h3>
                  <div className="text-primary font-medium mb-4">{founder.role}</div>
                  <p className="text-muted-foreground leading-relaxed">
                    {founder.description}
                  </p>
                </CardContent>
              </Card>
            ))}
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
                  To manufacture and supply high-quality, affordable pharmaceutical products 
                  that improve health outcomes and enhance the quality of life for people 
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
                  To become Nepal's leading pharmaceutical company, recognized for innovation, 
                  quality, and social responsibility. We envision a future where access to 
                  essential medicines is universal, and where our products contribute 
                  significantly to global health and wellness.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-foreground mb-4">
              Our Location
            </h2>
            <p className="text-lg text-muted-foreground">
              Strategically located in Birgunj, Nepal's industrial hub
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <MapPin className="h-8 w-8 text-primary mr-4" />
                <div>
                  <h3 className="font-poppins font-bold text-xl text-foreground">Birgunj, Nepal</h3>
                  <p className="text-muted-foreground">Province 2, Nepal</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our manufacturing facility is located in Birgunj, one of Nepal's most important 
                industrial and commercial centers. This strategic location provides excellent 
                connectivity for raw material sourcing and product distribution across Nepal 
                and neighboring regions.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-muted-foreground">Close proximity to major transportation networks</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-muted-foreground">Access to skilled pharmaceutical workforce</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-muted-foreground">Strategic position for regional expansion</span>
                </div>
              </div>
            </div>

            <div className="bg-muted rounded-lg p-8 text-center">
              <div className="text-6xl mb-4">🏭</div>
              <h4 className="font-poppins font-semibold text-lg text-foreground mb-2">
                Manufacturing Excellence
              </h4>
              <p className="text-muted-foreground">
                State-of-the-art facility designed for optimal pharmaceutical production
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;