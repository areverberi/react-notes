'use strict';
// ./src/index.js

// Babel polyfill will emulate a full
// ES2015 environemnt so we can enjoy goodies like
// Promises
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import {Provider} from 'react-redux';
import routes from './routes';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import configureStore from './store/configureStore';

const store = configureStore();

render(
  <Provider store = {store}>
    <Router routes={routes} history={browserHistory} />
  </Provider>,
  document.getElementById('app')
);
