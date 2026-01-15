import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SeriesCard from "@/components/products/SeriesCard";
import { categories, getCategoryBySlug, getAllSeries } from "@/data/products";
import { ChevronRight } from "lucide-react";

const Products = () => {
  const { categorySlug } = useParams();

  // If category is specified, show series for that category
  const category = categorySlug ? getCategoryBySlug(categorySlug) : null;
  const displaySeries = category ? category.series : getAllSeries();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {category ? category.name : "Our Products"}
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            {category
              ? category.description
              : "Explore our wide range of premium quality taps and fittings"}
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-muted py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-muted-foreground hover:text-primary">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
            <Link to="/products" className="text-muted-foreground hover:text-primary">
              Products
            </Link>
            {category && (
              <>
                <ChevronRight className="w-4 h-4 text-muted-foreground" />
                <span className="text-primary font-medium">{category.name}</span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Category Tabs (if no category selected) */}
      {!category && (
        <section className="py-8 border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-3">
              <Link
                to="/products"
                className="px-6 py-2 rounded-full bg-primary text-primary-foreground font-medium"
              >
                All Products
              </Link>
              {categories.map((cat) => (
                <Link
                  key={cat.slug}
                  to={`/products/${cat.slug}`}
                  className="px-6 py-2 rounded-full bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors font-medium"
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Series Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {displaySeries.map((series) => (
              <SeriesCard key={series.slug} series={series} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
