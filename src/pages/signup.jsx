import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { FirebaseContext } from "../context/firebase";
import HeaderContainer from "./../containers/header";
import FooterContainer from "./../containers/footer";
import Form from "../components/form";
import { HomeBgGradient } from "../components/header/styles/header";
import * as ROUTES from "../lib/routes";

export default function Signup({ signupForm: { onChange, form, signupFormValid, resetForm } }) {
  const history = useHistory();

  const { firebase } = useContext(FirebaseContext);

  const [error, setError] = useState("");

  // const isInvalid = name === "" || password === "" || emailAddress === "";

  const handleSignup = (e) => {
    e.preventDefault();
    
    // create signup functionality
    firebase
      .auth()
      .createUserWithEmailAndPassword(form.email, form?.password)
      .then((result) =>
        result.user
          .updateProfile({
            displayName: form.fullName,
            photoURL: Math.floor(Math.random() * 5) + 1,
          })
          .then(() => {
            history.push(ROUTES.BROWSE);
          })
      )
      .catch((err) => {
        resetForm()
        setError(err.message);
      });
  };

  // window.onresize = () => window.location.reload()

  return (
    <>
      <HeaderContainer>
        <HomeBgGradient />
        <Form>
          <Form.Base onSubmit={handleSignup} method="POST">
            <Form.Title>Sign Up</Form.Title>
            {error && <Form.Error>{error}</Form.Error>}
            <Form.Input
              value={form.fullName || ""}
              onChange={onChange}
              name="fullName"
              placeholder="Full name"
            />
            <Form.Input
              value={form.email || ""}
              onChange={onChange}
              name="email"
              placeholder="Email Address"
              type="email"
            />
            <Form.Input
              value={form.password || ""}
              onChange={onChange}
              name="password"
              placeholder="Password"
              type="password"
            />
            <Form.Submit disabled={signupFormValid} type="submit">
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
