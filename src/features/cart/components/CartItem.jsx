import Card from '../../../components/ui/Card';
import Badge from '../../../components/ui/Badge';
import Button from '../../../components/ui/Button';
import { useCart } from '../context/CartContext';

const CartItem = ({ item }) => {
  const { removeFromCart, updateQuantity } = useCart();
  const product = item?.product;

  return (
    <Card className="p-4">
      <div className="flex items-start gap-4">
        <div className="flex h-20 w-20 items-center justify-center rounded-xl bg-gray-100 text-sm text-gray-500">
          {product?.image ? (
            <img src={product.image} alt={product?.name ?? 'Producto'} className="h-full w-full rounded-xl object-cover" />
          ) : (
            'Sin imagen'
          )}
        </div>

        <div className="flex-1">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-base font-semibold text-gray-900">{product?.name ?? 'Producto'}</h3>
            <Badge variant="secondary">{item?.quantity ?? 0}</Badge>
          </div>

          {product?.category?.name ? (
            <p className="mt-1 text-sm text-gray-600">{product.category.name}</p>
          ) : null}

          <p className="mt-2 text-sm font-medium text-gray-700">
            {product?.price != null ? `$${product.price}` : 'Precio no disponible'}
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-2 py-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => updateQuantity(product.id, item.quantity - 1)}
              >
                -
              </Button>
              <span className="min-w-6 text-center text-sm font-medium text-gray-700">
                {item?.quantity ?? 0}
              </span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => updateQuantity(product.id, item.quantity + 1)}
              >
                +
              </Button>
            </div>

            <Button
              variant="secondary"
              size="sm"
              onClick={() => removeFromCart(product.id)}
            >
              Eliminar
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CartItem;
