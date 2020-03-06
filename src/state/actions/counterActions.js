import * as types from './actionTypes';

const counterIncrease = data => {
	return {
		type: types.COUNTER.INCREASE,
		payload: data
	};
};

const counterDecrease = data => {
	return {
		type: types.COUNTER.DECREASE,
		payload: data
	};
};

export { counterIncrease, counterDecrease };
