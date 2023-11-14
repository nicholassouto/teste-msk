import { styled } from "styled-components";

export const Container = styled.main`
  flex-shrink: 0;
  display: none;
  flex-direction: column;
  position: fixed;
  top: 0;
  right: 0;
  width: 90vw;
  height: 100vh;
  z-index: 10;
  background-color: #0f52ba;
  box-shadow: -0.5rem 0 0.6rem 0 rgba(0, 0, 0, 0.13);
  padding-top: 1rem;

  @media screen and (min-width: 768px) {
    width: 50vw;
  }

  @media screen and (min-width: 1025px) {
    width: 30vw;
  }
`;

export const ShopCart = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  > h2 {
    width: 60%;
    font-size: 2.6rem;
    font-weight: 700;
    color: #ffffff;
  }

  > div {
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4.5rem;
    height: 4.5rem;
    border-radius: 50%;
    background-color: #000000;
    color: #0f52ba;

    > span {
      position: relative;
      top: -0.3rem;
      left: 0;
      font-size: 4.4rem;
      line-height: 1.5rem;
    }
  }
`;

export const ProductsCart = styled.div`
  width: 90%;
  padding-left: 1rem;
  margin-bottom: 2rem;
  overflow-y: auto;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  flex-wrap: wrap;
`;

export const PriceQuant = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-bottom: 7.5rem;

  > h2,
  P {
    font-size: 2.8rem;
    font-weight: 700;
    line-height: 1.5rem;
    color: #ffffff;
  }
`;

export const BuyProducts = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  z-index: 11;
  width: 100%;
  height: 6.5rem;
  background-color: #000000;
  color: #ffffff;
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.5rem;
`;
