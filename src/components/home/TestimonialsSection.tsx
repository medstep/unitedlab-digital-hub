import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";

const TestimonialsSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const testimonials = [
        {
            name: "Dr. Rajesh Sharma",
            title: "Chief Pharmacist",
            company: "MediCare Pharmaceuticals, Mumbai",
            image: "/api/placeholder/80/80",
            rating: 5,
            testimonial: "United Laboratories Nepal has consistently delivered exceptional quality nutraceutical products. Their WHO-GMP certification and attention to detail make them our preferred manufacturing partner for specialized formulations.",
            delay: "0.2s",
        },
        {
            name: "Priya Patel",
            title: "Quality Assurance Manager",
            company: "HealthFirst Distributors, Gujarat",
            image: "/api/placeholder/80/80",
            rating: 5,
            testimonial: "The manufacturing standards at United Labs Nepal are truly world-class. Every batch meets our stringent quality requirements, and their customer service is outstanding. Highly recommended for third-party manufacturing.",
            delay: "0.4s",
        },
        {
            name: "Dr. Ramesh Thapa",
            title: "Medical Director",
            company: "Himalayan Health Solutions, Kathmandu",
            image: "/api/placeholder/80/80",
            rating: 4,
            testimonial: "As a Nepali company, we're proud to partner with United Laboratories. Their expertise in nutraceutical manufacturing and commitment to international quality standards has helped us expand our product line significantly.",
            delay: "0.6s",
        },
        {
            name: "Anjali Gupta",
            title: "Business Development Head",
            company: "Wellness Corp, Delhi",
            image: "/api/placeholder/80/80",
            rating: 3,
            testimonial: "United Labs Nepal's manufacturing capabilities are impressive. From tablets to liquid formulations, they handle complex projects with precision. Their facility in Birgunj is state-of-the-art and GMP compliant.",
            delay: "0.8s",
        },
        {
            name: "Suresh Maharjan",
            title: "Founder & CEO",
            company: "Nepal Nutrition Network, Pokhara",
            image: "/api/placeholder/80/80",
            rating: 4,
            testimonial: "Working with United Laboratories has been a game-changer for our business. Their expertise in herbal extracts and protein supplements, combined with competitive pricing, makes them an ideal manufacturing partner.",
            delay: "1.0s",
        },
        {
            name: "Dr. Kavita Singh",
            title: "Research & Development",
            company: "BioTech Innovations, Bangalore",
            image: "/api/placeholder/80/80",
            rating: 5,
            testimonial: "The technical expertise and innovation at United Labs Nepal is remarkable. They've successfully manufactured our most complex formulations while maintaining the highest quality standards. Truly professional service.",
            delay: "1.2s",
        },
    ];

    // Auto-play functionality
    useEffect(() => {
        if (!isAutoPlaying) return;
        
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [isAutoPlaying, testimonials.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
        setIsAutoPlaying(false);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
        setIsAutoPlaying(false);
    };

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
        setIsAutoPlaying(false);
    };

    return (
        <section className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-slate-50">

            {/* Extended Hero Background Blend */}
            <div className="absolute inset-0">
                {/* Seamless gradient continuation from Hero */}
                <div className="absolute inset-0 bg-gradient-to-b from-blue-50/40 via-white/60 to-slate-50/30"></div>
                <div className="absolute inset-0 bg-gradient-radial from-white/50 via-blue-50/20 to-transparent"></div>
                
                {/* Subtle floating elements for continuity */}
                <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-blue-100/20 to-slate-100/15 rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-slate-100/15 to-blue-100/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Header Section */}
                <div className="text-center mb-16 animate-fade-in-up">
                    <div className="inline-flex items-center text-slate-600 text-sm font-medium mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                        <Star className="h-4 w-4 mr-2 text-blue-600" />
                        Trusted Partners • 500+ Satisfied Clients • Excellence Delivered
                    </div>

                    <h2 className="font-poppins font-bold text-3xl md:text-4xl text-slate-900 mb-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                        What Our{" "}
                        <span className="text-blue-600">
                            Partners Say
                        </span>
                    </h2>
                    
                    <div className="w-12 h-0.5 bg-blue-600 mx-auto mb-8 animate-expand" style={{ animationDelay: '0.6s' }}></div>
                    
                    <p className="text-slate-600 max-w-2xl mx-auto text-sm leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                        Hear from our valued partners across India and Nepal who trust United Laboratories
                        for their nutraceutical manufacturing needs.
                    </p>
                </div>

                {/* Testimonials Slideshow */}
                <div className="relative max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '1s' }}>
                    {/* Main Testimonial Card */}
                    <div className="relative overflow-hidden">
                        <div 
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                        >
                            {testimonials.map((testimonial, index) => (
                                <div key={index} className="w-full flex-shrink-0">
                                    <Card className="bg-white border border-slate-100 hover:border-blue-200 shadow-sm hover:shadow-md transition-all duration-300 mx-4">
                                        <CardContent className="p-8 text-center">
                                            {/* Quote Icon */}
                                            <div className="mb-6">
                                                <Quote className="h-8 w-8 text-blue-200 mx-auto" />
                                            </div>

                                            {/* Rating */}
                                            <div className="flex justify-center space-x-1 mb-6">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star key={i} className={`h-5 w-5 ${i < testimonial.rating ? 'fill-blue-600 text-blue-600' : 'text-slate-200'}`} />
                                                ))}
                                            </div>

                                            {/* Testimonial Text */}
                                            <p className="text-slate-600 leading-relaxed mb-8 text-lg italic">
                                                "{testimonial.testimonial}"
                                            </p>

                                            {/* Author Info */}
                                            <div className="flex items-center justify-center space-x-4">
                                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                                    <span className="text-blue-600 font-semibold">
                                                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                                                    </span>
                                                </div>
                                                <div className="text-left">
                                                    <h4 className="font-poppins font-semibold text-slate-900 text-lg">
                                                        {testimonial.name}
                                                    </h4>
                                                    <p className="text-sm text-slate-600 font-medium">
                                                        {testimonial.title}
                                                    </p>
                                                    <p className="text-xs text-slate-500">
                                                        {testimonial.company}
                                                    </p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:border-blue-200 transition-all duration-300 group"
                    >
                        <ChevronLeft className="h-5 w-5 text-slate-600 group-hover:text-blue-600" />
                    </button>
                    
                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:border-blue-200 transition-all duration-300 group"
                    >
                        <ChevronRight className="h-5 w-5 text-slate-600 group-hover:text-blue-600" />
                    </button>

                    {/* Dots Indicator */}
                    <div className="flex justify-center space-x-2 mt-8">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                    index === currentSlide 
                                        ? 'bg-blue-600 scale-110' 
                                        : 'bg-slate-300 hover:bg-slate-400'
                                }`}
                            />
                        ))}
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
            `}</style>
        </section>
    );
};

export default TestimonialsSection;