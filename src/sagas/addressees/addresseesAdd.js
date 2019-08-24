import { put } from 'redux-saga/effects';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

import { instance } from '../axios';
import * as actions from '../../actions';

function* addresseesAdd({ data }) {
	try {
		yield put( showLoading() );

		const { data: response } = yield instance('addNewContact', data);
		
		if ( response.status ){
			yield put( actions.addresseesGetSuccess( response.list ) );
			yield put( actions.notifierSetSuccess({ message: 'Адресат успешно добавлен' }) );
		} else {
			throw new Error( response.message || 'Ошибка добавления записи' )
		};
	} catch (e) {
		yield put( actions.notifierSetError({ message: e.message }) );
	} finally {
		yield put( hideLoading() );
	};
};

export default addresseesAdd;