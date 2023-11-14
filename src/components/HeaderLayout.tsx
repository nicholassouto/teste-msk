// components/HeaderComp.tsx
import Image from "next/image";
import { useCart } from "../context/cartContext";
import cartImg from "@/assets/cart.svg";
import { useState } from "react";
import HeaderLayout from "@/styles/headerLayout"; // Corrigido o nome do import
import BuyList from "./buyList"; // Importe o componente BuyList

const HeaderComp: React.FC = () => {
  const { itemCount } = useCart();
  const [isBuyListVisible, setIsBuyListVisible] = useState(false);

  const handleToggleBuyList = () => {
    setIsBuyListVisible(!isBuyListVisible);
  };

  return (
    <>
      <HeaderLayout>
        <section>
          <div>
            <h1>MKS</h1>
            <p>Sistemas</p>
          </div>
          <div className="shop-cart" onClick={handleToggleBuyList}>
            <Image
              src={cartImg}
              alt="icone de carrinho de compra"
              width={10}
              height={10}
            />{" "}
            <strong>{itemCount}</strong>
          </div>
        </section>
      </HeaderLayout>
      <BuyList
        isModalVisible={isBuyListVisible}
        setIsModalVisible={setIsBuyListVisible}
      />
    </>
  );
};

export default HeaderComp;
