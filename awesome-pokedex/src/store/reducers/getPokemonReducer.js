const defaultState = {
  loading: true,
};

const getPokemonReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'GET_POKEMON':
      return {
        ...state,
        payload: {
          loading: false,
          pokemon: action.pokemon,
          image: action.image,
        },
      };
    case 'GET_POKEMON_ERROR':
      return {
        ...state,
        payload: {
          loading: true,
          error: action.error,
        },
      };
    default:
      return {
        ...state,
      };
  }
};


export default getPokemonReducer;
