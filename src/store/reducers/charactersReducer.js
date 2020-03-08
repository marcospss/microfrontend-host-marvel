import * as types from '../actions/actionTypes';

const initialState = {
	data: {
        results: [],
    },
	error: false,
};

const charactersReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LIST_CHARACTERS.LOAD:
            return {
                ...state,
            };
        case types.LIST_CHARACTERS.LOAD_SUCCESS:
            return {
                ...state,
                data: {
                    ...action.payload,
                    results: [...state.data.results, ...action.payload.results]
                }
            };
        case types.LIST_CHARACTERS.LOAD_FAIL:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};

export default charactersReducer;
