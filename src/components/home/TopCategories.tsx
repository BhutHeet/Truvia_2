import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    name: "PTMT Taps",
    slug: "ptmt-taps",
    description: "Premium quality polymer taps",
  },
  {
    name: "PP Taps",
    slug: "pp-taps",
    description: "Durable polypropylene taps",
  },
  {
    name: "Ball Valve",
    slug: "ball-valve",
    description: "High-performance ball valves",
  },
  {
    name: "Shower & Accessories",
    slug: "shower",
    description: "Modern shower solutions",
  },
];

const TopCategories = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-primary">Top Categories</h2>
        <p className="section-subtitle">
          Explore our wide range of premium quality products designed for 
          durability and performance.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link
              key={index}
              to={`/products/${category.slug}`}
              className="group relative overflow-hidden rounded-2xl bg-muted aspect-square"
            >
              {/* Image Placeholder */}
              <div className="absolute inset-0 image-placeholder">
                <p>Image Coming Soon</p>
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-1">{category.name}</h3>
                <p className="text-white/80 text-sm mb-3">{category.description}</p>
                <div className="flex items-center gap-2 text-secondary group-hover:gap-4 transition-all">
                  <span className="text-sm font-medium">View Products</span>
                  <ArrowRight className="w-4 h-4" />
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
