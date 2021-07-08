import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 125px 45px 185px;
  max-width: 815px;
  margin-inline: auto;
  position: relative;
  z-index: 2;

  @media only screen and (max-width: 349px){
    padding: 50px 20px;
  }
`;

export const Title = styled.h1`
  color: #fff;
  max-width: 640px;
  font-size: 50px;
  font-weight: 600;
  margin: auto;

  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

export const SubTitle = styled.h2`
  color: #fff;
  font-size: 26px;
  font-weight: normal;
  margin: 16px auto;

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;
