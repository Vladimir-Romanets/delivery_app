import types from '../const';

export const couriersGet = (payload) => ({
	type: types.COURIERS_GET,
	payload
});

export const couriersGetSuccess = (data) => ({
	type: types.COURIERS_GET_SUCCESS,
	data
});

export const couriersAdd = (data) => ({
	type: types.COURIERS_ADD,
	data
});

export const couriersSearch = (data) => ({
	type: types.COURIERS_SEARCH,
	data
});

export const couriersEdit = (data) => ({
	type: types.COURIERS_EDIT,
	data
});

export const couriersEditSave = (data) => ({
	type: types.COURIERS_EDIT_SAVE,
	data
});

export const couriersEditSuccess = (data) => ({
	type: types.COURIERS_EDIT_SUCCESS,
	data
});

export const couriersEditReset = () => ({
	type: types.COURIERS_EDIT_RESET
});

export const couriersDelete = (id) => ({
	type: types.COURIERS_DELETE,
	id
});

export const couriersReset = () => ({
	type: types.COURIERS_RESET
});