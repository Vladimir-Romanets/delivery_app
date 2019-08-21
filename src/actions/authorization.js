import types from '../const';

export const sendSupport = ( data ) => ({
	type: types.SEND_SUPPORT,
	data
});

export const fetchAuthData = ( data ) => ({
	type: types.FETCH_AUTH_DATA,
	data
});

export const setAuthStatus = ( data ) => ({
	type: types.SET_AUTH_STATUS,
	data
});

export const checkToken = () => ({
	type: types.CHECK_TOKEN
});

export const checkTokenSuccess = ( data ) => ({
	type: types.CHECK_TOKEN_SUCCESS,
	data
});

export const logout = () => ({
	type: types.LOGOUT
});