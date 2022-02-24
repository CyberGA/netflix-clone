import React, { useState } from "react";
import { Link as HomeLinked } from "react-router-dom";
import {
  Background,
  Logo,
  Search,
  SearchIcon,
  SearchInput,
  Container,
  SigninBtn,
  Picture,
  Dropdown,
  Profile,
  Feature,
  Text,
  FeautureTitle,
  Links,
  PlayButton,
  Group,
  StickyContainer,
} from "./styles/header";
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

Header.StickyFrame = function HeaderStickyFrame({ children, ...props }) {
  return <StickyContainer {...props}>{children}</StickyContainer>;
};

Header.Picture = function HeaderPicture({ src, ...props }) {
  return <Picture {...props} src={`/images/user/${src}.png`} />;
};

Header.Search = function HeaderSearch({ searchTerm, setSearchTerm, ...props }) {
  const [searchActive, setSearchActive] = useState(false);
  return (
    <Search {...props}>
      <SearchIcon onClick={() => setSearchActive((searchActive) => !searchActive)}>
        <img src="/images/icons/search.png" alt="Search" />
      </SearchIcon>
      <SearchInput value={searchTerm} onChange={({ target }) => setSearchTerm(target.value)} placeholder="Search films and series" active={searchActive} />
    </Search>
  );
};

Header.Profile = function HeaderProfile({ children, ...props }) {
  return <Profile {...props}>{children}</Profile>;
};

Header.PlayButton = function HeaderPlayButton({ children, ...props }) {
  return <PlayButton {...props}>{children}</PlayButton>;
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
