import { createContext, useContext, useState } from 'react';

const CartContext = createContext(undefined);

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addToCart = (product) => {
    setItems((prev) => {
      const existingItem = prev.find((item) => item.product?.id === product?.id);

      if (existingItem) {
        return prev.map((item) =>
          item.product?.id === product?.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prev, { product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setItems((prev) => prev.filter((item) => item.product?.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    setItems((prev) => {
      const nextItems = prev
        .map((item) => {
          if (item.product?.id !== productId) {
            return item;
          }

          if (quantity <= 0) {
            return null;
          }

          return { ...item, quantity };
        })
        .filter(Boolean);

      return nextItems;
    });
  };

  const clearCart = () => {
    setItems([]);
  };

  const value = {
    items,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }

  return context;
};
