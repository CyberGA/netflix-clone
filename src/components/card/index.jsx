import React, { createContext, useState, useContext } from "react";
import requests from "../../lib/request";
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

Card.Feature = function CardFeature({ children, category, ...props }) {
  const { showFeature, itemFeature, setShowFeature } = useContext(FeatureContext);
  return showFeature ? (
    <Feature src={`${requests.img_url}${itemFeature?.poster_path}` ?? `${requests.img_url}${itemFeature?.backdrop_path}`} {...props}>
      <Content>
        <FeatureTitle>{itemFeature?.title}</FeatureTitle>
        <FeatureText>{itemFeature?.overview}</FeatureText>
        <FeatureClose onClick={() => setShowFeature(false)}>
          <img src="/images/icons/close.png" alt="Close" />
        </FeatureClose>
      </Content>

      <Group margin="30px 0" flexDirection="row" alignItems="center">
        <Maturity rating={itemFeature.adult}>{itemFeature.adult === true ? "PG" : itemFeature.adult}</Maturity>
      </Group>
    </Feature>
  ) : null;
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
