import React from 'react';
import PropTypes from 'prop-types';
import {
  Typographys,
  styles,
  Card,
  Image,
  ImageContent,
  CardBody,
  CardFooter,
  PokemonType,
} from './CardPokemonStyles';
import Grid from '@material-ui/core/Grid';
import { colors } from '../../styles/styles';

const CardPokemon = ({
    pokemons,
}) => (
  <Grid align="center" container style={styles.root}>
    {
      pokemons.map((item) => (
        item.pokemon.map((pokemon) => (
          <Grid item xs={12} sm={2} key={pokemon.id}>
            <Card style={styles.cardPokemon} elevation={2} >
              <Typographys align="right" variant="body1">#{pokemon.id}</Typographys>
              <ImageContent>
                <Image src={`${item.image}${pokemon.name}.gif`} />
              </ImageContent>
                <Typographys variant="title">{pokemon.name}</Typographys>
              <CardBody>
                {
                  pokemon.types.map((type, index) => (
                    <PokemonType key={index} label={type.type.name} 
                      background={
                        type.type.name === 'poison' ? colors.poison : null
                        || type.type.name === 'grass' ? colors.grass : null
                        || type.type.name === 'bug' ? colors.bug : null
                        || type.type.name === 'fire' ? colors.fire : null
                        || type.type.name === 'water' ? colors.water : null
                        || type.type.name === 'flying' ? colors.flying : null
                        || type.type.name === 'normal' ? colors.normal : null
                        || type.type.name === 'ground' ? colors.ground : null
                        || type.type.name === 'electric' ? colors.eletric : null
                        || type.type.name === 'fairy' ? colors.fairy : null
                        || type.type.name === 'fighting' ? colors.fighting : null
                        || type.type.name === 'psychic' ? colors.psychic : null
                        || type.type.name === 'rock' ? colors.rock : null
                        || type.type.name === 'steel' ? colors.steel : null
                        || type.type.name === 'dragon' ? colors.dragon : null
                      }
                    />
                  ))
                }
              </CardBody>
              <CardFooter>
                {/* <Typographys className="pokemon-number" align="right" variant="body1">#{pokemon.id}</Typographys> */}
              </CardFooter>
            </Card>
          </Grid>
        ))
      ))
    }
  </Grid>
);

CardPokemon.propTypes = {
  pokemons: PropTypes.array.isRequired,
}
CardPokemon.defaultProps = {
  pokemons: []
}

export default CardPokemon;
