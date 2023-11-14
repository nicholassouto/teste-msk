import React, { createContext, useContext, useState, useEffect } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
}

interface CartContextProps {
  items: Product[];
  itemCount: number;
  addItem: (product: Product) => void;
  removeItem: (product: Product) => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider: React.FC = ({ children }) => {
  const [items, setItems] = useState<Product[]>([]);
  const [itemCount, setItemCount] = useState(0);

  const addItem = (product: Product) => {
    setItems((prevItems) => [...prevItems, product]);
    setItemCount((prevCount) => prevCount + 1);
  };

  const removeItem = (product: Product) => {
    setItems((prevItems) => {
      const index = prevItems.findIndex((item) => item.id === product.id);

      if (index !== -1) {
        const newItems = [...prevItems];
        newItems.splice(index, 1);
        return newItems;
      }

      return prevItems;
    });

    setItemCount((prevCount) => Math.max(prevCount - 1, 0));
  };

  useEffect(() => {
    console.log("Carrinho atualizado:", items);
  }, [items]);

  return (
    <CartContext.Provider value={{ items, itemCount, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
