import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Search from './index';


afterEach(cleanup);

test('It Should seach character', () => {
  const { getByTestId } = render(
    <Search filter="" triggerSearch={() => {}} />
  );
  const inputQuery = getByTestId('query');
  fireEvent.change(inputQuery, { target: { value: 'X-Men' } });
  expect(inputQuery.value).toEqual('X-Men');
});
