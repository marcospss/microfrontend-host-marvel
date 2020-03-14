import apiCallStatusReducer from './apiCallStatusReducer';
import * as types from '../actions/actionTypes';

const initialState = 0;

describe('API CALL STATUS', () => {
    
    it('should return the initial state', () => {
        const newState = apiCallStatusReducer(undefined, {});
        expect(newState).toEqual(initialState);
    });

    it('should return the increment of the initial state', () => {
        const newState = apiCallStatusReducer(initialState, { 
            type: types.API_CALLS_IN_PROGRESS.BEGIN_CALL
         });
        expect(newState).toEqual(1);
    });

    it('should return the decrement of the initial state', () => {
        const newState = apiCallStatusReducer(4, { 
            type: types.DETAILS_CHARACTER.LOAD_SUCCESS
         });
        expect(newState).toEqual(3);
    })

});