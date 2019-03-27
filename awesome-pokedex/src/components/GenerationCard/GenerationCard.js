import React from 'react';
import PropTypes from 'prop-types';
import {
  Typographys,
  styles,
  Card,
} from './GenerationCardStyle';
import { Grid, Button } from '@material-ui/core';
import { Container } from '../Utils/styleUtils';
import { Link } from 'react-router-dom'

const MyLink = props => <Link to={{ pathname: '/pokedex', state: { limit: 'hellow world' } }}  {...props}/>

const GenerationCard = ({
    generations,
    nextPage,
}) => (
  <Container container justify="center" alignItems="center">
    {
      generations.map((item) => (
        item.map((generation) => (
          <Grid item xs={12} sm={4} align="center" key={generation}>
            <Button 
              component={Link}
              to={{ 
                pathname: '/pokedex',
                state: { limit: `${generation}` }, 
                }}
            >
              <Card style={styles.cardPokemon} elevation={4} >
                <Typographys align="center" variant="title">{generation}</Typographys>
              </Card>
            </Button>
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
