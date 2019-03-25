import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'

import getPokemonReducer from './getPokemonReducer';
import searchReducers from './searchReducer';
import getGenerationReducer from './getGenerationReducer';
import history from '../../routes/history';

export default combineReducers({
  pokemon: getPokemonReducer,
  generation: getGenerationReducer,
  // search: searchReducers,
  router: connectRouter(history),
})