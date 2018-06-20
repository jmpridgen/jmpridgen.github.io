import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import reduxLogger from 'redux-logger';
import { routerMiddleware } from 'react-router-redux';

import reducer from '../reducers';

const history = createHistory();

const middleware = [thunk, routerMiddleware(history)];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(reduxLogger);
}

const store = createStore(reducer, applyMiddleware(...middleware));
export { store, history };
