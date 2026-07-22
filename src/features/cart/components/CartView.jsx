import CartList from './CartList';
import CartSummary from './CartSummary';
import EmptyCart from './EmptyCart';

const CartView = ({ items }) => {
  if (!items.length) {
    return <EmptyCart />;
  }

  return (
    <div className="mx-auto max-w-6xl p-6">
      <div className="grid gap-6 lg:grid-cols-[1.4fr_0.6fr]">
        <CartList items={items} />
        <CartSummary items={items} />
      </div>
    </div>
  );
};

export default CartView;
