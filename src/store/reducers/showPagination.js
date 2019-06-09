

const defaultState = {
  loading: true,
};

const showPaginationPokemonReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SHOW_PAGINATION':
      return {
        ...state,
        payload: {
          limit: action.limit + 150,
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

export default showPaginationPokemonReducer;
