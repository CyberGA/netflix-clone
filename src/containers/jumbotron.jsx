import React from "react";
import Jumbotron from "../components/jumbotron/index";
import jumbotronData from "../service/jumbotron";

//& Jumbotron container for display flyers
export function JumbotronContainer() {
  return (
      <Jumbotron.Container>
        {jumbotronData.map((item) => (
          <Jumbotron key={item.id} direction={item.direction}>
            <Jumbotron.Pane>
              <Jumbotron.Title>{item.title}</Jumbotron.Title>
              <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
            </Jumbotron.Pane>
            
            <Jumbotron.Pane>
              <Jumbotron.Image src={item.image} alt={item.alt} />
            </Jumbotron.Pane>
          </Jumbotron>
        ))}
      </Jumbotron.Container>
  );
}
