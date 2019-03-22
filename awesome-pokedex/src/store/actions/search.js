import axios from 'axios';

const apiServe = 'https://pokeapi.co/api/v2/pokemon/';
const pokemons = [];

export function getPokemon(pokemon) {
  return {
    type: 'GET_POKEMON',
    pokemon,
  };
}

export function getPokemonError(error) {
  return {
    type: 'GET_POKEMON_ERROR',
    error,
  };
}

// export function setPokemons() {
//   return {
//     type: 'SET_POKEMONS',
//     pokemon,
//   }
// }

// export function searchPokemonForName(pokemon) {
//   return (dispatch) => {
//     axios.get(apiServe + pokemon).then((response) => {
//       console.log(response.data);
//       dispatch(getPokemon(response.data));
//     });
//   };
// }

export function getAllPokemons() {
  return (dispatch) => {
    axios.get(apiServe)
      .then((response) => {
        const data = response.data.results;
        // console.log(response.data.next)
        // data.map(pokemon => pokemons.push(pokemon.name));
        // console.log(data)
        dispatch(getPokemon(data))
      }).catch((error) => {
        dispatch(getPokemonError(error))
      })
  }
}
