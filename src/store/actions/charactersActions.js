import * as types from './actionTypes';

const loadList = () => {
	return {
		type: types.LIST_CHARACTERS.LOAD,
	};
};

const setList = data => {
	return {
		type: types.LIST_CHARACTERS.LOAD_SUCCESS,
		payload: data
	};
};

const setListError = data => {
	return {
		type: types.LIST_CHARACTERS.LOAD_FAIL,
		payload: data
	};
};

const loadSingle = () => {
	return {
		type: types.SINGLE_CHARACTER.LOAD,
	};
};

const setSingle = data => {
	return {
		type: types.SINGLE_CHARACTER.LOAD_SUCCESS,
		payload: data
	};
};

const setSingleError = data => {
	return {
		type: types.SINGLE_CHARACTER.LOAD_FAIL,
		payload: data
	};
};

export { 
	loadList, 
	setList, 
	setListError,
	loadSingle, 
	setSingle, 
	setSingleError,
};
