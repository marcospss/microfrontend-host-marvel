import * as types from '../actions/actionTypes';

const initialState = {
	data: {},
	error: false,
};

const seriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SERIES_CHARACTERS.LOAD:
            return {
                ...state,
                data: {},
            };
        case types.SERIES_CHARACTERS.LOAD_SUCCESS:
            return {
                ...state,
                data: action.payload,
            };
        case types.SERIES_CHARACTERS.LOAD_FAIL:
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default seriesReducer;
