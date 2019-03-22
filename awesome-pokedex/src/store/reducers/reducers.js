import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'

import getPokemonReducer from './getPokemonReducer';
import searchReducers from './searchReducer';
import history from '../../routes/history';

export default combineReducers({
  getPokemonReducer,
  searchReducers,
  router: connectRouter(history),
})