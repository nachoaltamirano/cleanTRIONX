import QueryProvider from "./QueryProvider";
import { CartProvider } from "../features/cart/context/CartContext";

const AppProviders = ({ children }) => {
  return (
    <QueryProvider>
      <CartProvider>{children}</CartProvider>
    </QueryProvider>
  );
};

export default AppProviders;
