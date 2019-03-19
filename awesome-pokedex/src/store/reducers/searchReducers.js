let defaultState = {
  pokemon: [],
  payload: [],
  name: null,
  img: null,
  loading: true,
}

const mainReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'POKEMON_SEARCH':
      return {
        ...state,
        pokemon: action.pokemon,
        loading: true,
      };
    case 'POKEMON_SEARCH_SUCCESS':
      return {
        ...state,
        payload: {
          loading: false,
          name: action.pokemon.name,
          img: action.pokemon.sprites,
        },
    };
    case 'POKEMON_SEARCH_ERROR':
      return {
        ...state,
        loading: true,
        error: action.error,
      }
    default:
      return {
        ...state,
      }
  }
}

export default mainReducer;