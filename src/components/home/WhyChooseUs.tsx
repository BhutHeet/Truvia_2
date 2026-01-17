import { Droplet, Shield, Clock, ThermometerSun, Wrench, Sparkles } from "lucide-react";

const features = [
  {
    icon: Droplet,
    title: "Drip Free",
    description: "Advanced technology ensures zero leakage",
  },
  {
    icon: Shield,
    title: "Scratch Resistant",
    description: "Durable finish that maintains its look",
  },
  {
    icon: Sparkles,
    title: "Rust Free",
    description: "Premium materials prevent corrosion",
  },
  {
    icon: Clock,
    title: "Long Life",
    description: "Built to last for years of reliable use",
  },
  {
    icon: ThermometerSun,
    title: "Temperature Friendly",
    description: "Works perfectly in all conditions",
  },
  {
    icon: Wrench,
    title: "Less Maintenance",
    description: "Easy to maintain and clean",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-primary">Why Choose Us</h2>
        <p className="section-subtitle">
          Quality is at the core of everything we do. Our products are designed 
          for durability, performance, and customer satisfaction.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-background rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 text-center shadow-sm hover:shadow-lg transition-shadow group"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mx-auto mb-2 sm:mb-3 md:mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary transition-colors">
                <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-semibold text-foreground mb-1 sm:mb-2 text-xs sm:text-sm md:text-base">{feature.title}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground hidden sm:block">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
