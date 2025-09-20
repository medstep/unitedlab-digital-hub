import { useState } from "react";
import { Search, Filter, Package, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Mock product data - will be replaced with Supabase data
  const products = [
    {
      id: 1,
      name: "Vitamin D3 Complex",
      category: "Nutritional Supplements",
      description: "High-potency Vitamin D3 supplement for bone health and immune support.",
      image: "💊",
      features: ["5000 IU per capsule", "Enhanced absorption", "GMP certified"],
    },
    {
      id: 2,
      name: "Omega-3 Fish Oil",
      category: "Nutritional Supplements",
      description: "Premium fish oil supplement rich in EPA and DHA for heart and brain health.",
      image: "🐟",
      features: ["1000mg per capsule", "Molecularly distilled", "No fishy aftertaste"],
    },
    {
      id: 3,
      name: "Multivitamin Complex",
      category: "Nutritional Supplements",
      description: "Complete daily multivitamin with essential vitamins and minerals.",
      image: "💊",
      features: ["24 essential nutrients", "Time-release formula", "Easy to swallow"],
    },
    {
      id: 4,
      name: "Herbal Immunity Booster",
      category: "Herbal Supplements",
      description: "Natural immune system support with traditional Ayurvedic herbs.",
      image: "🌿",
      features: ["100% natural", "Ayurvedic formula", "No artificial additives"],
    },
    {
      id: 5,
      name: "Joint Care Formula",
      category: "Specialized Formulations",
      description: "Advanced joint support with glucosamine, chondroitin, and MSM.",
      image: "🦴",
      features: ["Triple action formula", "Clinically tested", "Fast absorption"],
    },
    {
      id: 6,
      name: "Probiotic Complex",
      category: "Pharmaceutical Products",
      description: "Multi-strain probiotic for digestive health and gut microbiome support.",
      image: "🧬",
      features: ["15 billion CFU", "10 probiotic strains", "Shelf-stable"],
    },
  ];

  const categories = ["All", "Nutritional Supplements", "Herbal Supplements", "Pharmaceutical Products", "Specialized Formulations"];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const RequestQuoteDialog = ({ product }: { product: any }) => (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="btn-hero">Request Price</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Request Price Quote</DialogTitle>
          <DialogDescription>
            Get a detailed price quote for {product.name}. Our team will contact you within 24 hours.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div className="p-4 bg-muted rounded-lg">
            <h4 className="font-semibold">{product.name}</h4>
            <p className="text-sm text-muted-foreground">{product.description}</p>
          </div>
          <div className="space-y-3">
            <Input placeholder="Your Name" />
            <Input placeholder="Email Address" type="email" />
            <Input placeholder="Company Name" />
            <Input placeholder="Phone Number" />
            <textarea 
              className="w-full p-3 border rounded-md resize-none"
              rows={3}
              placeholder="Additional requirements or questions..."
            />
          </div>
          <div className="flex flex-col space-y-2">
            <Button className="btn-hero">
              <Mail className="mr-2 h-4 w-4" />
              Send Quote Request
            </Button>
            <div className="text-center text-sm text-muted-foreground">
              Or call us directly: +977-9851112329
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-20 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-poppins font-bold text-4xl md:text-5xl mb-6">
              Our Product Portfolio
            </h1>
            <p className="text-xl leading-relaxed opacity-90">
              Discover our comprehensive range of high-quality pharmaceutical products, 
              supplements, and specialized health solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "btn-hero" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20">
              <Package className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="font-poppins font-semibold text-xl text-foreground mb-2">
                No products found
              </h3>
              <p className="text-muted-foreground">
                Try adjusting your search terms or category filter.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <Card key={product.id} className="card-product">
                  <CardContent className="p-6">
                    <div className="text-center mb-4">
                      <div className="text-6xl mb-3">{product.image}</div>
                      <Badge variant="outline" className="mb-2">
                        {product.category}
                      </Badge>
                    </div>
                    
                    <h3 className="font-poppins font-semibold text-lg text-foreground mb-3 text-center">
                      {product.name}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {product.description}
                    </p>
                    
                    <div className="space-y-2 mb-6">
                      {product.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-sm">
                          <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <RequestQuoteDialog product={product} />
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 trust-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-foreground mb-6">
              Need Custom Formulations?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We offer custom pharmaceutical manufacturing services for specialized requirements. 
              Contact us to discuss your specific needs and get a tailored solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-hero">
                <Phone className="mr-2 h-5 w-5" />
                Call: +977-9851112329
              </Button>
              <Button size="lg" className="btn-secondary">
                <Mail className="mr-2 h-5 w-5" />
                Email: unitedlabnepal@gmail.com
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;