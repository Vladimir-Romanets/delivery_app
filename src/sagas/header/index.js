import { takeEvery } from 'redux-saga/effects';
import types from '../../const';
import getMainHeader from './getMainHeader';

export default function* header() {
	yield takeEvery(types.GET_MAIN_HEADER, getMainHeader);
};