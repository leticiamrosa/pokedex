import React from 'react';
import PropTypes from 'prop-types';
import {
  PokemonCard,
  PokemonCardContent,
  PokemonCardFooter,
  PokemonCardMedia,
  PokemonCardBody,
  ButtonInfo,
  Typographys,
} from './MaterialCardStyle';
import Grid from '@material-ui/core/Grid';

const MaterialCard = ({
    pokemons,
}) => (
  <Grid item xs={3}>
    <PokemonCard>
      <PokemonCardContent>
        
        <PokemonCardMedia />

        <PokemonCardBody>
          <Typographys gutterBottom variant="h5" component="h2">
              bla bla bla
          </Typographys>
        </PokemonCardBody>
      </PokemonCardContent>
    </PokemonCard>
  </Grid>
);

export default MaterialCard;
