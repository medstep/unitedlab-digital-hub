import { Building2, Users, Target, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const CompanyOverview = () => {
  const highlights = [
    {
      icon: Building2,
      title: "State-of-the-Art Facility",
      description: "Modern nutraceutical manufacturing facility in Birgunj, Nepal with latest technology and equipment.",
      color: "bg-primary/15 text-primary",
      borderColor: "border-primary/20",
    },
    {
      icon: Users,
      title: "Expert Leadership",
      description: "Founded by Lal Babu Prasad and Manish Goyel, industry veterans with decades of nutraceutical experience.",
      color: "bg-secondary/15 text-secondary",
      borderColor: "border-secondary/20",
    },
    {
      icon: Target,
      title: "Quality Focus",
      description: "Committed to producing premium nutritional supplements and wellness products that meet international quality standards.",
      color: "bg-trust/15 text-trust",
      borderColor: "border-trust/20",
    },
    {
      icon: Globe,
      title: "Growing Reach",
      description: "Expanding our presence across Nepal and preparing for international markets with world-class products.",
      color: "bg-accent-orange/15 text-accent-orange",
      borderColor: "border-accent-orange/20",
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
            Established in 2025, we are Nepal's emerging leader in nutraceutical manufacturing, 
            dedicated to improving wellness through innovative and quality products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card key={index} className={`card-professional professional-hover border ${item.borderColor}`}>
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <Icon className="h-8 w-8" />
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
                Nepal and the region with access to high-quality, affordable nutraceutical products.
              </p>
              <p>
                Our founders, <strong className="text-foreground">Lal Babu Prasad</strong> and{" "}
                <strong className="text-foreground">Manish Goyel</strong>, bring together decades 
                of experience in nutraceutical manufacturing, quality control, and business development.
              </p>
              <p>
                Located in the strategic industrial hub of Birgunj, our facility is designed to 
                meet international GMP standards while serving the growing wellness needs of Nepal.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Stats Grid */}
            <div className="card-professional p-6 text-center border border-primary/20">
              <div className="font-poppins font-bold text-3xl text-primary mb-2">2025</div>
              <div className="text-sm text-muted-foreground">Founded</div>
            </div>
            <div className="card-professional p-6 text-center border border-secondary/20">
              <div className="font-poppins font-bold text-3xl text-secondary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Team Members</div>
            </div>
            <div className="card-professional p-6 text-center border border-trust/20">
              <div className="font-poppins font-bold text-3xl text-trust mb-2">GMP</div>
              <div className="text-sm text-muted-foreground">Certified</div>
            </div>
            <div className="card-professional p-6 text-center border border-accent-orange/20">
              <div className="font-poppins font-bold text-3xl text-accent-orange mb-2">ISO</div>
              <div className="text-sm text-muted-foreground">Compliant</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;