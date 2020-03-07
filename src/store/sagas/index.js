import { all, fork } from 'redux-saga/effects';

import { watchCharacterLoad } from './charactersSaga';

export function* rootSaga() {
	yield all([
		fork(watchCharacterLoad),
	]);
}
