import React from "react";
import Header from "../components/header/index";
// import * as ROUTES from "../constants/routes";
import { HOME, SIGN_IN } from "../constants/routes"; //destructured home and signin

export default function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo
          to={HOME}
          src="/images/misc/Netflix-logo.svg"
          alt="Netflix-logo"
        />
        <Header.SigninBtn to={SIGN_IN}>Sign In</Header.SigninBtn>
      </Header.Frame>
      {children}
    </Header>
  );
}
