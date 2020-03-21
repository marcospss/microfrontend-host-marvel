import React from 'react';
import { render, cleanup} from '@testing-library/react';
import Button from './index';

const character = {
  data: {
    id: 21032020,
    name: 'Abomination (Emil Blonsky)',
    description:
      'Formerly known as Emil Blonsky, a spy of Soviet Yugoslavian origin working for the KGB, the Abomination gained his powers after receiving a dose of gamma radiation similar to that which transformed Bruce Banner into the incredible Hulk.',
    thumbnail: {
      path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/50/4ce18691cbf04',
      extension: 'jpg'
    }
  }
};

afterEach(cleanup);

test('It Should render text loading', () => {
    const loading = true;
    const children = 'Carregar mais';
    const { getByText } = render(
    <Button loading={loading} handleAction={() => {}}>
        { loading ? 'Loading...' : children }
    </Button>
  );
  expect(getByText('Loading...')).toBeTruthy();
});

test('It Should render children', () => {
    const loading = false;
    const children = 'Carregar mais';
    const { getByText } = render(
    <Button loading={loading} handleAction={() => {}}>
        { loading ? 'Loading...' : children }
    </Button>
  );
  expect(getByText(children)).toBeInTheDocument();
});
