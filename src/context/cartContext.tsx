// context/cartContext.tsx
import { createContext, useContext, useState, ReactNode } from "react";

interface CartContextProps {
  items: number[];
  itemCount: number; // Novo estado para a contagem de itens
  addItem: (itemId: number) => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode; // Adiciona a tipagem para children
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [items, setItems] = useState<number[]>([]);
  const [itemCount, setItemCount] = useState(0); // Inicializa a contagem como 0

  const addItem = (itemId: number) => {
    setItems((prevItems) => [...prevItems, itemId]);
    setItemCount((prevCount) => prevCount + 1); // Atualiza a contagem
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
