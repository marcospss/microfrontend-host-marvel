import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import history from '../../routes/history';
import counterReducer from './counterReducer';

const rootReducer = combineReducers({
	router: connectRouter(history),
	counter: counterReducer
});

export default rootReducer;
