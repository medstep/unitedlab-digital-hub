import { useState } from "react";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, ChevronDown } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const GetInTouchSection = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        city: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);
    const [captcha, setCaptcha] = useState({ num1: 0, num2: 0, answer: "" });
    const [captchaValid, setCaptchaValid] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState({
        name: "Nepal",
        code: "+977",
        flag: "🇳🇵",
        iso: "np"
    });
    const [showCountryDropdown, setShowCountryDropdown] = useState(false);
    const [countries, setCountries] = useState<Array<{
        name: string;
        code: string;
        flag: string;
        iso: string;
    }>>([]);
    const [loadingCountries, setLoadingCountries] = useState(true);
    const { toast } = useToast();

    // Generate new captcha
    const generateCaptcha = () => {
        const num1 = Math.floor(Math.random() * 10) + 1;
        const num2 = Math.floor(Math.random() * 10) + 1;
        setCaptcha({ num1, num2, answer: "" });
        setCaptchaValid(false);
    };

    // Fetch countries from API
    const fetchCountries = async () => {
        try {
            setLoadingCountries(true);
            const response = await fetch('https://restcountries.com/v3.1/all?fields=name,cca2,idd,flag');
            const data = await response.json();

            const formattedCountries = data
                .filter((country: any) => country.idd?.root && country.idd?.suffixes?.length > 0)
                .map((country: any) => {
                    const phoneCode = country.idd.root + (country.idd.suffixes[0] || '');
                    return {
                        name: country.name.common,
                        code: phoneCode,
                        flag: country.flag || '🏳️',
                        iso: country.cca2.toLowerCase()
                    };
                })
                .sort((a: any, b: any) => a.name.localeCompare(b.name));

            // Put popular countries at the top
            const popularCountries = ['Nepal', 'India', 'United States', 'United Kingdom', 'Canada', 'Australia'];
            const sortedCountries = [
                ...formattedCountries.filter((c: any) => popularCountries.includes(c.name)),
                ...formattedCountries.filter((c: any) => !popularCountries.includes(c.name))
            ];

            setCountries(sortedCountries);

            // Update selected country if it's still the default
            if (selectedCountry.name === "Nepal") {
                const nepal = sortedCountries.find(c => c.name === "Nepal");
                if (nepal) {
                    setSelectedCountry(nepal);
                }
            }
        } catch (error) {
            console.error('Failed to fetch countries:', error);
            // Fallback to a few essential countries if API fails
            setCountries([
                { name: "Nepal", code: "+977", flag: "🇳🇵", iso: "np" },
                { name: "India", code: "+91", flag: "🇮🇳", iso: "in" },
                { name: "United States", code: "+1", flag: "🇺🇸", iso: "us" },
                { name: "United Kingdom", code: "+44", flag: "🇬🇧", iso: "gb" },
                { name: "Canada", code: "+1", flag: "🇨🇦", iso: "ca" },
                { name: "Australia", code: "+61", flag: "🇦🇺", iso: "au" },
            ]);
        } finally {
            setLoadingCountries(false);
        }
    };

    // Initialize captcha and fetch countries on component mount
    React.useEffect(() => {
        generateCaptcha();
        fetchCountries();
    }, []);

    // Close dropdown when clicking outside
    React.useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as Element;
            if (!target.closest('.country-dropdown')) {
                setShowCountryDropdown(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleInputChange = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleCountrySelect = (country: typeof countries[0]) => {
        setSelectedCountry(country);
        setShowCountryDropdown(false);
    };

    const handleCaptchaChange = (value: string) => {
        setCaptcha(prev => ({ ...prev, answer: value }));
        const correctAnswer = captcha.num1 + captcha.num2;
        setCaptchaValid(parseInt(value) === correctAnswer);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!captchaValid) {
            toast({
                title: "Captcha Error",
                description: "Please solve the math problem correctly.",
                variant: "destructive",
            });
            return;
        }

        setLoading(true);

        try {
            console.log('Sending contact form data:', { ...formData, type: 'contact' });

            const { data, error } = await supabase.functions.invoke('send-contact-email', {
                body: {
                    ...formData,
                    company: formData.city, // Using city as company field for backend compatibility
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
                city: "",
                message: "",
            });
            generateCaptcha(); // Generate new captcha after successful submission
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

    const reasons = [
        "Adjustable payment deals according to customer requirements.",
        "Qualified Range of Nutraceuticals / Herbal Extacts",
        "Transparent deals when it comes to contract manufacturing.",
        "Ethical business policies for better work progress.",
        "Wide distribution network so all the products are delivered on-time.",
        "Customized packaging with certified material."
    ];

    return (
        <section id="get-in-touch" className="relative py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">

            {/* Extended Hero Background Blend */}
            <div className="absolute inset-0">
                {/* Seamless gradient continuation from Hero */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-50/40 via-white/60 to-blue-50/30"></div>
                <div className="absolute inset-0 bg-gradient-radial from-white/50 via-slate-50/20 to-transparent"></div>
                
                {/* Subtle floating elements for continuity */}
                <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-slate-100/20 to-blue-100/15 rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-r from-blue-100/15 to-slate-100/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Header Section */}
                <div className="text-center mb-16 animate-fade-in-up">
                    <div className="inline-flex items-center text-slate-600 text-sm font-medium mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                        <CheckCircle className="h-4 w-4 mr-2 text-blue-600" />
                        Get Quote • Expert Consultation • 24/7 Support
                    </div>

                    <h2 className="font-poppins font-bold text-3xl md:text-4xl text-slate-900 mb-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                        Get In{" "}
                        <span className="text-blue-600">
                            Touch
                        </span>
                    </h2>

                    <div className="w-12 h-0.5 bg-blue-600 mx-auto mb-8 animate-expand" style={{ animationDelay: '0.6s' }}></div>

                    <p className="text-slate-600 max-w-2xl mx-auto text-sm leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                        Ready to start your nutraceutical manufacturing journey? Contact our experts for personalized consultation and competitive quotes.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

                    {/* Left Side - Contact Form */}
                    <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        <Card className="bg-white border border-slate-100 hover:border-blue-200 shadow-sm hover:shadow-md transition-all duration-300">
                            <CardHeader className="pb-5">
                                <CardTitle className="font-poppins text-xl text-slate-700 text-center">
                                    GET IN TOUCH NOW
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Input
                                                placeholder="Name"
                                                value={formData.name}
                                                onChange={(e) => handleInputChange('name', e.target.value)}
                                                className="bg-gray-50 border-gray-300 text-slate-700 placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
                                                required
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Input
                                                type="email"
                                                placeholder="Email"
                                                value={formData.email}
                                                onChange={(e) => handleInputChange('email', e.target.value)}
                                                className="bg-gray-50 border-gray-300 text-slate-700 placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2 relative">
                                            <div className="flex items-center">
                                                {/* Country Dropdown */}
                                                <div className="relative country-dropdown">
                                                    <button
                                                        type="button"
                                                        onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                                                        className="flex items-center bg-gray-50 border border-gray-300 rounded-l-md px-3 py-2 hover:bg-gray-100 transition-colors"
                                                    >
                                                        <span className="text-lg mr-2">{selectedCountry.flag}</span>
                                                        <span className="text-slate-600 text-sm mr-1">{selectedCountry.code}</span>
                                                        <ChevronDown className="h-3 w-3 text-slate-400" />
                                                    </button>

                                                    {/* Dropdown Menu */}
                                                    {showCountryDropdown && (
                                                        <div className="absolute top-full left-0 z-50 w-64 bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-y-auto">
                                                            {loadingCountries ? (
                                                                <div className="px-3 py-4 text-center text-slate-500">
                                                                    Loading countries...
                                                                </div>
                                                            ) : (
                                                                countries.map((country) => (
                                                                    <button
                                                                        key={country.iso}
                                                                        type="button"
                                                                        onClick={() => handleCountrySelect(country)}
                                                                        className="w-full flex items-center px-3 py-2 hover:bg-gray-50 text-left"
                                                                    >
                                                                        <span className="text-lg mr-3">{country.flag}</span>
                                                                        <span className="text-sm text-slate-600 mr-2">{country.code}</span>
                                                                        <span className="text-sm text-slate-700 truncate">{country.name}</span>
                                                                    </button>
                                                                ))
                                                            )}
                                                        </div>
                                                    )}
                                                </div>

                                                <Input
                                                    type="tel"
                                                    placeholder="Phone Number"
                                                    value={formData.phone}
                                                    onChange={(e) => handleInputChange('phone', e.target.value)}
                                                    className="bg-gray-50 border-gray-300 text-slate-700 placeholder-gray-400 rounded-l-none border-l-0 focus:border-blue-500 focus:ring-blue-500"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <Input
                                                placeholder="City"
                                                value={formData.city}
                                                onChange={(e) => handleInputChange('city', e.target.value)}
                                                className="bg-gray-50 border-gray-300 text-slate-700 placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Textarea
                                            placeholder="Message"
                                            value={formData.message}
                                            onChange={(e) => handleInputChange('message', e.target.value)}
                                            rows={4}
                                            className="bg-gray-50 border-gray-300 text-slate-700 placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
                                            required
                                        />
                                    </div>

                                    {/* Math Captcha */}
                                    <div className="space-y-2">
                                        <div className="bg-slate-50 p-4 rounded border border-gray-200">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center space-x-3">
                                                    <span className="text-sm text-slate-600 font-medium">
                                                        Security Check: What is {captcha.num1} + {captcha.num2}?
                                                    </span>
                                                    <Input
                                                        type="number"
                                                        value={captcha.answer}
                                                        onChange={(e) => handleCaptchaChange(e.target.value)}
                                                        className={`w-20 text-center ${captchaValid ? 'border-green-500 bg-green-50' : 'border-gray-300'}`}
                                                        placeholder="?"
                                                        required
                                                    />
                                                    {captchaValid && (
                                                        <CheckCircle className="h-5 w-5 text-green-500" />
                                                    )}
                                                </div>
                                                <button
                                                    type="button"
                                                    onClick={generateCaptcha}
                                                    className="text-xs text-blue-600 hover:text-blue-800 underline"
                                                >
                                                    New Problem
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <Button
                                        type="submit"
                                        className={`w-full font-semibold py-3 rounded-md shadow-lg hover:shadow-xl transition-all duration-300 ${captchaValid
                                            ? "bg-slate-700 hover:bg-slate-800 text-white"
                                            : "bg-gray-300 text-gray-500 cursor-not-allowed"
                                            }`}
                                        disabled={loading || !captchaValid}
                                    >
                                        {loading ? "Sending..." : captchaValid ? "Submit" : "Solve Captcha First"}
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Right Side - Why Choose Us */}
                    <div className="text-slate-700 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                        <div className="space-y-7">
                            <div>
                                <h2 className="font-poppins font-bold text-2xl md:text-3xl text-slate-800 mb-5">
                                    Why Choose Us for Nutraceuticals Range?
                                </h2>
                                <p className="text-base leading-relaxed text-slate-600 mb-5">
                                    United Laboratories being a growing nutraceutical manufacturing company in
                                    Nepal is working together to make this world a healthier place. Having years
                                    of experience in the nutraceutical industry, the company understands the
                                    requirements of the clients, thus, deliver the exclusive range of best quality
                                    products.
                                </p>
                                <h3 className="text-lg font-semibold text-slate-700 mb-3">
                                    Here are the reasons which outline us the most:
                                </h3>
                            </div>

                            <div className="space-y-3">
                                {reasons.map((reason, index) => (
                                    <div key={index} className="flex items-start space-x-2 animate-fade-in-up" style={{ animationDelay: `${0.6 + index * 0.1}s` }}>
                                        <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                                        <span className="text-slate-600 leading-relaxed">{reason}</span>
                                    </div>
                                ))}
                            </div>


                        </div>
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

export default GetInTouchSection;