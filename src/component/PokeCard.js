import axios from "axios";
import React, { useEffect, useState } from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const PokeCard = () => {
  const [poke, setPoke] = useState([]);

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon?limit=20`).then((response) => {
      console.log(response);
      setPoke(response.data.results);
    });
  }, []);

  return (
    <>
      {poke.map((value, index) => {
        const pokeIndex = ("000" + (index + 1)).slice(-3);
        return (
          <Card style={{ width: "18rem" }} key={value.name}>
            <Card.Img
              variant="top"
              src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokeIndex}.png`}
            />
            <Card.Body>
              <Card.Title>{value.name}</Card.Title>
            </Card.Body>
          </Card>
        );
      })}
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
