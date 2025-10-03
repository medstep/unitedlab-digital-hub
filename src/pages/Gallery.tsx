import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, Pause, Camera, Building2, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Gallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Dummy slideshow images - replace with actual company photos later
  const slideshowImages = [
    {
      id: 1,
      src: "/api/placeholder/1200/600",
      alt: "Manufacturing Facility Exterior",
      title: "State-of-the-Art Manufacturing Facility",
      description: "Our modern nutraceutical manufacturing facility in Birgunj, Nepal"
    },
    {
      id: 2,
      src: "/api/placeholder/1200/600",
      alt: "Production Line",
      title: "Advanced Production Lines",
      description: "WHO-GMP certified production lines ensuring highest quality standards"
    },
    {
      id: 3,
      src: "/api/placeholder/1200/600",
      alt: "Quality Control Lab",
      title: "Quality Control Laboratory",
      description: "Comprehensive testing and quality assurance processes"
    },
    {
      id: 4,
      src: "/api/placeholder/1200/600",
      alt: "Research & Development",
      title: "Research & Development Center",
      description: "Innovation hub for developing cutting-edge nutraceutical solutions"
    },
    {
      id: 5,
      src: "/api/placeholder/1200/600",
      alt: "Team Meeting",
      title: "Expert Team Collaboration",
      description: "Our dedicated team of professionals working together"
    }
  ];

  // Gallery categories with dummy images
  const galleryCategories = [
    {
      title: "Facility & Infrastructure",
      icon: Building2,
      images: [
        { src: "/api/placeholder/400/300", alt: "Main Building" },
        { src: "/api/placeholder/400/300", alt: "Production Floor" },
        { src: "/api/placeholder/400/300", alt: "Warehouse" },
        { src: "/api/placeholder/400/300", alt: "Office Space" },
        { src: "/api/placeholder/400/300", alt: "Reception Area" },
        { src: "/api/placeholder/400/300", alt: "Conference Room" }
      ]
    },
    {
      title: "Team & Culture",
      icon: Users,
      images: [
        { src: "/api/placeholder/400/300", alt: "Team Photo" },
        { src: "/api/placeholder/400/300", alt: "Leadership Team" },
        { src: "/api/placeholder/400/300", alt: "Production Team" },
        { src: "/api/placeholder/400/300", alt: "Quality Team" },
        { src: "/api/placeholder/400/300", alt: "R&D Team" },
        { src: "/api/placeholder/400/300", alt: "Training Session" }
      ]
    },
    {
      title: "Certifications & Awards",
      icon: Award,
      images: [
        { src: "/api/placeholder/400/300", alt: "WHO-GMP Certificate" },
        { src: "/api/placeholder/400/300", alt: "ISO Certification" },
        { src: "/api/placeholder/400/300", alt: "Quality Award" },
        { src: "/api/placeholder/400/300", alt: "Industry Recognition" },
        { src: "/api/placeholder/400/300", alt: "Excellence Award" },
        { src: "/api/placeholder/400/300", alt: "Safety Certificate" }
      ]
    }
  ];

  // Auto-play slideshow
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slideshowImages.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, slideshowImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slideshowImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slideshowImages.length) % slideshowImages.length);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section with Slideshow */}
      <section className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          {slideshowImages.map((image, index) => (
            <div
              key={image.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/20"></div>
            </div>
          ))}
        </div>

        {/* Slideshow Controls */}
        <div className="absolute inset-0 flex items-center justify-between px-6">
          <Button
            variant="ghost"
            size="icon"
            onClick={prevSlide}
            className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm rounded-full h-12 w-12"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={nextSlide}
            className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm rounded-full h-12 w-12"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>

        {/* Slideshow Content */}
        <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/70 to-transparent">
          <div className="max-w-4xl mx-auto text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">
              {slideshowImages[currentSlide]?.title}
            </h1>
            <p className="text-xl mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              {slideshowImages[currentSlide]?.description}
            </p>
            <div className="flex items-center space-x-4">
              <Button
                onClick={togglePlayPause}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg flex items-center space-x-2"
              >
                {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                <span>{isPlaying ? 'Pause' : 'Play'}</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slideshowImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold shadow-sm mb-6">
              <Camera className="h-4 w-4 mr-2" />
              Company Gallery • Behind the Scenes • Made in Nepal
            </div>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl text-slate-900 mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 bg-clip-text text-transparent">
                Gallery
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Take a visual journey through our state-of-the-art facility, meet our dedicated team, 
              and explore the excellence that defines United Laboratories Nepal.
            </p>
          </div>

          {/* Gallery Categories */}
          <div className="space-y-16">
            {galleryCategories.map((category, categoryIndex) => {
              const Icon = category.icon;
              return (
                <div key={categoryIndex} className="animate-fade-in-up" style={{ animationDelay: `${categoryIndex * 0.2}s` }}>
                  <div className="flex items-center mb-8">
                    <div className="bg-blue-100 text-blue-600 p-3 rounded-xl mr-4">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">{category.title}</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.images.map((image, imageIndex) => (
                      <Card key={imageIndex} className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                        <CardContent className="p-0">
                          <div className="relative overflow-hidden">
                            <img
                              src={image.src}
                              alt={image.alt}
                              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <div className="absolute bottom-4 left-4 text-white">
                                <p className="font-semibold">{image.alt}</p>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Custom CSS for animations */}
      <style>{`
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
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default Gallery;