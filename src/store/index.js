import { createStore, applyMiddleware, compose } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';
import history from '../routes/history';
import rootSaga from './sagas';

const configureStore = () => {
	const sagaMiddleware = createSagaMiddleware();
	const middlewares = [routerMiddleware(history), sagaMiddleware];
    const store = createStore(
        connectRouter(history)(rootReducer),
        window.__REDUX_DEVTOOLS_EXTENSION__
            ? compose(
                  applyMiddleware(sagaMiddleware),
                  window.__REDUX_DEVTOOLS_EXTENSION__(),
              )
            : applyMiddleware(...middlewares),
    );
    sagaMiddleware.run(rootSaga);
    return store;
};

export default configureStore;