import types from '../const';

const initialState = {
	list: null,
	editingItem : null
};

const couriers = (state = initialState, action) => {
	switch (action.type){
		case types.COURIERS_GET_SUCCESS:
			return {
				...state,
				list: action.data
			}
		case types.COURIERS_EDIT:
			return {
				...state,
				editingItem: action.data
			}
		case types.COURIERS_EDIT_SUCCESS:{
			const list = state.list.map( el => {
				if ( el.id === action.data.id ) return action.data;
				return el;
			});
			return {
				...state,
				list
			}
		}
		case types.COURIERS_EDIT_RESET:
			return {
				...state,
				editingItem: null
			}
		case types.COURIERS_RESET:
			return { ...initialState }
		default:
			return state;
	}
};

export default couriers;