import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { FirebaseContext } from "../context/firebase";
import HeaderContainer from "./../containers/header";
import FooterContainer from "./../containers/footer";
import Form from "../components/form";
import { HomeBgGradient } from "../components/header/styles/header";
import * as ROUTES from "../constants/routes";

export default function Signin() {
  const history = useHistory();

  const { firebase } = useContext(FirebaseContext);

  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // check if form elements are valid
  const isInvalid = password === "" || emailAddress === "";

  const handleSignin = (e) => {
    e.preventDefault();

    // firebase will confirm here
    firebase
      .auth()
      .signInWithEmailAndPassword(emailAddress, password)
      .then(() => {
        // redirect to the browse page
        history.push(ROUTES.BROWSE);
      })
      .catch((err) => {
        setEmailAddress("");
        setPassword("");
        setError(err.message);
      });
  };

  // window.onresize = () => window.location.reload();
  
  return (
    <>
      <HeaderContainer>
        <HomeBgGradient />

        <Form>
          <Form.Base onSubmit={handleSignin} method="POST">
            <Form.Title>Sign In</Form.Title>
            {error && <Form.Error>{error}</Form.Error>}
            <Form.Input
              placeholder="Email Address"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <Form.Input
              placeholder="Password"
              autoComplete="off"
              type="password"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit disabled={isInvalid} type="submit">
              Sign In
            </Form.Submit>

            <Form.Text>
              New to Netflix? <Form.Link to="/signup">Sign up now.</Form.Link>
            </Form.Text>

            <Form.SmallText>
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot. <Form.Link to="#">Learn more.</Form.Link>
            </Form.SmallText>
          </Form.Base>
        </Form>
      </HeaderContainer>

      <FooterContainer></FooterContainer>
    </>
  );
}
