import { runSaga } from 'redux-saga';

import * as apiCallStatusActions from '../actions/apiCallStatusActions';
import * as charactersActions from '../actions/charactersActions';
import { characters } from '../../services';
import { handleSeriesLoad } from './characterSeriesSaga';

describe('Fetch Series character saga',()=>{
    // https://redux-saga.js.org/docs/advanced/Testing.html
    it('should call api and dispatch success action', async () => {
      const mockSeries = { 
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
      const fetchesSeriesCharactersById = jest.spyOn(characters, 'fetchesSeriesCharactersById')
        .mockImplementation(() => Promise.resolve(mockSeries));
      const dispatched = [];
      const saga = await runSaga({
        dispatch: (action) => dispatched.push(action),
        getState: () => ({ details: {
          characterId: 1011334
        } }),
      }, handleSeriesLoad);
      expect(fetchesSeriesCharactersById).toHaveBeenCalledTimes(1);
      expect(dispatched).toEqual([
        apiCallStatusActions.beginApiCall(),
        charactersActions.setSeries(mockSeries),
      ]);
      fetchesSeriesCharactersById.mockClear();
    });

    it('should call api and dispatch error action', async () => {
      const error = { 
        message: ''
       };
      const fetchesSeriesCharactersById = jest.spyOn(characters, 'fetchesSeriesCharactersById')
        .mockImplementation(() => Promise.reject(error));
      const dispatched = [];
      const saga = await runSaga({
        dispatch: (action) => dispatched.push(action),
        getState: () => ({ details: {
          characterId: 1011334
        } }),
      }, handleSeriesLoad);
      expect(fetchesSeriesCharactersById).toHaveBeenCalledTimes(1);
      expect(dispatched).toEqual([
        apiCallStatusActions.beginApiCall(),
        apiCallStatusActions.apiCallError(),
        charactersActions.setSeriesError(error),
      ]);
      fetchesSeriesCharactersById.mockClear();
    });
    
});
