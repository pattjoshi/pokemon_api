import axios from "axios";
import React, { useEffect, useState } from "react";

import Card from "react-bootstrap/Card";
import Search from "./Search";

const PokeCard = () => {
  const [poke, setPoke] = useState([]);

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon?limit=20`).then((response) => {
      //console.log(response);
      setPoke(response.data.results);
    });
  }, []);

  return (
    <>
      <Search poke={poke} />

      <div className="container mt-3">
        <div className="row d-flex justify-content-center align-items-center">
          {poke.map((value, index) => {
            const pokeIndex = ("000" + (index + 1)).slice(-3);
            return (
              <Card
                style={{ width: "22rem", border: "none" }}
                className="mx-2 mt-4 card_style"
                key={value.name}
              >
                <Card.Img
                  variant="top"
                  style={{ height: "16rem" }}
                  className="mt-3"
                  src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokeIndex}.png`}
                />
                <Card.Body>
                  <Card.Title className="align-items-center">
                    {value.name.toUpperCase()}
                  </Card.Title>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default PokeCard;

{
  /* <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card> */
}
