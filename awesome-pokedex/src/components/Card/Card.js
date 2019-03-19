import React from 'react';
import { CardPokemon, CardButton } from './CardStyle';

const Card = ({
    pokemons,
}) => (
  <CardPokemon  style={{ width: '18rem' }}>
    <CardPokemon.Img variant="top" src="holder.js/100px180" />
    <CardPokemon.Body>
      <CardPokemon.Title>Card Title</CardPokemon.Title>
      <CardPokemon.Text>
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
      </CardPokemon.Text>
      <CardButton variant="primary">Go somewhere</CardButton>
    </CardPokemon.Body>
  </CardPokemon>
);

export default Card;
