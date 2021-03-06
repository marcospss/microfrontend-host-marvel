import { runSaga } from 'redux-saga';

import * as apiCallStatusActions from '../actions/apiCallStatusActions';
import * as charactersActions from '../actions/charactersActions';
import { characters } from '../../services';
import { handleDetailsLoad } from './characterDetailsSaga';

describe("Fetch Details character saga",()=>{
    // https://redux-saga.js.org/docs/advanced/Testing.html
    it('should call api and dispatch success action', async () => {
      const mockDetails = { 
        results: [
          {
            id: 1011334,
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
      const fetchesCharactersById = jest.spyOn(characters, 'fetchesCharactersById')
        .mockImplementation(() => Promise.resolve(mockDetails));
      const dispatched = [];
      const saga = await runSaga({
        dispatch: (action) => dispatched.push(action),
        getState: () => ({ details: {
          characterId: 1011334
        } }),
      }, handleDetailsLoad);
      expect(fetchesCharactersById).toHaveBeenCalledTimes(1);
      expect(dispatched).toEqual([
        apiCallStatusActions.beginApiCall(),
        charactersActions.setDetails(mockDetails.results[0]),
      ]);
      fetchesCharactersById.mockClear();
    });

    it('should call api and dispatch error action', async () => {
      const error = { 
        message: ''
       };
      const fetchesCharactersById = jest.spyOn(characters, 'fetchesCharactersById')
        .mockImplementation(() => Promise.reject(error));
      const dispatched = [];
      const saga = await runSaga({
        dispatch: (action) => dispatched.push(action),
        getState: () => ({ details: {
          characterId: 1011334
        } }),
      }, handleDetailsLoad);
      expect(fetchesCharactersById).toHaveBeenCalledTimes(1);
      expect(dispatched).toEqual([
        apiCallStatusActions.beginApiCall(),
        apiCallStatusActions.apiCallError(),
        charactersActions.setDetailsError(error),
      ]);
      fetchesCharactersById.mockClear();
    });
    
});
