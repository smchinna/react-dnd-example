import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import allReducer from '../reducer/allReducer';
import rootSaga from '../saga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    allReducer,
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga);

export default store;