import types from '../const';

export const entityFormAddSuggestion = (payload) => ({
	type: types.ENTITY_FORM_ADD_SUGGESTION,
	payload
});

export const entityFormSelectSuggestion = (payload) => ({
	type: types.ENTITY_FORM_SELECT_SUGGESTION,
	payload
});

export const entityFormAddValToHiddenField = (payload) => ({
	type: types.ENTITY_FORM_ADD_VAL_TO_HIDDEN_FIELD,
	payload
});
