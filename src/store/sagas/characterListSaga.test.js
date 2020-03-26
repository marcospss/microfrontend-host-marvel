import { runSaga } from 'redux-saga';

import * as apiCallStatusActions from '../actions/apiCallStatusActions';
import * as charactersActions from '../actions/charactersActions';
import { characters } from '../../services';
import { handleListLoad } from './characterListSaga';

describe("Fetches Lists of characters saga",()=>{
    // https://redux-saga.js.org/docs/advanced/Testing.html
    it('should call api and dispatch success action', async () => {
      const mockList = { 
        results: [
          {
            id: 10,
            name: '3-D Man',
            description: '',
            modified: '2014-04-29T14:18:17-0400',
            thumbnail: {
              path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784',
              extension: 'jpg'
            }
          }
        ]
       };
      const fetchesListsCharacters = jest.spyOn(characters, 'fetchesListsCharacters')
        .mockImplementation(() => Promise.resolve(mockList));
      const dispatched = [];
      const saga = await runSaga({
        dispatch: (action) => dispatched.push(action),
        getState: () => ({ characters: {
          nextPage: 10
        } }),
      }, handleListLoad);
      expect(fetchesListsCharacters).toHaveBeenCalledTimes(1);
      expect(dispatched).toEqual([
        apiCallStatusActions.beginApiCall(),
        charactersActions.setList(mockList),
      ]);
      fetchesListsCharacters.mockClear();
    });

    it('should call api and dispatch error action', async () => {
      const error = { 
        message: ''
       };
      const fetchesListsCharacters = jest.spyOn(characters, 'fetchesListsCharacters')
        .mockImplementation(() => Promise.reject(error));
      const dispatched = [];
      const saga = await runSaga({
        dispatch: (action) => dispatched.push(action),
        getState: () => ({ characters: {
          nextPage: 1011334
        } }),
      }, handleListLoad);
      expect(fetchesListsCharacters).toHaveBeenCalledTimes(1);
      expect(dispatched).toEqual([
        apiCallStatusActions.beginApiCall(),
        apiCallStatusActions.apiCallError(),
        charactersActions.setListError(error),
      ]);
      fetchesListsCharacters.mockClear();
    });
    
});
