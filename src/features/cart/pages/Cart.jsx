import { useCart } from '../context/CartContext';
import CartView from '../components/CartView';

const Cart = () => {
  const { items } = useCart();

  return <CartView items={items} />;
};

export default Cart;
