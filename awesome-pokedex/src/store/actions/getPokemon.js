import axios from 'axios';

const apiServe = 'https://pokeapi.co/api/v2/pokemon/';
const apiImage = 'http://pokestadium.com/sprites/xy/';
const limit = '?limit=150';
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


export function getAllPokemons() {
  return (dispatch) => {
    axios.get(apiServe + limit)
      .then((response) => {
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
      }).catch((error) => {
        console.error(error);
        dispatch(getPokemonError(error));
      });
  };
}
