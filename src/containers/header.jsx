import React, { useState, useEffect } from "react";
import Header from "../components/header/index";
import * as ROUTES from "../constants/routes";
import { useLocation } from "react-router-dom";
import { HOME, SIGN_IN } from "../constants/routes"; //destructured home and signin

export default function HeaderContainer({ children }) {
  const [height, setHeight] = useState(window.innerWidth);
  const [show, setShow] = useState(true);
  const { pathname } = useLocation();

  window.onresize = () => setHeight(window.innerWidth);

  useEffect(() => {
    if (
      (pathname === ROUTES.SIGN_IN || pathname === ROUTES.SIGN_UP) &&
      height <= 739
    ) {
      setShow(false);
    } else {
      setShow(true);
    }
  }, [height, pathname]);

  return (
    // console.log(document.baseURI)
    <Header bg={show}>
      <Header.Frame>
        <Header.Logo
          to={HOME}
          src="/images/misc/Netflix-logo.svg"
          alt="Netflix-logo"
        />
        {showSigninBtn()}
      </Header.Frame>
      {children}
    </Header>
  );

  function showSigninBtn() {
    if (pathname === ROUTES.SIGN_IN || pathname === ROUTES.SIGN_UP) return;

    return <Header.SigninBtn to={SIGN_IN}>Sign In</Header.SigninBtn>;
  }
}
