import { ShoppingCart } from "lucide-react";

const CartButton = () => {
  return (
    <button className="relative">
      <ShoppingCart size={24} />

      <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
        0
      </span>
    </button>
  );
};

export default CartButton;