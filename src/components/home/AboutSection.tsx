import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image Placeholder */}
          <div className="aspect-video bg-muted rounded-xl sm:rounded-2xl image-placeholder">
            <p className="text-sm">Image Coming Soon</p>
          </div>

          {/* Content */}
          <div>
            <span className="text-secondary font-semibold uppercase tracking-wider text-xs sm:text-sm">
              Know More About TRUVIA
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mt-2 mb-4 sm:mb-6">
              Focus on Design & Innovation
            </h2>
            <p className="text-muted-foreground mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              We "TRUVIA POLYPLAST" have gained success in the market by manufacturing 
              and wholesaling a remarkable gamut of P.T.M.T Taps, Plastic Valve, 
              Plastic & Shower, Connection Pipe & Many More Products. We are an 
              ISO 9001:2015 certified company.
            </p>
            <p className="text-muted-foreground mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
              Our product range is highly acclaimed in the market for its high durability, 
              premium quality, excellent performance and longer service life. We ensure 
              that raw material used in the production process is of superlative quality 
              and is reliably sourced.
            </p>

            <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-6 sm:mb-8">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-secondary flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium">ISO Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-secondary flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium">Premium Quality</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-secondary flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium">20+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-secondary flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium">100+ Products</span>
              </div>
            </div>

            <Link to="/about">
              <Button className="bg-primary hover:bg-primary/90 text-sm sm:text-base">
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
