import styled from "styled-components/macro";

import { Link as RouterLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 660px;
  background: rgba(0, 0, 0, 0.75);
  border-radius: 5px;
  width: 100%;
  margin: auto;
  max-width: 350px;
  padding: 60px 68px 40px;
  margin-bottom: 100px;
  position: relative;
  z-index: 2;

  @media only screen and (max-width: 739px) {
    margin: 0;
    max-width: 100%;
    padding: 0 0 80px 0;
    min-height: auto;
  }
`;
export const Error = styled.div`
  background: none;
  border-radius: 4px;
  font-size: 14px;
  margin: 0 0 16px;
  color: #e97c03;
  padding: 15px 20px;
`;
export const Base = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 350px;
  width: 100%;

  @media only screen and (max-width: 739px) {
    max-width: 90%;
    margin: 0 auto;
  }
`;
export const Title = styled.h1`
  color: #fff;
  font-size: 32px;
  font-weight: bold;
`;
export const Text = styled.p`
  color: #737373;
  font-size: 16px;
  font-weight: 500;
`;

export const LinkText = styled(Text)`
  display: flex;
  gap: 10px;
  cursor: pointer;
  a {
    color: #8c8c8c;
    &:hover {
      text-decoration: none;
    }
  }

`;

export const Pane = styled.div`
  display: flex;
  justify-content: ${({space}) => space};
  margin-top: 10px;
  gap: 10px;
  align-items: center;
  margin-bottom: ${({bottom}) => bottom}
`;

export const SmallText = styled.p`
  margin-block: 0;
  font-size: 13px;
  line-height: normal;
  color: #8c8c8c;
  max-width: 90%;

  a {
    color: #0071eb;
  }
`;
export const Link = styled(RouterLink)`
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
export const SmallLink = styled(RouterLink)`
  color: #8c8c8c;
  font-size: 13px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
export const Input = styled.input`
  background: #333;
  border-radius: 4px;
  border: 0;
  color: #fff;
  height: 50px;
  line-height: 50px;
  padding: 5px 20px;
  margin-bottom: 20px;

  &:last-of-type {
    margin-bottom: 30px;
  }
  &:focus {
    outline: none;
  }
`;
export const Submit = styled.button`
  background: #e50914;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  margin: 24px 0 0;
  padding: 16px;
  border: 0;
  color: #fff;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
  }
`;
