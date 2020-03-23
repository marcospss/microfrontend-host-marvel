import mockAxios from 'axios';
import * as characters from './characters';

const listResults = {
  data: {
    offset: 0,
    limit: 10,
    total: 1,
    count: 1,
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
};

const characterIdResults = {
  data: {
    offset: 0,
    limit: 10,
    total: 1,
    count: 1,
    results: [
      {
        id: 21032020,
        name: 'Abomination (Emil Blonsky)',
        description:
          'Formerly known as Emil Blonsky, a spy of Soviet Yugoslavian origin working for the KGB, the Abomination gained his powers after receiving a dose of gamma radiation similar to that which transformed Bruce Banner into the incredible Hulk.',
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/50/4ce18691cbf04',
          extension: 'jpg'
        }
      }
    ]
  }
};

afterEach(() => {
  jest.clearAllMocks();
});

describe('Characters Data', () => {
  test('should fetch lists of characters', () => {
    const resultCharacters = {
      count: 1,
      limit: 10,
      offset: 0,
      results: [
        {
          description: '',
          id: 1011334,
          modified: '2014-04-29T14:18:17-0400',
          name: '3-D Man',
          thumbnail: {
            extension: 'jpg',
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784'
          }
        }
      ],
      total: 1
    };
    const resp = { data: listResults };
    mockAxios.get.mockImplementationOnce(() => Promise.resolve(resp));
    characters
      .fetchesListsCharacters()
      .then(data => expect(data).toEqual(resultCharacters));
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
  });

  test('should fetches a single character by id', () => {
    const resultCharacterById = {
      count: 1,
      limit: 10,
      offset: 0,
      results: [
        {
          id: 21032020,
          name: 'Abomination (Emil Blonsky)',
          description:
            'Formerly known as Emil Blonsky, a spy of Soviet Yugoslavian origin working for the KGB, the Abomination gained his powers after receiving a dose of gamma radiation similar to that which transformed Bruce Banner into the incredible Hulk.',
          thumbnail: {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/50/4ce18691cbf04',
            extension: 'jpg'
          }
        }
      ],
      total: 1
    };
    const resp = { data: characterIdResults };
    mockAxios.get.mockImplementationOnce(() => Promise.resolve(resp));
    characters
      .fetchesCharactersById(230320201918)
      .then(data => expect(data).toEqual(resultCharacterById));
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
  });

  test('should fetches lists of series filtered by a character id', () => {
    const resultSeries = {
      count: 1,
      limit: 10,
      offset: 0,
      results: [
        {
          description: '',
          id: 1011334,
          modified: '2014-04-29T14:18:17-0400',
          name: '3-D Man',
          thumbnail: {
            extension: 'jpg',
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784'
          }
        }
      ],
      total: 1
    };
    const resp = { data: listResults };
    mockAxios.get.mockImplementationOnce(() => Promise.resolve(resp));
    characters
      .fetchesSeriesCharactersById(230320201922)
      .then(data => expect(data).toEqual(resultSeries));
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
  });
});
