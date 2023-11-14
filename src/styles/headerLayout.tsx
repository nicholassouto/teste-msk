import { styled } from "styled-components";

const HeaderLayout = styled.header`
  width: 100vw;
  height: 4.8rem;
  background-color: #0f52ba;
  color: #ffffff;
  position: fixed;
  top: 0;
  z-index: 2;

  > section {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  > section > div {
    display: flex;
  }

  > section > div:first-child {
    display: flex;
    gap: 0.5rem;
  }

  > section > div:first-child > h1 {
    font-size: 3rem;
    line-height: 140%;
  }

  > section > div:first-child > p {
    margin-top: 1rem;
    font-size: 2rem;
    font-weight: 100;
  }

  .shop-cart {
    width: 5.2rem;
    height: 2.6rem;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: #ffffff;
    border-radius: 0.8rem;
    color: black;
  }
`;

export default HeaderLayout;