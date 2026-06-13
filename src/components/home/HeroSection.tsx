import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Shield, FlaskConical, Award, Users } from "lucide-react";

const HeroSection = () => {
  const statsRef = useRef<HTMLDivElement>(null);

  // Animate stats counter on mount
  useEffect(() => {
    const counters = statsRef.current?.querySelectorAll("[data-count]");
    if (!counters) return;

    const animateCounter = (el: Element) => {
      const target = parseInt(el.getAttribute("data-count") || "0", 10);
      const suffix = el.getAttribute("data-suffix") || "";
      let current = 0;
      const step = Math.max(1, Math.floor(target / 40));
      const timer = setInterval(() => {
        current += step;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        el.textContent = current + suffix;
      }, 30);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            counters.forEach((c) => animateCounter(c));
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="home" className="relative overflow-hidden bg-white">
      {/* ── Background ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #94a3b8 1px, transparent 1px), linear-gradient(to bottom, #94a3b8 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        {/* Gradient blobs */}
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-blue-100/40 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-cyan-100/30 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full bg-slate-100/50 blur-3xl" />
      </div>

      {/* ── Main Content ── */}
      <div className="relative z-8 container mx-auto px-6 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-20 items-center min-h-[calc(100vh-120px)] py-14 lg:py-20">

          {/* ─── Left Column – Copy ─── */}
          <div className="order-2 lg:order-1 max-w-xl">



            {/* Headline */}
            <h1 className="hero-animate font-poppins text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
              Third Party{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                  Nutraceutical
                </span>
                {/* Underline accent */}
                <span className="absolute -bottom-1 left-0 w-full h-2 bg-blue-100 rounded-full -z-0" />
              </span>
              <br />
              Manufacturing
            </h1>

            {/* Sub-headline */}
            <p className="hero-animate mt-6 text-lg sm:text-xl text-slate-500 leading-relaxed">
              Your trusted partner for high-quality nutraceuticals and
              supplements in{" "}
              <span className="text-slate-700 font-semibold">Nepal</span>.
              Combining innovation with excellence since 2025.
            </p>

            {/* Feature pills */}
            <div className="hero-animate mt-8 flex flex-wrap gap-3">
              {[
                { icon: CheckCircle, label: "WHO-GMP Certified" },
                { icon: FlaskConical, label: "Advanced R&D" },
                { icon: Award, label: "ISO Compliant" },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-50 border border-slate-100 text-sm text-slate-700 font-medium"
                >
                  <Icon className="h-4 w-4 text-blue-500 shrink-0" />
                  {label}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hero-animate mt-10 flex flex-wrap gap-4">
              <button
                onClick={() => {
                  const el = document.querySelector("#product-showcase");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="group inline-flex items-center gap-2 px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/30 transition-all duration-300"
              >
                Explore Products
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white hover:bg-slate-50 text-slate-800 text-sm font-semibold rounded-xl border-2 border-slate-200 hover:border-blue-300 shadow-sm hover:shadow-md transition-all duration-300"
              >
                Get a Free Quote
              </Link>
            </div>

            {/* Trust indicator */}
            <div className="hero-animate mt-10 flex items-center gap-3 text-sm text-slate-400">
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center"
                  >
                    <Users className="h-3.5 w-3.5 text-white" />
                  </div>
                ))}
              </div>
              <span>
                Trusted by <span className="text-slate-600 font-semibold">50+</span> brands
                across Nepal &amp; India
              </span>
            </div>
          </div>

          {/* ─── Right Column – Image + Stats ─── */}
          <div className="order-1 lg:order-2 relative">
            {/* Image container */}
            <div className="hero-animate relative">
              {/* Decorative ring */}
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-blue-100 via-transparent to-cyan-100 opacity-60 blur-sm" />

              {/* Main image – seamlessly blended */}
              <div className="relative">
                <img
                  src="/Hero.png"
                  alt="United Laboratories Nepal — Nutraceutical product range including supplements, capsules, syrups, and sachets"
                  className="w-full h-auto object-contain"
                  style={{
                    maskImage:
                      "radial-gradient(ellipse 85% 80% at center, black 50%, transparent 100%)",
                    WebkitMaskImage:
                      "radial-gradient(ellipse 85% 80% at center, black 50%, transparent 100%)",
                  }}
                />
              </div>

              {/* Floating badge – top-right */}
              <div className="absolute -top-3 -right-3 sm:top-4 sm:right-4 z-20 flex items-center gap-2 px-4 py-2 bg-white rounded-xl shadow-lg border border-slate-100">
                <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-800 leading-tight">Quality</div>
                  <div className="text-[10px] text-slate-400 font-medium">100% Assured</div>
                </div>
              </div>

              {/* Floating badge – bottom-left */}
              <div className="absolute -bottom-3 -left-3 sm:bottom-6 sm:left-4 z-20 flex items-center gap-2 px-4 py-2 bg-white rounded-xl shadow-lg border border-slate-100">
                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                  <Shield className="h-4 w-4 text-blue-500" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-800 leading-tight">WHO-GMP</div>
                  <div className="text-[10px] text-slate-400 font-medium">Certified Facility</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Stats Bar ── */}
      <div ref={statsRef} className="relative z-10 border-t border-slate-100 bg-slate-50/70 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-200">
            {[
              { value: 50, suffix: "+", label: "Expert Team", color: "text-blue-600" },
              { value: 100, suffix: "%", label: "Quality Assured", color: "text-emerald-600" },
              { value: 200, suffix: "+", label: "Products", color: "text-cyan-600" },
              { value: 15, suffix: "+", label: "Years Experience", color: "text-violet-600" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center justify-center py-8 sm:py-10">
                <span
                  data-count={stat.value}
                  data-suffix={stat.suffix}
                  className={`text-3xl sm:text-4xl font-extrabold tabular-nums ${stat.color}`}
                >
                  0{stat.suffix}
                </span>
                <span className="mt-1 text-xs sm:text-sm font-medium text-slate-500 uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Animations ── */}
      <style>{`
        .hero-animate {
          opacity: 0;
          transform: translateY(24px);
          animation: heroReveal 0.7s ease-out forwards;
        }
        .hero-animate:nth-child(1) { animation-delay: 0.05s; }
        .hero-animate:nth-child(2) { animation-delay: 0.15s; }
        .hero-animate:nth-child(3) { animation-delay: 0.25s; }
        .hero-animate:nth-child(4) { animation-delay: 0.35s; }
        .hero-animate:nth-child(5) { animation-delay: 0.45s; }
        .hero-animate:nth-child(6) { animation-delay: 0.55s; }
        .hero-animate:nth-child(7) { animation-delay: 0.65s; }

        @keyframes heroReveal {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;