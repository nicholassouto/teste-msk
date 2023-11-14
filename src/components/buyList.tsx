import {
    BuyProducts,
  Container,
  PriceQuant,
  ProductsCart,
  ShopCart,
} from "@/styles/buyListComp";
import ProductCart from "./productCart";

interface BuyListProps {
  isModalVisible: boolean;
  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const BuyList: React.FC<BuyListProps> = ({
  isModalVisible,
  setIsModalVisible,
}) => {
  const handleToggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <Container style={{ display: isModalVisible ? "flex" : "none" }}>
      <ShopCart>
        <h2>Carrinho de compras</h2>
        <div onClick={handleToggleModal}>
          <span>x</span>
        </div>
      </ShopCart>
      <ProductsCart>
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
      </ProductsCart>
      <PriceQuant>
        <h2>Total:</h2>
        <p>
          R$
          <span>798</span>
        </p>
      </PriceQuant>
      <BuyProducts>
        <p>Finalizar Compra</p>
      </BuyProducts>
    </Container>
  );
};

export default BuyList;
