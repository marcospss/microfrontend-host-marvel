import { put, call, takeLatest, select, all } from 'redux-saga/effects';

import * as types from '../actions/actionTypes';
import * as apiCallStatusActions from '../actions/apiCallStatusActions';
import * as charactersActions from '../actions/charactersActions';
import { characters } from '../../services';

const getPageCharacter = state => state.characters.nextPage;

export function* handleListLoad() {
	try {
		const nextPage = yield select(getPageCharacter);
		yield put(apiCallStatusActions.beginApiCall());
		const list = yield call(characters.fetchesListsCharacters, nextPage);
		yield put(charactersActions.setList(list));
	} catch (error) {
		yield all([
			put(apiCallStatusActions.apiCallError()),
			put(charactersActions.setListError(error))
		]);
	}
}

export default function * () {
	yield takeLatest(types.LIST_CHARACTERS.LOAD, handleListLoad);
}
