import { FaqsContainer } from "../containers/faq";
import { FooterContainer } from "../containers/footer-container";
import { JumbotronContainer } from "../containers/jumbotron-containers";

export default function Home() {
  return (
    <>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}
