// import Jumbotron from "../components/jumbotron/jumbotron-component";
import { Jumbotron } from "../components";
import jumboData from "../fixtures/jumbo.json";


export function JumbotronContainer() {
  return (
    <Jumbotron.Container>
      {jumboData.map((item) => (
        <Jumbotron key={item.id} direction={item.direction}>
          {/* To keep text on Left */}
          <Jumbotron.Pane>
            <Jumbotron.Title>{item.title}</Jumbotron.Title>
            <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
          </Jumbotron.Pane>

          {/*To keep image on right */}
          <Jumbotron.Pane>
            <Jumbotron.Image src={item.image} alt={item.image}>
              {item.image}
            </Jumbotron.Image>
          </Jumbotron.Pane>
        </Jumbotron>
      ))}
    </Jumbotron.Container>
  );
}

