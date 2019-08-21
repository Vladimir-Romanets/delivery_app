import types from '../const';

export const pagiGetSuccess = (payload) => ({
	type: types.PAGI_GET_SUCCESS,
	payload
});

export const pagiReset = () => ({
	type: types.PAGI_RESET
});
