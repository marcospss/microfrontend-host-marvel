import * as types from '../actions/actionTypes';

const initialState = {
    characterId: null,
	data: {},
	error: false,
};

const detailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.DETAILS_CHARACTER.LOAD:
            return {
                ...state,
                data: {},
                characterId: action.payload,
            };
        case types.DETAILS_CHARACTER.LOAD_SUCCESS:
            return {
                ...state,
                data: action.payload,
            };
        case types.DETAILS_CHARACTER.LOAD_FAIL:
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default detailsReducer;
