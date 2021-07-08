import styled from "styled-components/macro";

export const Item = styled.div`
  display: flex;
  border-bottom: 8px solid #222;
  padding: 80px 5%;
  color: #fff;
  overflow: hidden;
`;

export const Inner = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${({ direction }) => direction};
  justify-content: space-between;
  max-width: 1100px;
  margin: auto;
  width: 100%;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Container = styled.div`
  @media (max-width: 1000px) {
    ${Item}:last-of-type h2 {
      margin-bottom: 50px;
    }
  }
`;

export const Pane = styled.div`
  width: 50%;

  @media (max-width: 1000px) {
    width: 100%;
    padding: 0 65px;
    text-align: center;
  }
`;

export const Title = styled.h1`
  // font-size: 40px;
  // line-height: 1.1;
  // margin-bottom: 8px;
  font-size: 3.125rem;
  line-height: 1.1;
  margin-bottom: 0.5rem;

  @media only screen and (min-width: 550px) and (max-width: 949px) {
    font-size: 2.5rem;
  }

  @media (max-width: 600px) {
    font-size: 1.8rem;
  }
`;

export const SubTitle = styled.h2`
  // font-size: 18px;
  // font-weight: normal;
  font-size: 1.625rem;
  font-weight: 400;
  line-height: normal;
  max-width: 95%;

  @media (max-width: 600px) {
    font-size: 18px;
  }

  @media only screen and (min-width: 550px) and (max-width: 949px) {
    font-size: 1.25rem
  }
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
  object-fit: contain;
`;
