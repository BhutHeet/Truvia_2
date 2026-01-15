import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const slides = [
  {
    title: "TRANSFORMING",
    subtitle: "SPACES FOR",
    highlight: "THE FUTURE",
    description: "Premium quality PTMT Taps & Fittings",
    link: "/products",
  },
  {
    title: "QUALITY",
    subtitle: "YOU CAN",
    highlight: "TRUST",
    description: "ISO 9001:2015 Certified Manufacturing",
    link: "/about",
  },
  {
    title: "INNOVATION",
    subtitle: "MEETS",
    highlight: "EXCELLENCE",
    description: "Durable, Rust-Free & Long-Lasting Products",
    link: "/products",
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-[500px] md:h-[600px] lg:h-[700px] hero-gradient overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 border border-white/30 rotate-45" />
        <div className="absolute bottom-20 right-10 w-48 h-48 border border-white/30 rotate-12" />
        <div className="absolute top-1/2 left-1/3 w-32 h-32 border border-white/20" />
      </div>

      {/* Slide Content */}
      <div className="relative h-full container mx-auto px-4 flex items-center">
        <div className="grid lg:grid-cols-2 gap-8 items-center w-full">
          {/* Text Content */}
          <div key={currentSlide} className="animate-fade-in-up text-white">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-1 h-24 bg-secondary" />
              <div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide">
                  {slides[currentSlide].title}
                </h2>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide">
                  {slides[currentSlide].subtitle}
                </h2>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide">
                  {slides[currentSlide].highlight}
                </h2>
              </div>
            </div>
            <p className="text-xl text-white/80 mb-8 ml-5">
              {slides[currentSlide].description}
            </p>
            <Link to={slides[currentSlide].link} className="ml-5">
              <Button className="bg-secondary hover:bg-secondary/90 text-white px-8 py-6 text-lg">
                VIEW MORE
              </Button>
            </Link>
          </div>

          {/* Image Placeholder */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="w-80 h-80 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
              <div className="text-center text-white/60">
                <p className="text-lg font-medium">Image Coming Soon</p>
                <p className="text-sm">Product Showcase</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`slider-dot ${currentSlide === index ? "active" : ""}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
