import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  Container,
  NamePriceContainer,
  PhotoContainer,
  PriceQuant,
  RemoveButton,
} from "@/styles/productCartComp";

interface ProductCartProps {
  product: {
    id: number;
    name: string;
    price: number;
    description: string;
    photo: string;
  };
  quantity: number;
  onIncrement: () => void;
  onDecrement: () => void;
  onRemoveAll: () => void;
}

const ProductCart: React.FC<ProductCartProps> = ({
  product,
  quantity,
  onIncrement,
  onDecrement,
  onRemoveAll,
}) => {
  const [displayQuantity, setDisplayQuantity] = useState(quantity);

  useEffect(() => {
    setDisplayQuantity(quantity);
  }, [quantity]);

  const handleIncrement = () => {
    onIncrement();
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      onDecrement();
    }
  };

  const handleRemoveAll = () => {
    onRemoveAll();
  };

  return (
    <Container>
      <PhotoContainer>
        <RemoveButton onClick={handleRemoveAll}>X</RemoveButton>
        <Image src={product.photo} alt={product.name} width={117} height={148} />
      </PhotoContainer>
      <NamePriceContainer>
        <h3>{product.name}</h3>
      </NamePriceContainer>
      <PriceQuant>
        <div>
          <p onClick={handleDecrement}>-</p>
          <span>{displayQuantity}</span>
          <p onClick={handleIncrement}>+</p>
        </div>
        <section>
          R$ <span>{product.price * displayQuantity}</span>
        </section>
      </PriceQuant>
    </Container>
  );
};

export default ProductCart;
