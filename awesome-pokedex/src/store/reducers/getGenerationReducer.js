const defaultState = {
  payload: [],
};

const getGenerationReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'GET_POKEMON':
      return {
        ...state,
        payload: {
          loading: false,
          generation: action.generation,
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


export default getGenerationReducer;
