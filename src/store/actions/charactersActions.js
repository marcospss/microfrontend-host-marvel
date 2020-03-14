import * as types from './actionTypes';

const loadList = () => {
	return {
		type: types.LIST_CHARACTERS.LOAD,
	};
};

const setList = (data) => {
	return {
		type: types.LIST_CHARACTERS.LOAD_SUCCESS,
		payload: data,
	};
};
const filterList = (data) => {
	return {
		type: types.LIST_CHARACTERS.FILTER,
		payload: data,
	};
};

const setListError = data => {
	return {
		type: types.LIST_CHARACTERS.LOAD_FAIL,
		payload: data,
	};
};

const loadDetails = data => {
	return {
		type: types.DETAILS_CHARACTER.LOAD,
		payload: data,
	};
};

const setDetails = data => {
	return {
		type: types.DETAILS_CHARACTER.LOAD_SUCCESS,
		payload: data,
	};
};

const setDetailsError = data => {
	return {
		type: types.DETAILS_CHARACTER.LOAD_FAIL,
		payload: data,
	};
};

const loadSeries = () => {
	return {
		type: types.SERIES_CHARACTERS.LOAD,
	};
};

const setSeries = data => {
	return {
		type: types.SERIES_CHARACTERS.LOAD_SUCCESS,
		payload: data,
	};
};

const setSeriesError = data => {
	return {
		type: types.SERIES_CHARACTERS.LOAD_FAIL,
		payload: data,
	};
};

export { 
	loadList, 
	setList, 
	filterList,
	setListError,
	loadDetails, 
	setDetails, 
	setDetailsError,
	loadSeries, 
	setSeries, 
	setSeriesError,
};
