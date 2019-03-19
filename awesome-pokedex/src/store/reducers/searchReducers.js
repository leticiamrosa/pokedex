let defaultState = {
  pokemon: [],
}

const mainReducer = (state = defaultState, action) => {
  if(action.type === 'POKEMON_SEARCH') {
    return {
      ...state,
      pokemon: action.pokemon
    }
  } else {
      return {
        ...state
      }
  }
}

export default mainReducer;