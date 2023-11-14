import Image from "next/image";
import shoppingBag from "@/assets/shopping-bag.svg";
import {
  Container,
  DescriptionContainer,
  FooterContainer,
  NamePriceContainer,
  PhotoContainer,
} from "@/styles/productComp";
import { useCart } from '../context/cartContext';

interface ProductProps {
  data: {
    id: number;
    name: string;
    price: number;
    description: string;
    photo: string;
  };
}

const Product: React.FC<ProductProps> = ({ data }) => {
  const { items, addItem } = useCart();

  const handleBuyClick = () => {
    addItem(data.id);
    console.log('Item adicionado ao carrinho. Itens no carrinho:', items.length + 1);
  };

  return (
    <Container>
      <PhotoContainer>
        {data.photo && <Image src={data.photo} alt="" width={117} height={148} />}
      </PhotoContainer>
      <NamePriceContainer>
        <h3>{data.name}</h3>
        <section>
          R$ <span>{data.price}</span>
        </section>
      </NamePriceContainer>
      <DescriptionContainer>
        <p>{data.description}</p>
      </DescriptionContainer>
      <FooterContainer>
        <Image src={shoppingBag} alt="" width={13} height={15} />
        <p onClick={handleBuyClick}>COMPRAR</p>
      </FooterContainer>
    </Container>
  );
}

export default Product;
