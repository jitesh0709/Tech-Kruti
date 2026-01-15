import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import FocusAreasSection from "@/components/home/FocusAreasSection";
import AboutPreviewSection from "@/components/home/AboutPreviewSection";
import QuickLinksSection from "@/components/home/QuickLinksSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FocusAreasSection />
      <AboutPreviewSection />
      <QuickLinksSection />
    </Layout>
  );
};

export default Index;
