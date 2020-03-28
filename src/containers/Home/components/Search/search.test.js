import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';

import Search from './index';

afterEach(cleanup);

test('It Should seach character empty value', () => {
  const triggerSearch = jest.fn();
  const filter = '';
  const { getByTestId } = render(
    <Search filter={filter} triggerSearch={triggerSearch} />
  );
  const inputQuery = getByTestId('query');
  fireEvent.change(inputQuery, triggerSearch(''));
  expect(triggerSearch).toHaveBeenCalled();
  expect(inputQuery.value).toEqual('');
});

test('It Should seach character pass value', () => {
  const triggerSearch = jest.fn();
  const filter = 'X-Men';
  const { getByTestId } = render(
    <Search filter={filter} triggerSearch={triggerSearch} />
  );
  const inputQuery = getByTestId('query');
  fireEvent.change(inputQuery, triggerSearch());
  expect(triggerSearch).toHaveBeenCalledTimes(1);
  expect(inputQuery.value).toEqual('X-Men');
});
