import types from '../const';

export const getMasterTableHeader = () => ({
	type: types.GET_MASTER_TABLE_HEADER
});

export const setMasterTableHeader = ( tableHeader ) => ({
	type: types.SET_MASTER_TABLE_HEADER,
	tableHeader
});

export const MTServicesGetSuccess = ( data ) => ({
	type: types.MT_SERVICES_GET_SUCCESS,
	data
});

export const masterTableGetEntry = payload => ({
	type: types.MASTER_TABLE_GET_ENTRY,
	payload
});

export const masterTableGetEntrySuccess = ( data ) => ({
	type: types.MASTER_TABLE_GET_ENTRY_SUCCESS,
	data
});

export const mtFetchEntryID = payload => ({
	type: types.MT_FETCH_ENTRY_ID,
	payload
});

export const mtEditableEntryResponse = ( data ) => ({
	type: types.MT_EDITABLE_ENTRY_RESPONSE,
	data
});

export const mtEntrySearch = payload => ({
	type: types.MT_ENTRY_SEARCH,
	payload
});

export const mtEntryAdd = (data) => ({
	type: types.MT_ENTRY_ADD,
	data
});

export const masterTableReset = () => ({
	type: types.MASTER_TABLE_RESET
});

export const mtSelectItem = payload => ({
	type: types.MT_SELECT_ITEM,
	payload,
});

export const mtSelectAllItem = payload => ({
	type: types.MT_SELECT_ALL_ITEM,
	payload,
});

export const mtChangeService = payload => ({
	type: types.MT_CHANGE_SERVICE,
	payload,
});

export const groupPaymentChange = payload => ({
	type: types.GROUP_PAYMENT_CHANGE,
	payload,
});

export const groupCourierChange = payload => ({
	type: types.GROUP_COURIER_CHANGE,
	payload,
});

export const groupCourierChangeSuccess = payload => ({
	type: types.GROUP_COURIER_CHANGE_SUCCESS,
	payload,
});

export const groupDateChange = payload => ({
	type: types.GROUP_DATE_CHANGE,
	payload,
});

export const groupDateChangeSuccess = payload => ({
	type: types.GROUP_DATE_CHANGE_SUCCESS,
	payload,
});

export const groupPaymentChangeSuccess = payload => ({
	type: types.GROUP_PAYMENT_CHANGE_SUCCESS,
	payload,
});

export const mtModalInfoSet = payload => ({
	type: types.MT_MODALINFO_SET,
	payload,
});

export const mtModalInfoClear = payload => ({
	type: types.MT_MODALINFO_CLEAR,
	payload,
});

export const findAddressDelivery = payload => ({
	type: types.FIND_ADDRESS_DELIVERY,
	payload,
});

export const getRouteSheet = () => ({ type: types.GET_ROUTE_SHEET });
