import types from '../const';

const initialState = {
	menu: [],
	rollDownMenu: [],
};
const roll = ['statistic', 'add-user', 'logout'];

const header = (state = initialState, action) => {
	switch (action.type){
		case types.GET_MAIN_HEADER_SUCCESS:
			return {
				...state,
				menu: action.list.filter( ({name}) => !~roll.indexOf(name) ),
				rollDownMenu: action.list.filter( ({ name }) => !!~roll.indexOf(name) ),
			};
		default:
			return state;
	}
};

export default header;