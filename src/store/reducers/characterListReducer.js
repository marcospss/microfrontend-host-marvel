import * as types from '../actions/actionTypes';

const initialState = {
    isFirstLoad: true,
    nextPage: 0,
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
                isFirstLoad: false,
                nextPage: state.nextPage + 10,
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
