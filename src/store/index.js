import { createStore, applyMiddleware, compose } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';

import history from '../routes/history';
import createRootReducer from './reducers/reducers';

const middlewares = [routerMiddleware(history), thunk];
// eslint-disable-next-line no-underscore-dangle
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
  connectRouter(history)(createRootReducer),
  compose(
    applyMiddleware(...middlewares),
    devTools,
  ),
);

console.log(store.getState());

export default store;
