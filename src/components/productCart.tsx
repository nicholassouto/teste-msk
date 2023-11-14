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
  quantity: number; // Adicionando a propriedade de quantidade
}

const ProductCart: React.FC<ProductCartProps> = ({ product, quantity }) => {
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
          <span>{quantity}</span>
          <p>+</p>
        </div>
        <section>
          R$ <span>{product.price * quantity}</span> {/* Multiplicando pelo total de itens */}
        </section>
      </PriceQuant>
    </Container>
  );
};

export default ProductCart;
