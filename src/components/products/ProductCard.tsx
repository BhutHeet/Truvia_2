import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="group bg-background rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border">
      {/* Image */}
      <div className="aspect-square bg-muted image-placeholder">
        <p>Image Coming Soon</p>
      </div>

      {/* Content */}
      <div className="p-4">
        <h4 className="font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {product.name}
        </h4>
        <Link
          to={`/product/${product.id}`}
          className="inline-flex items-center gap-2 text-secondary hover:text-primary text-sm font-medium transition-colors"
        >
          View More
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
