import { styled } from "styled-components";

export const Container = styled.main`
  width: 25rem;
  height: 22rem;
  margin: 2rem 0 0rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  box-shadow: 0 0.2rem 0.8rem 0 rgba(0, 0, 0, 0.14);
  border-radius: 0.8rem;
`;

export const PhotoContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NamePriceContainer = styled.div`
  width: 100%;
  padding: 0 1rem;
  margin-top: 0.5rem;
  display: flex;
  justify-content: space-around;

  > h3 {
    width: 60%;
    font-size: 1.5rem;
    line-height: 1.7rem;
    font-weight: 400;
    margin-right: 0.3rem;
  }
`;

export const PriceQuant = styled.div`
  width: 100%;
  padding: 0 1rem;
  margin-top: 0.5rem;
  font-size: 1rem;
  line-height: 120%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30%;
    border: 0.3px solid #bfbfbf;
    border-radius: 0.5rem;
    font-size: 1.4rem;
    font-weight: 700;
    line-height: 1.5rem;

    > p {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 33%;
    }

    > span {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 34%;
      border-left: 0.3px solid #bfbfbf;
      border-right: 0.3px solid #bfbfbf;
    }
  }

  > section {
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.5rem;
    background-color: #373737;
    color: #ffffff;
    font-size: 1.4rem;
    font-weight: 700;
    margin-left: 0.3rem;
    line-height: 1.5rem;
    color: #ffffff;
  }
`;
