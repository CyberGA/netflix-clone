import React from "react";
import Header from "../components/header/index";
// import * as ROUTES from "../constants/routes";
import { HOME, SIGN_IN } from "../constants/routes"; //destructured home and signin

function showSigninBtn() {
  if(document.baseURI.includes("signin") || document.baseURI.includes("signup")) return

  return (<Header.SigninBtn to={SIGN_IN}>Sign In</Header.SigninBtn>)
}

export default function HeaderContainer({ children }) {
  return (
    // console.log(document.baseURI)
    <Header>
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
}
