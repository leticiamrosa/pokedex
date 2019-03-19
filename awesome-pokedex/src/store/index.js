import { createStore, applyMiddleware, compose } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';

import history from '../routes/history';
import reducers from './reducers/searchReducers';

const middlewares = [routerMiddleware(history), thunk];
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
  connectRouter(history)(reducers),
  compose(
    applyMiddleware(...middlewares),
    devTools,
  ),
);

export default store;