import * as types from './actionTypes';
import * as apiCallStatusActions from './apiCallStatusActions';

it('should create an action when a call api has started', () => {
  const expectedAction = {
    type: types.API_CALLS_IN_PROGRESS.BEGIN_CALL
  };
  expect(apiCallStatusActions.beginApiCall()).toEqual(expectedAction);
});

it('should create an action when a call api has error', () => {
  const expectedAction = {
    type: types.API_CALLS_IN_PROGRESS.CALL_ERROR
  };
  expect(apiCallStatusActions.apiCallError()).toEqual(expectedAction);
});
