import { put, call, takeLatest, select } from 'redux-saga/effects';

import * as types from '../actions/actionTypes';
import * as charactersActions from '../actions/charactersActions';
import { characters } from '../../services';

const getPage = state => state.nextPage;

function* handleListLoad() {
	try {
		const nextPage = yield select(getPage);
		const list = yield call(characters.fetchesListsCharacters, nextPage);
		yield put(charactersActions.setList(list));
	} catch (error) {
		yield put(charactersActions.setListError(error));
	}
}

export function* watchCharacterLoad() {
	yield takeLatest(types.LIST_CHARACTERS.LOAD, handleListLoad);
}
