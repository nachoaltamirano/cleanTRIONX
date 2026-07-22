import { useParams } from "react-router-dom";
import { useProduct } from "../../features/products/hooks/useProduct";
import ProductDetailView from "../../features/products/components/ProductDetailView";

const ProductDetail = () => {
  const { id } = useParams();
  const { data: product, isLoading, error } = useProduct(id);

  if (isLoading) {
    return <p className="p-6 text-gray-600">Cargando producto...</p>;
  }

  if (error) {
    return <p className="p-6 text-red-600">No se pudo cargar el producto.</p>;
  }

  if (!product) {
    return <p className="p-6 text-gray-600">Producto no encontrado.</p>;
  }

  return <ProductDetailView product={product} />;
};

export default ProductDetail;
