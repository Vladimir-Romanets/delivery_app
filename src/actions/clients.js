import types from '../const';

export const clientsGet = (payload) => ({
	type: types.CLIENTS_GET,
	payload
});

export const clientsGetSuccess = (data) => ({
	type: types.CLIENTS_GET_SUCCESS,
	data
});

export const clientsAdd = (data) => ({
	type: types.CLIENTS_ADD,
	data
});

export const clientsSearch = (data) => ({
	type: types.CLIENTS_SEARCH,
	data
});

export const clientsEdit = (data) => ({
	type: types.CLIENTS_EDIT,
	data
});

export const clientsEditReset = () => ({
	type: types.CLIENTS_EDIT_RESET
});

export const clientsEditSave = (data) => ({
	type: types.CLIENTS_EDIT_SAVE,
	data
});

export const clientsEditSuccess = (data) => ({
	type: types.CLIENTS_EDIT_SUCCESS,
	data
});

export const clientsDelete = (id) => ({
	type: types.CLIENTS_DELETE,
	id
});

export const clientsReset = () => ({
	type: types.CLIENTS_RESET
});