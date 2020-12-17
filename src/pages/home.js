import { Feature, OptForm } from "../components";
import { FaqsContainer } from "../containers/faq-container";
import { FooterContainer } from "../containers/footer-container";
import { HeaderContainer } from "../containers/header-container";
import { JumbotronContainer } from "../containers/jumbotron-containers";

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>Unlimited movies, TV shows and more.</Feature.Title>
          <Feature.SubTitle>Watch anywhere. Cancel anytime.</Feature.SubTitle>
          <OptForm.Text>
            Ready to watch? Enter your email to create or restart your
            membership
          </OptForm.Text>
          <OptForm>
            <OptForm.Input placeholder="Email Address" />
            <OptForm.Button>Try it Out now</OptForm.Button>
          </OptForm>
        </Feature>
      </HeaderContainer>

      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}
