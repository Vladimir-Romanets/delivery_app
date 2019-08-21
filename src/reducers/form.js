import { reducer as formReducer } from 'redux-form'
import types from '../const';

export const form = formReducer.plugin({
	addEntityForm: (state, action) => {
		switch(action.type) {
			case types.ENTITY_FORM_ADD_SUGGESTION: {
				const { entity, suggestion } = action.payload;
				const arr = entity.split('.');
				let newState = {};
				if(arr.length === 1){
					newState = {
						...state,
						values: {
							...state.values,
							[arr[0]]: { ...suggestion }
						}
					}
				} else {
					newState = {
						...state,
						values: {
							...state.values,
							[arr[0]]: {
								...state.values[arr[0]],
								[arr[1]]: {...suggestion}
							}
						}
					}
				}

				return newState
			}
			case types.ENTITY_FORM_ADD_VAL_TO_HIDDEN_FIELD: {
				const { entity, field, value } = action.payload;
				return {
					...state,
					values: {
						...state.values,
						[entity]: {
							...state.values[entity],
							[field]: value
						}
					}
				}
			}
			default:
				return state
		}
	}
});
