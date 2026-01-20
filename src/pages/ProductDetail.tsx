import React from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { getProductById, getSeriesBySlug } from "@/data/products";
import { ChevronRight, CheckCircle, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/products/ProductCard";

const ProductDetail = () => {
  const { productId } = useParams();
  const product = productId ? getProductById(productId) : null;
  const series = product ? getSeriesBySlug(product.seriesSlug) : null;

  // Scroll to top on mount
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);

  if (!product || !series) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold text-primary mb-4">Product Not Found</h1>
          <Link to="/products" className="text-secondary hover:underline">
            Back to Products
          </Link>
        </div>
      </Layout>
    );
  }

  // Get related products (other products in the same series)
  const relatedProducts = series.products.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <Layout>
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
              to={`/products/${series.categorySlug}/${series.slug}`}
              className="text-muted-foreground hover:text-primary"
            >
              {series.name}
            </Link>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
            <span className="text-primary font-medium">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Detail */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="aspect-square bg-muted rounded-2xl overflow-hidden">
              {product.image ? (
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain p-8"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center image-placeholder">
                  <p className="text-muted-foreground">Image Coming Soon</p>
                </div>
              )}
            </div>

            {/* Product Info */}
            <div>
              <span className="text-secondary font-semibold uppercase tracking-wider text-sm">
                {series.name}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-4">
                {product.name}
              </h1>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                {product.description}
              </p>

              {/* Features */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-foreground mb-4">Key Features</h3>
                <div className="space-y-3">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specifications */}
              <div className="mb-8 p-6 bg-muted rounded-xl">
                <h3 className="text-lg font-semibold text-foreground mb-4">Specifications</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Material</span>
                    <p className="font-medium">PTMT / PP</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Finish</span>
                    <p className="font-medium">Chrome / Colored</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Warranty</span>
                    <p className="font-medium">1 Year</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Origin</span>
                    <p className="font-medium">Made in India</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+916353329493">
                  <Button className="w-full sm:w-auto bg-primary hover:bg-primary/90">
                    <Phone className="mr-2 w-4 h-4" />
                    Call for Price
                  </Button>
                </a>
                <a href="mailto:info@truviapolyplast.com">
                  <Button variant="outline" className="w-full sm:w-auto">
                    <Mail className="mr-2 w-4 h-4" />
                    Send Inquiry
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-12 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-primary mb-8">Related Products</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default ProductDetail;
