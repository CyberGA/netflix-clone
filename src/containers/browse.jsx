import React, { useState, useEffect } from "react";
import SelectProfileContainer from "./profile";
import { getAuth } from "firebase/auth";
import Loading from "../components/loading/index";
import useContent from "../hooks/use-content";
import requests from "../lib/request";
import Header from "../components/header/index";
import { HOME } from './../lib/routes';

const BrowseContainer = () => {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [banner, setBanner] = useState("");
  const authUser = getAuth().currentUser || {};
  const { Action } = useContent(`${requests.fetchActionMovies}`, "Action");

  useEffect(() => {
    console.log("profile", profile);

    const newBanner = Action[Math.ceil(Math.random() * Action.length - 1)];
    console.log(newBanner);
    setBanner((banner) => newBanner);

    setTimeout(() => {
      setLoading((loading) => false);
    }, 6000);
  }, [profile, Action]);

  return profile.displayName ? (
    <>
      {loading ? <Loading src={authUser.photoURL} /> : <Loading.ReleaseBody />}

      <Header src={`https://image.tmdb.org/t/p/original/${banner?.backdrop_path}`} bg={true}>
      <Header.Frame>
        <Header.Logo to={HOME} src="/images/misc/Netflix-logo.svg" alt="Netflix logo" />
      </Header.Frame>
        <Header.Feature>
          <Header.FeautureTitle>{banner?.title ?? banner?.original_title}</Header.FeautureTitle>
          <Header.Text>{shortened(banner?.overview, 100)}</Header.Text>
        </Header.Feature>
      </Header>
    </>
  ) : (
    <SelectProfileContainer user={authUser} setProfile={setProfile} />
  );

  function shortened(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + " . . . . " : str;
  }
};

export default BrowseContainer;
