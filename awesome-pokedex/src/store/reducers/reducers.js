import { combineReducers } from 'redux';

import getPokemonReducer from './getPokemonReducer';
import searchReducers from './search';

export const rootReducer = combineReducers({
  getPokemonReducer,
  searchReducers,
});

export default rootReducer;
