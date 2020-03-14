import characterSeriesReducer from './characterSeriesReducer';
import * as types from '../actions/actionTypes';

const initialState = {
    data: {},
	error: false,
};

const resultSeriesCharacter = {
    offset: 0,
    limit: 10,
    total: 1,
    count: 1,
    results: [
        {
            "id": 354,
            "title": "Avengers (1998 - 2004)",
            "description": "The Avengers return! Earth's Mightiest Heroes reunite with their biggest guns at the forefront to take on familiar enemies and new threats alike! Featuring the work of Kurt Busiek, George Perez and other quintessential Avengers creators!",
            "resourceURI": "http://gateway.marvel.com/v1/public/series/354",
            "urls": [{
                "type": "detail",
                "url": "http://marvel.com/comics/series/354/avengers_1998_-_2004?utm_campaign=apiRef&utm_source=fc88e56fcb674d36991ba76c85d9df23"
            }],
            "startYear": 1998,
            "endYear": 2004,
            "rating": "T+",
            "type": "ongoing",
            "modified": "2013-03-01T13:18:46-0500",
            "thumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/00/5130f06bd981b",
                "extension": "jpg"
            },
            "creators": {
                "available": 1,
                "collectionURI": "http://gateway.marvel.com/v1/public/series/354/creators",
                "items": [{
                    "resourceURI": "http://gateway.marvel.com/v1/public/creators/807",
                    "name": "Comicraft",
                    "role": "letterer"
                }],
                "returned": 1
            },
            "characters": {
                "available": 1,
                "collectionURI": "http://gateway.marvel.com/v1/public/series/354/characters",
                "items": [{
                    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009144",
                    "name": "A.I.M."
                }],
                "returned": 1
            },
            "stories": {
                "available": 1,
                "collectionURI": "http://gateway.marvel.com/v1/public/series/354/stories",
                "items": [{
                    "resourceURI": "http://gateway.marvel.com/v1/public/stories/490",
                    "name": "Interior #490",
                    "type": "interiorStory"
                }],
                "returned": 1
            },
            "comics": {
                "available": 1,
                "collectionURI": "http://gateway.marvel.com/v1/public/series/354/comics",
                "items": [{
                    "resourceURI": "http://gateway.marvel.com/v1/public/comics/3589",
                    "name": "Avengers (1998)"
                }],
                "returned": 1
            },
            "events": {
                "available": 1,
                "collectionURI": "http://gateway.marvel.com/v1/public/series/354/events",
                "items": [{
                    "resourceURI": "http://gateway.marvel.com/v1/public/events/234",
                    "name": "Avengers Disassembled"
                }],
                "returned": 1
            },
            "next": {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/753",
                "name": "New Avengers (2004 - 2010)"
            },
            "previous": {
                "resourceURI": "http://gateway.marvel.com/v1/public/series/3621",
                "name": "Avengers (1996 - 1997)"
            }
        }
    ]
};

describe("SERIES CHARACTER", () => {
  it("should return the initial state", () => {
    const newState = characterSeriesReducer(undefined, initialState);
    expect(newState).toEqual(initialState);
  });

  it("should Fetches lists of series filtered by a character id", () => {
    const newState = characterSeriesReducer(initialState, {
      type: types.SERIES_CHARACTERS.LOAD,
    });
    expect(newState).toEqual(initialState);
  });

  it("should Fetches lists of series filtered by a character id success", () => {
    const newState = characterSeriesReducer(initialState,
      {
        type: types.SERIES_CHARACTERS.LOAD_SUCCESS,
        payload: resultSeriesCharacter,
      }
    );
    expect(newState).toEqual({
        ...initialState,
        data: {
            ...resultSeriesCharacter,
        },
    });
  });

  it("should set error", () => {
    const newState = characterSeriesReducer(initialState, {
      type: types.SERIES_CHARACTERS.LOAD_FAIL,
      payload: "Character series not found."
    });
    expect(newState).toEqual({
      ...initialState,
      error: "Character series not found."
    });
  });

});
