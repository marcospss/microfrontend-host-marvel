import * as types from '../actions/actionTypes';

const initialState = {
	apiCallsInProgress: 0,
};

function actionTypeEndsInSuccess(type) {
  return type && type.toLowerCase().indexOf('success') !== -1;
}

export default function apiCallStatusReducer(
  state = initialState.apiCallsInProgress,
  action
) {
  if (action.type === types.API_CALLS_IN_PROGRESS.BEGIN_CALL) {
    return state + 1;
  } if (
    action.type === types.API_CALLS_IN_PROGRESS.CALL_ERROR ||
    actionTypeEndsInSuccess(action.type)
  ) {
    return state - 1;
  }

  return state;
}