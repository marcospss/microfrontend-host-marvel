import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import history from '../../routes/history';
import callStatus from './apiCallStatusReducer';
import characters from './charactersReducer';
import details from './detailsReducer';
import pageReducer from './pageReducer';

const rootReducer = combineReducers({
	router: connectRouter(history),
	callStatus,
	characters,
	nextPage: pageReducer,
	details,
});

export default rootReducer;
