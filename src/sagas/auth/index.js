import { takeEvery } from 'redux-saga/effects';
import types from '../../const';
import fetchAuthData from './fetchAuthData';
import sendSupport from './sendSupport';
import checkToken from './checkToken';
import logout from './logout';

export default function* auth() {
	yield takeEvery( types.SEND_SUPPORT, sendSupport );
	yield takeEvery( types.CHECK_TOKEN, checkToken );
	yield takeEvery( types.FETCH_AUTH_DATA, fetchAuthData );
	yield takeEvery( types.LOGOUT, logout )
};