import { put, call, takeLatest, select, all } from 'redux-saga/effects';

import * as types from '../actions/actionTypes';
import * as apiCallStatusActions from '../actions/apiCallStatusActions';
import * as charactersActions from '../actions/charactersActions';
import { characters } from '../../services';

const getCharacterId = state => state.details.characterId;

export function* handleSeriesLoad() {
	try {
		const characterId = yield select(getCharacterId);
		yield put(apiCallStatusActions.beginApiCall());
		const series = yield call(characters.fetchesSeriesCharactersById, characterId);
		yield put(charactersActions.setSeries(series));
	} catch (error) {
		yield all([
			put(apiCallStatusActions.apiCallError()),
			put(charactersActions.setSeriesError(error))
		]);
	}
}

export default function * () {
	yield takeLatest(types.SERIES_CHARACTERS.LOAD, handleSeriesLoad);
}
