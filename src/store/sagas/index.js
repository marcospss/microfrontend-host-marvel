import { all, fork } from 'redux-saga/effects';

import watchCharacterListLoad from './characterListSaga';
import watchCharacterDetailsLoad from './characterDetailsSaga';
import watchCharacterSeriesLoad from './characterSeriesSaga';

export default function* rootSaga() {
  yield all([
    fork(watchCharacterListLoad),
    fork(watchCharacterDetailsLoad),
    fork(watchCharacterSeriesLoad),
  ]);
}
