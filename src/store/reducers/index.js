import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import history from '../../routes/history';
import callStatus from './apiCallStatusReducer';
import characters from './characterListReducer';
import details from './characterDetailsReducer';
import series from './characterSeriesReducer';

const rootReducer = combineReducers({
	router: connectRouter(history),
	callStatus,
	characters,
	details,
	series,
});

export default rootReducer;
