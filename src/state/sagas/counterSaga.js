import { delay, takeLatest, put } from 'redux-saga/effects';
import * as types from '../actions/actionTypes';

function* increaseCounterAsync() {
	try {
		yield delay(4000);

		yield put({
			type: types.COUNTER.INCREASE,
			value: 1
		});
	} catch (error) {
		console.log(error);
	}
}

export function* watchIncreaseCounter() {
	yield takeLatest(types.COUNTER.INCREASE, increaseCounterAsync);
}

function* decreaseCounter() {
	try {
		yield put({
			type: types.COUNTER.DECREASE,
			value: 1
		});
	} catch (error) {
		console.log(error);
	}
}

export function* watchDecreaseCounter() {
	yield takeLatest(types.COUNTER.INCREASE, increaseCounterAsync);
	yield takeLatest(types.COUNTER.DECREASE, decreaseCounter);
}
