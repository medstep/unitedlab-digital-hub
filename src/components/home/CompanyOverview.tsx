import { Building2, Users, Target, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const CompanyOverview = () => {
  const highlights = [
    {
      icon: Building2,
      title: "State-of-the-Art Facility",
      description: "Modern pharmaceutical manufacturing facility in Birgunj, Nepal with latest technology and equipment.",
    },
    {
      icon: Users,
      title: "Expert Leadership",
      description: "Founded by Lal Babu Prasad and Manish Goyel, industry veterans with decades of pharmaceutical experience.",
    },
    {
      icon: Target,
      title: "Quality Focus",
      description: "Committed to producing premium medicines and supplements that meet international quality standards.",
    },
    {
      icon: Globe,
      title: "Growing Reach",
      description: "Expanding our presence across Nepal and preparing for international markets with world-class products.",
    },
  ];

  return (
    <section className="py-20 trust-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-foreground mb-4">
            About United Laboratories Nepal
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Established in 2025, we are Nepal's emerging leader in pharmaceutical manufacturing, 
            dedicated to improving healthcare through innovative and quality products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card key={index} className="card-professional professional-hover border-0">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-poppins font-semibold text-lg mb-3 text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Company Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="font-poppins font-bold text-2xl md:text-3xl text-foreground mb-6">
              Our Journey & Vision
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                United Laboratories Nepal was founded in 2025 with a clear mission: to provide 
                Nepal and the region with access to high-quality, affordable pharmaceutical products.
              </p>
              <p>
                Our founders, <strong className="text-foreground">Lal Babu Prasad</strong> and{" "}
                <strong className="text-foreground">Manish Goyel</strong>, bring together decades 
                of experience in pharmaceutical manufacturing, quality control, and business development.
              </p>
              <p>
                Located in the strategic industrial hub of Birgunj, our facility is designed to 
                meet international GMP standards while serving the growing healthcare needs of Nepal.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Stats Grid */}
            <div className="card-professional p-6 text-center">
              <div className="font-poppins font-bold text-3xl text-primary mb-2">2025</div>
              <div className="text-sm text-muted-foreground">Founded</div>
            </div>
            <div className="card-professional p-6 text-center">
              <div className="font-poppins font-bold text-3xl text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Team Members</div>
            </div>
            <div className="card-professional p-6 text-center">
              <div className="font-poppins font-bold text-3xl text-primary mb-2">GMP</div>
              <div className="text-sm text-muted-foreground">Certified</div>
            </div>
            <div className="card-professional p-6 text-center">
              <div className="font-poppins font-bold text-3xl text-primary mb-2">ISO</div>
              <div className="text-sm text-muted-foreground">Compliant</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;