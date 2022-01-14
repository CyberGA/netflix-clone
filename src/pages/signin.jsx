import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { FirebaseContext } from "../context/firebase";
import HeaderContainer from "./../containers/header";
import FooterContainer from "./../containers/footer";
import Form from "../components/form";
import { HomeBgGradient } from "../components/header/styles/header";
import * as ROUTES from "../lib/routes";

export default function Signin({
  loginForm: { onChange, form, loginFormNotValid, resetForm },
}) {
  const history = useHistory();

  const { firebase } = useContext(FirebaseContext);
  const [error, setError] = useState("");

  const handleSignin = (e) => {
    e.preventDefault();

    // firebase will confirm here
    firebase
      .auth()
      .signInWithEmailAndPassword(form.email, form.password)
      .then(() => {
        //? redirect to the browse page
        history.push(ROUTES.BROWSE);
      })
      .catch((err) => {
        //? empty the form
        resetForm()
        setError(err.message);
      });
  };

  return (
    <>
      <HeaderContainer>
        <HomeBgGradient />

        <Form>
          <Form.Base onSubmit={handleSignin} method="POST">
            <Form.Title>Sign In</Form.Title>
            {error && <Form.Error>{error}</Form.Error>}
            <Form.Input
              name="email"
              value={form.email || ""}
              onChange={onChange}
              type="email"
              placeholder="Email Address"
              // onChange={({ target }) => setEmailAddress(target.value)}
            />
            <Form.Input
              name="password"
              value={form.password || ""}
              onChange={onChange}
              placeholder="Password"
              autoComplete="off"
              type="password"
              // value={password}
              // onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit disabled={loginFormNotValid} type="submit">
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
