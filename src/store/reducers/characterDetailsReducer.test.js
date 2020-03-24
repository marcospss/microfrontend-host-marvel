import characterDetailsReducer from './characterDetailsReducer';
import * as types from '../actions/actionTypes';

const initialState = {
  characterId: null,
  data: {},
  error: false
};

const resultFindCharacterId = {
    data: {
      offset: 0,
      limit: 10,
      total: 1,
      count: 1,
      results: [
        {
          id: 1009146,
          name: "Abomination (Emil Blonsky)",
          description:
            "Formerly known as Emil Blonsky, a spy of Soviet Yugoslavian origin working for the KGB, the Abomination gained his powers after receiving a dose of gamma radiation similar to that which transformed Bruce Banner into the incredible Hulk.",
          modified: "2012-03-20T12:32:12-0400",
          thumbnail: {
            path: "http://i.annihil.us/u/prod/marvel/i/mg/9/50/4ce18691cbf04",
            extension: "jpg"
          },
          resourceURI:
            "http://gateway.marvel.com/v1/public/characters/1009146",
          series: {
            available: 26,
            collectionURI:
              "http://gateway.marvel.com/v1/public/characters/1009146/series",
            items: [
              {
                resourceURI: "http://gateway.marvel.com/v1/public/series/354",
                name: "Avengers (1998 - 2004)"
              }
            ]
          }
        }
      ]
    }
  };

describe("DETAILS CHARACTER", () => {
  it("should return the initial state", () => {
    const newState = characterDetailsReducer(undefined, {
      characterId: null,
      data: {},
      error: false
    });
    expect(newState).toEqual(initialState);
  });

  it("should set character id", () => {
    const newState = characterDetailsReducer(initialState, {
      type: types.DETAILS_CHARACTER.LOAD,
      payload: 140320201546
    });
    expect(newState).toEqual({
      ...initialState,
      characterId: 140320201546,
      error: false
    });
  });

  it("should must return the details of the character", () => {
    const newState = characterDetailsReducer(
      {
        characterId: 1009146,
        data: {},
        error: false
      },
      {
        type: types.DETAILS_CHARACTER.LOAD_SUCCESS,
        payload: resultFindCharacterId
      }
    );
    expect(newState).toEqual({
      characterId: 1009146,
      data: resultFindCharacterId,
      error: false
    });
  });

  it("should set error", () => {
    const newState = characterDetailsReducer({
        characterId: 140320201613,
        data: {},
        error: false
      }, {
      type: types.DETAILS_CHARACTER.LOAD_FAIL,
      payload: "Character not found."
    });
    expect(newState).toEqual({
      characterId: 140320201613,
      data: {},
      error: "Character not found."
    });
  });

});
