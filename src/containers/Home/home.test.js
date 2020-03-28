/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import listReducer from '../../store/reducers/characterListReducer';
import Home from './index';

const history = createMemoryHistory();

const initialState = {
    characters: {
        isFirstLoad: false,
        nextPage: 10,
        filter: '',
        data: {
          offset: 0,
          limit: 10,
          total: 1,
          count: 10,
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
      }
    }
  };

function renderWithRedux(
  ui,
  { initialState, store = createStore(listReducer, initialState) } = {}
) {
  return {
    ...render(
        <Provider store={store}>
            <Router history={history}>
            {ui}
            </Router>
        </Provider>),
    store
  };
}

afterEach(cleanup);

test('Should can render with redux with custom initial state List', () => {
    const characterName = '3-D Man';
    const { characters: { data: { results } } } = initialState;

    const { container, getByAltText, getByText } = renderWithRedux(
        <Home />,
      { initialState }
    );
    expect(getByText(characterName)).toHaveTextContent(results[0].name);
    expect(getByAltText(characterName)).toBeInTheDocument();
    expect(getByText('Carregue mais')).toBeInTheDocument();
});