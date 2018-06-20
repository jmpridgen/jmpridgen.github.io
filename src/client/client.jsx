import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import 'bootstrap/scss/bootstrap.scss';
import './config/scss/styles.scss';
// import './config/styles.css';


import { store, history } from './config/store';
import MainEntry from './routes/MainRoutes';

const app = document.getElementById('app');
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <MainEntry />
    </ConnectedRouter>
  </Provider>,
  app,
);
