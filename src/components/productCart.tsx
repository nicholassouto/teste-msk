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
}

const ProductCart: React.FC<ProductCartProps> = ({ product }) => {
  return (
    <Container>
      <PhotoContainer>
        <Image src={product.photo} alt={product.name} width={117} height={148} />
      </PhotoContainer>
      <NamePriceContainer>
        <h3>{product.name}</h3>
      </NamePriceContainer>
      <PriceQuant>
        <div>
          <p>-</p>
          <span>1</span>
          <p>+</p>
        </div>
        <section>
          R$ <span>{product.price}</span>
        </section>
      </PriceQuant>
    </Container>
  );
};

export default ProductCart;
