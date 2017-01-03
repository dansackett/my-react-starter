import 'babel-polyfill';

import 'Styles/main';

import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';

import Root from 'Containers/Root'
import routes from 'Routes';
import configureStore from 'Store';
import rootSaga from 'Sagas';

const initialState = {
  example: {
    count: 0,
    asyncIsLoading: false
  }
};

const store = configureStore(initialState);

store.runSaga(rootSaga);

ReactDOM.render(
  <Root
    store={store}
    history={browserHistory}
    routes={routes} />,
  document.getElementById('root')
);
