import React from "react";
import Header from "../components/header";
import { BROWSE } from "../lib/routes";
import Profiles from "../components/profiles";

//& For selecting available profile(s)
const SelectProfileContainer = ({ user, setProfile }) => {
  return (
    <>
      <Header bg={false}>
        <Header.Frame>
          <Header.Logo to={BROWSE} src="/images/misc/Netflix-logo.svg" alt="Netflix logo" />
        </Header.Frame>
      </Header>

      <Profiles>
        <Profiles.Title>Who's watching?</Profiles.Title>
        <Profiles.List>
          <Profiles.User
            onClick={() =>
              setProfile({
                displayName: user.displayName,
                photoURL: user.photoURL,
              })
            }
          >
            <Profiles.Picture src={user.photoURL} />
            <Profiles.Name>{user.displayName}</Profiles.Name>
          </Profiles.User>
        </Profiles.List>
      </Profiles>
    </>
  );
};

export default SelectProfileContainer;
