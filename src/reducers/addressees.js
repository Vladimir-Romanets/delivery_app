import types from '../const';

const initialState = {
	list: null,
	editingItem : null
};

const addressees = (state = initialState, action) => {
	switch (action.type){
		case types.ADDRESSEES_GET_SUCCESS:
			return {
				...state,
				list: action.data
			}
		case types.ADDRESSEES_EDIT:
			return {
				...state,
				editingItem: action.data
			}
		case types.ADDRESSEES_EDIT_RESET:
			return {
				...state,
				editingItem: null
			}
		case types.ADDRESSEES_EDIT_SUCCESS:{
			const list = state.list.map( el => {
				if ( +el.id === +action.data.id ) return action.data;
				return el;
			});
			return {
				...state,
				list
			}
		}
		case types.ADDRESSEES_RESET:
			return { ...initialState }
		default:
			return state;
	}
};

export default addressees;