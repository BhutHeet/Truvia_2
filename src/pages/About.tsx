import Layout from "@/components/layout/Layout";
import { CheckCircle, Award, Users, Factory, Shield } from "lucide-react";

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Learn about TRUVIA POLYPLAST - Your trusted partner in quality taps and fittings
          </p>
        </div>
      </section>

      {/* Why Truvia Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
                <span className="text-foreground">Why </span>
                <span className="text-primary">TRUVIA?</span>
              </h2>
              <p className="text-secondary font-semibold text-base sm:text-lg mb-4">
                Quality is at the core of everything we do!
              </p>
              <p className="text-muted-foreground mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                We "TRUVIA POLYPLAST" have gained success in the market by manufacturing 
                and wholesaling a remarkable gamut of P.T.M.T Taps, Plastic Valve, 
                Plastic & Shower, Connection Pipe & Many More Products. We are an 
                ISO 9001:2015 certified company.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                Our product range is highly acclaimed in the market for its high durability, 
                premium quality, excellent performance and longer service life. We ensure 
                that raw material used in the production process is of superlative quality 
                and is reliably sourced. This outstanding range of products is offered by us 
                at rock bottom prices.
              </p>
            </div>

            {/* Right - Image/Video Placeholder */}
            <div className="relative">
              <div className="aspect-video bg-muted rounded-xl sm:rounded-2xl image-placeholder overflow-hidden shadow-lg">
                <p className="text-sm text-muted-foreground">Video Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-primary">Our Core Values</h2>
          <p className="section-subtitle">
            The principles that guide everything we do
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-background rounded-xl p-6 text-center shadow-sm">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Quality First</h3>
              <p className="text-sm text-muted-foreground">
                Uncompromising quality in every product we manufacture
              </p>
            </div>
            <div className="bg-background rounded-xl p-6 text-center shadow-sm">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Customer Focus</h3>
              <p className="text-sm text-muted-foreground">
                Your satisfaction is our top priority
              </p>
            </div>
            <div className="bg-background rounded-xl p-6 text-center shadow-sm">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Factory className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Innovation</h3>
              <p className="text-sm text-muted-foreground">
                Continuously improving our products and processes
              </p>
            </div>
            <div className="bg-background rounded-xl p-6 text-center shadow-sm">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Integrity</h3>
              <p className="text-sm text-muted-foreground">
                Honest and transparent business practices
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 aspect-video bg-muted rounded-2xl image-placeholder">
              <p>Image Coming Soon</p>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-secondary font-semibold uppercase tracking-wider text-sm">
                Certifications
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-6">
                ISO 9001:2015 Certified
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We are proud to be an ISO 9001:2015 certified company, demonstrating 
                our commitment to quality management systems and continuous improvement.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Quality Assurance</h4>
                    <p className="text-sm text-muted-foreground">
                      Rigorous quality control at every stage of production
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Process Excellence</h4>
                    <p className="text-sm text-muted-foreground">
                      Standardized processes for consistent product quality
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Customer Satisfaction</h4>
                    <p className="text-sm text-muted-foreground">
                      Focused on meeting and exceeding customer expectations
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
