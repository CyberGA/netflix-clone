import React, { createContext, useState, useContext, useRef } from "react";
import requests from "../../lib/request";
import { useAlert } from "react-alert";
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
  ScrollLeft,
  ScrollRight,
} from "./styles/card";
import movieTrailer from "movie-trailer";
import { TrailerContext } from "../../context/trailer";
import "./styles/card.css";

export const FeatureContext = createContext();

//& Movies
const Card = ({ children, ...props }) => {
  const [showFeature, setShowFeature] = useState(false);
  const [itemTitle, setItemTitle] = useState("");
  const [itemFeature, setItemFeature] = useState({});

  return (
    <FeatureContext.Provider value={{ showFeature, setShowFeature, itemFeature, setItemFeature, itemTitle, setItemTitle }}>
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
  const { showFeature, itemFeature, setShowFeature, itemTitle } = useContext(FeatureContext);

  //& Content restriction
  const checkContent = (content) => {
    let checks = "";
    switch (content) {
      case "Romance":
        checks = "PG";
        break;
      case "Horror":
        checks = "PG-13";
        break;
      default:
        checks = "G";
        break;
    }
    return checks;
  };
  const maturityBg = (content) => {
    let checks = "";
    switch (content) {
      case "Romance":
        checks = true;
        break;
      case "Horror":
        checks = true;
        break;
      default:
        checks = false;
        break;
    }
    return checks;
  };

  return showFeature ? (
    <Feature {...props} src={`${requests.img_url}${itemFeature?.poster_path}` ?? `${requests.img_url}${itemFeature?.backdrop_path}`}>
      <Content>
        <FeatureTitle>{itemFeature?.title}</FeatureTitle>
        <FeatureText>{itemFeature?.overview}</FeatureText>
        <FeatureClose onClick={() => setShowFeature(false)}>
          <img src="/images/icons/close.png" alt="Close" />
        </FeatureClose>

        <Group margin="30px 0" flexDirection="row" alignItems="center">
          <Maturity rating={maturityBg(itemTitle)}>{checkContent(itemTitle)}</Maturity>
          <FeatureText fontWeight="bold">{itemTitle}</FeatureText>
        </Group>
        {children}
      </Content>
    </Feature>
  ) : null;
};

Card.Entities = function CardEntities({ children, ...props }) {
  const movieRowRef = useRef();

  //& Scrolling movies
  function scrollLeft() {
    if (movieRowRef.current) {
      movieRowRef.current.scrollBy({
        top: 0,
        left: -150,
        behavior: "smooth",
      });
    }
  }
  function scrollRight() {
    if (movieRowRef.current) {
      movieRowRef.current.scrollBy({
        top: 0,
        left: 150,
        behavior: "smooth",
      });
    }
  }

  return (
    <div className="entitiesRefContainer">
      <div ref={movieRowRef} className="entitiesRef">
        <ScrollLeft left={0} onClick={scrollLeft}>
          <img src="/images/icons/caret-left.png" alt="slide-left" width={16} />
        </ScrollLeft>
        <Entities {...props}>{children}</Entities>
        <ScrollRight right={0} onClick={scrollRight}>
          <img src="/images/icons/caret-right.png" alt="slide-right" width={16} />
        </ScrollRight>
      </div>
    </div>
  );
};

Card.Item = function CardItem({ item, itemTitle, children, ...props }) {
  const { setShowFeature, setItemFeature, setItemTitle } = useContext(FeatureContext);
  const { setVideoId } = useContext(TrailerContext);
  const alert = useAlert();

  const handleClick = async (movie) => {
    await movieTrailer(movie?.original_name || movie?.title || movie?.original_title || "")
      .then((url) => {
        const urlParams = new URLSearchParams(new URL(url).search);
        setVideoId(urlParams.get("v"));
      })
      .catch((err) => {
        setVideoId("");
        alert.error(<span style={{ fontSize: "16px", textTransform: "lowercase" }}>Movie not available yet</span>);
      });
  };

  return (
    <Item
      onClick={() => {
        setItemFeature(item);
        setShowFeature(true);
        setItemTitle(itemTitle);
        handleClick(item);
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
