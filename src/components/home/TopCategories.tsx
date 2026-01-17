import { Link } from "react-router-dom";
import { ArrowRight, Droplets, Wrench, ShowerHead, PipetteIcon, CircleDot } from "lucide-react";

const categories = [
  {
    name: "PTMT Taps",
    slug: "ptmt-taps",
    icon: Droplets,
    color: "from-primary to-secondary",
  },
  {
    name: "PPRC Taps",
    slug: "pprc-taps",
    icon: Wrench,
    color: "from-secondary to-accent",
  },
  {
    name: "Shower & Faucets",
    slug: "shower-faucets",
    icon: ShowerHead,
    color: "from-accent to-primary",
  },
  {
    name: "Pipes & Ball Cock",
    slug: "pipes-ball-cock",
    icon: PipetteIcon,
    color: "from-primary via-secondary to-accent",
  },
  {
    name: "Ball Valve",
    slug: "ball-valve",
    icon: CircleDot,
    color: "from-secondary to-primary",
  },
];

const TopCategories = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
            Our Products
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
            Explore Our Range
          </h2>
        </div>

        {/* Main Grid - First 2 large cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-3 sm:mb-4 md:mb-6">
          {categories.slice(0, 2).map((category, index) => {
            const Icon = category.icon;
            return (
              <Link
                key={index}
                to={`/products/${category.slug}`}
                className="group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-primary to-primary/80 aspect-[4/3] lg:col-span-2 lg:aspect-[2/1] transition-transform hover:scale-[1.02] duration-300"
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 right-4 sm:top-6 sm:right-6 w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 border-4 border-white rounded-full" />
                  <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 w-16 h-16 sm:w-20 sm:h-20 md:w-32 md:h-32 border-4 border-white rounded-full" />
                </div>

                {/* Icon */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 md:top-6 md:right-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-8">
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-3">
                    {category.name}
                  </h3>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs sm:text-sm font-medium group-hover:bg-white group-hover:text-primary transition-all duration-300">
                    <span>Explore</span>
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Secondary Grid - 3 smaller cards */}
        <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          {categories.slice(2).map((category, index) => {
            const Icon = category.icon;
            const isComingSoon = category.name === "Ball Valve";
            return (
              <Link
                key={index}
                to={`/products/${category.slug}`}
                className={`group relative overflow-hidden rounded-xl sm:rounded-2xl bg-card border-2 border-border hover:border-primary/50 aspect-square sm:aspect-[4/3] transition-all duration-300 hover:shadow-xl ${
                  isComingSoon ? "opacity-75" : ""
                }`}
              >
                {/* Icon Container */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-3 sm:p-4 md:p-6">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-20 md:h-20 rounded-xl sm:rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-10 md:h-10 text-white" />
                  </div>
                  <h3 className="text-xs sm:text-sm md:text-lg font-bold text-foreground text-center line-clamp-2 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  {isComingSoon && (
                    <span className="text-[10px] sm:text-xs text-muted-foreground mt-1">Coming Soon</span>
                  )}
                </div>

                {/* Hover Arrow */}
                <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 md:bottom-4 md:right-4 w-6 h-6 sm:w-7 sm:h-7 md:w-10 md:h-10 rounded-full bg-primary/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-5 md:h-5 text-primary" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="text-center mt-8 sm:mt-10 md:mt-12">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 rounded-full bg-primary text-primary-foreground font-semibold text-sm sm:text-base hover:bg-primary/90 transition-colors group"
          >
            <span>View All Products</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TopCategories;
