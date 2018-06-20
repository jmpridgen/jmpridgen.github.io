import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

const reducers = {
  router: routerReducer,
};

export default combineReducers(reducers);
