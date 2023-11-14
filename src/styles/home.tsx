import { styled } from "styled-components";

const HomeContainer = styled.main`
  width: 100vw;
  height: 100vh;
  padding: 4.8rem 3rem 2rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 640px) and (max-width: 940px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 9.6rem 3rem 2rem 5rem;
    gap: 2.2rem;
  }

  @media screen and (min-width: 941px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 11.6rem 3rem 2rem 10rem;
    gap: 2.2rem;
  }
`;

export default HomeContainer;
