import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Series } from "@/data/products";

interface SeriesCardProps {
  series: Series;
}

const SeriesCard = ({ series }: SeriesCardProps) => {
  return (
    <Link
      to={`/products/${series.categorySlug}/${series.slug}`}
      className="group block bg-background rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border"
    >
      {/* Image */}
      <div className="aspect-[4/3] bg-muted image-placeholder relative overflow-hidden">
        <p>Image Coming Soon</p>
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors" />
      </div>

      {/* Content */}
      <div className="p-5">
        <span className="text-xs text-secondary font-medium uppercase tracking-wider">
          {series.category}
        </span>
        <h3 className="font-bold text-lg text-foreground mt-1 mb-2 group-hover:text-primary transition-colors">
          {series.name}
        </h3>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {series.description}
        </p>
        <div className="flex items-center gap-2 text-primary text-sm font-medium">
          <span>View Products</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
        <p className="text-xs text-muted-foreground mt-2">
          {series.products.length} products
        </p>
      </div>
    </Link>
  );
};

export default SeriesCard;
