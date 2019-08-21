import { takeEvery, takeLatest } from 'redux-saga/effects';
import types from '../../const';
import clientsGet from './clientsGet';
import clientsAdd from './clientsAdd';
import clientsSearch from './clientsSearch';
import clientsEditSave from './clientsEditSave';
import clientsDelete from './clientsDelete';

export default function* clients() {
	yield takeLatest(types.CLIENTS_GET, clientsGet);
	yield takeEvery(types.CLIENTS_ADD, clientsAdd);
	yield takeLatest(types.CLIENTS_SEARCH, clientsSearch);
	yield takeEvery(types.CLIENTS_EDIT_SAVE, clientsEditSave);
	yield takeEvery(types.CLIENTS_DELETE, clientsDelete);
};