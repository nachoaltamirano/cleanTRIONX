import Button from "../../../components/ui/Button";
import { useCart } from "../../../features/cart/context/CartContext";

const ProductActions = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-gray-100 bg-gray-50 p-4">
      <div className="flex items-center gap-3">
        <label htmlFor={`quantity-${product?.id ?? "product"}`} className="text-sm font-medium text-gray-700">
          Cantidad
        </label>
        <select
          id={`quantity-${product?.id ?? "product"}`}
          className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700"
          defaultValue="1"
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>

      <Button variant="primary" onClick={() => addToCart(product)}>
        Agregar al carrito
      </Button>
    </div>
  );
};

export default ProductActions;
