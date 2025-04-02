
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import TermCondition from "@/components/TermCondition";
import { useState } from "react";

const Index = () => {
  const [showTerms, setShowTerms] = useState(false);

  // Function to toggle the display of Terms and Conditions
  const toggleTerms = () => {
    setShowTerms((prev) => !prev);
  };
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {showTerms ? (
          // Render only the Terms and Conditions when showTerms is true
          <TermCondition />
        ) : (
          // Otherwise, render the rest of the main page components
          <>
            <HeroSection />
            <BenefitsSection />
            <FeaturesSection />
            <TestimonialsSection />
            <CTASection />
          </>
        )}
      </main>
      <Footer toggleTerms={toggleTerms}/>
    </div>
  );
};

export default Index;
