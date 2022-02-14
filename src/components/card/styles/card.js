import styled from "styled-components/macro";

//& Thumbnails of fetched movies
export const Title = styled.p`
  font-size: 24px;
  color: #e5e5e5;
  font-weight: bold;
  margin: 0 56px -40px;
`;

export const FeatureText = styled.p`
  margin-left: 0;
  color: #000;
`;

export const Image = styled.img`
  border: 0;
  /* width: 100%; */
  max-width: 205px;
  cursor: pointer;
  height: auto;
  padding: 0;
  margin: 0;
  transform: scale(1);
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  box-sizing: border-box;

  > ${Title} {
    @media (max-width: 1000px) {
      margin-left: 30px;
    }
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const Group = styled.div`
  display: flex;
  flex-direction: ${({ flexDirection }) => (flexDirection === "row" ? "row" : "column")};
  ${({ alignItems }) => alignItems && `align-items: ${alignItems}`};
  ${({ margin }) => margin && `margin: ${margin}`};

  > ${Container}:first-of-type {
    position: relative;
    background: #000;
    margin-top: -180px;
    padding-top: 5px;
    box-shadow: -10px -20px 10px rgb(0 0 0), 10px -20px 10px rgb(0 0 0);
  }
`;

export const SubTitle = styled.p`
  font-size: 12px;
  color: #fff;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 0;
  user-select: none;
  display: none;
`;

export const Text = styled.p`
  margin-top: 5px;
  font-size: 10px;
  color: #fff;
  margin-bottom: 0;
  user-select: none;
  display: none;
  line-height: normal;
`;

export const Feature = styled.div`
  display: flex;
  flex-direction: row;
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-position: left center;
  position: relative;
  /* height: 360px; */
  height: auto;
  /* background-position-x: right; */
  background-repeat: no-repeat;
  background-color: #000;

  @media (max-width: 1000px) {
    /* height: auto; */
    background-size: auto;

    ${Title} {
      font-size: 20px;
      line-height: 20px;
      margin-bottom: 10px;
    }

    ${FeatureText} {
      font-size: 14px;
    }
  }
`;

export const FeatureTitle = styled(Title)`
  margin: 0 0 10px 0;
`;

export const FeatureClose = styled.button`
  color: #fff;
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
  background: transparent;
  border: 0;

  img {
    filter: brightness(0) invert(1);
    width: 24px;
  }
`;

export const Maturity = styled.div`
  background-color: ${({ rating }) => (rating === true ? "rgba(255,0,0,0.5)" : "rgba(0,255,0,0.5)")};
  border-radius: 20px;
  width: fit-content;
  padding: 5px;
  text-align: center;
  color: #fff;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  margin-right: 10px;
  font-size: 12px;
`;

export const Content = styled.div`
  margin: 56px;
  padding: 10px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 4px;
  max-width: 500px;
  line-height: normal;

  @media (max-width: 1000px) {
    margin: 30px;
    max-width: none;
  }
`;

export const Meta = styled.div`
  display: none;
  position: absolute;
  bottom: 0;
  padding: 10px;
  background-color: #0000008f;
  transition: transform 0.2s;
`;

export const Entities = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Scroll = styled.div`
  position: absolute;
  top: 0;
  z-index: 109;
  background: rgba(0, 0, 0, 0.5);
  height: 80%;
  width: fit-content;
  padding: 10px;
  display: flex;
  jsutify-content: center;
  align-items: center;
  cursor: pointer;
  margin-top: 40px;

  img {
    opacity: 0.5;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.7);

    img {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const ScrollLeft = styled(Scroll)`
  left: 0;
`;

export const ScrollRight = styled(Scroll)`
  right: 0;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 5px;
  position: relative;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover ${Image}, &:hover ${Meta} {
    transform: scale(1.2);
    z-index: 99;
  }

  @media (min-width: 1200px) {
    &:hover ${Meta}, &:hover ${Text}, &:hover ${SubTitle} {
      display: block;
      z-index: 100;
    }
  }

  &:first-of-type {
    margin-left: 26px;

    @media (max-width: 1000px) {
      margin-left: 30px;
    }
  }

  &:last-of-type {
    margin-right: 56px;

    @media (max-width: 1000px) {
      margin-right: 30px;
    }
  }
`;
