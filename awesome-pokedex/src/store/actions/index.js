import axios from 'axios';

const apiServe = 'https://pokeapi.co/api/v2/pokemon/';

export function searchPokemon() {
  return (dispatch) => {
    return axios.get(apiServe)
      .then((response) => {
        dispatch(getPokemon(response.data.results));
    }).catch((error) => {
      dispatch(errorPokemonForName(error));
    })
  }
}

export function searchPokemonForName(pokemon) {
  return (dispatch) => {
    return axios.get(apiServe + pokemon).then((response) => {
      dispatch(getPokemonForName(response.data));
    })
  }
}

export function getPokemon(pokemon) {
  return {
    type: 'POKEMON_SEARCH',
    pokemon: pokemon,
  }
}

export function getPokemonForName(pokemon) {
  return {
    type: 'POKEMON_SEARCH_SUCCESS',
    pokemon: pokemon,
    name: pokemon.name,
    img: pokemon.sprites,
  }
}

export function errorPokemonForName(pokemon) {
  return {
    type: 'POKEMON_SEARCH_ERROR',
    error: pokemon.error,
  }
}