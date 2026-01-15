import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import ProductCard from "@/components/products/ProductCard";
import { getSeriesBySlug } from "@/data/products";
import { ChevronRight } from "lucide-react";

const SeriesDetail = () => {
  const { categorySlug, seriesSlug } = useParams();
  const series = seriesSlug ? getSeriesBySlug(seriesSlug) : null;

  if (!series) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold text-primary mb-4">Series Not Found</h1>
          <Link to="/products" className="text-secondary hover:underline">
            Back to Products
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient py-20 text-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Placeholder */}
            <div className="hidden lg:flex justify-center">
              <div className="w-80 h-80 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                <div className="text-center text-white/60">
                  <p className="text-lg font-medium">Image Coming Soon</p>
                  <p className="text-sm">{series.name}</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="text-center lg:text-right">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                {series.name.split(" ")[0]}
              </h1>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-secondary">
                {series.name.split(" ").slice(1).join(" ")}
              </h2>
              <p className="text-xl text-white/80 italic">
                {series.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-muted py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm flex-wrap">
            <Link to="/" className="text-muted-foreground hover:text-primary">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
            <Link to="/products" className="text-muted-foreground hover:text-primary">
              Products
            </Link>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
            <Link
              to={`/products/${categorySlug}`}
              className="text-muted-foreground hover:text-primary"
            >
              {series.category}
            </Link>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
            <span className="text-primary font-medium">{series.name}</span>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-primary mb-8">
            Products in {series.name}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {series.products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SeriesDetail;
