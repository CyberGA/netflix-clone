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

  a {
    display: flex;
  }

  @media (max-width: 1000px) {
    margin: 0 20px 0 10px;
    // box-shadow: 0 0 0 649px rgb(0 0 0 / 50%);
  }
`;

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  background: url(${({ src }) =>
      src ? `../images/misc/${src}.jpg` : "../images/misc/home-bg3.jpg"})
    top left / cover no-repeat;
  border-bottom: 8px solid #222;
  object-fit: cover;
  position: relative;
  // min-height: 100vh;
  z-index: 0;
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

  @media (min-width: 1449px) {
    height: 45px;
    width: 167px;
  }

  @media only screen and (min-width: 400px) and (max-width: 549px), only screen and (min-width: 350px) and (max-width: 399px), only screen and (max-width: 349px) {
    height: 24px;
    width: 40%;
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

  @media only screen and (min-width: 400px) and (max-width: 549px), only screen and (min-width: 350px) and (max-width: 399px), only screen and (max-width: 349px) {
    font-size: .9rem;
    // margin-top: .35rem;
    padding: .4rem .5rem;
  }
`;
