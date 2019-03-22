import { createStore, applyMiddleware, compose } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';

import history from '../routes/history';
import getPokemonReducer from './reducers/getPokemonReducer';
import searchReducers from './reducers/searchReducer';

const rootReducer = combineReducers({
  getPokemon: getPokemonReducer,
  searchPokemon: searchReducers,
});

const middlewares = [routerMiddleware(history), thunk];
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
  connectRouter(history)(rootReducer),
  compose(
    applyMiddleware(...middlewares),
    devTools,
  ),
);

console.log(store.getState())
export default store;
