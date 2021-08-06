import React from "react";
import { Link as HomeLinked } from "react-router-dom";
import {
  PlainBackground,
  Background,
  Logo,
  Container,
  SigninBtn,
} from "./styles/header";

function showBackground(props, children, bg) {
  if (
    (document.baseURI.includes("signin") ||
      document.baseURI.includes("signup")) &&
    window.innerWidth <= 739
  ) {
    return <PlainBackground {...props}>{children}</PlainBackground>;
  }

  return bg ? <Background {...props}>{children}</Background> : children;
}

export default function Header({ bg = true, children, ...props }) {
  return <>{showBackground(props, children, bg)}</>;
}

Header.Frame = function HeaderFrame({ children, ...props }) {
  return <Container {...props}>{children}</Container>;
};

Header.Logo = function HeaderLogo({ to, ...props }) {
  return (
    <HomeLinked to={to}>
      <Logo {...props} />
    </HomeLinked>
  );
};

Header.SigninBtn = function HeaderSigninBtn({ children, ...props }) {
  return <SigninBtn {...props}>{children}</SigninBtn>;
};
