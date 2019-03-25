import React from 'react';
import PropTypes from 'prop-types';
import {
  Typographys,
  styles,
  Card,
} from './GenerationCardStyle';
import Grid from '@material-ui/core/Grid';
import { Container } from '../Utils/styleUtils';

const GenerationCard = ({
    generations,
}) => (
  <Container container justify="center" alignItems="center">
    {
      generations.map((item) => (
        item.map((generation) => (
          <Grid item xs={12} sm={3  } align="center" key={generation}>
            <Card style={styles.cardPokemon} elevation="4">
                <Typographys align="center" variant="title">{generation}</Typographys>
            </Card>
          </Grid>
        ))
      ))
    }
  </Container>
);

GenerationCard.propTypes = {
  generations: PropTypes.array,
}

export default GenerationCard;
