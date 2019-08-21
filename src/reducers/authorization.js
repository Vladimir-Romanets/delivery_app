import types from '../const';

const initialState = {
	auth: null
};

const authorization = (state = initialState, action) => {
	switch (action.type){
		case types.CHECK_TOKEN_SUCCESS:
		case types.SET_AUTH_STATUS:
			return {
				...state,
				...action.data
			};
		case types.LOGOUT:
			return {
				...initialState
			}
		default:
			return state;
	}
};

export default authorization;