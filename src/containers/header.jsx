import React, { useState, useEffect } from "react";
import Header from "../components/header/index";
import { useLocation } from "react-router-dom";
import { HOME, SIGN_IN, SIGN_UP } from "../lib/routes"; //destructured home and signin

export default function HeaderContainer({ children }) {
  const [height, setHeight] = useState(window.innerWidth);
  const [show, setShow] = useState(true);
  const { pathname } = useLocation();

  window.onresize = () => setHeight(window.innerWidth);

  useEffect(() => {
    if ((pathname === SIGN_IN || pathname === SIGN_UP) && height <= 739) {
      setShow(false);
    } else {
      setShow(true);
    }
  }, [height, pathname]);

  return (
    <Header bg={show} src={"../images/misc/home-bg4.jpg"}>
      <Header.Frame>
        <Header.Logo to={HOME} src="/images/misc/Netflix-logo.svg" alt="Netflix logo" />
        {showSigninBtn()}
      </Header.Frame>
      {children}
    </Header>
  );

  function showSigninBtn() {
    if (pathname === SIGN_IN || pathname === SIGN_UP) return;

    return <Header.SigninBtn to={SIGN_IN}>Sign In</Header.SigninBtn>;
  }
}
