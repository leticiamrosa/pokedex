import axios from 'axios';

const apiServe = 'https://pokeapi.co/api/v2/pokemon/?limit=';
const apiImage = 'http://pokestadium.com/sprites/xy/';
const pokemons = [];
const pokemonConfig = [];


export function getPokemon(pokemon, image) {
  return {
    type: 'GET_POKEMON',
    pokemon,
    image,
  };
}

export function getPokemonError(error) {
  return {
    type: 'GET_POKEMON_ERROR',
    error,
  };
}

export function pokemonPagination(limit) {
  return {
    type: 'SHOW_PAGINATION',
    limit,
  };
}

export function updatePokemonPagination(limit) {
  return (dispatch) => {
    console.log('estou funcionando');
    dispatch(pokemonPagination(limit));
  };
}

export function responsePokemonData(response, dispatch) {
  const data = response.data.results;
  data.map(pokemon => pokemons.push(pokemon.url));
  pokemons.forEach((pokemon) => {
    axios.get(pokemon)
      .then((res) => {
        const abi = res.data;
        pokemonConfig.push(abi);
        pokemonConfig.sort((a, b) => a.id - b.id);
        dispatch(getPokemon(pokemonConfig, apiImage));
      }).catch((error) => {
        dispatch(getPokemonError(error));
      });
  });
}

export function getAllPokemons(limitNumber) {
  return (dispatch) => {
    axios.get(apiServe + limitNumber)
      .then((response) => {
        responsePokemonData(response, dispatch);
      }).catch((error) => {
        dispatch(getPokemonError(error));
      });
  };
}
