import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const TestimonialsSection = () => {
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

    return (
        <section className="relative py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0">
                {/* Subtle radial blur background */}
                <div className="absolute inset-0 bg-gradient-radial from-blue-100/20 via-transparent to-slate-100/15 blur-sm"></div>
                <div className="absolute top-1/3 left-1/4 w-[100%] h-[100%] bg-gradient-radial from-white/30 via-slate-50/15 to-transparent blur-2xl opacity-50"></div>

                {/* Floating geometric shapes */}
                <div className="absolute top-20 right-20 w-16 h-16 bg-slate-100 rounded-full opacity-40 animate-pulse"></div>
                <div className="absolute top-40 left-24 w-12 h-12 bg-blue-100 rounded-lg opacity-50 animate-bounce" style={{ animationDelay: '1.5s' }}></div>
                <div className="absolute bottom-40 right-28 w-18 h-18 bg-cyan-100 rounded-full opacity-45 animate-pulse" style={{ animationDelay: '2.2s' }}></div>
                <div className="absolute bottom-24 left-20 w-20 h-20 bg-gradient-to-r from-slate-100 to-blue-100 rounded-full opacity-35 animate-bounce" style={{ animationDelay: '0.8s' }}></div>

                {/* Enhanced gradient orbs */}
                <div className="absolute top-1/6 right-1/6 w-80 h-80 bg-gradient-to-r from-slate-200/18 to-blue-200/18 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/6 left-1/6 w-72 h-72 bg-gradient-to-r from-blue-200/18 to-slate-200/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.8s' }}></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16 animate-fade-in-up">
                    {/* Badge */}
                    <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold shadow-sm mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                        <Star className="h-4 w-4 mr-2" />
                        Trusted Partners • 500+ Satisfied Clients • Excellence Delivered
                    </div>

                    <h2 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl text-slate-900 mb-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                        What Our{" "}
                        <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 bg-clip-text text-transparent animate-gradient">
                            Partners Say
                        </span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mx-auto mb-6 animate-fade-in" style={{ animationDelay: '0.6s' }}></div>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                        Hear from our valued partners across India and Nepal who trust United Laboratories
                        for their nutraceutical manufacturing needs.
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-fade-in-up group" style={{ animationDelay: testimonial.delay }}>
                            <CardContent className="p-8">
                                {/* Quote Icon */}
                                <div className="flex justify-between items-start mb-6">
                                    <Quote className="h-8 w-8 text-blue-600/30 transform rotate-180" />
                                    <div className="flex space-x-1">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                        ))}
                                    </div>
                                </div>

                                {/* Testimonial Text */}
                                <p className="text-slate-600 leading-relaxed mb-6 italic">
                                    "{testimonial.testimonial}"
                                </p>

                                {/* Author Info */}
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full flex items-center justify-center shadow-md">
                                        <div className="w-10 h-10 bg-gradient-to-br from-slate-200 to-slate-300 rounded-full flex items-center justify-center">
                                            <span className="text-slate-600 font-semibold text-sm">
                                                {testimonial.name.split(' ').map(n => n[0]).join('')}
                                            </span>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="font-poppins font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
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
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '1.4s' }}>
                    <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
                        <h3 className="font-poppins font-bold text-2xl text-slate-900 mb-4">
                            Ready to Partner with Us?
                        </h3>
                        <p className="text-slate-600 mb-6 leading-relaxed">
                            Join hundreds of satisfied partners who trust United Laboratories Nepal
                            for their nutraceutical manufacturing needs.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={() => {
                                    const element = document.querySelector('#home');
                                    if (element) {
                                        element.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }}
                                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                            >
                                Get Started Today
                            </button>
                            <button
                                onClick={() => {
                                    window.location.href = 'tel:+977-9851112329';
                                }}
                                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:shadow-lg"
                            >
                                Call: +977-9851112329
                            </button>
                        </div>
                    </div>
                </div>
            </div>

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
        
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes gradient {
          0%, 100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-gradient {
          animation: gradient 3s ease-in-out infinite;
        }
        
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
        </section>
    );
};

export default TestimonialsSection;