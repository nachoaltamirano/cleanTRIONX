import Button from '../../../components/ui/Button';
import { useCart } from '../context/CartContext';

const CartSummary = ({ items }) => {
  const { clearCart } = useCart();
  const totalItems = items.reduce((sum, item) => sum + (item.quantity || 0), 0);
  const subtotal = items.reduce((sum, item) => {
    const price = Number(item.product?.price) || 0;
    return sum + price * (item.quantity || 0);
  }, 0);

  const formatCurrency = (value) =>
    value.toLocaleString('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });

  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold text-gray-900">Resumen del pedido</h2>

      <div className="mt-6 space-y-3 text-sm text-gray-700">
        <div className="flex items-center justify-between">
          <span>Cantidad de productos</span>
          <span>{totalItems}</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Subtotal</span>
          <span>{formatCurrency(subtotal)}</span>
        </div>
        <div className="flex items-center justify-between font-semibold text-gray-900">
          <span>Total</span>
          <span>{formatCurrency(subtotal)}</span>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-2">
        <Button variant="primary" className="w-full">
          Finalizar compra
        </Button>
        <Button variant="secondary" className="w-full" onClick={clearCart}>
          Vaciar carrito
        </Button>
      </div>
    </div>
  );
};

export default CartSummary;
