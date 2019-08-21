import types from '../const';

export const getMainHeader = () => ({
	type: types.GET_MAIN_HEADER
});

export const getMainHeaderSuccess = ( list ) => ({
	type: types.GET_MAIN_HEADER_SUCCESS,
	list
})
