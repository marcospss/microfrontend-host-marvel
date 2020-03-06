import { createStore, applyMiddleware, compose } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';
import history from '../routes/history';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools
const middlewares = [routerMiddleware(history), sagaMiddleware];

const store = createStore(
	connectRouter(history)(rootReducer),
	composeEnhancers(applyMiddleware(...middlewares))
);

export default store;
