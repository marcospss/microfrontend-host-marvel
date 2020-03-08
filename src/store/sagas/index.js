import { all, fork } from 'redux-saga/effects';

import { watchCharacterLoad } from './charactersSaga';

export default function* rootSaga() {
  yield all([fork(watchCharacterLoad)]);
}
