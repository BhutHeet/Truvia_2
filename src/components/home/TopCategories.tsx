import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    name: "PTMT Taps",
    slug: "ptmt-taps",
    description: "Premium quality PTMT taps with ceramic spindle",
  },
  {
    name: "PPRC Taps",
    slug: "pprc-taps",
    description: "High-quality PPRC taps with warranty",
  },
  {
    name: "Shower & Faucets",
    slug: "shower-faucets",
    description: "Health faucets and ABS showers",
  },
  {
    name: "Pipes & Ball Cock",
    slug: "pipes-ball-cock",
    description: "Connection pipes and ball cocks",
  },
  {
    name: "Ball Valve",
    slug: "ball-valve",
    description: "Coming Soon - New products",
  },
];

const TopCategories = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-primary">Our Products</h2>
        <p className="section-subtitle">
          Explore our wide range of premium quality products designed for 
          durability and performance.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
          {categories.map((category, index) => (
            <Link
              key={index}
              to={`/products/${category.slug}`}
              className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-muted aspect-square"
            >
              {/* Image Placeholder */}
              <div className="absolute inset-0 image-placeholder">
                <p className="text-xs sm:text-sm">Image Coming Soon</p>
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-6 text-white">
                <h3 className="text-sm sm:text-base md:text-xl font-bold mb-0.5 sm:mb-1 line-clamp-2">{category.name}</h3>
                <p className="text-white/80 text-xs sm:text-sm mb-2 sm:mb-3 line-clamp-2 hidden sm:block">{category.description}</p>
                <div className="flex items-center gap-1 sm:gap-2 text-secondary group-hover:gap-2 sm:group-hover:gap-4 transition-all">
                  <span className="text-xs sm:text-sm font-medium">View</span>
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopCategories;
