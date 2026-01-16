import Layout from "@/components/layout/Layout";
import HeroSlider from "@/components/home/HeroSlider";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import AboutSection from "@/components/home/AboutSection";
import TopCategories from "@/components/home/TopCategories";
import StatsSection from "@/components/home/StatsSection";

const Index = () => {
  return (
    <Layout>
      <HeroSlider />
      <WhyChooseUs />
      <AboutSection />
      <TopCategories />
      <StatsSection />
    </Layout>
  );
};

export default Index;
