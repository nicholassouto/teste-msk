import { styled } from "styled-components";

export const Container = styled.main`
  width: 21.8rem;
  height: 28.5rem;
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  box-shadow: 0 0.2rem 0.8rem 0 rgba(0, 0, 0, 0.14);
  border-radius: 0 0 0.8rem 0.8rem;

  @media screen and (min-width: 941px){
    margin: 0rem 0 2rem;
  }
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

  > section {
    width: 40%;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.5rem;
    background-color: #373737;
    color: #ffffff;
    font-size: 1.4rem;
    font-weight: 700;
    margin-left: 0.3rem;
  }
`;

export const DescriptionContainer = styled.div`
  width: 100%;
  padding: 0 1rem;
  margin-top: 0.5rem;
  font-size: 1rem;
  line-height: 120%;
  color: #2c2c2c;
`;

export const FooterContainer = styled.footer`
  width: 100%;
  height: 3.6rem;
  margin-top: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  background-color: #0f52ba;
  border-radius: 0 0 0.8rem 0.8rem;

  color: #ffffff;
  font-size: 1.4rem;
  line-height: 1.8rem;
`;
