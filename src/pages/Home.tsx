import HeroSection from "@/components/home/HeroSection";
import CompanyOverview from "@/components/home/CompanyOverview";
import DosageForm from "@/components/home/DosageForm";
import ProductShowcase from "@/components/home/ProductShowcase";

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <CompanyOverview />
      <DosageForm />
      <ProductShowcase />
    </div>
  );
};

export default Home;