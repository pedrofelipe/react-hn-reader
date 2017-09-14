import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

import reducers from './reducers';

import './index.css';
import App from './containers/app/app';
import registerServiceWorker from './registerServiceWorker';

export const client = axios.create({
  baseURL:'https://hacker-news.firebaseio.com/v0',
  responseType: 'json'
});

const store = createStore(
  reducers,
  applyMiddleware(
    axiosMiddleware(client),
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
