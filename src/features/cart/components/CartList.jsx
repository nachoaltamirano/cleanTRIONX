import CartItem from './CartItem';

const CartList = ({ items }) => {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-xl font-semibold text-gray-900">Productos</h2>
      <div className="space-y-3">
        {items.map((item, index) => (
          <CartItem key={`${item.product?.id ?? 'product'}-${index}`} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CartList;
