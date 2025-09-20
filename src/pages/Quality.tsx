import { Shield, Award, CheckCircle, Building2, Users, Microscope } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Quality = () => {
  const certifications = [
    {
      title: "GMP Certified",
      description: "Good Manufacturing Practice compliance ensures highest quality standards",
      icon: <Shield className="h-8 w-8 text-primary" />,
      status: "Active",
    },
    {
      title: "ISO 9001:2015",
      description: "International standard for quality management systems",
      icon: <Award className="h-8 w-8 text-primary" />,
      status: "Certified",
    },
    {
      title: "WHO-GMP",
      description: "World Health Organization Good Manufacturing Practice",
      icon: <CheckCircle className="h-8 w-8 text-primary" />,
      status: "Compliant",
    },
  ];

  const qualityProcesses = [
    {
      title: "Raw Material Testing",
      description: "Every incoming raw material undergoes rigorous testing for purity and potency",
      icon: <Microscope className="h-6 w-6" />,
    },
    {
      title: "In-Process Controls",
      description: "Continuous monitoring during manufacturing to ensure consistency",
      icon: <Building2 className="h-6 w-6" />,
    },
    {
      title: "Final Product Testing",
      description: "Comprehensive testing before release to market",
      icon: <Users className="h-6 w-6" />,
    },
  ];

  const qualityCommitments = [
    "Zero tolerance for quality compromises",
    "Continuous improvement culture",
    "Advanced testing laboratory",
    "Trained quality personnel",
    "Regular third-party audits",
    "Customer feedback integration",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-20 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-poppins font-bold text-4xl md:text-5xl mb-6">
              Quality & Certifications
            </h1>
            <p className="text-xl leading-relaxed opacity-90">
              Our unwavering commitment to quality ensures that every product meets 
              the highest international standards for safety and efficacy.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-foreground mb-6">
              Our Certifications
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We maintain the highest industry certifications to ensure our products 
              meet global quality and safety standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <Card key={index} className="card-product text-center">
                <CardContent className="p-8">
                  <div className="mb-6">
                    {cert.icon}
                  </div>
                  <Badge variant="outline" className="mb-4">
                    {cert.status}
                  </Badge>
                  <h3 className="font-poppins font-semibold text-xl mb-3">
                    {cert.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {cert.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Process */}
      <section className="py-20 trust-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-foreground mb-6">
              Our Manufacturing Excellence
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              State-of-the-art facilities and stringent quality control processes 
              ensure every product meets our exacting standards.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                {qualityProcesses.map((process, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                      {process.icon}
                    </div>
                    <div>
                      <h3 className="font-poppins font-semibold text-lg mb-2">
                        {process.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {process.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card p-8 rounded-lg border">
              <h3 className="font-poppins font-bold text-2xl mb-6">
                Our Quality Commitments
              </h3>
              <div className="space-y-4">
                {qualityCommitments.map((commitment, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{commitment}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Statistics */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-foreground mb-6">
              Quality by Numbers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "99.9%", label: "Product Quality Rate" },
              { number: "100%", label: "Batch Testing" },
              { number: "24/7", label: "Quality Monitoring" },
              { number: "2025", label: "Year Established" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-poppins font-bold text-4xl text-primary mb-2">
                  {stat.number}
                </div>
                <p className="text-muted-foreground font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-6">
              Questions About Our Quality Standards?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Our quality team is always ready to discuss our processes, 
              certifications, and quality assurance measures.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="btn-hero inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md"
              >
                Contact Quality Team
              </a>
              <a 
                href="tel:+977-9851112329" 
                className="btn-secondary inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md"
              >
                Call: +977-9851112329
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Quality;