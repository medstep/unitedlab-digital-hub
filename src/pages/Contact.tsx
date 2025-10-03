import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, MessageSquare, Star, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      console.log('Sending contact form data:', { ...formData, type: 'contact' });
      
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          ...formData,
          type: 'contact'
        }
      });

      console.log('Supabase function response:', { data, error });

      if (error) {
        console.error('Supabase function error:', error);
        throw error;
      }

      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you within 24 hours.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
    } catch (error: any) {
      console.error('Contact form error:', error);
      toast({
        title: "Error",
        description: `Failed to send message: ${error.message || 'Unknown error'}. Please try again or call us directly.`,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      content: "Birgunj, Nepal",
      description: "Manufacturing facility and head office",
      color: "bg-blue-100 text-blue-600",
      delay: "0.2s",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      content: "+977-9851112329",
      description: "Available Monday to Friday, 9 AM - 6 PM",
      color: "bg-green-100 text-green-600",
      delay: "0.4s",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      content: "unitedlabnepal@gmail.com",
      description: "We'll respond within 24 hours",
      color: "bg-cyan-100 text-cyan-600",
      delay: "0.6s",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Business Hours",
      content: "Mon - Fri: 9:00 AM - 6:00 PM",
      description: "Saturday: 9:00 AM - 2:00 PM",
      color: "bg-purple-100 text-purple-600",
      delay: "0.8s",
    },
  ];

  return (
    <div className="min-h-screen pt-0">

      {/* Contact Form and Map - Matching home page style */}
      <section className="relative py-20 bg-gradient-to-br from-cyan-50 via-white to-blue-50 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-radial from-blue-100/25 via-transparent to-cyan-100/20 blur-sm"></div>
          <div className="absolute top-1/4 left-1/3 w-[110%] h-[110%] bg-gradient-radial from-white/35 via-blue-50/20 to-transparent blur-2xl opacity-50"></div>

          {/* Floating geometric shapes */}
          <div className="absolute top-20 left-16 w-18 h-18 bg-blue-100 rounded-full opacity-50 animate-pulse"></div>
          <div className="absolute bottom-24 right-20 w-20 h-20 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full opacity-35 animate-bounce" style={{ animationDelay: '0.7s' }}></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <CardHeader className="pb-6">
                <CardTitle className="font-poppins text-2xl flex items-center gap-3 text-slate-900">
                  <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  Send us a Message
                </CardTitle>
                <p className="text-slate-600 leading-relaxed">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-slate-700 font-medium">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Your full name"
                        className="border-slate-200 focus:border-blue-500 focus:ring-blue-500/20"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-slate-700 font-medium">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="your@email.com"
                        className="border-slate-200 focus:border-blue-500 focus:ring-blue-500/20"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-slate-700 font-medium">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="+977-9851112329"
                        className="border-slate-200 focus:border-blue-500 focus:ring-blue-500/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-slate-700 font-medium">Company Name</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        placeholder="Your company"
                        className="border-slate-200 focus:border-blue-500 focus:ring-blue-500/20"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-slate-700 font-medium">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Tell us about your inquiry, requirements, or any questions you have..."
                      rows={22}
                      className="border-slate-200 focus:border-blue-500 focus:ring-blue-500/20"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Map and Additional Info */}
            <div className="space-y-8">
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <CardHeader className="pb-6">
                  <CardTitle className="font-poppins text-xl flex items-center gap-3 text-slate-900">
                    <div className="w-10 h-10 bg-green-100 text-green-600 rounded-lg flex items-center justify-center">
                      <MapPin className="h-5 w-5" />
                    </div>
                    Visit Our Facility
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-slate-100 rounded-xl overflow-hidden shadow-lg mb-6">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224567.72307533!2d84.68687745!3d27.094065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3994fb5d9dd8f6c7%3A0x7a2e9b8f3b0b0b0b!2sBirgunj%2C%20Nepal!5e0!3m2!1sen!2snp!4v1635000000000!5m2!1sen!2snp"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="rounded-xl"
                    ></iframe>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-blue-600 mt-0.5" />
                      <div>
                        <p className="font-semibold text-slate-900">United Laboratories Nepal Pvt. Ltd.</p>
                        <p className="text-sm text-slate-600 mt-1">
                          Manufacturing & Head Office<br />
                          Birgunj, Nepal
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                <CardHeader className="pb-6">
                  <CardTitle className="font-poppins text-xl flex items-center gap-3 text-slate-900">
                    <div className="w-10 h-10 bg-cyan-100 text-cyan-600 rounded-lg flex items-center justify-center">
                      <Phone className="h-5 w-5" />
                    </div>
                    Quick Contact
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-col gap-3">
                    <a
                      href="tel:+977-9851112329"
                      className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      Call: +977-9851112329
                    </a>
                    <a
                      href="mailto:unitedlabnepal@gmail.com"
                      className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg"
                    >
                      <Mail className="mr-2 h-4 w-4" />
                      Email Us
                    </a>
                    <a
                      href="https://wa.me/977-9851112329"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-600 hover:bg-green-700 text-white inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                    >
                      <MessageSquare className="mr-2 h-4 w-4" />
                      WhatsApp
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Custom CSS for animations - matching home page */}
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
    </div>
  );
};

export default Contact;