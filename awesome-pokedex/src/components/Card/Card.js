import React from 'react';
import PropType from 'prop-types';
import { 
  CardPokemon,
  CardContainer,
  CardGrid,
  CardRow,
} from './CardStyle';
import If from '../../utils/If/If';

const Card = ({
    pokemons,
    description,
    srcImage,
    loading,
}) => (
  <If show={!loading}>
    <CardContainer className="d-flex justify-content-center">
      <CardRow className="justify-content-center">
        <CardGrid xs="12" sm="12">
          <CardPokemon  style={{ width: '16rem' }}>
            <CardPokemon.Img variant="top" src={srcImage} />
            <CardPokemon.Body>
              <CardPokemon.Title className="text-center card__title">{pokemons.name}</CardPokemon.Title>
              <CardPokemon.Text>{description}</CardPokemon.Text>
            </CardPokemon.Body>
          </CardPokemon>
        </CardGrid>
      </CardRow>  
    </CardContainer>
  </If>
);

Card.propTypes = {
  pokemons: PropType.any,
  title: PropType.string,
  description: PropType.string,
  srcImage: PropType.string,
};

export default Card;
