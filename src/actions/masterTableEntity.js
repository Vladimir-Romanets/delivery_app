import types from '../const';

export const mtEntityAdd = ( payload ) => ({
	type: types.MT_ENTITY_ADD,
	payload
});

export const mtEditableEntrySave = ( payload ) => ({
	type: types.MT_EDITABLE_ENTRY_SAVE,
	payload
});

export const mtEditableEntryDelete = ( payload ) => ({
	type: types.MT_EDITABLE_ENTRY_DELETE,
	payload
});

export const mtEditableEntryClose = () => ({
	type: types.MT_EDITABLE_ENTRY_CLOSE
});