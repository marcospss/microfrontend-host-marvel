import React from 'react';
import { render, cleanup } from '@testing-library/react';
import SeriesGrid from './index';

const data = [
    {
        id: 1011334,
        title: "3-D Man",
        description: "",
        modified: "2014-04-29T14:18:17-0400",
        thumbnail: {
            path: "http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784",
            extension: "jpg"
        }
    }
];

afterEach(cleanup);

test('loads and displays cards for series', () => {
    const header = 'Series';
    const nameCharacter = '3-D Man';

    const { getByText, getByAltText } = render(
        <SeriesGrid data={data} />
    );
    expect(getByText(header)).toBeTruthy();
    expect(getByAltText(nameCharacter)).toBeTruthy();
    expect(getByText(nameCharacter)).toBeTruthy();
  });