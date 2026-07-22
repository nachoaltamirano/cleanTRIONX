import ProductActions from "../../../pages/Product/components/ProductActions";
import ProductGallery from "../../../components/products/ProductGallery";
import ProductInfo from "./ProductInfo";

const ProductDetailView = ({ product }) => {
  return (
    <section className="mx-auto max-w-6xl p-6">
      <div className="grid gap-8 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm md:grid-cols-[1.1fr_0.9fr]">
        <ProductGallery product={product} />
        <div className="flex flex-col gap-6">
          <ProductInfo product={product} />
          <ProductActions product={product} />
        </div>
      </div>
    </section>
  );
};

export default ProductDetailView;
