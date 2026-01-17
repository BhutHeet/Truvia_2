import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="group bg-background rounded-lg sm:rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border">
      {/* Image */}
      <div className="aspect-square bg-muted image-placeholder">
        <p className="text-xs sm:text-sm">Image Coming Soon</p>
      </div>

      {/* Content */}
      <div className="p-2.5 sm:p-3 md:p-4">
        <h4 className="font-semibold text-foreground mb-1.5 sm:mb-2 line-clamp-2 group-hover:text-primary transition-colors text-xs sm:text-sm md:text-base">
          {product.name}
        </h4>
        <Link
          to={`/product/${product.id}`}
          className="inline-flex items-center gap-1 sm:gap-2 text-secondary hover:text-primary text-xs sm:text-sm font-medium transition-colors"
        >
          View More
          <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
