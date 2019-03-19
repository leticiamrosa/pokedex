import React from 'react';
import PropType from 'prop-types';
import { CardPokemon, CardButton } from './CardStyle';
import If from '../../utils/If/If';

const Card = ({
    pokemon,
    description,
    srcImage,
    loading,
}) => (
  <If show={loading === false}>
    <CardPokemon  style={{ width: '18rem' }}>
      <CardPokemon.Img variant="top" src={srcImage} />
      <CardPokemon.Body>
        <CardPokemon.Title>{pokemon.name}</CardPokemon.Title>
        <CardPokemon.Text>{description}</CardPokemon.Text>
        {/* <CardButton variant="primary">Go somewhere</CardButton> */}
      </CardPokemon.Body>
    </CardPokemon>
  </If>
);

Card.propTypes = {
  pokemons: PropType.array,
  title: PropType.string,
  description: PropType.string,
  srcImage: PropType.string,
};

export default Card;
