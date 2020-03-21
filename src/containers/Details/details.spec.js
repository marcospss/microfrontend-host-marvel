/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import detailsReducer from '../../store/reducers/characterDetailsReducer';
import Details from './index';

const history = createMemoryHistory();
const props = {
  match: {
      params: { 
          characterId: null 
      } 
  }
};

const initialState = {
    isLoading: false,
    actions: jest.fn(),
    details: {
      data: { 
        name: 'Abomination (Emil Blonsky)' , 
        description: 'Formerly known as Emil Blonsky, a spy of Soviet Yugoslavian origin working for the KGB, the Abomination gained his powers after receiving a dose of gamma radiation similar to that which transformed Bruce Banner into the incredible Hulk.', 
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/50/4ce18691cbf04', 
          extension: 'jpg'
        }
      }
    },
    series: {
        data: {
          results: [
            {
              id: 17765,
              title: 'FREE COMIC BOOK DAY 2013 1 (2013)',
              description: null,
              resourceURI: 'http://gateway.marvel.com/v1/public/series/17765',
              urls: [
                {
                  type: 'detail',
                  url: 'http://marvel.com/comics/series/17765/free_comic_book_day_2013_1_2013?utm_campaign=apiRef&utm_source=fc88e56fcb674d36991ba76c85d9df23'
                }
              ],
              startYear: 2013,
              endYear: 2013,
              rating: '',
              type: 'one shot',
              modified: '2019-09-23T20:59:37-0400',
              thumbnail: {
                path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available',
                extension: 'jpg'
              },
            }
          ]
        }
    },
  };

function renderWithRedux(
  ui,
  { initialState, store = createStore(detailsReducer, initialState) } = {}
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

test('Should can render with redux with custom initial state Details', () => {
    const characterName = 'Abomination (Emil Blonsky)';
    const labelButton = 'Editar Personagem';
    const { queryByText, getByAltText, getByText } = renderWithRedux(
      <Details 
        match={props.match}
      />,
      { initialState }
    );
    expect(queryByText(characterName)).toHaveTextContent(initialState.details.data.name);
    expect(getByAltText(characterName)).toBeTruthy();
    fireEvent.click(getByText(labelButton));
});

test('It should be rendering the series', () => {
  const { getByText } = renderWithRedux(
    <Details 
      match={props.match}
    />,
    { initialState }
  );
  expect(getByText('Series')).toBeInTheDocument();
  expect(getByText('FREE COMIC BOOK DAY 2013 1 (2013)')).toBeInTheDocument();
});

test('Should be open form edit character', () => {
  const { getByText, getByTestId } = renderWithRedux(
    <Details 
      match={props.match}
    />,
    { initialState }
  );
  fireEvent.click(getByTestId('EditarPersonagem'));
  expect(getByText(`Editando o personagem:`)).toBeInTheDocument();
});