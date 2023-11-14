import React, { useState, useEffect } from "react";
import {
  Container,
  ProductsCart,
  ShopCart,
  PriceQuant,
  BuyProducts,
} from "@/styles/buyListComp";
import ProductCart from "./productCart";
import { useCart } from "../context/cartContext";
import { useQuery } from "react-query";

interface BuyListProps {
  isModalVisible: boolean;
  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ProductData {
  id: number;
  name: string;
  price: number;
  description: string;
  photo: string;
}

const fetchProducts = async (
  page: number,
  rows: number,
  sortBy: string,
  orderBy: string
): Promise<ProductData[]> => {
  const response = await fetch(
    `https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=${page}&rows=${rows}&sortBy=${sortBy}&orderBy=${orderBy}`
  );
  const data = await response.json();
  return data.products;
};

const BuyList: React.FC<BuyListProps> = ({
  isModalVisible,
  setIsModalVisible,
}) => {
  const { items, addItem, removeItem } = useCart();

  const { data: allProducts, isSuccess } = useQuery<ProductData[]>(
    ["allProducts", 1, 15, "id", "DESC"],
    async () => {
      const response = await fetch(
        `https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=15&sortBy=id&orderBy=DESC`
      );
      const data = await response.json();
      return data.products;
    }
  );

  const [itemCounts, setItemCounts] = useState<Record<number, number>>({});

  useEffect(() => {
    const counts: Record<number, number> = {};
    items.forEach((itemId) => {
      counts[itemId] = (counts[itemId] || 0) + 1;
    });
    setItemCounts(counts);
  }, [items]);

  const handleToggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleRemoveAll = (productId: number) => {
    for (let i = 0; i < itemCounts[productId]; i++) {
      removeItem(allProducts.find((product) => product.id === productId)!);
    }
  };

  const filteredProducts = isSuccess
    ? allProducts?.filter((product) => items.includes(product.id)) || []
    : [];

  return (
    <Container style={{ display: isModalVisible ? "flex" : "none" }}>
      <ShopCart>
        <h2>Carrinho de compras</h2>
        <div onClick={handleToggleModal}>
          <span>x</span>
        </div>
      </ShopCart>
      <ProductsCart>
        {filteredProducts.map((product) => (
          <ProductCart
            key={product.id}
            product={product}
            quantity={itemCounts[product.id] || 0}
            onIncrement={() => addItem(product)}
            onDecrement={() => removeItem(product)}
            onRemoveAll={() => handleRemoveAll(product.id)}
          />
        ))}
      </ProductsCart>
      <PriceQuant>
        <h2>Total:</h2>
        <p>
          R$
          <span>
            {filteredProducts.reduce((total, product) => {
              return total + product.price * itemCounts[product.id];
            }, 0)}
          </span>
        </p>
      </PriceQuant>
      <BuyProducts>
        <p>Finalizar Compra</p>
      </BuyProducts>
    </Container>
  );
};

export default BuyList;
