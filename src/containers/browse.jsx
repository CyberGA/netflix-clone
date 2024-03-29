import React, { useState, useEffect, useContext } from "react";
import Fuse from "fuse.js";
import SelectProfileContainer from "./profile";
import { getAuth, signOut } from "firebase/auth";
import Loading from "../components/loading/index";
import useContent from "../hooks/use-content";
import requests from "../lib/request";
import Header from "../components/header/index";
import { HOME } from "./../lib/routes";
import getInitials from "../lib/get-initials";
import shortened from "../lib/shorten-text";
import Card from "../components/card";
import FooterContainer from "../containers/footer";
import Player from "../components/player/index";
import { TrailerContext } from "../context/trailer";
import { FirebaseContext } from "../context/firebase";

//& Main page container - Browse
const BrowseContainer = ({ slides }) => {
  const [category, setcategory] = useState("series");
  const [searchTerm, setSearchTerm] = useState("");
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [banner, setBanner] = useState("");
  const [slideRows, setSlideRows] = useState([]);
  const { videoId } = useContext(TrailerContext);

  const { firebaseApp } = useContext(FirebaseContext);
  const authUser = getAuth(firebaseApp).currentUser || {};

  const { Trending } = useContent(`${requests.fetchTrending}`, "Trending");

  useEffect(() => {
    const newBanner = Trending[Math.ceil(Math.random() * Trending.length - 1)];
    setBanner((banner) => newBanner);

    setTimeout(() => {
      setLoading((loading) => false);
    }, 5000);
  }, [profile, Trending]);

  useEffect(() => {
    setSlideRows((prevSlide) => slides[category]);
  }, [slides, category]);

  //& logout
  function logout() {
    const auth = getAuth();
    signOut(auth).catch((err) => console.log(err));
  }

  //& movie filter
  useEffect(() => {
    const fuse = new Fuse(slideRows, { keys: ["data.title", "data.overview", "data.original_title", "data.original_name"] });
    const results = fuse.search(searchTerm).map(({ item }) => item);

    if (slideRows.length > 0 && searchTerm.length > 3 && results.length > 0) {
      setSlideRows(results);
    } else {
      setSlideRows(slides[category]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]);

  return profile.displayName ? (
    <>
      {loading ? <Loading src={authUser.photoURL} /> : <Loading.ReleaseBody />}

      <Header src={`${requests.img_url}${banner?.backdrop_path}`} bg={true}>
        <Header.Frame>
          <Header.Group>
            <Header.Logo to={HOME} src="/images/misc/Netflix-logo.svg" alt="Netflix logo" />
            <Header.Links active={category === "series" ? true : false} onClick={() => setcategory((prevCategory) => "series")}>
              Series
            </Header.Links>
            <Header.Links active={category === "films" ? true : false} onClick={() => setcategory((prevCategory) => "films")}>
              Films
            </Header.Links>
          </Header.Group>
          <Header.Group>
            <Header.Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <Header.Profile>
              <Header.Picture src={authUser.photoURL} />
              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture src={authUser.photoURL} />
                  <Header.Links>{getInitials(authUser.displayName)}</Header.Links>
                </Header.Group>
                <Header.Links onClick={logout}>Sign out</Header.Links>
              </Header.Dropdown>
            </Header.Profile>
          </Header.Group>
        </Header.Frame>
        <Header.Feature>
          <Header.FeautureTitle>{banner?.title ?? banner?.original_title ?? banner?.original_name}</Header.FeautureTitle>
          <Header.Text>{shortened(banner?.overview, 100)}</Header.Text>
          <Header.PlayButton>Play</Header.PlayButton>
        </Header.Feature>
      </Header>

      <Card.Group>
        {slideRows.map((slideItem) => (
          <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
            <Card.Title>{slideItem.title}</Card.Title>
            <Card.Entities>
              {slideItem.data.map((item) => (
                <Card.Item key={item.id} item={item} itemTitle={slideItem.title}>
                  <Card.Image src={`${requests.img_url}${item?.poster_path}` ?? `${requests.img_url}${item?.backdrop_path}`} />
                  <Card.Meta>
                    <Card.SubTitle>{item?.title ?? item.original_title ?? item?.original_name}</Card.SubTitle>
                    <Card.Text>{item?.overview}</Card.Text>
                  </Card.Meta>
                </Card.Item>
              ))}
            </Card.Entities>

            <Card.Feature category={category}>
              <Player>
                <Player.Button />
                <Player.Video src={videoId} />
              </Player>
            </Card.Feature>
          </Card>
        ))}
      </Card.Group>

      <FooterContainer />
    </>
  ) : (
    <SelectProfileContainer user={authUser} setProfile={setProfile} />
  );
};

export default BrowseContainer;
