import React, { createContext, useContext, useState } from "react";
import {
  Container,
  Title,
  Item,
  Header,
  Inner,
  Body,
} from "./styles/accordion";

const ToggleContext = createContext();

const Accordion = ({ children, ...props }) => {
  return (
    <Container {...props}>
      <Inner>{children}</Inner>
    </Container>
  );
};

export default Accordion;

Accordion.Title = function AccordionTitle({ children, ...props }) {
  return <Title {...props}>{children}</Title>;
};

Accordion.Item = function AccordionItem({ children, ...props }) {
  const [toggleShow, setToggleShow] = useState(false);

  return (
    <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
      <Item {...props}>{children}</Item>
    </ToggleContext.Provider>
  );
};

Accordion.Header = function AccordionHeader({ children, ...props }) {
  const { toggleShow, setToggleShow } = useContext(ToggleContext);
  return (
    <Header
      onClick={() => setToggleShow((toggleShow) => !toggleShow)}
      {...props}
    >
      {children}
      {/* <pre>{JSON.stringify(toggleShow, null , 2)}</pre> */}
      {toggleShow ? (
        <img src="/images/icons/close-slim.png" alt="close" />
      ) : (
        <img src="/images/icons/add.png" alt="open" />
      )}
    </Header>
  );
};

Accordion.Body = function AccordionBody({ children, ...props }) {
  const { toggleShow } = useContext(ToggleContext);

  return toggleShow ? <Body {...props}>{children}</Body> : null;
};
