import types from '../const';

const initialState = {
	shortStatistic: {},
};

const statistic = (state = initialState, action) => {
	switch (action.type){
		case types.GET_SHORT_STATISTIC_SUCCESS:
			return {
				...state,
				shortStatistic: action.payload,
			};
		default:
			return state;
	}
};

export default statistic;