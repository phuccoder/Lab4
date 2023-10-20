import React, { useState } from "react";
import { Col, Container, Card, Row, CardTitle, Icon } from "react-materialize";
import players from "../shared/Players";

export default function PlayersPresentation({ players }) {
  const [player, setPlayer] = useState();

  return (
    <div>
      <Container>
        <Row>
          {players.map((player) => (
            <Col m={4} s={4}>
              <Card
                closeIcon={<Icon>close</Icon>}
                header={
                  <CardTitle
                    image={player.img}
                    reveal={
                      <p>
                        Here is some more information about this product that is
                        only revealed once clicked on.
                      </p>
                    }
                    revealIcon={<Icon>more_vert</Icon>}
                    title={player.name}
                  ></CardTitle>
                }
              >
                <p className="title">{player.club}</p>
                <p>
                  <button
                    onClick={() => {
                      setPlayer(player);
                      document.getElementById("popup1").classList.add("active");
                    }}
                  >
                    <a href="#popup1" id="openPopUp">
                      Detail
                    </a>
                  </button>
                </p>
              </Card>
            </Col>
          ))}
          <div id="popup1" class="overlay">
            <div class="popup">
              <image src={player?.img} />
              <h2>{player?.name}</h2>
              <a class="close" href="#">
                &times;
              </a>
              <div class="content">
                <p>{player?.info}</p>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}
