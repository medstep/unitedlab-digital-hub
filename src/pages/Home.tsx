import HeroSection from "@/components/home/HeroSection";
import CompanyOverview from "@/components/home/CompanyOverview";
import DosageForm from "@/components/home/DosageForm";
import ProductShowcase from "@/components/home/ProductShowcase";
import PackagingSection from "@/components/home/PackagingSection";
import ManufacturingProcess from "@/components/home/ManufacturingProcess";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import GetInTouchSection from "@/components/home/GetInTouchSection";
import FAQSection from "@/components/home/FAQSection";

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <CompanyOverview />
      <DosageForm />
      <ProductShowcase />
      <PackagingSection />
      <ManufacturingProcess />
      <TestimonialsSection />
      <GetInTouchSection />
      <FAQSection />
    </div>
  );
};

export default Home;