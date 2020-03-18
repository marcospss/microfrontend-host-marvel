/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
import React from 'react';
import { render, cleanup } from '@testing-library/react';
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
        data: {}
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
    expect(getByText(labelButton)).toBeTruthy();

});
