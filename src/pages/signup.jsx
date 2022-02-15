import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { FirebaseContext } from "../context/firebase";
import HeaderContainer from "./../containers/header";
import FooterContainer from "./../containers/footer";
import Form from "../components/form";
import { HomeBgGradient } from "../components/header/styles/header";
import { signupAuth } from "../service/auth";

//& Sign up page
export default function Signup({ signupForm: { onChange, form, signupFormValid, resetForm } }) {
  const history = useHistory();

  //& getting firebase context
  const { firebaseApp } = useContext(FirebaseContext);

  const [error, setError] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    //? signup function
    signupAuth(form, firebaseApp, history, resetForm, setError);
  };

  return (
    <>
      <HeaderContainer>
        <HomeBgGradient />
        <Form>
          <Form.Base onSubmit={handleSignup} method="POST">
            <Form.Title>Sign Up</Form.Title>
            {error && <Form.Error>{error}</Form.Error>}
            <Form.Input value={form.fullName || ""} onChange={onChange} name="fullName" placeholder="Full name" />
            <Form.Input value={form.email || ""} onChange={onChange} name="email" placeholder="Email Address" type="email" />
            <Form.Input value={form.password || ""} onChange={onChange} name="password" placeholder="Password" type="password" />
            <Form.Submit disabled={signupFormValid} type="submit">
              Sign Up
            </Form.Submit>

            <Form.Text>
              Already a user? <Form.Link to="/signin">Sign in now.</Form.Link>
            </Form.Text>

            <Form.SmallText>
              This page is protected by Google reCAPTCHA to ensure you're not a bot. <Form.Link to="#">Learn more.</Form.Link>
            </Form.SmallText>
          </Form.Base>
        </Form>
      </HeaderContainer>
      <FooterContainer page={"auth"}></FooterContainer>
    </>
  );
}
