import characterListReducer from './characterListReducer';
import * as types from '../actions/actionTypes';

const initialState = {
    isFirstLoad: true,
    nextPage: 0,
    filter: '',
	data: {
        results: [],
    },
	error: false,
};

const resultListCharacter = {
    offset: 0,
    limit: 10,
    total: 1,
    count: 1,
    results: [
        {
            id: 1011334,
            name: "3-D Man",
            description: "",
            modified: "2014-04-29T14:18:17-0400",
            thumbnail: {
                path: "http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784",
                extension: "jpg"
            },
            resourceURI: "http://gateway.marvel.com/v1/public/characters/1011334",
            comics: {
                available: 1,
                collectionURI: "http://gateway.marvel.com/v1/public/characters/1011334/comics",
                items: [{
                    resourceURI: "http://gateway.marvel.com/v1/public/comics/21366",
                    name: "Avengers: The Initiative (2007) #14"
                }],
                returned: 1
            },
            series: {
                available: 1,
                collectionURI: "http://gateway.marvel.com/v1/public/characters/1011334/series",
                items: [{
                    resourceURI: "http://gateway.marvel.com/v1/public/series/2045",
                    name: "Marvel Premiere (1972 - 1981)"
                }],
                returned: 1
            },
            stories: {
                available: 1,
                collectionURI: "http://gateway.marvel.com/v1/public/characters/1011334/stories",
                items: [{
                    resourceURI: "http://gateway.marvel.com/v1/public/stories/19947",
                    name: "Cover #19947",
                    type: "cover"
                }],
                returned: 1
            },
            events: {
                available: 1,
                collectionURI: "http://gateway.marvel.com/v1/public/characters/1011334/events",
                items: [{
                    resourceURI: "http://gateway.marvel.com/v1/public/events/269",
                    name: "Secret Invasion"
                }],
                returned: 1
            },
            urls: [{
                type: "detail",
                url: "http://marvel.com/comics/characters/1011334/3-d_man?utm_campaign=apiRef&utm_source=fc88e56fcb674d36991ba76c85d9df23"
            }]
        }
    ]
};

describe("LIST CHARACTER", () => {
  it("should return the initial state", () => {
    const newState = characterListReducer(undefined, {
        isFirstLoad: true,
        nextPage: 0,
        filter: '',
        data: {
            results: [],
        },
        error: false,
    });
    expect(newState).toEqual(initialState);
  });

  it("should fetches lists of characters", () => {
    const newState = characterListReducer(initialState, {
      type: types.LIST_CHARACTERS.LOAD,
    });
    expect(newState).toEqual({
        isFirstLoad: true,
        nextPage: 0,
        filter: '',
        data: {
            results: [],
        },
        error: false,
    });
  });

  it("should fetches lists of characters success", () => {
    const newState = characterListReducer(initialState,
      {
        type: types.LIST_CHARACTERS.LOAD_SUCCESS,
        payload: resultListCharacter,
      }
    );
    expect(newState).toEqual({
        ...initialState,
        isFirstLoad: false,
        nextPage: 10,
        data: {
            ...resultListCharacter,
            results: [...resultListCharacter.results],
        },
        resultsRaw: [...resultListCharacter.results],
    });
  });

  it("should set error", () => {
    const newState = characterListReducer(initialState, {
      type: types.LIST_CHARACTERS.LOAD_FAIL,
      payload: "Character list not found."
    });
    expect(newState).toEqual({
      ...initialState,
      error: "Character list not found."
    });
  });

});
