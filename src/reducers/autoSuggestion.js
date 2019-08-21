import types from '../const';

const initialState = {
	entity: '',
	suggestions: []
};

const autoSuggestion = (state = initialState, action) => {
	switch (action.type){
		case types.SUGGESTION_RESPONSE: {
			const { entity, suggestions } = action.payload;
			return {
				...state,
				entity,
				suggestions
			}
		}
		case types.SUGGESTION_RESET:
			return initialState
		default:
			return state;
	}
};

export default autoSuggestion;