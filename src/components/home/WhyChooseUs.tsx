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
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-primary">Why Choose Us</h2>
        <p className="section-subtitle">
          Quality is at the core of everything we do. Our products are designed 
          for durability, performance, and customer satisfaction.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-background rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition-shadow group"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary transition-colors">
                <feature.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
