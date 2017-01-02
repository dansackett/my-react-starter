import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, compose, createStore } from 'redux';

import rootReducer from 'Reducers';

export default function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();

  const middleware = [sagaMiddleware];
  const enhancers = [];

  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middleware),
      ...enhancers
    )
  );

  store.runSaga = sagaMiddleware.run;

  return store;
};
