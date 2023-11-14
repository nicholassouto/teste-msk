// context/cartContext.tsx
import { createContext, useContext, useState } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  // Adicione outras propriedades conforme necessário
}

interface CartContextProps {
  items: Product[];
  itemCount: number;
  addItem: (product: Product) => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider: React.FC = ({ children }) => {
  const [items, setItems] = useState<Product[]>([]);
  const [itemCount, setItemCount] = useState(0);

  const addItem = (product: Product) => {
    setItems((prevItems) => [...prevItems, product]);
    setItemCount((prevCount) => prevCount + 1);
  };

  return (
    <CartContext.Provider value={{ items, itemCount, addItem }}>
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
