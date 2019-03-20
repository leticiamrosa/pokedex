import React from 'react';
import PropType from 'prop-types';
import { CardDeck, Card } from 'react-bootstrap';
import { Badge, Grid } from './CardListStyle';
import { colors } from '../../styles/styles';


const CardList = ({
    pokemons,
    // srcImage,
}) => (
  <CardDeck>
    {
      pokemons.map(pokemon => (
        <Grid key={pokemon.name} sm="2">
          <Card>
            <Card.Img variant="top"  src={pokemon.sprites.front_default}/>
              <Card.Body>
                <Card.Title className="text-center card__title" >{pokemon.name}</Card.Title>
                <Card.Text>                  
                 
                </Card.Text>
              </Card.Body>
            <Card.Footer>
              <small className="text-muted">
                <div className="d-flex flex-row justify-content-center">
                  { 
                    pokemon.types.map(type => (
                      <Badge
                        className="text-center"
                        background={
                          type.type.name === 'poison' ? colors.lightGreen : null
                          || type.type.name === 'water' ? colors.blue : null 
                          || type.type.name === 'fire' ? colors.red : null
                          || type.type.name === 'bug' ? colors.darkGreen : null
                          || type.type.name === 'grass' ? colors.lemonGreen : null 
                          || type.type.name === 'flying' ? colors.lightBlue : null 
                          || type.type.name === 'normal' ? colors.light : null 
                        }
                        color={type.type.name === 'normal' ? colors.black : null }
                        key={type.slot}
                      >  
                        {type.type.name}
                      </Badge>
                    ))
                }
                </div>
              </small>
            </Card.Footer>
          </Card>
        </Grid>
      )) 
    }
  </CardDeck>
);

CardList.propTypes = {
  pokemons: PropType.array,
  // title: PropType.string,
  // description: PropType.string,
  // srcImage: PropType.string,
};

export default CardList;
