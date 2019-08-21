import types from '../const';

export const addresseesGet = (payload) => ({
	type: types.ADDRESSEES_GET,
	payload
});

export const addresseesGetSuccess = data => ({
	type: types.ADDRESSEES_GET_SUCCESS,
	data
});

export const addresseesAdd = (data) => ({
	type: types.ADDRESSEES_ADD,
	data
});

export const addresseesSearch = (data) => ({
	type: types.ADDRESSEES_SEARCH,
	data
});

export const addresseesEdit = (data) => ({
	type: types.ADDRESSEES_EDIT,
	data
});

export const addresseesEditReset = () => ({
	type: types.ADDRESSEES_EDIT_RESET
});

export const addresseesEditSave = (data) => ({
	type: types.ADDRESSEES_EDIT_SAVE,
	data
});

export const addresseesEditSuccess = (data) => ({
	type: types.ADDRESSEES_EDIT_SUCCESS,
	data
});

export const addresseesDelete = (id) => ({
	type: types.ADDRESSEES_DELETE,
	id
});

export const addresseesReset = () => ({
	type: types.ADDRESSEES_RESET
});