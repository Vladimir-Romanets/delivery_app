import types from '../const';

const initialState = {
	pageCount: 0,
	currentPage : 1,
	limit: 200,
};

const pagination = (state = initialState, action) => {
	switch (action.type){
		case types.PAGI_GET_SUCCESS:
			return {
				...state,
				...action.payload
			}
		case types.PAGI_RESET:
			return initialState;
		default:
			return state;
	}
};

export default pagination;