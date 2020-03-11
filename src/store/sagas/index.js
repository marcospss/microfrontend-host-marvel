import { all, fork } from 'redux-saga/effects';

import { watchCharacterListLoad } from './characterListSaga';
import { watchCharacterDetailsLoad } from './characterDetailsSaga';

export default function* rootSaga() {
  yield all([
    fork(watchCharacterListLoad),
    fork(watchCharacterDetailsLoad),
  ]);
}
