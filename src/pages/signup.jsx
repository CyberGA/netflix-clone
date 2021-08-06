import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { FirebaseContext } from "../context/firebase";
import HeaderContainer from "./../containers/header";
import FooterContainer from "./../containers/footer";
import Form from "../components/form";
import { HomeBgGradient } from "../components/header/styles/header";
import * as ROUTES from "../constants/routes";

export default function Signup() {
  const history = useHistory();

  const { firebase } = useContext(FirebaseContext);

  const [name, setName] = useState("");

  const [emailAddress, setEmailAddress] = useState("");

  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const isInvalid = name === "" || password === "" || emailAddress === "";

  const handleSignup = (e) => {
    e.preventDefault();

    // create signup functionality
    firebase
      .auth()
      .createUserWithEmailAndPassword(emailAddress, password)
      .then((result) =>
        result.user
          .updateProfile({
            displayName: name,
            photoURL: Math.floor(Math.random() * 5) + 1,
          })
          .then(() => {
            history.push(ROUTES.BROWSE);
          })
      )
      .catch((err) => {
        setName("");
        setEmailAddress("");
        setPassword("");
        setError(err.message);
      });
  };

  window.onresize = () => window.location.reload()

  return (
    <>
      <HeaderContainer>
        <HomeBgGradient />
        <Form>

          <Form.Base onSubmit={handleSignup} method="POST">
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
            <Form.Input
              placeholder="Name"
              value={name}
              onChange={({ target }) => setName(target.value)}
            />
            <Form.Input
              placeholder="Email Address"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <Form.Input
              placeholder="Password"
              type="password"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit disabled={isInvalid} type="submit">
              Sign Up
            </Form.Submit>

            <Form.Text>
              Already a user? <Form.Link to="/signin">Sign in now.</Form.Link>
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
