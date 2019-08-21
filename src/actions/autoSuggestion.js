import types from '../const';

export const suggestionRequest = (payload) => ({
	type: types.SUGGESTION_REQUEST,
	payload
});

export const suggestionResponse = (payload) => ({
	type: types.SUGGESTION_RESPONSE,
	payload
});

export const suggestionReset = () => ({
	type: types.SUGGESTION_RESET
});
