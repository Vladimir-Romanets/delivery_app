import types from '../const';

export const notifierSetSuccess = (data) => ({
	type: types.NOTIFIER_SET_SUCCESS,
	data: {
		...data,
		noteClass: '--success'
	}
});

export const notifierSetError = (data) => ({
	type: types.NOTIFIER_SET_ERRORR,
	data: {
		...data,
		noteClass: '--error'
	}
});

export const notifierDelete = (id) => ({
	type: types.NOTIFIER_DELETE,
	id
});