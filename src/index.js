import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore, compose, } from 'redux';

import Router from './router';
import './index.css';

import rootReducer from './root-reducer';

// 🔥🔥 alerts devtools to redux being used 🔥🔥
const store = createStore(rootReducer, {}, compose(
	applyMiddleware(thunk),
	window.devToolsExtension ? window.devToolsExtension() : f => f,

));
ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById('root')
);
