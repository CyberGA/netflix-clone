import React, { createContext, useState, useContext } from "react";
import {
  Container,
  Group,
  Title,
  Image,
  SubTitle,
  Feature,
  FeatureTitle,
  FeatureText,
  FeatureClose,
  Maturity,
  Content,
  Text,
  Meta,
  Entities,
  Item,
} from "./styles/card";

export const FeatureContext = createContext();

const Card = ({ children, ...props }) => {
  const [showFeature, setShowFeature] = useState(false);
  const [itemFeature, setItemFeature] = useState({});

  return (
    <FeatureContext.Provider value={{ showFeature, setShowFeature, itemFeature, setItemFeature }}>
      <Container {...props}>{children}</Container>
    </FeatureContext.Provider>
  );
};

Card.Group = function CardGroup({ children, ...props }) {
  return <Group {...props}>{children}</Group>;
};

Card.Title = function CardTitle({ children, ...props }) {
  return <Title {...props}>{children}</Title>;
};

Card.SubTitle = function CardSubTitle({ children, ...props }) {
  return <SubTitle {...props}>{children}</SubTitle>;
};

Card.Text = function CardText({ children, ...props }) {
  return <Text {...props}>{children}</Text>;
};

Card.Meta = function CardMeta({ children, ...props }) {
  return <Meta {...props}>{children}</Meta>;
};

Card.Entities = function CardEntities({ children, ...props }) {
  return <Entities {...props}>{children}</Entities>;
};

Card.Item = function CardItem({ item, children, ...props }) {
  const { setShowFeature, setItemFeature } = useContext(FeatureContext);
  return (
    <Item
      onClick={() => {
        setItemFeature(item);
        setShowFeature(true);
      }}
      {...props}
    >
      {children}
    </Item>
  );
};

Card.Image = function CardImage({ ...props }) {
  return <Image {...props} />;
};

export default Card;
