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

export { 
	loadList, 
	setList, 
	setListError,
	loadDetails, 
	setDetails, 
	setDetailsError,
};
