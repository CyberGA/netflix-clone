import React from "react";
import { Link as HomeLinked } from "react-router-dom";
import { Background, Logo, Container, SigninBtn, Picture, Dropdown, Profile, Feature, Text, FeautureTitle, Links, Group } from "./styles/header";
export default function Header({ bg, children, ...props }) {
  return bg ? <Background {...props}>{children}</Background> : children;
}

Header.Feature = function HeaderFeature({ children, ...props }) {
  return <Feature {...props}>{children}</Feature>;
};

Header.Text = function HeaderText({ children, ...props }) {
  return <Text {...props}>{children}</Text>;
};

Header.Dropdown = function HeaderDropdown({ children, ...props }) {
  return <Dropdown {...props}>{children}</Dropdown>;
};

Header.Links = function HeaderLinks({ children, ...props }) {
  return <Links {...props}>{children}</Links>;
};
Header.FeautureTitle = function HeaderFeautureTitle({ children, ...props }) {
  return <FeautureTitle {...props}>{children}</FeautureTitle>;
};

Header.Frame = function HeaderFrame({ children, ...props }) {
  return <Container {...props}>{children}</Container>;
};

Header.Picture = function HeaderPicture({ src, ...props }) {
  return <Picture {...props} src={`/images/user/${src}.png`} />;
};

Header.Profile = function HeaderProfile({ children, ...props }) {
  return <Profile {...props}>{children}</Profile>;
};

Header.Group = function HeaderGroup({ children, ...props }) {
  return <Group {...props}>{children}</Group>;
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
