import Image from "next/image";

import Produto from "@/assets/produto.png";
import {
  Container,
  NamePriceContainer,
  PhotoContainer,
  PriceQuant,
} from "@/styles/productCartComp";

export default function ProductCart() {
  return (
    <Container>
      <PhotoContainer>
        <Image src={Produto} alt="" width={117} height={148} />
      </PhotoContainer>
      <NamePriceContainer>
        <h3>Apple Watch Series 4 GPS</h3>
      </NamePriceContainer>
      <PriceQuant>
        <div>
          <p>-</p>
          <span>1</span>
          <p>+</p>
        </div>
        <section>
          R$ <span>399</span>
        </section>
      </PriceQuant>
    </Container>
  );
}
