import axios from 'axios';

const apiServe = 'https://pokeapi.co/api/v2/pokemon/';

export function searchPokemon() {
  return (dispatch) => {
    return axios.get(apiServe).then((response) => {
      dispatch(getPokemon(response.data.results));
    })
  }
}

export function getPokemon(pokemon) {
  return {
    type: 'POKEMON_SEARCH',
    pokemon: pokemon,
  }
}