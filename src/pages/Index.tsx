import Layout from "@/components/layout/Layout";
import HeroSlider from "@/components/home/HeroSlider";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import AboutSection from "@/components/home/AboutSection";
import TopCategories from "@/components/home/TopCategories";
import StatsSection from "@/components/home/StatsSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSlider />
      <WhyChooseUs />
      <AboutSection />
      <TopCategories />
      <StatsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
