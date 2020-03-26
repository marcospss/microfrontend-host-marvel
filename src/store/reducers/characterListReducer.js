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

const charactersReducer = (state = initialState, action) => {
    const filterResults = (data, query) => data.filter(
        item => item.name.toLowerCase().includes(query.toLowerCase())
        ).map(item => item);

    switch (action.type) {
        case types.LIST_CHARACTERS.LOAD:
            return {
                ...state,
            };
        case types.LIST_CHARACTERS.LOAD_SUCCESS:
            return {
                ...state,
                isFirstLoad: false,
                nextPage: state.nextPage + 10,
                data: {
                    ...action.payload,
                    results: [...state.data.results, ...action.payload.results]
                },
                resultsRaw: [...state.data.results, ...action.payload.results]
            };
        case types.LIST_CHARACTERS.FILTER:
            return {
                ...state,
                data: {
                    ...state.data,
                    filter: action.payload,
                    results: (action.payload.toLowerCase() === '') ? state.resultsRaw : filterResults([...state.data.results], action.payload),
                }
            };
        case types.LIST_CHARACTERS.LOAD_FAIL:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};

export default charactersReducer;
