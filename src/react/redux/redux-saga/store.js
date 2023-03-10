import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';

import { helloSaga } from './sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(helloSaga);

// const action = (type) => store.dispatch({ type });
