import React from "react";
import FaqsContainer from "../containers/faqs";
import FooterContainer from "../containers/footer";
import HeaderContainer from "../containers/header";
import OptForm from "../components/opt-form/index";
import { JumbotronContainer } from "../containers/jumbotron";
import Feature from "../components/feature/index";
import { HomeBgGradient } from "../components/header/styles/header";


export default function Home() {
  
  return (
    <>
      <HeaderContainer>
        <HomeBgGradient />
        <Feature>
          <Feature.Title>Unlimited movies, TV shows, and more.</Feature.Title>
          <Feature.SubTitle>
            Watch anywhere. Cancel at any time.
          </Feature.SubTitle>
          <OptForm>
            <OptForm.Text>
              Ready to watch? Enter your email to create or restart your
              membership.
            </OptForm.Text>
            <OptForm.Input placeholder="Email Address"/>
            <OptForm.Button>Get Started</OptForm.Button>
          </OptForm>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}
