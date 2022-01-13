import React from "react";
import { Link as HomeLinked } from "react-router-dom";
import { Background, Logo, Container, SigninBtn } from "./styles/header";
export default function Header({ bg, children, ...props }) {
  return bg ? <Background {...props}>{children}</Background> : children;
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
