import React, { useState, useEffect } from "react";
import { Link as HomeLinked } from "react-router-dom";
import {
  PlainBackground,
  Background,
  Logo,
  Container,
  SigninBtn,
} from "./styles/header";

export default function Header({ bg = true, children, ...props }) {
  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  function showBackground(props, children, bg) {
    if (
      (document.baseURI.includes("signin") ||
        document.baseURI.includes("signup")) &&
      dimensions.height <= 739
    ) {
      return <PlainBackground {...props}>{children}</PlainBackground>;
    }

    return bg ? <Background {...props}>{children}</Background> : children;
  }

  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }

    window.addEventListener("resize", showBackground);

    return (_) => {
      window.removeEventListener("resize", handleResize);
    };
  });

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
