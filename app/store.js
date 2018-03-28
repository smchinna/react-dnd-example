/**
 * Create the store with asynchronously loaded reducers
 */

import { createStore, applyMiddleware, compose } from 'redux';
import { fromJS } from 'immutable';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
// import createLogger from 'redux-logger';
import createReducer from './reducers'; 
import { persistStore, autoRehydrate } from 'redux-persist-immutable'

const sagaMiddleware = createSagaMiddleware();
// const logger = createLogger();

export default function configureStore(initialState = {}, history) {
  // Create the store with two middlewares
  // sagaMiddleware: Makes redux-sagas work
  // routerMiddleware: Syncs the location/URL path to the state
  // logger: logs changes to state in console
  const middlewares = [
    sagaMiddleware,
    routerMiddleware(history)
    // logger
  ];

  const enhancers = [
    applyMiddleware(...middlewares),
    autoRehydrate()
  ];

  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;
  /* eslint-enable */

  const store = createStore(
    createReducer(),
    fromJS(initialState),
    composeEnhancers(...enhancers)
  );

  // Extensions
  store.runSaga = sagaMiddleware.run;

  store.asyncReducers = {}; // Async reducer registry
  // Persists login data to localStorage, except for 
  const persistor = persistStore(store, {keyPrefix: 'Veevra:', whitelist: ['app']});
  store.persistor = persistor; // Make it available via this.context.store.persistor

  // Make reducers hot reloadable, see http://mxs.is/googmo
  /* istanbul ignore next */
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      import('./reducers').then((reducerModule) => {
        const createReducers = reducerModule.default;
        const nextReducers = createReducers(store.asyncReducers);
        store.replaceReducer(nextReducers);
      });
    });
  }

  return store;
}
