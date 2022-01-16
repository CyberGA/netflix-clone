import React, { useState, useEffect } from "react";
import SelectProfileContainer from "./profile";
import { getAuth } from "firebase/auth";
import Loading from "../components/loading/index";

const BrowseContainer = () => {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const user = getAuth().currentUser || {};

  useEffect(() => {
    console.log("profile", profile);
    setTimeout(() => {
      setLoading((loading) => false);
    }, 3000);
  }, [profile]);

  return profile.displayName ? (
    loading ? (
      <Loading src={user.photoURL} />
    ) : (
      <Loading.ReleaseBody />
    )
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
};

export default BrowseContainer;
