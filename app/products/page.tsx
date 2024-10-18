import { PRODUCTS, SERVICES } from "@/constants";
import ProductCard from "@/components/ProductCard";
import ServiceCard from "@/components/ServiceCard";

const ProductsPage = () => {
  return (
    <div className="padding-container max-container py-24">
      <h1 className="bold-40 lg:bold-64 mb-10">Our Products and Services</h1>

      <section>
        <h2 className="bold-32 mb-6">Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>

      <section className="mt-20">
        <h2 className="bold-32 mb-6">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
