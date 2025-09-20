import { Link } from "react-router-dom";
import { ArrowRight, Pill, Leaf, Heart, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ProductShowcase = () => {
  const categories = [
    {
      icon: Pill,
      title: "Nutraceutical Products",
      description: "High-quality nutritional supplements and wellness solutions for optimal health.",
      items: ["Wellness Support", "Immune Boosters", "Energy Enhancers", "Vitality Products"],
      color: "bg-primary/15 text-primary",
      borderColor: "border-primary/20 hover:border-primary/40",
    },
    {
      icon: Leaf,
      title: "Herbal Supplements",
      description: "Natural health products combining traditional wisdom with modern science.",
      items: ["Ayurvedic Formulas", "Plant Extracts", "Natural Remedies", "Immune Support"],
      color: "bg-trust/15 text-trust",
      borderColor: "border-trust/20 hover:border-trust/40",
    },
    {
      icon: Heart,
      title: "Nutritional Supplements",
      description: "Essential vitamins, minerals, and nutrients for optimal health and wellness.",
      items: ["Multivitamins", "Protein Supplements", "Mineral Complexes", "Health Boosters"],
      color: "bg-secondary/15 text-secondary",
      borderColor: "border-secondary/20 hover:border-secondary/40",
    },
    {
      icon: Brain,
      title: "Specialized Formulations",
      description: "Advanced therapeutic products for specific health needs and conditions.",
      items: ["Neurological Support", "Hormonal Balance", "Digestive Health", "Joint Care"],
      color: "bg-accent-purple/15 text-accent-purple",
      borderColor: "border-accent-purple/20 hover:border-accent-purple/40",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-foreground mb-4">
            Our Product Categories
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From essential nutritional supplements to specialized formulations, we manufacture a comprehensive 
            range of nutraceutical products to meet diverse wellness needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index} className={`card-product group border ${category.borderColor} transition-all duration-200`}>
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${category.color}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-poppins font-semibold text-xl mb-3 text-foreground group-hover:text-primary transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {category.description}
                      </p>
                      <div className="grid grid-cols-2 gap-2">
                        {category.items.map((item, itemIndex) => (
                          <div key={item} className="flex items-center text-sm">
                            <div className={`w-1.5 h-1.5 rounded-full mr-2 ${
                              itemIndex === 0 ? 'bg-primary' :
                              itemIndex === 1 ? 'bg-secondary' :
                              itemIndex === 2 ? 'bg-trust' : 'bg-accent-orange'
                            }`}></div>
                            <span className="text-muted-foreground">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Link to="/products">
              <Button size="lg" className="btn-hero group">
                View All Products
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Request Product Catalog
              </Button>
            </Link>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Need a custom formulation? Contact us for specialized nutraceutical solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;