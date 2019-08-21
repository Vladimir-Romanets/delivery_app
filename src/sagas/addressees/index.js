import { takeEvery, takeLatest } from 'redux-saga/effects';
import types from '../../const';
import addresseesGet from './addresseesGet';
import addresseesAdd from './addresseesAdd';
import addresseesSearch from './addresseesSearch';
import addresseesEditSave from './addresseesEditSave';
import addresseesDelete from './addresseesDelete';

export default function* addressees() {
	yield takeLatest(types.ADDRESSEES_GET, addresseesGet);
	yield takeEvery(types.ADDRESSEES_ADD, addresseesAdd);
	yield takeLatest(types.ADDRESSEES_SEARCH, addresseesSearch);
	yield takeEvery(types.ADDRESSEES_EDIT_SAVE, addresseesEditSave);
	yield takeEvery(types.ADDRESSEES_DELETE, addresseesDelete);
};