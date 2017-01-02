import 'babel-polyfill';

import 'Styles/main';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import Router from 'Routes';
import configureStore from 'Store';
import rootSaga from 'Sagas';

const initialState = {
  example: {
    count: 0
  }
};

const store = configureStore(initialState);

store.runSaga(rootSaga);

ReactDOM.render(
  (
    <Provider store={store}>
      <Router />
    </Provider>
  ),
  document.getElementById('root')
);
