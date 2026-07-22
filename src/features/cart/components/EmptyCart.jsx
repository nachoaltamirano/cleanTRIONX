import { Link } from 'react-router-dom';
import Button from '../../../components/ui/Button';

const EmptyCart = () => {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center justify-center gap-4 rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm">
      <h2 className="text-2xl font-semibold text-gray-900">Tu carrito está vacío</h2>
      <p className="text-sm text-gray-600">Agrega productos para comenzar tu compra.</p>
      <Link to="/products">
        <Button variant="primary">Volver a la tienda</Button>
      </Link>
    </div>
  );
};

export default EmptyCart;
