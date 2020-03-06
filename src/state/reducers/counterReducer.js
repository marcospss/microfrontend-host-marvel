import * as types from '../actions/actionTypes';

const initialState = {
	counter: 0
};

const counterReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.COUNTER.INCREASE: {
			return {
				...state,
				counter: state.counter + action.payload
			};
		}
		case types.COUNTER.DECREASE: {
			if (state.counter === 0) {
				return state;
			}
			return {
				...state,
				counter: state.counter - action.payload
			};
		}
		default: {
			return state;
		}
	}
};

export default counterReducer;
