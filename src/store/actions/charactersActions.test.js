import * as types from './actionTypes';
import * as charactersActions from './charactersActions';

it('should create an action when a List Characters fetch has started', () => {
  const expectedAction = {
    type: types.LIST_CHARACTERS.LOAD,
  };
  expect(charactersActions.loadList()).toEqual(expectedAction);
});

it('should create an action for a successful fetch of a List Characters', () => {
    const payload = 'List Characters Load Success';
    const expectedAction = {
    type: types.LIST_CHARACTERS.LOAD_SUCCESS,
    payload
  };
  expect(charactersActions.setList(payload)).toEqual(expectedAction);
});

it('should create an action for a filter of a List Characters', () => {
    const payload = 'List Characters Filter';
    const expectedAction = {
    type: types.LIST_CHARACTERS.FILTER,
    payload
  };
  expect(charactersActions.filterList(payload)).toEqual(expectedAction);
});

it('should create an action for a failed fetch of a List Characters', () => {
    const payload = 'List Characters Load Fail';
    const expectedAction = {
    type: types.LIST_CHARACTERS.LOAD_FAIL,
    payload
  };
  expect(charactersActions.setListError(payload)).toEqual(expectedAction);
});

it('should create an action when a Details Characters fetch has started', () => {
    const payload = 'Details Characters Load';
    const expectedAction = {
      type: types.DETAILS_CHARACTER.LOAD,
      payload,
    };
    expect(charactersActions.loadDetails(payload)).toEqual(expectedAction);
  });
  
  it('should create an action for a successful fetch of a Details Characters', () => {
      const payload = 'Details Characters Load Success';
      const expectedAction = {
      type: types.DETAILS_CHARACTER.LOAD_SUCCESS,
      payload
    };
    expect(charactersActions.setDetails(payload)).toEqual(expectedAction);
  });
   
  it('should create an action for a failed fetch of a Details Characters', () => {
      const payload = 'Details Characters Load Fail';
      const expectedAction = {
      type: types.DETAILS_CHARACTER.LOAD_FAIL,
      payload
    };
    expect(charactersActions.setDetailsError(payload)).toEqual(expectedAction);
  });

it('should create an action when a Series Characters fetch has started', () => {
    const expectedAction = {
      type: types.SERIES_CHARACTERS.LOAD,
    };
    expect(charactersActions.loadSeries()).toEqual(expectedAction);
  });
  
  it('should create an action for a successful fetch of a Series Characters', () => {
      const payload = 'Series Characters Load Success';
      const expectedAction = {
      type: types.SERIES_CHARACTERS.LOAD_SUCCESS,
      payload
    };
    expect(charactersActions.setSeries(payload)).toEqual(expectedAction);
  });
   
  it('should create an action for a failed fetch of a Series Characters', () => {
      const payload = 'Series Characters Load Fail';
      const expectedAction = {
      type: types.SERIES_CHARACTERS.LOAD_FAIL,
      payload
    };
    expect(charactersActions.setSeriesError(payload)).toEqual(expectedAction);
  });
