import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  Container,
  NamePriceContainer,
  PhotoContainer,
  PriceQuant,
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
}

const ProductCart: React.FC<ProductCartProps> = ({ product, quantity }) => {
  const [displayQuantity, setDisplayQuantity] = useState(quantity);

  useEffect(() => {
    setDisplayQuantity(quantity);
  }, [quantity]);

  return (
    <Container>
      <PhotoContainer>
        <Image
          src={product.photo}
          alt={product.name}
          width={117}
          height={148}
        />
      </PhotoContainer>
      <NamePriceContainer>
        <h3>{product.name}</h3>
      </NamePriceContainer>
      <PriceQuant>
        <div>
          <span>{displayQuantity}</span>
        </div>
        <section>
          R$ <span>{product.price * displayQuantity}</span>
        </section>
      </PriceQuant>
    </Container>
  );
};

export default ProductCart;
