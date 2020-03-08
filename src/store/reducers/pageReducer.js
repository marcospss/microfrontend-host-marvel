import * as types from '../actions/actionTypes';

const pageReducer = (state = 1470, action) => {
    switch (action.type) {
        case types.LIST_CHARACTERS.LOAD_SUCCESS:
            return (state + 10);
        default:
            return state;
    }
};

export default pageReducer;
