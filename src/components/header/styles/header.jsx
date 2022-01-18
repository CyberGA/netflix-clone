import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  margin: 0 56px;
  height: 64px;
  padding: 8px 0;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 2;

  @media (max-width: 1000px) {
    margin: 0 20px 0 10px;
    // box-shadow: 0 0 0 649px rgb(0 0 0 / 50%);
  }
`;

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${({ src }) => (src ? src : "../images/misc/home-bg3.jpg")});
  background-position: top left;
  background-size: cover;
  background-repeat: no-repeat;
  border-bottom: 8px solid #222;
  object-fit: cover;
  position: relative;
  z-index: 0;

  @media (max-height: 1000px) {
    min-height: 100vh;
  }
`;

export const HomeBgGradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgb(0 0 0 / 75%);
  z-index: 1;
`;

export const Logo = styled.img`
  height: 36px;
  width: 134px;
  margin-right: 40px;
  position: relative;
  z-index: 9999;

  @media (min-width: 1449px) {
    height: 45px;
    width: 167px;
  }

  @media only screen and (min-width: 400px) and (max-width: 549px),
    only screen and (min-width: 350px) and (max-width: 399px),
    only screen and (max-width: 349px) {
    height: 24px;
    width: 80%;
  }
`;

export const SigninBtn = styled(Link)`
  display: block;
  background: #e50914;
  min-width: fit-content;
  height: fit-content;
  color: #fff;
  border: 0;
  font-size: 15px;
  border-radius: 3px;
  padding: 10px 17px;
  cursor: pointer;
  text-decoration: none;
  box-sizing: border-box;
  // font-weight: bold;

  &:hover {
    background: #f40612;
  }

  @media only screen and (min-width: 400px) and (max-width: 549px),
    only screen and (min-width: 350px) and (max-width: 399px),
    only screen and (max-width: 349px) {
    font-size: 0.9rem;
    // margin-top: .35rem;
    padding: 0.4rem 0.5rem;
  }
`;

export const Feature = styled(Container)`
  padding: 150px 1em 500px 0;
  flex-direction: column;
  align-items: normal;
  width: 50%;

  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;

export const Text = styled.p`
  color: #fff;
  font-size: 22px;
  line-height: normal;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
  margin: 0;
`;

export const FeautureTitle = styled.h2`
  color: #fff;
  font-size: 44px;
  font-weight: bold;
  line-height: normal;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
  margin: 0 0 20px;
`;
