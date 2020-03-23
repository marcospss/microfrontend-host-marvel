import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

export function renderWithRouter(
    ui,
    {
      route = '/',
      history = createMemoryHistory({ initialEntries: [route] }),
    } = {}
  ) {
    const Wrapper = ({ children }) => (
      <Router history={history}>{children}</Router>
    )
    return {
      ...render(ui, { wrapper: Wrapper }),
      history,
    }
  };