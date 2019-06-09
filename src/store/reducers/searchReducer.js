const defaultState = {
  pokemon: [],
  payload: [],
  name: null,
  img: null,
  loading: true,
};

const searchReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'POKEMON_SEARCH_SUCCESS':
      return {
        ...state,
        payload: {
          loading: false,
          name: action.pokemon.name,
          img: action.pokemon.sprites,
        },
      };
    case 'POKEMON_SHOW_IMAGE':
      return {
        ...state,
        image: action.image,
      };
    case 'POKEMON_SEARCH_ERROR':
      return {
        ...state,
        loading: true,
        error: action.error,
      };
    default:
      return {
        ...state,
      };
  }
};

export default searchReducer;
