import axios from 'axios';

const url = 'https://pokeapi.co/api/v2/pokedex/';
const id = [1, 2, 3, 4, 5, 6, 7, 8];
const generations = [];

export function getGeneration(generation) {
  return {
    type: 'GET_POKEMON',
    generation,
  };
}

export function getGenerationError(error) {
  return {
    type: 'GET_POKEMON_ERROR',
    error,
  };
}

export function showAllGeneration() {
  return (dispatch) => {
    id.map(generation => (
      axios.get(`${url}${generation}`)
        .then((response) => {
          const data = response.data.name;
          generations.push(data);
          dispatch(getGeneration(generations));
        }).catch((error) => {
          dispatch(getGenerationError(error));
        })
    ));
  };
}
