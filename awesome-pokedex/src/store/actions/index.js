import axios from 'axios';

const apiServe = 'https://pokeapi.co/api/v2/pokemon/';

export function getPokemon(allPokemons) {
  return {
    type: 'POKEMON_SHOW_LIST',
    allPokemons,
  };
}

export function getImagePokemon(image) {
  return {
    type: 'POKEMON_SHOW_IMAGE',
    image,
  };
}

export function getPokemonForName(pokemon) {
  return {
    type: 'POKEMON_SEARCH_SUCCESS',
    pokemon,
    name: pokemon.name,
    img: pokemon.sprites,
  };
}

export function errorPokemonForName(pokemon) {
  return {
    type: 'POKEMON_SEARCH_ERROR',
    error: pokemon.error,
  };
}

export function getAllPokemons() {
  return (dispatch) => {
    const allPokemons = [];
    const data = axios.get(apiServe);
    data.then((response) => {
      const pokemons = response.data.results;
      pokemons.map(pokemon => pokemon.url)
        .map((pokemon) => {
          return axios.get(pokemon)
            .then((res) => {
              allPokemons.push(res.data);
              dispatch(getPokemon(allPokemons));
            });
        });
    });
  };
}

export function searchPokemonForName(pokemon) {
  return (dispatch) => {
    axios.get(apiServe + pokemon).then((response) => {
      dispatch(getPokemonForName(response.data));
    });
  };
}
