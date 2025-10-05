import { useState, useEffect } from "react";
import { Camera, Building2, Users, Award, Factory, Microscope, Package, Shield, Eye, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string; title: string; category: string } | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Header slideshow images
  const headerSlides = [
    {
      src: "/api/placeholder/800/300",
      alt: "Manufacturing Excellence",
      title: "Manufacturing Excellence"
    },
    {
      src: "/api/placeholder/800/300",
      alt: "Quality Assurance",
      title: "Quality Assurance"
    },
    {
      src: "/api/placeholder/800/300",
      alt: "Expert Team",
      title: "Expert Team"
    },
    {
      src: "/api/placeholder/800/300",
      alt: "Modern Facility",
      title: "Modern Facility"
    }
  ];

  // Auto-advance slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % headerSlides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [headerSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % headerSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + headerSlides.length) % headerSlides.length);
  };

  // Bento grid gallery items with different sizes and categories
  const galleryItems = [
    // Hero/Featured items (large)
    {
      id: 1,
      src: "/api/placeholder/800/600",
      alt: "Manufacturing Facility Exterior",
      title: "State-of-the-Art Manufacturing Facility",
      category: "Facility",
      icon: Building2,
      size: "large", // spans 2x2
      description: "Our modern WHO-GMP certified facility in Birgunj, Nepal"
    },
    {
      id: 2,
      src: "/api/placeholder/600/400",
      alt: "Production Line",
      title: "Advanced Production Lines",
      category: "Manufacturing",
      icon: Factory,
      size: "wide", // spans 2x1
      description: "Cutting-edge production technology"
    },

    // Medium items
    {
      id: 3,
      src: "/api/placeholder/400/400",
      alt: "Quality Control Lab",
      title: "Quality Control Laboratory",
      category: "Quality",
      icon: Microscope,
      size: "medium", // spans 1x1
      description: "Comprehensive testing facilities"
    },
    {
      id: 4,
      src: "/api/placeholder/400/400",
      alt: "Expert Team",
      title: "Expert Team Collaboration",
      category: "Team",
      icon: Users,
      size: "medium",
      description: "50+ dedicated professionals"
    },
    {
      id: 5,
      src: "/api/placeholder/400/400",
      alt: "Packaging Solutions",
      title: "Professional Packaging",
      category: "Packaging",
      icon: Package,
      size: "medium",
      description: "Custom packaging solutions"
    },

    // Tall items
    {
      id: 6,
      src: "/api/placeholder/400/600",
      alt: "WHO-GMP Certificate",
      title: "WHO-GMP Certification",
      category: "Certifications",
      icon: Award,
      size: "tall", // spans 1x2
      description: "International quality standards"
    },
    {
      id: 7,
      src: "/api/placeholder/400/600",
      alt: "Research & Development",
      title: "R&D Innovation Center",
      category: "Innovation",
      icon: Microscope,
      size: "tall",
      description: "Cutting-edge research facilities"
    },

    // Small items
    {
      id: 8,
      src: "/api/placeholder/300/300",
      alt: "Safety Standards",
      title: "Safety First",
      category: "Safety",
      icon: Shield,
      size: "small",
      description: "Rigorous safety protocols"
    },
    {
      id: 9,
      src: "/api/placeholder/300/300",
      alt: "Quality Assurance",
      title: "Quality Assurance",
      category: "Quality",
      icon: Eye,
      size: "small",
      description: "Every batch tested"
    },
    {
      id: 10,
      src: "/api/placeholder/300/300",
      alt: "Team Training",
      title: "Continuous Training",
      category: "Team",
      icon: Users,
      size: "small",
      description: "Skill development programs"
    },
    {
      id: 11,
      src: "/api/placeholder/300/300",
      alt: "Modern Equipment",
      title: "Modern Equipment",
      category: "Technology",
      icon: Factory,
      size: "small",
      description: "Latest manufacturing technology"
    },

    // Additional wide items
    {
      id: 12,
      src: "/api/placeholder/600/400",
      alt: "Leadership Team",
      title: "Leadership Excellence",
      category: "Leadership",
      icon: Users,
      size: "wide",
      description: "Experienced industry leaders"
    },
    {
      id: 13,
      src: "/api/placeholder/600/400",
      alt: "Warehouse Facility",
      title: "Storage & Distribution",
      category: "Logistics",
      icon: Package,
      size: "wide",
      description: "Efficient storage and distribution"
    }
  ];

  const openModal = (item: typeof galleryItems[0]) => {
    setSelectedImage({
      src: item.src,
      alt: item.alt,
      title: item.title,
      category: item.category
    });
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">

      {/* Extended Hero Background Blend */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/40 via-white/60 to-blue-50/30"></div>
        <div className="absolute inset-0 bg-gradient-radial from-white/50 via-slate-50/20 to-transparent"></div>

        {/* Subtle floating elements for continuity */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-slate-100/20 to-blue-100/15 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-r from-blue-100/15 to-slate-100/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10">
        {/* Header Section with Slideshow */}
        <section className="pt-32 pb-16">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 animate-fade-in-up">
              <h1 className="font-poppins font-bold text-4xl md:text-5xl text-slate-900 mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                Our{" "}
                <span className="text-blue-600">
                  Gallery
                </span>
              </h1>

              {/* Small Slideshow */}
              <div className="relative max-w-2xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <div className="relative h-48 rounded-xl overflow-hidden shadow-lg">
                  {headerSlides.map((slide, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                      <img
                        src={slide.src}
                        alt={slide.alt}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="font-semibold text-lg">{slide.title}</h3>
                      </div>
                    </div>
                  ))}

                  {/* Navigation Arrows */}
                  <button
                    onClick={prevSlide}
                    className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-200"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>

                  <button
                    onClick={nextSlide}
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-200"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>

                  {/* Dots Indicator */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1">
                    {headerSlides.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-white' : 'bg-white/50'
                          }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bento Grid Gallery */}
        <section className="pb-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 auto-rows-[200px]">
              {galleryItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card
                    key={item.id}
                    onClick={() => openModal(item)}
                    className={`group cursor-pointer bg-white border border-slate-100 hover:border-blue-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden animate-fade-in-up ${item.size === 'large' ? 'md:col-span-2 md:row-span-2' :
                      item.size === 'wide' ? 'md:col-span-2' :
                        item.size === 'tall' ? 'md:row-span-2' :
                          item.size === 'medium' ? 'md:col-span-1' :
                            'md:col-span-1'
                      }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-0 h-full relative">
                      <div className="relative h-full overflow-hidden">
                        <img
                          src={item.src}
                          alt={item.alt}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                          <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            <div className="flex items-center mb-2">
                              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                                <Icon className="h-4 w-4 text-white" />
                              </div>
                              <span className="text-xs font-medium text-blue-200 uppercase tracking-wide">
                                {item.category}
                              </span>
                            </div>
                            <h3 className="font-semibold text-sm mb-1 line-clamp-2">
                              {item.title}
                            </h3>
                            <p className="text-xs text-gray-300 line-clamp-2">
                              {item.description}
                            </p>
                          </div>
                        </div>

                        {/* Category Badge */}
                        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1 flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <Icon className="h-3 w-3 text-blue-600" />
                          <span className="text-xs font-medium text-slate-700">{item.category}</span>
                        </div>

                        {/* View indicator */}
                        <div className="absolute top-3 right-3 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                          <Eye className="h-4 w-4 text-white" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      </div>

      {/* Modal for enlarged view */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={closeModal}>
          <div className="relative max-w-4xl max-h-[90vh] bg-white rounded-xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors duration-200"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="relative">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <div className="text-white">
                  <div className="inline-flex items-center bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-3">
                    {selectedImage.category}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{selectedImage.title}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

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

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Gallery;