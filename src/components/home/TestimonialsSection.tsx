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
        <section className="relative py-20 bg-white">
            {/* Professional Background Pattern */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 opacity-[0.015]">
                    <div className="absolute top-0 left-0 w-full h-full" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23334155' fill-opacity='0.6'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}></div>
                </div>
                
                {/* Subtle accent lines */}
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-18 animate-fade-in-up">
                    {/* Professional Badge */}
                    <div className="inline-flex items-center bg-slate-100 border border-slate-200 text-slate-700 px-6 py-3 rounded-lg text-sm font-medium shadow-sm mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                        <Star className="h-4 w-4 mr-2 text-blue-600" />
                        Trusted Partners • 500+ Satisfied Clients • Excellence Delivered
                    </div>

                    <h2 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl text-slate-900 mb-7 animate-fade-in-up tracking-tight" style={{ animationDelay: '0.4s' }}>
                        What Our{" "}
                        <span className="text-blue-600">
                            Partners Say
                        </span>
                    </h2>
                    
                    <div className="w-14 h-0.5 bg-blue-600 mx-auto mb-7 animate-fade-in" style={{ animationDelay: '0.6s' }}></div>
                    
                    <p className="text-base text-slate-600 max-w-4xl mx-auto leading-relaxed font-light animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                        Hear from our valued partners across India and Nepal who trust United Laboratories
                        for their nutraceutical manufacturing needs.
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <Card key={index} className="bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300 animate-fade-in-up group" style={{ animationDelay: testimonial.delay }}>
                            <CardContent className="p-7">
                                {/* Quote Icon and Rating */}
                                <div className="flex justify-between items-start mb-5">
                                    <Quote className="h-5 w-5 text-slate-300" />
                                    <div className="flex space-x-1">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className={`h-4 w-4 ${i < testimonial.rating ? 'fill-blue-600 text-blue-600' : 'text-slate-200'}`} />
                                        ))}
                                    </div>
                                </div>

                                {/* Testimonial Text */}
                                <p className="text-slate-600 leading-relaxed mb-7 text-sm">
                                    "{testimonial.testimonial}"
                                </p>

                                {/* Author Info */}
                                <div className="flex items-start space-x-3 pt-5 border-t border-slate-100">
                                    <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <span className="text-slate-600 font-semibold text-sm">
                                            {testimonial.name.split(' ').map(n => n[0]).join('')}
                                        </span>
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <h4 className="font-poppins font-semibold text-slate-900 text-base mb-1">
                                            {testimonial.name}
                                        </h4>
                                        <p className="text-sm text-slate-600 font-medium mb-1">
                                            {testimonial.title}
                                        </p>
                                        <p className="text-xs text-slate-500 leading-tight">
                                            {testimonial.company}
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-20 animate-fade-in-up" style={{ animationDelay: '1.4s' }}>
                    <div className="bg-slate-50 rounded-2xl p-12 max-w-4xl mx-auto border border-slate-200">
                        <h3 className="font-poppins font-semibold text-2xl text-slate-900 mb-4">
                            Ready to Partner with Us?
                        </h3>
                        <p className="text-slate-600 mb-8 leading-relaxed text-lg">
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
                                className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                            >
                                Get Started Today
                            </button>
                            <button
                                onClick={() => {
                                    window.location.href = 'tel:+977-9851112329';
                                }}
                                className="border border-slate-300 text-slate-700 hover:bg-slate-100 font-medium px-8 py-4 rounded-lg transition-all duration-300"
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
            transform: translateY(20px);
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
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
        </section>
    );
};

export default TestimonialsSection;