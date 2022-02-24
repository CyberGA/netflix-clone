import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { FirebaseContext } from "../context/firebase";
import HeaderContainer from "./../containers/header";
import FooterContainer from "./../containers/footer";
import Form from "../components/form";
import { HomeBgGradient } from "../components/header/styles/header";
import { signinAuth } from "./../service/auth";

//& Sign in page
export default function Signin({ loginForm: { onChange, form, loginFormNotValid, resetForm } }) {
  const history = useHistory();
  const { firebaseApp } = useContext(FirebaseContext);
  const [error, setError] = useState("");

  const handleSignin = async (e) => {
    e.preventDefault();

    //? Signin function
    signinAuth(form, firebaseApp, history, resetForm, setError);
  };

  return (
    <>
      <HeaderContainer>
        <HomeBgGradient />

        <Form>
          <Form.Base onSubmit={handleSignin} method="POST">
            <Form.Title>Sign In</Form.Title>
            {error && <Form.Error>{error}</Form.Error>}
            <Form.Input name="email" value={form.email || ""} onChange={onChange} type="email" placeholder="Email Address" />
            <Form.Input name="password" value={form.password || ""} onChange={onChange} placeholder="Password" autoComplete="off" type="password" />
            <Form.Submit disabled={loginFormNotValid} type="submit">
              Sign In
            </Form.Submit>

            <Form.Pane bottom={`54px`} space={`space-between`}>
              <Form.SmallText>
                <input type="checkbox" /> {"  "}
                Remember me
              </Form.SmallText>
              <Form.Link to="#" useSmall={true}>
                Need help?
              </Form.Link>
            </Form.Pane>

            <Form.LinkText>
              <img src="../images/misc/FB-f-Logo__blue_57.png" alt="facebook" width={20} height={20} />
              <Form.Link to="#">Login with Facebook</Form.Link>
            </Form.LinkText>

            <Form.Text>
              New to Netflix? <Form.Link to="/signup">Sign up now.</Form.Link>
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
